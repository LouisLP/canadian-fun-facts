<!-- The hub's gutters as a 1998 desktop: popup windows (photo viewers, an ad,
     an alert, a notepad, the MIDI player) that pop in one by one, pile over
     each other and the feed's edges, and can be dragged, minimised, closed
     and clicked to the front. Where the gutters are
     too narrow, only the MIDI player shows, minimised in the bottom corner.
     Closed windows stay closed until the page reloads, like real popups. -->
<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { PopupSpec } from './popup-layout'
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import MidiPlayer from '../hub/MidiPlayer.vue'
import FactNotepad from './FactNotepad.vue'
import PhotoSlideshow from './PhotoSlideshow.vue'
import { GUTTER_MARGIN_PX, MIN_GUTTER_PX, POPUPS } from './popup-layout'
import PopupWindow from './PopupWindow.vue'
import PrizeAd from './PrizeAd.vue'
import SorryAlert from './SorryAlert.vue'

const POP_IN_START_MS = 400
const POP_IN_STEP_MS = 350
const SLIDE_MS = 5000
const SLIDE_STAGGER_MS = 1300
/** How much of a dragged window must stay on screen to grab it back. */
const KEEP_VISIBLE_PX = 60
const TITLEBAR_PX = 26

interface PopupState { x: number, y: number, moved: boolean, minimized: boolean, closed: boolean }

const viewport = reactive({ width: 0, height: 0 })
const hubWidth = ref(0)
const ready = ref(false)

const gutter = computed(() => (viewport.width - hubWidth.value) / 2)
const wide = computed(() => gutter.value >= MIN_GUTTER_PX)
const shown = computed(() => wide.value ? POPUPS : POPUPS.filter(spec => spec.kind === 'music'))

const state = reactive<Record<string, PopupState>>({})
/** Back to front: the last open id is the active window. */
const order = ref(POPUPS.map(spec => spec.id))
const active = computed(() => order.value.filter(id => !state[id]?.closed && shown.value.some(spec => spec.id === id)).at(-1))

const elements = new Map<string, HTMLElement>()
function track(id: string, ref: Element | ComponentPublicInstance | null) {
  const el = ref && '$el' in ref ? ref.$el : ref
  if (el instanceof HTMLElement)
    elements.set(id, el)
  else
    elements.delete(id)
}

function width(spec: PopupSpec): number {
  return Math.max(0, Math.min(spec.width, viewport.width - 2 * GUTTER_MARGIN_PX))
}

/** Where a window opens: in its gutter, or docked bottom-right when there are none. */
function home(spec: PopupSpec): { x: number, y: number } {
  const w = width(spec)
  if (!wide.value)
    return { x: viewport.width - w - GUTTER_MARGIN_PX, y: viewport.height - TITLEBAR_PX - GUTTER_MARGIN_PX }
  // From the screen edge to as far over the feed as the window may reach.
  const slack = Math.max(0, gutter.value + spec.reach - GUTTER_MARGIN_PX - w)
  const x = spec.side === 'left'
    ? GUTTER_MARGIN_PX + spec.along * slack
    : viewport.width - GUTTER_MARGIN_PX - w - spec.along * slack
  return { x, y: Math.round(spec.top * viewport.height) }
}

/** Pull a window back so it fits on screen, or at least its title bar does. */
function keepOnScreen(id: string) {
  const s = state[id]
  const el = elements.get(id)
  if (!s || !el)
    return
  const height = el.offsetHeight
  s.y = Math.max(0, Math.min(s.y, viewport.height - (s.moved ? TITLEBAR_PX : height + GUTTER_MARGIN_PX)))
  s.x = Math.max(KEEP_VISIBLE_PX - el.offsetWidth, Math.min(s.x, viewport.width - KEEP_VISIBLE_PX))
}

function measure() {
  viewport.width = document.documentElement.clientWidth
  viewport.height = window.innerHeight
  const root = getComputedStyle(document.documentElement)
  hubWidth.value = Number.parseFloat(root.getPropertyValue('--layout-hub-width')) * Number.parseFloat(root.fontSize)
}

function relayout() {
  measure()
  for (const spec of shown.value) {
    const s = state[spec.id]
    if (s && !s.moved)
      Object.assign(s, home(spec))
  }
  void nextTick(() => shown.value.forEach(spec => keepOnScreen(spec.id)))
}

function focus(id: string) {
  order.value = [...order.value.filter(other => other !== id), id]
}

function move(id: string, dx: number, dy: number) {
  const s = state[id]
  if (!s)
    return
  s.x += dx
  s.y += dy
  s.moved = true
  keepOnScreen(id)
}

async function toggleMinimize(id: string) {
  const s = state[id]
  if (!s)
    return
  s.minimized = !s.minimized
  await nextTick()
  keepOnScreen(id)
}

function close(id: string) {
  const s = state[id]
  if (s)
    s.closed = true
}

onMounted(() => {
  measure()
  for (const spec of POPUPS)
    state[spec.id] = { ...home(spec), moved: false, minimized: !wide.value, closed: false }
  ready.value = true
  void nextTick(() => shown.value.forEach(spec => keepOnScreen(spec.id)))
  window.addEventListener('resize', relayout)
})

onBeforeUnmount(() => window.removeEventListener('resize', relayout))
</script>

<template>
  <div v-if="ready" class="desktop">
    <template v-for="(spec, i) in shown" :key="spec.id">
      <PopupWindow
        v-if="state[spec.id] && !state[spec.id]!.closed"
        :ref="el => track(spec.id, el)"
        :title="spec.title"
        :icon="spec.icon"
        :x="state[spec.id]!.x"
        :y="state[spec.id]!.y"
        :width="width(spec)"
        :layer="order.indexOf(spec.id)"
        :active="active === spec.id"
        :minimized="state[spec.id]!.minimized"
        :delay="POP_IN_START_MS + i * POP_IN_STEP_MS"
        @focus="focus(spec.id)"
        @move="(dx, dy) => move(spec.id, dx, dy)"
        @minimize="toggleMinimize(spec.id)"
        @close="close(spec.id)"
      >
        <PhotoSlideshow v-if="spec.kind === 'photos'" :photos="spec.photos" :interval="SLIDE_MS + i * SLIDE_STAGGER_MS" />
        <MidiPlayer v-else-if="spec.kind === 'music'" class="music" />
        <PrizeAd v-else-if="spec.kind === 'ad'" />
        <SorryAlert v-else-if="spec.kind === 'alert'" @close="close(spec.id)" />
        <FactNotepad v-else-if="spec.kind === 'fact'" />
      </PopupWindow>
    </template>
  </div>
</template>

<style scoped>
/* The deck already brings its own bevelled case; inside a window it just
   fills the width. */
.music {
  display: flex;
  width: 100%;
  box-sizing: border-box;
}

.music :deep(.lcd) {
  flex: 1;
  min-width: 0;
}
</style>

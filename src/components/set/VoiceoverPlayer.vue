<!-- The set's voiceover, pinned bottom-left: a single play button until it's
     first pressed, then a scrubber, clock and speed button as well. Announces each cue as
     the playhead crosses it; what a cue does is the page's business. -->
<script setup lang="ts">
import type { VoiceoverCue } from '../../content/schema'
import { Icon } from '@iconify/vue'
import { computed, ref, useTemplateRef } from 'vue'
import { activeCueIndex } from '../../lib/voiceover-cues'

const props = defineProps<{ src: string, cues?: VoiceoverCue[] }>()

const emit = defineEmits<{
  /** The playhead entered a new cue, or (undefined) went back before the first. */
  cue: [cue: VoiceoverCue | undefined]
}>()

const audio = useTemplateRef('audio')
const playing = ref(false)
const started = ref(false)
const time = ref(0)
const duration = ref(0)

// Remembered across sets; storage can be missing or blocked, so never rely on it.
const SPEEDS = [1, 1.25, 1.5, 2] as const
const SPEED_KEY = 'voiceover-speed'
const speed = ref<number>(loadSpeed())

function loadSpeed(): number {
  try {
    const saved = Number(localStorage.getItem(SPEED_KEY))
    return SPEEDS.find(s => s === saved) ?? 1
  }
  catch {
    return 1
  }
}

function cycleSpeed() {
  const next = SPEEDS[(SPEEDS.findIndex(s => s === speed.value) + 1) % SPEEDS.length] ?? 1
  speed.value = next
  if (audio.value)
    audio.value.playbackRate = next
  try {
    localStorage.setItem(SPEED_KEY, String(next))
  }
  catch {}
}

const sortedCues = computed(() => [...props.cues ?? []].sort((a, b) => a.at - b.at))

// Only a change of cue is announced, so a listener who wanders off to another
// slide is left alone until the voiceover moves on.
let lastCueIndex: number | undefined

function onTime() {
  time.value = audio.value?.currentTime ?? 0
  if (!started.value || sortedCues.value.length === 0)
    return
  const index = activeCueIndex(sortedCues.value, time.value)
  if (index === lastCueIndex)
    return
  lastCueIndex = index
  emit('cue', sortedCues.value[index])
}

function toggle() {
  const el = audio.value
  if (!el)
    return
  if (el.paused)
    void el.play()
  else
    el.pause()
}

function onPlay() {
  if (audio.value)
    audio.value.playbackRate = speed.value
  playing.value = true
  started.value = true
  onTime()
}

function onDuration() {
  // Some containers report Infinity until enough has loaded.
  const value = audio.value?.duration ?? 0
  duration.value = Number.isFinite(value) ? value : 0
}

function seek(e: Event) {
  const value = Number((e.target as HTMLInputElement).value)
  if (audio.value)
    audio.value.currentTime = value
  onTime()
}

/** Hand the arrow keys back to slide navigation once a mouse drag is done. */
function releaseFocus(e: Event) {
  (e.target as HTMLElement).blur()
}

function clock(seconds: number): string {
  const whole = Math.floor(seconds)
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`
}
</script>

<template>
  <div class="voiceover" role="group" aria-label="Voiceover">
    <audio
      ref="audio"
      :src="src"
      preload="metadata"
      @play="onPlay"
      @pause="playing = false"
      @ended="playing = false"
      @timeupdate="onTime"
      @loadedmetadata="onDuration"
      @durationchange="onDuration"
    />
    <button type="button" class="toggle" :aria-pressed="playing" @click="toggle">
      <Icon :icon="playing ? 'lucide:pause' : 'lucide:play'" class="icon" />
      <span v-if="!started">hear me tell it</span>
      <span v-else class="visually-hidden">{{ playing ? 'Pause' : 'Play' }} voiceover</span>
    </button>
    <template v-if="started">
      <!-- Arrow keys scrub while the slider has focus, so they must not also
           reach the window listener that changes slides. -->
      <input
        type="range"
        class="scrubber"
        min="0"
        :max="duration"
        step="1"
        :value="time"
        aria-label="Voiceover position"
        :aria-valuetext="`${clock(time)} of ${clock(duration)}`"
        @input="seek"
        @keydown.stop
        @pointerup="releaseFocus"
      >
      <span class="clock">{{ clock(time) }} / {{ clock(duration) }}</span>
      <button
        type="button"
        class="speed"
        :aria-label="`Playback speed ${speed}×, change`"
        @click="cycleSpeed"
        @pointerup="releaseFocus"
      >
        {{ speed }}×
      </button>
    </template>
  </div>
</template>

<style scoped>
.voiceover {
  position: fixed;
  left: var(--space-lg);
  bottom: var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  /* Never run under the slide rail on a narrow screen. */
  max-width: calc(100vw - var(--space-5xl));
  box-sizing: border-box;
  background: var(--surface-chrome);
  border: var(--border-chrome);
  border-radius: var(--radius-pill);
  padding: var(--space-xs) var(--space-md);
  color: var(--ink-chrome);
}

.toggle {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  font-weight: bold;
  cursor: pointer;
  padding: var(--space-2xs);
  transition: transform var(--motion-hover);
}

.toggle:hover {
  transform: scale(1.1);
}

.toggle:active {
  transform: scale(1);
  transition-duration: var(--motion-press);
}

.speed {
  min-width: 3.5em;
  background: none;
  border: var(--border-chrome);
  border-radius: var(--radius-pill);
  color: inherit;
  font: inherit;
  font-size: var(--text-sm);
  font-weight: bold;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  padding: var(--space-2xs) var(--space-sm);
}

.speed:hover {
  border-color: var(--accent-trim);
}

.toggle:focus-visible,
.scrubber:focus-visible,
.speed:focus-visible {
  outline: var(--outline-focus);
  outline-color: var(--accent-trim);
  outline-offset: var(--outline-focus-offset);
}

.scrubber {
  flex: 1;
  min-width: 0;
  width: 14rem;
  accent-color: var(--accent-trim);
  cursor: pointer;
}

.clock {
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
</style>

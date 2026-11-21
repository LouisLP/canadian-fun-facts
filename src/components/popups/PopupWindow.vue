<!-- One Windows 98 window: a title bar to drag it by, minimise and close
     buttons (maximise is greyed out, as the popups of the day often were),
     and whatever body goes in the slot. Position and stacking belong to the
     parent; this only reports drags and clicks. -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  icon: string
  x: number
  y: number
  width: number
  layer: number
  active: boolean
  minimized: boolean
  /** Staggers the pop-in, so the popups arrive one after another. */
  delay?: number
}>()

const emit = defineEmits<{
  focus: []
  close: []
  minimize: []
  move: [dx: number, dy: number]
}>()

let last: { x: number, y: number } | undefined

function grab(event: PointerEvent) {
  if ((event.target as HTMLElement).closest('button'))
    return
  last = { x: event.clientX, y: event.clientY }
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
}

function drag(event: PointerEvent) {
  if (!last)
    return
  emit('move', event.clientX - last.x, event.clientY - last.y)
  last = { x: event.clientX, y: event.clientY }
}

function drop() {
  last = undefined
}
</script>

<template>
  <section
    class="window"
    :class="{ active, minimized }"
    :aria-label="title"
    :style="{ left: `${x}px`, top: `${y}px`, width: `${width}px`, zIndex: `calc(var(--layer-popup) + ${layer})`, animationDelay: `${delay ?? 0}ms` }"
    @pointerdown="emit('focus')"
  >
    <header
      class="titlebar"
      @pointerdown="grab"
      @pointermove="drag"
      @pointerup="drop"
      @pointercancel="drop"
      @dblclick="emit('minimize')"
    >
      <Icon :icon="icon" class="title-icon" />
      <span class="title">{{ title }}</span>
      <button type="button" class="control" :aria-label="minimized ? `Restore ${title}` : `Minimise ${title}`" @click="emit('minimize')">
        <Icon :icon="minimized ? 'lucide:chevron-down' : 'lucide:minus'" />
      </button>
      <button type="button" class="control" disabled aria-hidden="true" tabindex="-1">
        <Icon icon="lucide:square" />
      </button>
      <button type="button" class="control close" :aria-label="`Close ${title}`" @click="emit('close')">
        <Icon icon="lucide:x" />
      </button>
    </header>
    <div v-show="!minimized" class="body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.window {
  position: fixed;
  box-sizing: border-box;
  padding: 3px;
  background: var(--surface-window);
  box-shadow: var(--bevel-raised), var(--shadow-window);
  font-family: var(--font-system);
  font-size: var(--text-system);
  color: var(--ink-body);
  animation: pop var(--motion-popup) steps(3, end) both;
}

@keyframes pop {
  from {
    transform: scale(0.2);
    opacity: 0;
  }
}

.titlebar {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 2px 2px 2px 3px;
  background: var(--surface-titlebar-idle);
  color: var(--ink-titlebar);
  font-weight: bold;
  cursor: move;
  touch-action: none;
  user-select: none;
}

.active .titlebar {
  background: var(--surface-titlebar);
}

.title-icon {
  flex-shrink: 0;
  width: 14px;
  height: 14px;
}

.title {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.control {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 16px;
  height: 14px;
  padding: 0;
  border: 0;
  background: var(--surface-window);
  box-shadow: var(--bevel-raised);
  color: var(--ink-body);
  font-size: 10px;
  cursor: var(--cursor-pointer);
}

.control:active:not(:disabled) {
  box-shadow: var(--bevel-sunken);
}

.control:disabled {
  color: var(--ink-subtle);
  cursor: default;
}

.control:focus-visible {
  outline: 1px dotted var(--ink-body);
  outline-offset: -4px;
}

.close {
  margin-left: 2px;
}

.body {
  margin-top: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .window {
    animation: none;
  }
}
</style>

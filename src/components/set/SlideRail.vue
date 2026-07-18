<!-- The maple-leaf rail: one dot per panel, plus the fullscreen toggle. -->
<script setup lang="ts">
defineProps<{ count: number, current: number }>()

const emit = defineEmits<{
  go: [index: number]
  toggleFullscreen: []
}>()
</script>

<template>
  <nav class="rail" aria-label="Slides">
    <button
      v-for="n in count"
      :key="n"
      type="button"
      class="rail-dot"
      :class="{ active: n - 1 === current }"
      :aria-label="`Go to slide ${n}`"
      @click="emit('go', n - 1)"
    >
      {{ n - 1 === current ? '🍁' : '·' }}
    </button>
    <button type="button" class="rail-dot fs" title="Fullscreen" @click="emit('toggleFullscreen')">
      ⛶
    </button>
  </nav>
</template>

<style scoped>
.rail {
  position: fixed;
  right: var(--space-lg);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  background: var(--surface-chrome);
  border: var(--border-chrome);
  border-radius: var(--radius-pill);
  padding: var(--space-sm) var(--space-xs);
}

.rail-dot {
  background: none;
  border: none;
  color: var(--ink-chrome);
  font-size: var(--text-md);
  cursor: pointer;
  line-height: 1;
  padding: var(--space-2xs);
}

.rail-dot.active {
  transform: scale(1.3);
}

.rail-dot.fs {
  border-top: 2px dotted var(--ink-chrome);
}
</style>

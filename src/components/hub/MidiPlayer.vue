<!-- The footer's background-music box, minus the autoplay: o_canada.mid only
     plays when asked. -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useOCanada } from '../../composables/useOCanada'

const { playing, toggle } = useOCanada()
</script>

<template>
  <div class="midi">
    <p class="now-playing">
      ♫ {{ playing ? 'now playing' : 'background music' }}: <code>o_canada.mid</code> ♫
    </p>
    <button type="button" class="play" :aria-pressed="playing" @click="toggle">
      <Icon :icon="playing ? 'lucide:square' : 'lucide:play'" class="icon" />
      {{ playing ? 'stop' : 'play' }}
    </button>
  </div>
</template>

<style scoped>
.midi {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  background: var(--surface-ticker);
  color: var(--ink-ticker);
  border: var(--border-chrome);
  padding: var(--space-xs) var(--space-md);
  margin-bottom: var(--space-lg);
}

.now-playing {
  margin: 0;
}

.now-playing code {
  font-family: inherit;
}

.play {
  font: inherit;
  font-weight: bold;
  background: var(--surface-button);
  color: var(--ink-body);
  border: var(--border-button);
  padding: var(--space-3xs) var(--space-md);
  cursor: var(--cursor-pointer);
}

.play:hover {
  background: var(--surface-button-hover);
}

.play:active {
  border-style: inset;
}

.play:focus-visible {
  outline: var(--outline-focus);
  outline-offset: var(--outline-focus-offset);
}
</style>

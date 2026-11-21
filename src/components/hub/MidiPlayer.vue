<!-- The background-music deck, in its own popup window, minus the autoplay: o_canada.mid only
     plays when asked. A bevelled play key beside a little green LCD with a
     bouncing equaliser, the track name, a progress bar and the clock. -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { O_CANADA_SECONDS, useOCanada } from '../../composables/useOCanada'

const EQ_BARS = 5

const { playing, elapsed, toggle } = useOCanada()

function clock(seconds: number): string {
  const s = Math.floor(seconds)
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

const progress = computed(() => Math.min(1, elapsed.value / O_CANADA_SECONDS))
</script>

<template>
  <div class="deck" :class="{ playing }">
    <button
      type="button"
      class="key"
      :aria-label="playing ? 'Stop O Canada' : 'Play O Canada'"
      :aria-pressed="playing"
      @click="toggle"
    >
      <Icon :icon="playing ? 'lucide:square' : 'lucide:play'" class="icon" />
    </button>

    <div class="lcd" aria-hidden="true">
      <p class="line">
        <span class="eq">
          <span v-for="bar in EQ_BARS" :key="bar" class="bar" :style="{ animationDelay: `${-bar * 130}ms` }" />
        </span>
        <span class="track">O_CANADA.MID</span>
      </p>
      <p class="line">
        <span class="progress"><span class="fill" :style="{ transform: `scaleX(${progress})` }" /></span>
        <span class="clock">{{ clock(elapsed) }} / {{ clock(O_CANADA_SECONDS) }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.deck {
  display: inline-flex;
  align-items: stretch;
  gap: var(--space-sm);
  padding: var(--space-xs);
  background: var(--surface-deck);
  border: var(--border-deck);
}

.key {
  display: grid;
  place-items: center;
  width: 2.6rem;
  font-size: var(--text-lg);
  background: var(--surface-button);
  color: var(--ink-body);
  border: var(--border-button);
  cursor: var(--cursor-pointer);
}

.key:hover {
  background: var(--surface-button-hover);
}

.key:active,
.playing .key {
  border-style: inset;
}

.key:focus-visible {
  outline: var(--outline-focus);
  outline-offset: var(--outline-focus-offset);
}

.lcd {
  display: grid;
  gap: var(--space-2xs);
  min-width: 12rem;
  padding: var(--space-xs) var(--space-sm);
  background: var(--surface-lcd);
  border: var(--border-lcd);
  color: var(--ink-lcd);
  font-family: var(--font-lcd);
  font-size: var(--text-sm);
  font-weight: bold;
  text-align: left;
}

.line {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin: 0;
}

.eq {
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;
  height: 0.9em;
}

.bar {
  width: 3px;
  height: 100%;
  background: currentColor;
  transform: scaleY(0.2);
  transform-origin: bottom;
}

.playing .bar {
  animation: bounce var(--motion-eq) steps(4, end) infinite alternate;
}

@keyframes bounce {
  from {
    transform: scaleY(0.2);
  }

  to {
    transform: scaleY(1);
  }
}

.track {
  letter-spacing: 0.08em;
}

.progress {
  flex: 1;
  height: 0.4em;
  background: var(--ink-lcd-dim);
}

.fill {
  display: block;
  height: 100%;
  background: currentColor;
  transform-origin: left;
  /* Matches useOCanada's clock tick, so the bar glides between updates. */
  transition: transform 250ms linear;
}

.clock {
  font-variant-numeric: tabular-nums;
}

@media (prefers-reduced-motion: reduce) {
  .playing .bar {
    animation: none;
    transform: scaleY(0.6);
  }
}
</style>

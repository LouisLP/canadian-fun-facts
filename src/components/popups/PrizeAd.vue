<!-- The obligatory "you won" popup ad. Claiming the prize gets you what
     those ads always did: a virus install that never quite finishes. -->
<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

/** Where the install gives up. */
const STUCK_AT = 99
const TICK_MS = 120
const BLOCKS = 20

const claimed = ref(false)
const percent = ref(0)

let timer: ReturnType<typeof setInterval> | undefined

function claim() {
  claimed.value = true
  timer = setInterval(() => {
    // Fast at first, then a crawl, then nothing.
    const step = percent.value < 60 ? 7 : percent.value < 90 ? 3 : 1
    percent.value = Math.min(STUCK_AT, percent.value + Math.ceil(Math.random() * step))
    if (percent.value >= STUCK_AT)
      clearInterval(timer)
  }, TICK_MS)
}

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="ad">
    <p class="shout">
      !!!!! YOU WON !!!!!
    </p>
    <template v-if="!claimed">
      <p>You're our <b>1,000,000th</b> visitor!</p>
      <p>you won a <b>LIFETIME SUPPLY</b> of maple syrup 🍁🍁</p>
      <button type="button" class="claim" @click="claim">
        CLAIM NOW!!!
      </button>
    </template>
    <template v-else>
      <p>lol jk, installing maple-flavoured virus</p>
      <div
        class="progress"
        role="progressbar"
        aria-label="Installing maple-flavoured virus"
        :aria-valuenow="percent"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span
          v-for="block in BLOCKS"
          :key="block"
          class="block"
          :class="{ filled: block <= Math.floor(percent / (100 / BLOCKS)) }"
        />
      </div>
      <p class="percent">
        {{ percent }}%
      </p>
    </template>
  </div>
</template>

<style scoped>
.ad {
  padding: var(--space-sm) var(--space-md);
  background: var(--surface-ad);
  color: var(--ink-body);
  font-family: var(--font-display);
  font-size: var(--text-md);
  text-align: center;
}

.ad p {
  margin: 0 0 var(--space-xs);
}

.shout {
  color: var(--ink-ad);
  font-size: var(--text-lg);
  font-weight: bold;
  white-space: nowrap;
  animation: blink var(--motion-blink) step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.claim {
  font: inherit;
  font-weight: bold;
  padding: var(--space-2xs) var(--space-md);
  background: var(--surface-go);
  color: var(--ink-go);
  border: var(--border-go);
  cursor: var(--cursor-pointer);
}

.claim:hover {
  background: var(--surface-go-hover);
}

/* The Windows 98 progress bar: a sunken trough filling with blue blocks. */
.progress {
  display: flex;
  gap: 2px;
  height: 18px;
  padding: 3px;
  background: var(--surface-paper);
  box-shadow: var(--bevel-sunken);
}

.block {
  flex: 1;
}

.filled {
  background: var(--ink-heading);
}

.percent {
  font-family: var(--font-system);
  font-size: var(--text-system);
  margin: var(--space-2xs) 0 0;
}

@media (prefers-reduced-motion: reduce) {
  .shout {
    animation: none;
  }
}
</style>

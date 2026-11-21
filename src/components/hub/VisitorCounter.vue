<!-- A hit counter in odometer digits. There is no tally behind it: the number
     climbs by a steady amount each day since the first set, which is about as
     honest as most counters of the era. -->
<script setup lang="ts">
import { ALL_SETS } from '../../content/sets'

const DIGITS = 7
const BASE = 1867 // Confederation, naturally.
const PER_DAY = 23
const DAY_MS = 86_400_000

const firstDate = ALL_SETS.at(-1)?.date
const days = firstDate ? Math.max(0, Math.floor((Date.now() - Date.parse(firstDate)) / DAY_MS)) : 0
const count = String(BASE + days * PER_DAY).padStart(DIGITS, '0')
</script>

<template>
  <p class="counter">
    you are visitor #
    <span class="digits" :aria-label="String(Number(count))">
      <span v-for="(digit, i) in count" :key="i" class="digit" aria-hidden="true">{{ digit }}</span>
    </span>
  </p>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.digits {
  display: inline-flex;
  border: var(--border-counter);
}

.digit {
  font-family: var(--font-counter);
  background: var(--surface-counter);
  color: var(--ink-counter);
  padding: 0 var(--space-2xs);
  border-right: 1px solid var(--ink-faint);
}

.digit:last-child {
  border-right: 0;
}
</style>

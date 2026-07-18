<!-- The opening panel of a set: the show's name, then the set's own. -->
<script setup lang="ts">
import type { IsoDate } from '../../content/schema'

defineProps<{ title: string, date: IsoDate }>()
</script>

<template>
  <section class="panel title-panel">
    <div class="bob main-title" aria-hidden="true">
      Louis' Fun Facts
    </div>
    <h1 class="wordart">
      {{ title }}
    </h1>
    <p class="subtitle">
      (in Comic Sans)
    </p>
    <p class="date">
      {{ date }}
    </p>
  </section>
</template>

<style scoped>
.main-title {
  color: var(--ink-on-stage);
  font-size: var(--text-2xl);
  letter-spacing: var(--tracking-shout);
  padding-bottom: var(--space-xl);
}

.subtitle {
  font-size: var(--text-xl);
  color: var(--ink-subtle);
  text-shadow: var(--shadow-text);
}

.date {
  font-size: var(--text-sm);
  color: var(--ink-faint);
  text-shadow: var(--shadow-text);
}
</style>

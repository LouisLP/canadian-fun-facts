<!-- The way out of a presentation, pinned to the top-left. -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <RouterLink class="back-link" :to="{ name: 'hub' }">
    <Icon icon="lucide:arrow-left" class="icon" /> back to the hub
  </RouterLink>
</template>

<style scoped>
.back-link {
  position: fixed;
  top: var(--space-md);
  left: var(--space-lg);
  background: var(--surface-chrome);
  border: var(--border-chrome);
  color: var(--ink-chrome);
  font-weight: bold;
  text-decoration: none;
  padding: var(--space-xs) var(--space-md);
  transition:
    transform var(--motion-hover),
    border-color var(--motion-hover);
}

/* Sits over a photo, so it slides toward its own corner instead of lifting —
   a hard shadow would disappear into the image. */
.back-link:hover,
.back-link:focus-visible {
  transform: translateX(var(--lift-hover));
  border-color: var(--ink-chrome);
}

.back-link:active {
  transform: translateX(calc(var(--lift-press) * -1));
  transition-duration: var(--motion-press);
}

.back-link:focus-visible {
  outline: var(--outline-focus);
  outline-offset: var(--outline-focus-offset);
  outline-color: var(--accent-trim);
}
</style>

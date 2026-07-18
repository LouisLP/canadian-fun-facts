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
}
</style>

<!-- The way out of a presentation, pinned to the top-left. -->
<template>
  <RouterLink class="back-link" :to="{ name: 'hub' }">
    ⬅ back to the hub
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

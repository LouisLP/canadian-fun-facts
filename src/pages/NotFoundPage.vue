<template>
  <div class="lost">
    <h1>404, eh?</h1>
    <p>this page went out for a rip and never came back 🛻</p>
    <RouterLink :to="{ name: 'hub' }">
      ⬅ back to the hub
    </RouterLink>
  </div>
</template>

<style scoped>
.lost {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  background: var(--surface-lost);
  text-align: center;
}

.lost h1 {
  color: var(--ink-banner);
  text-shadow: var(--shadow-text-lg);
  font-size: var(--text-4xl);
  margin: 0;
}

.lost a {
  color: var(--ink-heading);
  font-weight: bold;
}
</style>

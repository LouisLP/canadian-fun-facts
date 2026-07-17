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
  gap: 0.8rem;
  background: #fffbe6;
  text-align: center;
}

.lost h1 {
  color: #d00000;
  text-shadow: 3px 3px 0 #ffd700;
  font-size: 3rem;
  margin: 0;
}

.lost a {
  color: #003399;
  font-weight: bold;
}
</style>

<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  font-family: 'Comic Sans MS', 'Comic Sans', 'Comic Neue', cursive;
  background-color: #101010;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url('/maple-leaf-pattern.avif');
  background-repeat: repeat;
  background-size: 420px 420px;
  opacity: 0.05;
  z-index: -1;
  pointer-events: none;
}

@media (max-width: 600px) {
  body {
    background-size: 260px 260px;
  }
}
</style>

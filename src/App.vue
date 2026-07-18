<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  font-family: 'Comic Sans MS', 'Comic Sans', 'Comic Neue', cursive;
  /* Cream matches the pattern's own background, so it fills any gap
     before the image loads and behind the tiles on very tall pages. */
  background-color: #fbf4e9;
  background-image: url('/maple-leaf-pattern.avif');
  background-repeat: repeat;
  background-size: 420px 420px;
  background-attachment: fixed;
}

@media (max-width: 600px) {
  body {
    background-size: 260px 260px;
  }
}
</style>

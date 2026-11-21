<script setup lang="ts">
import BackgroundCollage from './components/background/BackgroundCollage.vue'
import KonamiBeavers from './components/KonamiBeavers.vue'
</script>

<template>
  <BackgroundCollage />
  <!-- Keyed so a webring hop from one set to another mounts a fresh set page
       at its title panel, not the old one scrolled to the bottom. -->
  <RouterView :key="$route.path" />
  <KonamiBeavers />
</template>

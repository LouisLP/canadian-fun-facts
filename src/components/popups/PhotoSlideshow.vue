<!-- An image viewer that flips through a handful of the gutter photos, with
     a status bar naming the file. Each viewer starts on a different beat so
     they don't all change at once. -->
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ photos: string[], interval: number }>()

const base = import.meta.env.BASE_URL
const index = ref(0)
const photo = computed(() => props.photos[index.value] ?? '')

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => (index.value = (index.value + 1) % props.photos.length), props.interval)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="viewer">
    <img class="photo" :src="`${base}app-background/${photo}.webp`" alt="" decoding="async">
    <p class="status">
      <span>{{ photo }}.jpg</span>
      <span>{{ index + 1 }} of {{ photos.length }}</span>
    </p>
  </div>
</template>

<style scoped>
.photo {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  box-shadow: var(--bevel-sunken);
  padding: 2px;
  box-sizing: border-box;
  background: var(--surface-stage);
}

.status {
  display: flex;
  justify-content: space-between;
  gap: var(--space-sm);
  margin: 3px 0 0;
  padding: 1px 4px;
  box-shadow: var(--bevel-sunken);
}
</style>

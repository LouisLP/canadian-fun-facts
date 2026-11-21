<!-- Easter egg: ↑ ↑ ↓ ↓ ← → ← → B A makes it rain beavers, on any page.
     Skipped for reduced motion. -->
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { retroGif } from '../lib/retro-gif'

const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
const BEAVERS = 24
const RAIN_MS = 6000

interface Beaver { id: number, left: number, delay: number }

const beavers = ref<Beaver[]>([])
let progress = 0
let timer: ReturnType<typeof setTimeout> | undefined

function rain() {
  beavers.value = Array.from({ length: BEAVERS }, (_, id) => ({
    id,
    left: Math.random() * 95,
    delay: Math.random() * 2,
  }))
  clearTimeout(timer)
  timer = setTimeout(() => (beavers.value = []), RAIN_MS)
}

function listen(event: KeyboardEvent) {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
  progress = key === CODE[progress] ? progress + 1 : key === CODE[0] ? 1 : 0
  if (progress < CODE.length)
    return
  progress = 0
  if (matchMedia('(prefers-reduced-motion: no-preference)').matches)
    rain()
}

onMounted(() => window.addEventListener('keydown', listen))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', listen)
  clearTimeout(timer)
})
</script>

<template>
  <div v-if="beavers.length" class="rain" aria-hidden="true">
    <img
      v-for="beaver in beavers"
      :key="beaver.id"
      :src="retroGif('beaver')"
      alt=""
      class="beaver"
      :style="{ left: `${beaver.left}%`, animationDelay: `${beaver.delay}s` }"
    >
  </div>
</template>

<style scoped>
.rain {
  position: fixed;
  inset: 0;
  z-index: var(--layer-overlay);
  pointer-events: none;
  overflow: hidden;
}

.beaver {
  position: absolute;
  top: -120px;
  width: 80px;
  animation: fall var(--motion-beaver-rain) linear forwards;
}

@keyframes fall {
  to {
    transform: translateY(calc(100vh + 240px)) rotate(360deg);
  }
}
</style>

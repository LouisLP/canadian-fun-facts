<script setup lang="ts">
/** Decorative photos scattered over the maple-leaf pattern, behind all content. */
const base = import.meta.env.BASE_URL

const scatter = [
  { src: 'canada-map', top: '16%', left: '8%', size: '20vmin', tilt: '-6deg', phase: 0 },
  { src: 'beaver', top: '5%', left: '21%', size: '15vmin', tilt: '5deg', phase: 1 },
  { src: 'toronto', top: '14%', left: '84%', size: '22vmin', tilt: '-3deg', phase: 0 },
  { src: 'lake-louise', top: '42%', left: '18%', size: '19vmin', tilt: '7deg', phase: 1 },
  { src: 'loonie', top: '46%', left: '78%', size: '13vmin', tilt: '-8deg', phase: 0 },
  { src: 'hockey-player', top: '56%', left: '90%', size: '17vmin', tilt: '4deg', phase: 1 },
  { src: 'kayak', top: '72%', left: '10%', size: '18vmin', tilt: '-5deg', phase: 0 },
  { src: 'canadiana', top: '82%', left: '20%', size: '20vmin', tilt: '6deg', phase: 1 },
  { src: 'vancouver', top: '88%', left: '83%', size: '18vmin', tilt: '-4deg', phase: 0 },
  { src: 'vancouver-english-bay', top: '30%', left: '92%', size: '15vmin', tilt: '8deg', phase: 1 },
]
</script>

<template>
  <div class="scatter" aria-hidden="true">
    <img
      v-for="item in scatter"
      :key="item.src"
      class="scatter__item"
      :class="`scatter__item--phase-${item.phase}`"
      :src="`${base}app-background/${item.src}.webp`"
      :style="{ '--top': item.top, '--left': item.left, '--size': item.size, '--tilt': item.tilt }"
      alt=""
      loading="lazy"
      decoding="async"
    >
  </div>
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
  opacity: 0.45;
  z-index: -1;
  pointer-events: none;
}

.scatter {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.scatter__item {
  position: absolute;
  top: var(--top);
  left: var(--left);
  width: var(--size);
  aspect-ratio: 1;
  object-fit: cover;
  border: 0.6vmin solid #f4f4f4;
  border-radius: 0.4vmin;
  box-shadow: 0 1vmin 2.4vmin rgb(0 0 0 / 55%);
  opacity: 1;

  /* Two discrete frames 800ms apart — a jitter between tilts, not a smooth sweep. */
  animation: scatter-sway 1600ms step-end infinite;
}

.scatter__item--phase-1 {
  animation-delay: -800ms;
}

@keyframes scatter-sway {
  0% {
    transform: translate(-50%, -50%) rotate(calc(var(--tilt) - 4deg));
  }

  50% {
    transform: translate(-50%, -50%) rotate(calc(var(--tilt) + 4deg));
  }
}

@media (max-width: 600px) {
  body {
    background-size: 260px 260px;
  }

  .scatter__item {
    width: calc(var(--size) * 1.4);
    opacity: 0.32;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scatter__item {
    animation: none;
    transform: translate(-50%, -50%) rotate(var(--tilt));
  }
}
</style>

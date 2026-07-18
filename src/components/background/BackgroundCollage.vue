<!-- Decorative photos pinned into the gutters either side of the hub's centre
     column, so nothing hides beneath the opaque feed. Layout data lives in
     collage-layout.ts. -->
<script setup lang="ts">
import { COLLAGE_GUTTERS } from './collage-layout'

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="collage" aria-hidden="true">
    <div
      v-for="gutter in COLLAGE_GUTTERS"
      :key="gutter.side"
      class="collage__gutter"
      :class="`collage__gutter--${gutter.side}`"
    >
      <img
        v-for="item in gutter.items"
        :key="item.src"
        class="collage__item"
        :class="`collage__item--phase-${item.phase}`"
        :src="`${base}app-background/${item.src}.webp`"
        :style="{ '--top': item.top, '--left': item.left, '--size': item.size, '--tilt': item.tilt }"
        alt=""
        loading="lazy"
        decoding="async"
      >
    </div>
  </div>
</template>

<style scoped>
.collage {
  position: fixed;
  inset: 0;
  z-index: var(--layer-behind);
  overflow: hidden;
  pointer-events: none;
}

/* The gutter is whatever the hub's centre column leaves behind. */
.collage__gutter {
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc((100% - var(--layout-hub-width)) / 2);
}

.collage__gutter--left {
  left: var(--layout-collage-inset);
}

.collage__gutter--right {
  right: var(--layout-collage-inset);
}

.collage__item {
  position: absolute;
  top: var(--top);
  left: var(--left);
  width: var(--size);
  aspect-ratio: 5/4;
  object-fit: cover;
  border: 0.6vmin solid var(--puck-050);
  border-radius: 0.4vmin;
  box-shadow: var(--shadow-collage);
  opacity: 1;

  /* Two discrete frames 800ms apart — a jitter between tilts, not a smooth sweep. */
  animation: collage-sway var(--motion-sway) step-end infinite;
}

.collage__item--phase-1 {
  animation-delay: var(--motion-sway-offset);
}

@keyframes collage-sway {
  0% {
    transform: translate(-50%, -50%) rotate(calc(var(--tilt) - 4deg));
  }

  50% {
    transform: translate(-50%, -50%) rotate(calc(var(--tilt) + 4deg));
  }
}

/* Below this the gutters are too narrow to show a photo properly, so the
   maple-leaf pattern carries the background alone. */
@media (max-width: 1000px) {
  .collage {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .collage__item {
    animation: none;
    transform: translate(-50%, -50%) rotate(var(--tilt));
  }
}
</style>

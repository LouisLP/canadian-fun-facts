<script setup lang="ts">
/**
 * Decorative photos pinned into the gutters either side of the hub's centre
 * column, so nothing hides beneath the opaque feed. `top`/`left`/`size` are
 * percentages of the gutter itself, not the viewport — the collage narrows
 * with the gutter instead of sliding under the page.
 */
const base = import.meta.env.BASE_URL

const leftColumn = [
  { src: 'canada-map', top: '2%', left: '38%', size: '40%', tilt: '-6deg', phase: 0 },
  { src: 'beaver', top: '9%', left: '66%', size: '31%', tilt: '5deg', phase: 1 },
  { src: 'hockey', top: '15%', left: '34%', size: '35%', tilt: '-4deg', phase: 0 },
  { src: 'lake-louise', top: '22%', left: '64%', size: '39%', tilt: '7deg', phase: 1 },
  { src: 'moose', top: '28%', left: '36%', size: '34%', tilt: '-8deg', phase: 0 },
  { src: 'beer', top: '35%', left: '68%', size: '29%', tilt: '4deg', phase: 1 },
  { src: 'kayak', top: '41%', left: '34%', size: '39%', tilt: '-5deg', phase: 0 },
  { src: 'chris-hadfield', top: '48%', left: '66%', size: '32%', tilt: '6deg', phase: 1 },
  { src: 'canadiana', top: '54%', left: '38%', size: '37%', tilt: '-3deg', phase: 0 },
  { src: 'loon', top: '61%', left: '68%', size: '31%', tilt: '8deg', phase: 1 },
  { src: 'arcteryx-hiker', top: '67%', left: '34%', size: '35%', tilt: '-7deg', phase: 0 },
  { src: 'canada-map-puzzle', top: '74%', left: '64%', size: '34%', tilt: '3deg', phase: 1 },
  { src: 'lululemon', top: '80%', left: '36%', size: '32%', tilt: '-4deg', phase: 0 },
  { src: 'canadian-goose', top: '87%', left: '66%', size: '37%', tilt: '6deg', phase: 1 },
  { src: 'musqueam-lookout', top: '94%', left: '38%', size: '35%', tilt: '-6deg', phase: 0 },
]

const rightColumn = [
  { src: 'toronto', top: '5%', left: '62%', size: '39%', tilt: '-3deg', phase: 1 },
  { src: 'loonie', top: '11%', left: '34%', size: '29%', tilt: '-8deg', phase: 0 },
  { src: 'poutine', top: '18%', left: '66%', size: '35%', tilt: '5deg', phase: 1 },
  { src: 'wayne-gretzky', top: '24%', left: '36%', size: '34%', tilt: '-5deg', phase: 0 },
  { src: 'quebec-landscape', top: '31%', left: '68%', size: '39%', tilt: '7deg', phase: 1 },
  { src: 'hockey-player', top: '37%', left: '34%', size: '32%', tilt: '4deg', phase: 0 },
  { src: 'tim-hortons', top: '44%', left: '66%', size: '34%', tilt: '-6deg', phase: 1 },
  { src: 'terry-fox', top: '50%', left: '36%', size: '35%', tilt: '3deg', phase: 0 },
  { src: 'tofino', top: '57%', left: '68%', size: '37%', tilt: '-4deg', phase: 1 },
  { src: 'quebec-flag', top: '63%', left: '34%', size: '29%', tilt: '8deg', phase: 0 },
  { src: 'vancouver', top: '70%', left: '64%', size: '37%', tilt: '-4deg', phase: 1 },
  { src: 'totem-poles', top: '76%', left: '36%', size: '34%', tilt: '6deg', phase: 0 },
  { src: 'vancouver-english-bay', top: '83%', left: '68%', size: '32%', tilt: '8deg', phase: 1 },
  { src: 'quebec', top: '89%', left: '34%', size: '35%', tilt: '-7deg', phase: 0 },
  { src: 'olympic-national-park', top: '96%', left: '64%', size: '34%', tilt: '5deg', phase: 1 },
]
</script>

<template>
  <div class="scatter" aria-hidden="true">
    <div
      v-for="column in [{ side: 'left', items: leftColumn }, { side: 'right', items: rightColumn }]"
      :key="column.side"
      class="scatter__gutter"
      :class="`scatter__gutter--${column.side}`"
    >
      <img
        v-for="item in column.items"
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
  /* Matches HubPage's .feed max-width — the strip the collage must stay clear of. */
  --hub-width: 46rem;

  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.scatter__gutter {
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc((100% - var(--hub-width)) / 2);
}

.scatter__gutter--left {
  left: 5%;
}

.scatter__gutter--right {
  right: 5%;
}

.scatter__item {
  position: absolute;
  top: var(--top);
  left: var(--left);
  width: var(--size);
  aspect-ratio: 5/4;
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

/* Below this the gutters are too narrow to show a photo properly, so the
   maple-leaf pattern carries the background alone. */
@media (max-width: 1000px) {
  .scatter {
    display: none;
  }

  body {
    background-size: 260px 260px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scatter__item {
    animation: none;
    transform: translate(-50%, -50%) rotate(var(--tilt));
  }
}
</style>

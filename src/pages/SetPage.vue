<!-- The presentation view, per decision #3: Variant D "Vertical big-screen".
     Full-viewport scroll-snap panels, ↓/↑/space snap, maple-leaf rail,
     whole-page fullscreen, aesthetic at maximum. -->
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import { findSet } from '../content/sets'
import { TOPICS } from '../content/topics'
import { renderMarkdown } from '../lib/markdown'

const props = defineProps<{ slug: string }>()

const set = computed(() => findSet(props.slug))

const container = useTemplateRef('container')
const current = ref(0)
const sectionCount = computed(() => (set.value?.slides.length ?? 0) + 1)

function scrollTo(i: number) {
  const target = container.value?.children[i] as HTMLElement | undefined
  target?.scrollIntoView({ behavior: 'smooth' })
}

function onKeydown(e: KeyboardEvent) {
  if (e.metaKey || e.ctrlKey || e.altKey)
    return
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault()
    scrollTo(Math.min(current.value + 1, sectionCount.value - 1))
  }
  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault()
    scrollTo(Math.max(current.value - 1, 0))
  }
}

let observer: IntersectionObserver | undefined

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting)
          current.value = Number((entry.target as HTMLElement).dataset.index)
      }
    },
    { root: container.value, threshold: 0.6 },
  )
  for (const child of container.value?.children ?? [])
    observer.observe(child)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  observer?.disconnect()
})

function toggleFullscreen() {
  if (document.fullscreenElement)
    document.exitFullscreen()
  else
    document.documentElement.requestFullscreen()
}
</script>

<template>
  <div v-if="set" class="wrap">
    <div ref="container" class="scroller">
      <section class="panel title-panel" data-index="0">
        <div class="leaf-rain" aria-hidden="true">
          🍁 🍁 🍁 🍁 🍁
        </div>
        <h1 class="wordart">
          {{ set.title }}
        </h1>
        <p class="subtitle">
          ⭐ {{ set.date }} ⭐
        </p>
        <p class="topic-badge">
          {{ TOPICS[set.topic].label }}
        </p>
        <p class="hint">
          (press ↓ to begin, eh)
        </p>
      </section>

      <section
        v-for="(slide, i) in set.slides"
        :key="slide.heading"
        class="panel fact-panel"
        :data-index="i + 1"
      >
        <h2 class="wordart">
          {{ slide.heading }}
        </h2>
        <ul class="facts">
          <!-- eslint-disable-next-line vue/no-v-html — repo-authored markdown, trusted -->
          <li v-for="(fact, j) in slide.facts" :key="j" class="fact-card" v-html="renderMarkdown(fact)" />
        </ul>
        <figure
          v-for="(image, j) in slide.images"
          :key="image.src"
          class="slide-figure"
          :class="`spot-${(j % 5) + 1}`"
        >
          <img :src="image.src" :alt="image.alt">
          <figcaption v-if="image.credit">
            📷 {{ image.credit }}
          </figcaption>
        </figure>
        <div class="starburst" aria-hidden="true">
          WOW!
        </div>
      </section>
    </div>

    <nav class="rail" aria-label="Slides">
      <button
        v-for="n in sectionCount"
        :key="n"
        type="button"
        class="rail-dot"
        :class="{ active: n - 1 === current }"
        :aria-label="`Go to slide ${n}`"
        @click="scrollTo(n - 1)"
      >
        {{ n - 1 === current ? '🍁' : '·' }}
      </button>
      <button type="button" class="rail-dot fs" title="Fullscreen" @click="toggleFullscreen">
        ⛶
      </button>
    </nav>

    <RouterLink class="back-link" :to="{ name: 'hub' }">
      ⬅ back to the hub
    </RouterLink>
  </div>

  <div v-else class="wrap missing">
    <p>🦫 no set called "{{ props.slug }}", sorry bud</p>
    <RouterLink :to="{ name: 'hub' }">
      ⬅ back to the hub
    </RouterLink>
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  inset: 0;
  background: black;
  user-select: none;
}

.scroller {
  height: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

.panel {
  height: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem clamp(2rem, 8vw, 6rem);
  box-sizing: border-box;
  position: relative;
  border-block: 6px ridge gold;
  background: #2b2b2b;
}

.wordart {
  font-size: clamp(1.6rem, 5vw, 3.8rem);
  background: linear-gradient(180deg, #ff0000, #ff9900, #ffee00, #00cc00, #0066ff, #9900ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 2px #000;
  filter: drop-shadow(4px 4px 0 #00000088);
  transform: rotate(-2deg);
  margin: 0;
  max-width: 24ch;
}

.leaf-rain {
  font-size: 2rem;
  letter-spacing: 1.5rem;
  animation: bob 1s ease-in-out infinite alternate;
}

@keyframes bob {
  from {
    transform: translateY(-6px);
  }
  to {
    transform: translateY(6px);
  }
}

.subtitle {
  font-size: 1.6rem;
  color: #fff;
  text-shadow: 2px 2px 0 #000;
}

.topic-badge {
  background: #ffee00;
  border: 4px dotted #ff0000;
  border-radius: 999px;
  padding: 0.4rem 1.5rem;
  font-weight: bold;
  transform: rotate(3deg);
}

.hint {
  color: #ffffffcc;
  font-style: italic;
  margin-top: 2rem;
  animation: bob 1.2s ease-in-out infinite alternate;
}

.facts {
  position: relative;
  z-index: 1;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1.5vh, 1rem);
  margin: 1.2rem 0 0;
  padding: 0;
  max-width: min(56vw, 62ch);
}

.fact-card {
  text-align: left;
  font-size: clamp(0.9rem, 1.4vh + 0.5vw, 1.4rem);
  color: #1a1a1a;
  background: #ffffffdd;
  border: 4px dashed #ff0000;
  padding: clamp(0.4rem, 1vh, 0.9rem) 1.4rem;
  transform: rotate(-0.8deg);
}

.fact-card:nth-child(even) {
  transform: rotate(0.8deg);
  border-color: #003399;
}

.fact-card :deep(p) {
  margin-block: 0.2rem;
}

.slide-figure {
  position: absolute;
  margin: 0;
  animation: bob 0.8s ease-in-out infinite alternate;
}

.slide-figure img {
  width: clamp(6rem, 14vw, 12rem);
  border: 6px ridge gold;
  background: #fff;
  filter: drop-shadow(6px 6px 0 #00000055);
}

.slide-figure figcaption {
  font-size: 0.7rem;
  color: #cccccc;
  margin-top: 0.2rem;
}

/* Scatter spots around the slide edges, stickered per the aesthetic. */
.spot-1 {
  top: 9%;
  left: 3%;
  rotate: -8deg;
}

.spot-2 {
  top: 13%;
  right: 4%;
  rotate: 7deg;
  animation-delay: 0.2s;
}

.spot-3 {
  bottom: 11%;
  left: 4%;
  rotate: 5deg;
  animation-delay: 0.4s;
}

.spot-4 {
  bottom: 13%;
  right: 5%;
  rotate: -6deg;
  animation-delay: 0.6s;
}

.spot-5 {
  top: 42%;
  left: 1.5%;
  rotate: -3deg;
  animation-delay: 0.3s;
}

.starburst {
  position: absolute;
  top: 10%;
  right: 26%;
  background: #ffee00;
  color: #ff0000;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 1.2rem;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  transform: rotate(12deg) scale(1.4);
  animation: pulse 0.6s ease-in-out infinite alternate;
}

@keyframes pulse {
  from {
    transform: rotate(12deg) scale(1.3);
  }
  to {
    transform: rotate(18deg) scale(1.5);
  }
}

.rail {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background: #000000cc;
  border: 3px ridge gold;
  border-radius: 999px;
  padding: 0.5rem 0.3rem;
}

.rail-dot {
  background: none;
  border: none;
  color: gold;
  font-size: 1.1rem;
  cursor: pointer;
  line-height: 1;
  padding: 0.2rem;
}

.rail-dot.active {
  transform: scale(1.3);
}

.rail-dot.fs {
  border-top: 2px dotted gold;
}

.back-link {
  position: fixed;
  top: 0.8rem;
  left: 1rem;
  background: #000000cc;
  border: 3px ridge gold;
  color: gold;
  font-weight: bold;
  text-decoration: none;
  padding: 0.3rem 0.8rem;
}

.missing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #fff;
  font-size: 1.4rem;
}

.missing a {
  color: gold;
}
</style>

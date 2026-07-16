<script setup lang="ts">
// PROTOTYPE — Variant D: "Vertical big-screen" (the A+B hybrid).
// B's structure: full-viewport scroll-snap panels, arrow keys snap between
// them, thumbnail rail on the right. A's aesthetic: WordArt rainbow titles,
// gold ridge frames, giant bobbing emoji, starburst stickers, maximum ugly.
import { onMounted, onUnmounted, ref } from 'vue'
import { dummySet } from './facts'

const container = ref<HTMLElement | null>(null)
const current = ref(0)
const sectionCount = dummySet.slides.length + 1

function scrollTo(i: number) {
  const target = container.value?.children[i] as HTMLElement | undefined
  target?.scrollIntoView({ behavior: 'smooth' })
}

function onKeydown(e: KeyboardEvent) {
  if (e.shiftKey)
    return // Shift+arrows are reserved for the variant switcher
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault()
    scrollTo(Math.min(current.value + 1, sectionCount - 1))
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
  <div class="wrap">
    <div ref="container" class="scroller">
      <section class="panel title-panel" data-index="0">
        <div class="leaf-rain" aria-hidden="true">
          🍁 🍁 🍁 🍁 🍁
        </div>
        <h1 class="wordart">
          {{ dummySet.setTitle }}
        </h1>
        <p class="subtitle">
          ⭐ {{ dummySet.date }} ⭐
        </p>
        <p class="topic-badge">
          {{ dummySet.topic }}
        </p>
        <p class="hint">
          (press ↓ to begin, eh)
        </p>
      </section>

      <section
        v-for="(fact, i) in dummySet.slides"
        :key="fact.title"
        class="panel fact-panel"
        :data-index="i + 1"
      >
        <h2 class="wordart">
          {{ fact.title }}
        </h2>
        <div class="fact-body">
          <div class="giant-emoji">
            {{ fact.emoji }}
          </div>
          <ul>
            <li v-for="line in fact.lines" :key="line">
              {{ line }}
            </li>
          </ul>
        </div>
        <div class="starburst">
          WOW!
        </div>
        <p v-if="fact.source" class="source">
          source: {{ fact.source }} (trust me)
        </p>
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
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  inset: 0;
  background: black;
  font-family: 'Comic Sans MS', 'Comic Neue', cursive;
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
  background:
    radial-gradient(circle at 20% 20%, #ff00aa22 0 25%, transparent 25%),
    radial-gradient(circle at 80% 70%, #00ffee22 0 20%, transparent 20%),
    linear-gradient(135deg, #ff0000, #ffffff 45%, #ff0000);
}

.wordart {
  font-size: clamp(2rem, 6vw, 4.5rem);
  background: linear-gradient(180deg, #ff0000, #ff9900, #ffee00, #00cc00, #0066ff, #9900ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 2px #000;
  filter: drop-shadow(4px 4px 0 #00000088);
  transform: rotate(-2deg);
  margin: 0;
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

.fact-body {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 1.5rem;
}

.giant-emoji {
  font-size: clamp(4rem, 12vw, 9rem);
  filter: drop-shadow(6px 6px 0 #00000055);
  animation: bob 0.8s ease-in-out infinite alternate;
}

.fact-body ul {
  text-align: left;
  font-size: clamp(1rem, 2.2vw, 1.7rem);
  color: #1a1a1a;
  background: #ffffffdd;
  border: 4px dashed #ff0000;
  padding: 1.5rem 2rem 1.5rem 3rem;
  max-width: 34ch;
}

.fact-body li {
  margin-block: 0.6rem;
}

.starburst {
  position: absolute;
  top: 10%;
  right: 8%;
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

.source {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 0.8rem;
  color: #333;
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
</style>

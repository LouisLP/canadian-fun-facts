<script setup lang="ts">
// PROTOTYPE — Variant B: "Scroll-snap vertical".
// Every slide is a full viewport; presenting = scrolling. Arrow keys snap
// between sections, a rail on the right shows where you are, and a marquee
// footer keeps the ugly alive. Medium aesthetic intensity.
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
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault()
    scrollTo(Math.min(current.value + 1, sectionCount - 1))
  }
  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
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
        <p class="kicker">
          🍁 a weekly presentation 🍁
        </p>
        <h1>{{ dummySet.setTitle }}</h1>
        <p class="meta">
          {{ dummySet.date }} · {{ dummySet.topic }}
        </p>
        <p class="scroll-hint">
          ▼ scroll or press ↓ ▼
        </p>
      </section>

      <section
        v-for="(fact, i) in dummySet.slides"
        :key="fact.title"
        class="panel fact-panel"
        :data-index="i + 1"
        :class="`hue-${i % 3}`"
      >
        <div class="big-number">
          #{{ i + 1 }}
        </div>
        <div class="fact-content">
          <h2>{{ fact.emoji }} {{ fact.title }}</h2>
          <p v-for="line in fact.lines" :key="line" class="fact-line">
            {{ line }}
          </p>
          <p v-if="fact.source" class="source">
            — {{ fact.source }}
          </p>
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

    <div class="marquee" aria-hidden="true">
      <span>
        🍁 CANADIAN FUN FACTS 🍁 SORRY! 🍁 EH? 🍁 TRUE PATRIOT FACTS 🍁
        CANADIAN FUN FACTS 🍁 SORRY! 🍁 EH? 🍁 TRUE PATRIOT FACTS 🍁
      </span>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  inset: 0;
  font-family: 'Comic Sans MS', 'Comic Neue', cursive;
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
  justify-content: center;
  padding: 3rem clamp(2rem, 10vw, 8rem);
  box-sizing: border-box;
}

.title-panel {
  align-items: center;
  text-align: center;
  background: repeating-linear-gradient(45deg, #ffdddd 0 40px, #ffffff 40px 80px);
}

.title-panel h1 {
  font-size: clamp(3rem, 9vw, 7rem);
  color: #cc0000;
  text-shadow: 5px 5px 0 #ffcc00;
  margin: 0.5rem 0;
  transform: rotate(-1deg);
}

.kicker {
  font-size: 1.3rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.meta {
  font-size: 1.3rem;
  border-top: 3px dotted #cc0000;
  border-bottom: 3px dotted #cc0000;
  padding: 0.5rem 1rem;
}

.scroll-hint {
  margin-top: 3rem;
  animation: nudge 1.2s ease-in-out infinite;
  color: #cc0000;
  font-weight: bold;
}

@keyframes nudge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.fact-panel {
  flex-direction: row;
  align-items: center;
  gap: clamp(1rem, 5vw, 4rem);
}

.hue-0 {
  background: linear-gradient(160deg, #fff5f5, #ffd6d6);
}
.hue-1 {
  background: linear-gradient(160deg, #f5faff, #d6ecff);
}
.hue-2 {
  background: linear-gradient(160deg, #fffdf0, #fff3c4);
}

.big-number {
  font-size: clamp(6rem, 20vw, 16rem);
  font-weight: bold;
  color: #cc000022;
  -webkit-text-stroke: 3px #cc0000;
  flex-shrink: 0;
  transform: rotate(-6deg);
}

.fact-content h2 {
  font-size: clamp(1.8rem, 4.5vw, 3.2rem);
  color: #222;
  text-decoration: underline wavy #cc0000;
  margin-top: 0;
}

.fact-line {
  font-size: clamp(1.1rem, 2.5vw, 1.7rem);
  max-width: 50ch;
}

.source {
  font-style: italic;
  color: #666;
}

.rail {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background: #ffffffcc;
  border: 3px double #cc0000;
  border-radius: 999px;
  padding: 0.5rem 0.3rem;
}

.rail-dot {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  line-height: 1;
  padding: 0.2rem;
}

.rail-dot.active {
  transform: scale(1.3);
}

.rail-dot.fs {
  border-top: 2px dotted #cc0000;
  color: #cc0000;
}

.marquee {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #cc0000;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.9rem;
  padding-block: 0.2rem;
}

.marquee span {
  display: inline-block;
  animation: slide-by 18s linear infinite;
}

@keyframes slide-by {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>

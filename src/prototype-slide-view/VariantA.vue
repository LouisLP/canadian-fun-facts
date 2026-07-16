<script setup lang="ts">
// PROTOTYPE — Variant A: "Big-screen deck".
// Letterboxed 16:9 projector stage, click/arrow advance, garish spin
// transitions, aesthetic dialed to MAXIMUM.
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { dummySet } from './facts'

const index = ref(0)
const stageEl = ref<HTMLElement | null>(null)

// Slide 0 is the title slide, then one slide per fact.
const slideCount = computed(() => dummySet.slides.length + 1)
const currentFact = computed(() =>
  index.value === 0 ? null : dummySet.slides[index.value - 1],
)

function next() {
  if (index.value < slideCount.value - 1)
    index.value++
}
function prev() {
  if (index.value > 0)
    index.value--
}

function onKeydown(e: KeyboardEvent) {
  if (e.shiftKey)
    return // Shift+arrows are reserved for the variant switcher
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown')
    next()
  else if (e.key === 'ArrowLeft' || e.key === 'PageUp')
    prev()
}

function toggleFullscreen() {
  if (document.fullscreenElement)
    document.exitFullscreen()
  else
    stageEl.value?.requestFullscreen()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="theatre" @click="next">
    <div ref="stageEl" class="stage">
      <Transition name="spin" mode="out-in">
        <section v-if="index === 0" key="title" class="slide title-slide">
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
            (click or press → to begin, eh)
          </p>
        </section>

        <section v-else :key="index" class="slide fact-slide">
          <h2 class="wordart">
            {{ currentFact!.title }}
          </h2>
          <div class="fact-body">
            <div class="giant-emoji">
              {{ currentFact!.emoji }}
            </div>
            <ul>
              <li v-for="line in currentFact!.lines" :key="line">
                {{ line }}
              </li>
            </ul>
          </div>
          <div class="starburst">
            WOW!
          </div>
          <p v-if="currentFact!.source" class="source">
            source: {{ currentFact!.source }} (trust me)
          </p>
        </section>
      </Transition>

      <footer class="deck-chrome" @click.stop>
        <button type="button" @click="prev">
          ⏪
        </button>
        <span class="dots">
          <span
            v-for="n in slideCount"
            :key="n"
            class="dot"
            :class="{ active: n - 1 === index }"
          >🍁</span>
        </span>
        <span class="counter">{{ index + 1 }} / {{ slideCount }}</span>
        <button type="button" @click="next">
          ⏩
        </button>
        <button type="button" title="Fullscreen" @click="toggleFullscreen">
          🖥️
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.theatre {
  position: fixed;
  inset: 0;
  background: black;
  display: grid;
  place-items: center;
  font-family: 'Comic Sans MS', 'Comic Neue', cursive;
  cursor: pointer;
  user-select: none;
}

.stage {
  width: min(100vw, calc(100vh * 16 / 9));
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, #ff00aa22 0 25%, transparent 25%),
    radial-gradient(circle at 80% 70%, #00ffee22 0 20%, transparent 20%),
    linear-gradient(135deg, #ff0000, #ffffff 45%, #ff0000);
  border: 6px ridge gold;
  display: flex;
  flex-direction: column;
}

.slide {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 4rem;
  position: relative;
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
  top: 8%;
  right: 6%;
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
  bottom: 0.5rem;
  right: 1rem;
  font-size: 0.8rem;
  color: #333;
}

.deck-chrome {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.4rem;
  background: #000000aa;
  cursor: default;
}

.deck-chrome button {
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
}

.dots .dot {
  opacity: 0.25;
  font-size: 0.9rem;
}

.dots .dot.active {
  opacity: 1;
  font-size: 1.2rem;
}

.counter {
  color: gold;
  font-size: 0.9rem;
}

.spin-enter-active,
.spin-leave-active {
  transition: all 0.45s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.spin-enter-from {
  transform: rotate(360deg) scale(0);
  opacity: 0;
}

.spin-leave-to {
  transform: rotate(-360deg) scale(0);
  opacity: 0;
}
</style>

<script setup lang="ts">
// PROTOTYPE — Variant C: "Overhead transparency".
// One paper-toned slide at a time, but each keypress reveals ONE line
// (like sliding a sheet of paper down an overhead projector). Filmstrip
// at the bottom jumps between slides. Restrained-ugly: Comic Sans and a
// maple accent, but no rainbow — tests the LOW end of the aesthetic dial.
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { dummySet } from './facts'

// slideIndex 0 = title slide; step = how many lines are revealed.
const slideIndex = ref(0)
const step = ref(0)

const fact = computed(() =>
  slideIndex.value === 0 ? null : dummySet.slides[slideIndex.value - 1],
)
const maxStep = computed(() => fact.value?.lines.length ?? 0)

function forward() {
  if (step.value < maxStep.value) {
    step.value++
  }
  else if (slideIndex.value < dummySet.slides.length) {
    slideIndex.value++
    step.value = 0
  }
}

function back() {
  if (step.value > 0) {
    step.value--
  }
  else if (slideIndex.value > 0) {
    slideIndex.value--
    step.value = slideIndex.value === 0 ? 0 : dummySet.slides[slideIndex.value - 1]!.lines.length
  }
}

function jumpTo(i: number) {
  slideIndex.value = i
  step.value = i === 0 ? 0 : dummySet.slides[i - 1]!.lines.length
}

function onKeydown(e: KeyboardEvent) {
  if (e.shiftKey)
    return // Shift+arrows are reserved for the variant switcher
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter')
    forward()
  else if (e.key === 'ArrowLeft')
    back()
}

function toggleFullscreen() {
  if (document.fullscreenElement)
    document.exitFullscreen()
  else
    document.documentElement.requestFullscreen()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="room" @click="forward">
    <main class="transparency">
      <template v-if="!fact">
        <h1>{{ dummySet.setTitle }}</h1>
        <p class="handwritten">
          {{ dummySet.date }}
        </p>
        <p class="handwritten">
          topic: <mark>{{ dummySet.topic }}</mark>
        </p>
        <p class="stamp">
          🍁 OFFICIAL 🍁
        </p>
      </template>

      <template v-else>
        <h2>
          <span class="emoji">{{ fact.emoji }}</span>
          {{ fact.title }}
        </h2>
        <TransitionGroup name="reveal" tag="ol">
          <li v-for="line in fact.lines.slice(0, step)" :key="line">
            {{ line }}
          </li>
        </TransitionGroup>
        <p v-if="step < maxStep" class="more-hint">
          … press → to reveal ({{ step }}/{{ maxStep }})
        </p>
        <p v-else-if="fact.source" class="handwritten source">
          src: {{ fact.source }}
        </p>
      </template>
    </main>

    <footer class="filmstrip" @click.stop>
      <button
        type="button"
        class="thumb"
        :class="{ active: slideIndex === 0 }"
        @click="jumpTo(0)"
      >
        <strong>title</strong>
      </button>
      <button
        v-for="(s, i) in dummySet.slides"
        :key="s.title"
        type="button"
        class="thumb"
        :class="{ active: slideIndex === i + 1 }"
        @click="jumpTo(i + 1)"
      >
        {{ s.emoji }} {{ s.title }}
      </button>
      <button type="button" class="thumb fs" title="Fullscreen" @click="toggleFullscreen">
        ⛶ full
      </button>
    </footer>
  </div>
</template>

<style scoped>
.room {
  position: fixed;
  inset: 0;
  background: #3b3b3b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-family: 'Comic Sans MS', 'Comic Neue', cursive;
  cursor: pointer;
  user-select: none;
}

.transparency {
  width: min(90vw, calc((100vh - 8rem) * 4 / 3));
  aspect-ratio: 4 / 3;
  background: #fdf8ec;
  box-shadow:
    0 0 60px #ffffff55,
    0 12px 30px #00000088;
  padding: clamp(1.5rem, 4vw, 3.5rem);
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  border-radius: 3px;
}

.transparency h1 {
  font-size: clamp(2.2rem, 6vw, 4rem);
  color: #1a1a1a;
  border-bottom: 4px solid #cc0000;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.transparency h2 {
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  color: #1a1a1a;
  margin-top: 0;
}

.emoji {
  font-size: 1.2em;
}

.transparency ol {
  font-size: clamp(1.1rem, 2.8vw, 1.8rem);
  line-height: 1.8;
  color: #222;
  padding-left: 2.2rem;
}

.transparency li::marker {
  content: '🍁 ';
}

.handwritten {
  font-size: 1.4rem;
  color: #333;
  transform: rotate(-0.5deg);
}

mark {
  background: #ffe8a3;
  padding: 0.1rem 0.4rem;
}

.stamp {
  position: absolute;
  bottom: 12%;
  right: 8%;
  border: 4px double #cc0000;
  color: #cc0000;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transform: rotate(-8deg);
  border-radius: 6px;
  opacity: 0.8;
}

.more-hint {
  color: #999;
  font-style: italic;
}

.source {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 1rem;
  color: #777;
}

.reveal-enter-active {
  transition: all 0.35s ease-out;
}

.reveal-enter-from {
  opacity: 0;
  transform: translateY(1.2rem);
}

.filmstrip {
  display: flex;
  gap: 0.5rem;
  max-width: 92vw;
  overflow-x: auto;
  padding: 0.4rem;
  background: #222;
  border-radius: 8px;
  cursor: default;
}

.thumb {
  font-family: inherit;
  font-size: 0.75rem;
  background: #fdf8ec;
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  white-space: nowrap;
  opacity: 0.6;
}

.thumb.active {
  border-color: #cc0000;
  opacity: 1;
  transform: scale(1.05);
}

.thumb.fs {
  background: #444;
  color: #fff;
}
</style>

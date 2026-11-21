<!-- The words of O Canada, karaoke style: while the song plays, each word
     fills with red from left to right as it's sung, sung lines go grey, and a
     little maple leaf bounces beside the current line. -->
<script setup lang="ts">
import { computed } from 'vue'
import { oCanadaPlayback, STEP_S } from '../../composables/useOCanada'
import { O_CANADA } from '../../lib/o-canada'
import { O_CANADA_LYRICS } from '../../lib/o-canada-lyrics'

const { playing, elapsed } = oCanadaPlayback

const SONG_END = Math.max(...O_CANADA.melody.map(([start, length]) => start + length))

/** Every word with when it starts and ends, flattened across lines. */
const WORDS = O_CANADA_LYRICS.flatMap((line, lineIndex) => line.map(([step, text], wordIndex) => ({ line: lineIndex, word: wordIndex, step, text })))
const timed = WORDS.map((w, i) => ({ ...w, end: WORDS[i + 1]?.step ?? SONG_END }))
const lineStart = O_CANADA_LYRICS.map(line => line[0]?.[0] ?? 0)

const step = computed(() => playing.value ? elapsed.value / STEP_S : -1)

const currentLine = computed(() => {
  let index = -1
  lineStart.forEach((start, i) => {
    if (start <= step.value)
      index = i
  })
  return index
})

/** How much of a word is sung, 0 to 1. */
function fill(line: number, word: number): number {
  const w = timed.find(t => t.line === line && t.word === word)
  if (!w || step.value < w.step)
    return 0
  return Math.min(1, (step.value - w.step) / (w.end - w.step))
}
</script>

<template>
  <div class="karaoke">
    <ol class="lines">
      <li
        v-for="(line, i) in O_CANADA_LYRICS"
        :key="i"
        class="line"
        :class="{ sung: i < currentLine, now: i === currentLine }"
      >
        <span class="leaf" aria-hidden="true">🍁</span>
        <template v-for="([, text], j) in line" :key="j">
          <span class="word" :style="i === currentLine ? { '--fill': `${fill(i, j) * 100}%` } : undefined">{{ text }}</span>{{ ' ' }}
        </template>
      </li>
    </ol>
    <p class="status">
      {{ playing ? '♫ sing along, eh!' : '▶ press play on o_canada.mid' }}
    </p>
  </div>
</template>

<style scoped>
.karaoke {
  padding: var(--space-sm);
  background: var(--surface-lcd);
  box-shadow: var(--bevel-sunken);
}

.lines {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  line-height: 1.5;
}

.line {
  color: var(--ink-caption);
}

.sung {
  color: var(--ink-faint);
}

/* The sweep: red up to --fill, white after, clipped to each word's letters.
   The leaf sits outside it, since an emoji won't take a clipped background. */
.now {
  font-weight: bold;
}

.now .word {
  color: transparent;
  background: linear-gradient(90deg, var(--ink-shout) var(--fill, 0%), var(--ink-on-stage) var(--fill, 0%));
  background-clip: text;
}

.leaf {
  display: inline-block;
  width: 1.3em;
  visibility: hidden;
}

.now .leaf {
  visibility: visible;
  animation: bounce var(--motion-blink) steps(2, end) infinite;
}

@keyframes bounce {
  50% {
    transform: translateY(-3px);
  }
}

.status {
  margin: var(--space-xs) 0 0;
  color: var(--ink-lcd);
  font-family: var(--font-lcd);
  font-weight: bold;
}

@media (prefers-reduced-motion: reduce) {
  .now .leaf {
    animation: none;
  }
}
</style>

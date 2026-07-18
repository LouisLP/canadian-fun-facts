<!-- One slide: the heading, its facts, and the photos scattered around them. -->
<script setup lang="ts">
import type { Slide } from '../../content/schema'
import { renderMarkdown } from '../../lib/markdown'

defineProps<{ slide: Slide }>()

// Corners first, mid-gutter slots last, so a slide that is still short of a
// full six photos stays balanced instead of going top-heavy.
const SPOT_ORDER = [1, 2, 5, 6, 3, 4] as const

function spotFor(index: number) {
  return `spot-${SPOT_ORDER[index % SPOT_ORDER.length]}`
}
</script>

<template>
  <section class="panel fact-panel">
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
      :class="spotFor(j)"
    >
      <img :src="image.src" :alt="image.alt">
      <figcaption v-if="image.credit">
        <!-- 📷 {{ image.credit }} -->
      </figcaption>
    </figure>
  </section>
</template>

<style scoped>
.facts {
  position: relative;
  z-index: var(--layer-content);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-fact-gap);
  margin: var(--space-xl) 0 0;
  padding: 0;
  max-width: min(56vw, 62ch);
}

.fact-card {
  text-align: left;
  font-size: var(--text-fact);
  color: var(--ink-body);
  background: var(--surface-fact);
  border: var(--border-thick) dashed var(--accent-flag);
  padding: var(--space-fact-pad);
  transform: rotate(-0.8deg);
}

/* Alternating tilt and colour so a stack never looks like a tidy list. */
.fact-card:nth-child(even) {
  transform: rotate(0.8deg);
  border-color: var(--ink-heading);
}

.fact-card :deep(p) {
  margin-block: var(--space-2xs);
}

.slide-figure {
  position: absolute;
  margin: 0;
  animation: bob var(--motion-bob-fast) ease-in-out infinite alternate;
}

/* Every photo renders in an identical 5:4 frame, sized by *height* so that
   three of them always stack inside one gutter regardless of the source
   image's orientation. Portraits and panoramas both get cropped to fit;
   a uniform grid beats preserving every last pixel. */
.slide-figure img {
  height: clamp(6rem, 25vh, 15rem);
  width: auto;
  max-width: 22vw;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  border: var(--border-frame);
  background: var(--puck-000);
  filter: drop-shadow(var(--shadow-photo));
}

.slide-figure figcaption {
  font-size: var(--text-xs);
  color: var(--ink-caption);
  margin-top: var(--space-2xs);
}

/* Six spots: a column of three down each gutter. Spilling off the sides is
   intentional — presence beats tidy margins. The mid spots use `translate`
   rather than `transform` so they compose with the `bob` animation, which
   owns `transform`. */

/* Top left */
.spot-1 {
  top: 4%;
  left: 5%;
  rotate: -8deg;
}

/* Top right */
.spot-2 {
  top: 3%;
  right: 4%;
  rotate: 7deg;
  animation-delay: 0.2s;
}

/* Mid left */
.spot-3 {
  top: 50%;
  left: 2%;
  translate: 0 -50%;
  rotate: 4deg;
  animation-delay: 0.4s;
}

/* Mid right — inset further than the corners to clear the maple-leaf rail. */
.spot-4 {
  top: 50%;
  right: 6%;
  translate: 0 -50%;
  rotate: -5deg;
  animation-delay: 0.6s;
}

/* Bottom left */
.spot-5 {
  bottom: 4%;
  left: 4%;
  rotate: 5deg;
  animation-delay: 0.8s;
}

/* Bottom right */
.spot-6 {
  bottom: 3%;
  right: 3%;
  rotate: -6deg;
  animation-delay: 1s;
}
</style>

<!-- One slide: the heading and its facts down the left, the photos tiled on the right. -->
<script setup lang="ts">
import type { Slide } from '../../content/schema'
import { renderMarkdown } from '../../lib/markdown'

defineProps<{ slide: Slide }>()
</script>

<template>
  <section class="panel fact-panel">
    <div class="copy">
      <h2 class="wordart">
        {{ slide.heading }}
      </h2>
      <ul class="facts">
        <!-- eslint-disable-next-line vue/no-v-html — repo-authored markdown, trusted -->
        <li v-for="(fact, j) in slide.facts" :key="j" class="fact-card" v-html="renderMarkdown(fact)" />
      </ul>
    </div>
    <div class="photos">
      <figure v-for="image in slide.images" :key="image.src" class="slide-figure">
        <img :src="image.src" :alt="image.alt">
        <figcaption v-if="image.credit">
          <!-- 📷 {{ image.credit }} -->
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
/* Two columns, facts left and photos right. The single row is pinned to the
   panel's height so the photo grid shares out the viewport instead of
   pushing the slide taller than the screen. */
.fact-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  gap: var(--space-4xl);
  align-items: center;
}

.copy {
  text-align: left;
}

/* Slide headings drop the gradient fill for a solid one: the gradient clips
   descenders once the lines are tightened, and two-line headings read as one
   block better without it. */
.wordart {
  background: none;
  color: var(--ink-shout);
  line-height: var(--leading-wordart-tight);
}

.facts {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-fact-gap);
  margin: var(--space-xl) 0 0;
  padding: 0;
  max-width: 62ch;
}

.fact-card {
  text-align: left;
  font-size: var(--text-fact);
  color: var(--ink-fact);
  background: var(--surface-fact);
  border: var(--border-thick) dashed var(--accent-flag);
  padding: var(--space-fact-pad);
  transform: rotate(-0.4deg);
}

/* Alternating tilt and colour so a stack never looks like a tidy list. */
.fact-card:nth-child(even) {
  transform: rotate(0.4deg);
  border-color: var(--accent-fact-alt);
}

.fact-card :deep(p) {
  margin-block: var(--space-2xs);
}

/* Two photos across, as many rows as it takes, every row splitting the
   column's height evenly. Four photos (the convention) make a 2×2 block. */
.photos {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 1fr);
  gap: var(--space-2xl);
  height: 100%;
}

.slide-figure {
  position: relative;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  margin: 0;
  rotate: -2deg;
  transition:
    rotate var(--motion-hover),
    scale var(--motion-hover),
    translate var(--motion-hover),
    filter var(--motion-hover);
}

/* Same alternating tilt as the fact cards, so the grid stays a bit crooked. */
.slide-figure:nth-child(even) {
  rotate: 2deg;
}

/* An odd photo out gets the full width of the last row rather than leaving a hole. */
.slide-figure:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

/* Every photo is cropped to fill its cell; a uniform grid beats preserving
   every last pixel. */
.slide-figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
  border: var(--border-frame);
  background: var(--puck-000);
  filter: drop-shadow(var(--shadow-photo));
}

.slide-figure figcaption {
  font-size: var(--text-xs);
  color: var(--ink-caption);
  margin-top: var(--space-2xs);
}

/* Hovering a photo straightens it, pulls it forward over its neighbours,
   and knocks the rest of the grid back so it's the only thing lit. */
.slide-figure:hover {
  z-index: var(--layer-raised);
  rotate: 0deg;
  scale: var(--scale-photo-hover);
  translate: var(--lift-hover) var(--lift-hover);
}

.slide-figure:hover img {
  border-color: var(--accent-flag);
  filter: drop-shadow(var(--shadow-photo-lift));
}

.photos:has(.slide-figure:hover) .slide-figure:not(:hover) {
  filter: var(--filter-photo-dimmed);
}

/* Phones and portrait screens: stack the facts over a small grid of photos.
   The grid keeps a fixed height and the facts scroll if they run long, since
   five fact cards alone can fill a phone screen. */
@media (max-width: 1000px) {
  .fact-panel {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) auto;
    gap: var(--space-2xl);
    align-items: stretch;
  }

  .copy {
    text-align: center;
    overflow-y: auto;
    align-self: center;
    max-height: 100%;
  }

  .wordart,
  .facts {
    margin-inline: auto;
  }

  .photos {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-md);
    height: clamp(8rem, 26vh, 16rem);
  }

  .slide-figure:last-child:nth-child(odd) {
    grid-column: auto;
  }
}
</style>

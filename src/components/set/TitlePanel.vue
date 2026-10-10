<!-- The opening panel of a set: the show's name and the set's own down the
     left, a fan of each slide's lead photo on the right — the same split as a
     slide. -->
<script setup lang="ts">
import type { IsoDate, SlideImage } from '../../content/schema'
import { computed } from 'vue'
import BrandMark from '../BrandMark.vue'

const props = defineProps<{ title: string, date: IsoDate, covers: SlideImage[] }>()

// Parsed as UTC and printed as UTC so the day never slips across a timezone.
const prettyDate = computed(() =>
  new Date(`${props.date}T00:00:00Z`).toLocaleDateString('en-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }),
)
</script>

<template>
  <section class="panel title-panel">
    <div class="copy">
      <BrandMark class="kicker" />
      <h1 class="wordart">
        {{ title }}
      </h1>
      <p class="byline">
        <time :datetime="date">{{ prettyDate }}</time>
        <span class="subtitle">(in Comic Sans)</span>
      </p>
    </div>
    <div class="fan" aria-hidden="true">
      <img v-for="cover in covers" :key="cover.src" :src="cover.src" alt="" class="fan-photo">
    </div>
  </section>
</template>

<style scoped>
.title-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: var(--space-4xl);
  align-items: center;
  text-align: left;
}

.kicker {
  margin-bottom: var(--space-lg);
  font-size: var(--text-2xl);
}

/* Bigger than a slide heading: this is the one place the set's name gets the
   whole stage. */
.wordart {
  font-size: var(--text-title);
  max-width: 16ch;
}

/* The date and the joke sit under a red rule, like a byline. */
.byline {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-sm) var(--space-xl);
  margin: var(--space-2xl) 0 0;
  padding-top: var(--space-lg);
  border-top: var(--border-thick) dashed var(--accent-flag);
  max-width: 32rem;
  font-size: var(--text-lg);
  color: var(--ink-on-stage);
  text-shadow: var(--shadow-text);
}

.subtitle {
  color: var(--ink-subtle);
}

/* The photos stack in one grid cell and fan out by rotation alone, so the
   pile stays centred however many covers there are. */
.fan {
  display: grid;
  place-items: center;
}

.fan-photo {
  grid-area: 1 / 1;
  width: min(70%, 20rem);
  aspect-ratio: 5 / 4;
  object-fit: cover;
  border: var(--border-frame);
  background: var(--puck-000);
  filter: drop-shadow(var(--shadow-photo));
}

.fan-photo:nth-child(1) {
  rotate: -10deg;
  translate: -30% 12%;
}

.fan-photo:nth-child(2) {
  rotate: 8deg;
  translate: 24% -14%;
}

.fan-photo:nth-child(3) {
  rotate: -2deg;
  translate: 0 22%;
}

/* Phones and portrait screens: the copy alone, centred. A fan squeezed under
   the heading would only crowd it. */
@media (max-width: 1000px) {
  .title-panel {
    grid-template-columns: minmax(0, 1fr);
    text-align: center;
  }

  .wordart,
  .byline {
    margin-inline: auto;
  }

  .kicker {
    font-size: var(--text-lg);
  }

  .byline {
    justify-content: center;
  }

  .fan {
    display: none;
  }
}
</style>

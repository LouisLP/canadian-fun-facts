<!-- The presentation view, per decision #3: Variant D "Vertical big-screen".
     Full-viewport scroll-snap panels, ↓/↑/space snap, maple-leaf rail,
     whole-page fullscreen, aesthetic at maximum. -->
<script setup lang="ts">
import type { SlideImage } from '../content/schema'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import FactPanel from '../components/set/FactPanel.vue'
import QuestionPanel from '../components/set/QuestionPanel.vue'
import SlideRail from '../components/set/SlideRail.vue'
import ThanksPanel from '../components/set/ThanksPanel.vue'
import TitlePanel from '../components/set/TitlePanel.vue'
import { useFullscreen } from '../composables/useFullscreen'
import { useSlideNavigation } from '../composables/useSlideNavigation'
import { findSet } from '../content/sets'

const props = defineProps<{ slug: string }>()

const set = computed(() => findSet(props.slug))

// Title panel + authored slides + auto-appended thank-you panel.
// The title panel fans out the lead photo of the first three slides.
const covers = computed(() => set.value?.slides.slice(0, 3).map(slide => slide.images[0]) ?? [])

// A quiz slide splits in two: its question, then its answer as a fact panel.
type Panel
  = | { kind: 'facts', heading: string, facts: string[], images: SlideImage[] }
    | { kind: 'question', question: string, choices?: string[], number: number }

const questionCount = computed(() => set.value?.slides.filter(slide => slide.kind === 'quiz').length ?? 0)

const panels = computed<Panel[]>(() => {
  let number = 0
  return set.value?.slides.flatMap((slide): Panel[] => {
    if (slide.kind !== 'quiz')
      return [{ ...slide, kind: 'facts' }]
    number++
    return [
      { kind: 'question', question: slide.question, choices: slide.choices, number },
      { kind: 'facts', heading: slide.answer, facts: slide.facts, images: slide.images },
    ]
  }) ?? []
})

const sectionCount = computed(() => panels.value.length + 2)

const { container, current, scrollTo } = useSlideNavigation(sectionCount)
const { toggle: toggleFullscreen } = useFullscreen()
</script>

<template>
  <div v-if="set" class="wrap">
    <div ref="container" class="scroller">
      <TitlePanel :title="set.title" :date="set.date" :covers="covers" :data-index="0" />

      <template v-for="(panel, i) in panels" :key="i">
        <QuestionPanel
          v-if="panel.kind === 'question'"
          :question="panel.question"
          :choices="panel.choices"
          :number="panel.number"
          :total="questionCount"
          :data-index="i + 1"
        />
        <FactPanel
          v-else
          :heading="panel.heading"
          :facts="panel.facts"
          :images="panel.images"
          :data-index="i + 1"
        />
      </template>

      <ThanksPanel :data-index="panels.length + 1" />
    </div>

    <SlideRail
      :count="sectionCount"
      :current="current"
      @go="scrollTo"
      @toggle-fullscreen="toggleFullscreen"
    />
  </div>

  <div v-else class="wrap missing">
    <p>
      <Icon icon="twemoji:beaver" class="icon" /> no set called "{{ props.slug }}", sorry bud
    </p>
    <RouterLink :to="{ name: 'hub' }">
      <Icon icon="lucide:arrow-left" class="icon" /> back to the hub
    </RouterLink>
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  inset: 0;
  background: var(--puck-999);
  user-select: none;
}

.scroller {
  height: 100%;
  overflow-y: auto;
  /* Images intentionally spill past the panel edges; clip instead of scrolling sideways. */
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
}

.missing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  color: var(--ink-on-stage);
  font-size: var(--text-lg);
}

.missing a {
  color: var(--ink-chrome);
}
</style>

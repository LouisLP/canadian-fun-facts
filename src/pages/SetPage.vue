<!-- The presentation view, per decision #3: Variant D "Vertical big-screen".
     Full-viewport scroll-snap panels, ↓/↑/space snap, maple-leaf rail,
     whole-page fullscreen, aesthetic at maximum. -->
<script setup lang="ts">
import { computed } from 'vue'
import BackLink from '../components/set/BackLink.vue'
import FactPanel from '../components/set/FactPanel.vue'
import SlideRail from '../components/set/SlideRail.vue'
import ThanksPanel from '../components/set/ThanksPanel.vue'
import TitlePanel from '../components/set/TitlePanel.vue'
import { useFullscreen } from '../composables/useFullscreen'
import { useSlideNavigation } from '../composables/useSlideNavigation'
import { findSet } from '../content/sets'

const props = defineProps<{ slug: string }>()

const set = computed(() => findSet(props.slug))

// Title panel + authored slides + auto-appended thank-you panel.
const sectionCount = computed(() => (set.value?.slides.length ?? 0) + 2)

const { container, current, scrollTo } = useSlideNavigation(sectionCount)
const { toggle: toggleFullscreen } = useFullscreen()
</script>

<template>
  <div v-if="set" class="wrap">
    <div ref="container" class="scroller">
      <TitlePanel :title="set.title" :date="set.date" :data-index="0" />

      <FactPanel
        v-for="(slide, i) in set.slides"
        :key="slide.heading"
        :slide="slide"
        :data-index="i + 1"
      />

      <ThanksPanel :data-index="set.slides.length + 1" />
    </div>

    <SlideRail
      :count="sectionCount"
      :current="current"
      @go="scrollTo"
      @toggle-fullscreen="toggleFullscreen"
    />

    <BackLink />
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

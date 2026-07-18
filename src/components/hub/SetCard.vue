<!-- One set in the hub feed: title, topic, meta, teaser, and the way in. -->
<script setup lang="ts">
import type { FunFactSet } from '../../content/schema'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { TOPICS } from '../../content/topics'
import TopicBadge from './TopicBadge.vue'

const props = defineProps<{
  set: FunFactSet
  /** Only the newest set in the feed wears the blinking badge. */
  isNewest?: boolean
}>()

const slideCount = computed(() => props.set.slides.length)
</script>

<template>
  <article class="set-block" :style="{ borderColor: TOPICS[set.topic].color }">
    <div class="set-header">
      <span v-if="isNewest" class="new-badge">NEW!!</span>
      <h2>{{ set.title }}</h2>
      <TopicBadge :topic="set.topic" />
    </div>
    <p class="meta">
      <Icon icon="lucide:calendar" class="icon" /> {{ set.date }} &nbsp;•&nbsp;
      <Icon icon="lucide:image" class="icon" /> {{ slideCount }} slide{{ slideCount === 1 ? '' : 's' }}
    </p>
    <p class="teaser">
      {{ set.slides[0].heading }}
    </p>
    <RouterLink class="present-link" :to="{ name: 'set', params: { slug: set.slug } }">
      ▶▶ PRESENT THIS ONE ◀◀
    </RouterLink>
  </article>
</template>

<style scoped>
/* Border colour comes from the set's topic, inline. */
.set-block {
  background: var(--surface-card);
  border: var(--border-card);
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.set-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.set-header h2 {
  font-size: var(--text-lg);
  color: var(--ink-heading);
  margin: 0;
}

.new-badge {
  background: var(--accent-alarm);
  color: var(--accent-alarm-ink);
  font-weight: bold;
  padding: var(--space-3xs) var(--space-sm);
  transform: rotate(-8deg);
  animation: blink var(--motion-blink) step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.meta {
  color: var(--ink-muted);
  font-size: var(--text-sm);
  margin: var(--space-sm) 0;
}

.teaser {
  margin: var(--space-sm) 0 var(--space-md);
}

.present-link {
  display: inline-block;
  background: var(--accent-go);
  border: var(--border-go);
  padding: var(--space-xs) var(--space-md);
  color: var(--ink-go);
  font-weight: bold;
  text-decoration: none;
}
</style>

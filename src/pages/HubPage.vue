<!-- The hub, per decision #4: Variant A "The Feed". Single-column
     chronological feed, rainbow topic-filter buttons, blinking NEW badge. -->
<script setup lang="ts">
import type { Topic } from '../content/topics'
import { computed, ref } from 'vue'
import SetCard from '../components/hub/SetCard.vue'
import TopicFilter from '../components/hub/TopicFilter.vue'
import { ALL_SETS } from '../content/sets'

const activeTopic = ref<Topic | null>(null)

const visibleSets = computed(() =>
  activeTopic.value
    ? ALL_SETS.filter(set => set.topic === activeTopic.value)
    : ALL_SETS,
)

const newestSlug = ALL_SETS[0]?.slug
</script>

<template>
  <div class="feed">
    <header class="banner">
      <h1>🍁 Canadian Fun Facts 🍁</h1>
      <p class="tagline">
        your weekly dose of maple-flavoured knowledge
      </p>
    </header>

    <TopicFilter v-model="activeTopic" />

    <main>
      <SetCard
        v-for="set in visibleSets"
        :key="set.slug"
        :set="set"
        :is-newest="set.slug === newestSlug"
      />
      <p v-if="visibleSets.length === 0" class="empty">
        no facts here yet, sorry bud 🦫
      </p>
    </main>

    <footer class="feed-footer">
      <p>~*~ made with zero design skill (on purpose) ~*~</p>
    </footer>
  </div>
</template>

<style scoped>
.feed {
  max-width: var(--layout-hub-width);
  margin: 0 auto;
  padding: var(--space-lg) var(--space-lg) var(--space-5xl);
  background: var(--surface-feed);
  min-height: 100vh;
}

.banner {
  text-align: center;
  border: var(--border-banner);
  background: var(--surface-card);
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.banner h1 {
  font-size: var(--text-3xl);
  color: var(--ink-banner);
  text-shadow: var(--shadow-text-lg);
  margin: 0;
}

.tagline {
  color: var(--ink-shout);
  font-weight: bold;
  margin: var(--space-sm) 0 0;
}

.empty {
  text-align: center;
  font-size: var(--text-lg);
}

.feed-footer {
  text-align: center;
  color: var(--ink-shout);
  font-weight: bold;
  margin-top: var(--space-3xl);
}
</style>

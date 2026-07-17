<!-- The hub, per decision #4: Variant A "The Feed". Single-column
     chronological feed, rainbow topic-filter buttons, blinking NEW badge. -->
<script setup lang="ts">
import type { Topic } from '../content/topics'
import { computed, ref } from 'vue'
import { ALL_SETS } from '../content/sets'
import { TOPICS } from '../content/topics'

const activeTopic = ref<Topic | null>(null)

const visibleSets = computed(() =>
  activeTopic.value
    ? ALL_SETS.filter(set => set.topic === activeTopic.value)
    : ALL_SETS,
)

const newestSlug = ALL_SETS[0]?.slug

const topicEntries = Object.entries(TOPICS) as [Topic, (typeof TOPICS)[Topic]][]

function toggleTopic(topic: Topic) {
  activeTopic.value = activeTopic.value === topic ? null : topic
}
</script>

<template>
  <div class="feed">
    <header class="banner">
      <h1>🍁 Canadian Fun Facts 🍁</h1>
      <p class="tagline">
        your weekly dose of maple-flavoured knowledge
      </p>
    </header>

    <nav class="topic-buttons" aria-label="Filter by topic">
      <button type="button" :class="{ active: activeTopic === null }" @click="activeTopic = null">
        ALL OF IT
      </button>
      <button
        v-for="[key, topic] in topicEntries"
        :key="key"
        type="button"
        :style="{ backgroundColor: topic.color }"
        :class="{ active: activeTopic === key }"
        @click="toggleTopic(key)"
      >
        {{ topic.label }}
      </button>
    </nav>

    <main>
      <article v-for="set in visibleSets" :key="set.slug" class="set-block">
        <div class="set-header">
          <span v-if="set.slug === newestSlug" class="new-badge">NEW!!</span>
          <h2>{{ set.title }}</h2>
        </div>
        <p class="meta">
          📅 {{ set.date }} &nbsp;•&nbsp; 🏷️ {{ TOPICS[set.topic].label }} &nbsp;•&nbsp;
          🖼️ {{ set.slides.length }} slide{{ set.slides.length === 1 ? '' : 's' }}
        </p>
        <p class="teaser">
          {{ set.slides[0].heading }}
        </p>
        <RouterLink class="present-link" :to="{ name: 'set', params: { slug: set.slug } }">
          ▶▶ PRESENT THIS ONE ◀◀
        </RouterLink>
      </article>
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
  max-width: 46rem;
  margin: 0 auto;
  padding: 1rem 1rem 8rem;
  background: #101010;
  min-height: 100vh;
}

.banner {
  text-align: center;
  border: 6px ridge #ff0000;
  background: #ffffff;
  padding: 1rem;
  margin-bottom: 1rem;
}

.banner h1 {
  font-size: 2.4rem;
  color: #d00000;
  text-shadow: 3px 3px 0 #ffd700;
  margin: 0;
}

.tagline {
  color: red;
  font-weight: bold;
  margin: 0.5rem 0 0;
}

.topic-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.topic-buttons button {
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.4rem 0.9rem;
  border: 4px outset #999;
  background: #eee;
  cursor: pointer;
}

.topic-buttons button:active,
.topic-buttons button.active {
  border-style: inset;
  outline: 3px dashed #000;
}

.set-block {
  background: #fff;
  border: 4px dashed #0066ff;
  padding: 1rem;
  margin-bottom: 1.25rem;
}

.set-block:nth-child(even) {
  border-color: #ff3dc4;
}

.set-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.set-header h2 {
  font-size: 1.35rem;
  color: #003399;
  margin: 0;
}

.new-badge {
  background: #ff0000;
  color: #ffff00;
  font-weight: bold;
  padding: 0.15rem 0.5rem;
  transform: rotate(-8deg);
  animation: blink 0.9s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.meta {
  color: #555;
  font-size: 0.85rem;
  margin: 0.4rem 0;
}

.teaser {
  margin: 0.4rem 0 0.8rem;
}

.present-link {
  display: inline-block;
  background: #3dff5e;
  border: 3px outset #0a0;
  padding: 0.3rem 0.8rem;
  color: #003300;
  font-weight: bold;
  text-decoration: none;
}

.empty {
  text-align: center;
  font-size: 1.3rem;
}

.feed-footer {
  text-align: center;
  color: red;
  font-weight: bold;
  margin-top: 2rem;
}
</style>

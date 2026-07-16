<!-- PROTOTYPE — Variant A: "The Feed". Single-column chronological feed,
     rainbow topic-filter buttons up top, blinking NEW badge on the latest set. -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { SAMPLE_SETS, TOPICS } from './sampleSets'

const activeTopic = ref<string | null>(null)

const visibleSets = computed(() =>
  activeTopic.value
    ? SAMPLE_SETS.filter(s => s.topic === activeTopic.value)
    : SAMPLE_SETS,
)

const BUTTON_COLORS = ['#ff3d3d', '#ff9d00', '#ffe600', '#3dff5e', '#3db9ff', '#b03dff', '#ff3dc4']
</script>

<template>
  <div class="feed">
    <header class="banner">
      <h1>🍁 Canadian Fun Facts 🍁</h1>
      <p class="tagline">
        ✨ your weekly dose of maple-flavoured knowledge ✨
      </p>
    </header>

    <nav class="topic-buttons" aria-label="Filter by topic">
      <button type="button" :class="{ active: activeTopic === null }" @click="activeTopic = null">
        ALL OF IT
      </button>
      <button
        v-for="(topic, i) in TOPICS"
        :key="topic"
        type="button"
        :style="{ backgroundColor: BUTTON_COLORS[i % BUTTON_COLORS.length] }"
        :class="{ active: activeTopic === topic }"
        @click="activeTopic = activeTopic === topic ? null : topic"
      >
        {{ topic }}
      </button>
    </nav>

    <main>
      <article v-for="(set, i) in visibleSets" :key="set.id" class="set-block">
        <div class="set-header">
          <span v-if="i === 0 && activeTopic === null" class="new-badge">NEW!!</span>
          <h2>Week {{ set.week }}: {{ set.title }}</h2>
        </div>
        <p class="meta">
          📅 {{ set.date }} &nbsp;•&nbsp; 🏷️ {{ set.topic }} &nbsp;•&nbsp; 🖼️ {{ set.slideCount }} slides
        </p>
        <p class="teaser">
          {{ set.teaser }}
        </p>
        <a href="#" class="present-link" @click.prevent>▶▶ PRESENT THIS ONE ◀◀</a>
      </article>
      <p v-if="visibleSets.length === 0" class="empty">
        no facts here yet, sorry bud 🦫
      </p>
    </main>

    <footer class="feed-footer">
      <p>~*~ made with 🧡 and zero design skill, on purpose ~*~</p>
    </footer>
  </div>
</template>

<style scoped>
.feed {
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  max-width: 46rem;
  margin: 0 auto;
  padding: 1rem 1rem 8rem;
  background: repeating-linear-gradient(180deg, #fffbe6 0, #fffbe6 40px, #fff3f3 40px, #fff3f3 80px);
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
  color: #b03dff;
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
  color: #ff9d00;
  font-weight: bold;
  margin-top: 2rem;
}
</style>

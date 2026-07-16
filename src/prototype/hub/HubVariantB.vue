<!-- PROTOTYPE — Variant B: "The Corkboard". Rotated sticky-note cards pinned to a
     grid, guestbook-style topic sidebar on the left, hit counter at the bottom. -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { SAMPLE_SETS, TOPICS } from './sampleSets'

const activeTopic = ref<string | null>(null)

const visibleSets = computed(() =>
  activeTopic.value
    ? SAMPLE_SETS.filter(s => s.topic === activeTopic.value)
    : SAMPLE_SETS,
)

const topicCounts = computed(() => {
  const counts: Record<string, number> = {}
  for (const s of SAMPLE_SETS) counts[s.topic] = (counts[s.topic] ?? 0) + 1
  return counts
})

const NOTE_COLORS = ['#fff740', '#ff7eb9', '#7afcff', '#feff9c', '#a8ff9c', '#ffb347']
const ROTATIONS = [-4, 3, -2, 5, -5, 2, -3, 4, -1]
</script>

<template>
  <div class="corkboard-page">
    <h1 class="board-title">
      📌 THE FUN FACT BOARD 📌
    </h1>

    <div class="layout">
      <aside class="sidebar">
        <h2>~ Topics ~</h2>
        <ul>
          <li>
            <a href="#" :class="{ active: activeTopic === null }" @click.prevent="activeTopic = null">
              🍁 Everything ({{ SAMPLE_SETS.length }})
            </a>
          </li>
          <li v-for="topic in TOPICS" :key="topic">
            <a
              href="#"
              :class="{ active: activeTopic === topic }"
              @click.prevent="activeTopic = activeTopic === topic ? null : topic"
            >
              👉 {{ topic }} ({{ topicCounts[topic] ?? 0 }})
            </a>
          </li>
        </ul>
        <div class="webring">
          <p>this site is part of the<br><strong>CANADIANA WEBRING</strong></p>
          <p>[&lt;&lt; prev] [random] [next &gt;&gt;]</p>
        </div>
      </aside>

      <main class="board">
        <article
          v-for="(set, i) in visibleSets"
          :key="set.id"
          class="note"
          :style="{
            backgroundColor: NOTE_COLORS[i % NOTE_COLORS.length],
            transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
          }"
        >
          <span class="pin">📌</span>
          <h3>{{ set.title }}</h3>
          <p class="note-meta">
            Week {{ set.week }} · {{ set.topic }}
          </p>
          <p class="note-teaser">
            {{ set.teaser }}
          </p>
          <a href="#" class="note-link" @click.prevent>open ({{ set.slideCount }} slides) →</a>
        </article>
        <p v-if="visibleSets.length === 0" class="empty-note">
          nothing pinned here yet 😢
        </p>
      </main>
    </div>

    <footer class="counter">
      <p>You are visitor number <span class="digits">00042</span> since May 2026</p>
      <p class="best-viewed">
        Best viewed in Netscape Navigator 4.0 at 800×600
      </p>
    </footer>
  </div>
</template>

<style scoped>
.corkboard-page {
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  min-height: 100vh;
  padding: 1rem 1rem 8rem;
  background:
    radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.06) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.06) 2px, transparent 2px), #c19a6b;
  background-size:
    24px 24px,
    24px 24px,
    auto;
}

.board-title {
  text-align: center;
  color: #fff;
  text-shadow:
    2px 2px 0 #5c3a1e,
    4px 4px 0 #ffd700;
  font-size: 2.2rem;
  margin: 0 0 1rem;
}

.layout {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  max-width: 70rem;
  margin: 0 auto;
}

.sidebar {
  flex: 0 0 13rem;
  background: #e6f7ff;
  border: 5px ridge #3db9ff;
  padding: 0.8rem;
}

.sidebar h2 {
  text-align: center;
  color: #d00000;
  font-size: 1.2rem;
  margin: 0 0 0.5rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.35rem;
}

.sidebar a {
  color: #0000ee;
  font-weight: bold;
}

.sidebar a.active {
  background: #ffff00;
  outline: 2px dotted #d00000;
}

.webring {
  margin-top: 1rem;
  border-top: 3px dashed #3db9ff;
  padding-top: 0.5rem;
  text-align: center;
  font-size: 0.75rem;
  color: #555;
}

.board {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 1.5rem;
  padding: 0.5rem;
}

.note {
  position: relative;
  padding: 1.6rem 0.9rem 0.9rem;
  box-shadow: 4px 6px 0 rgba(0, 0, 0, 0.35);
  min-height: 11rem;
}

.pin {
  position: absolute;
  top: -0.6rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
}

.note h3 {
  font-size: 1.05rem;
  margin: 0 0 0.3rem;
  color: #222;
}

.note-meta {
  font-size: 0.75rem;
  color: #666;
  margin: 0 0 0.4rem;
}

.note-teaser {
  font-size: 0.85rem;
  margin: 0 0 0.6rem;
}

.note-link {
  font-weight: bold;
  color: #0000ee;
}

.empty-note {
  background: #fff740;
  padding: 1rem;
  transform: rotate(-3deg);
  font-size: 1.2rem;
  width: fit-content;
}

.counter {
  text-align: center;
  margin-top: 2rem;
  color: #fff;
  font-weight: bold;
}

.digits {
  background: #000;
  color: #0f0;
  font-family: 'Courier New', monospace;
  padding: 0.1rem 0.4rem;
  letter-spacing: 0.2em;
}

.best-viewed {
  font-size: 0.75rem;
  font-weight: normal;
}

@media (max-width: 40rem) {
  .layout {
    flex-direction: column;
  }

  .sidebar {
    flex: none;
    width: 100%;
  }
}
</style>

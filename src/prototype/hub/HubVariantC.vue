<!-- PROTOTYPE — Variant C: "The Index". Dense Geocities-style table with beveled
     borders, alternating row colours, and a <select> topic filter. -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { SAMPLE_SETS, TOPICS } from './sampleSets'

const activeTopic = ref('')

const visibleSets = computed(() =>
  activeTopic.value
    ? SAMPLE_SETS.filter(s => s.topic === activeTopic.value)
    : SAMPLE_SETS,
)
</script>

<template>
  <div class="index-page">
    <header class="masthead">
      <h1>*** CANADIAN FUN FACTS — MASTER INDEX ***</h1>
      <p class="updated">
        Last updated: whenever Louis remembered 🚧 perpetually under construction 🚧
      </p>
    </header>

    <form class="filter-bar" @submit.prevent>
      <label for="topic-select"><strong>Show me facts about:</strong></label>
      <select id="topic-select" v-model="activeTopic">
        <option value="">
          -- all topics --
        </option>
        <option v-for="topic in TOPICS" :key="topic" :value="topic">
          {{ topic }}
        </option>
      </select>
      <span class="count-note">({{ visibleSets.length }} of {{ SAMPLE_SETS.length }} sets shown)</span>
    </form>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Wk#</th>
            <th>Date</th>
            <th>Topic</th>
            <th>Title</th>
            <th>Slides</th>
            <th>Go</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="set in visibleSets" :key="set.id">
            <td class="num">
              {{ set.week }}
            </td>
            <td class="num">
              {{ set.date }}
            </td>
            <td><span class="topic-tag">{{ set.topic }}</span></td>
            <td>
              <strong>{{ set.title }}</strong>
              <br>
              <span class="teaser">{{ set.teaser }}</span>
            </td>
            <td class="num">
              {{ set.slideCount }}
            </td>
            <td><a href="#" @click.prevent>[VIEW]</a></td>
          </tr>
          <tr v-if="visibleSets.length === 0">
            <td colspan="6" class="empty">
              No entries match. Try "all topics", bud.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <footer class="index-footer">
      <p>🇨🇦 This page is 100% certified Canadian content 🇨🇦</p>
      <p><a href="#" @click.prevent>Sign my guestbook</a> | <a href="#" @click.prevent>Email the webmaster</a></p>
    </footer>
  </div>
</template>

<style scoped>
.index-page {
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  min-height: 100vh;
  padding: 1rem 1rem 8rem;
  background: #008080;
  max-width: 60rem;
  margin: 0 auto;
}

.masthead {
  text-align: center;
  background: #000080;
  border: 4px outset #c0c0c0;
  padding: 0.8rem;
  margin-bottom: 1rem;
}

.masthead h1 {
  color: #ffff00;
  font-size: 1.5rem;
  margin: 0;
}

.updated {
  color: #00ffff;
  font-size: 0.8rem;
  margin: 0.4rem 0 0;
}

.filter-bar {
  background: #c0c0c0;
  border: 3px outset #fff;
  padding: 0.6rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.filter-bar select {
  font-family: inherit;
  font-size: 1rem;
  border: 2px inset #888;
  padding: 0.15rem;
}

.count-note {
  font-size: 0.8rem;
  color: #333;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 2px;
  background: #808080;
  border: 4px outset #c0c0c0;
}

th {
  background: #000080;
  color: #fff;
  padding: 0.35rem 0.5rem;
  border: 2px outset #c0c0c0;
  font-size: 0.9rem;
}

td {
  background: #fffff0;
  padding: 0.4rem 0.5rem;
  border: 2px inset #c0c0c0;
  font-size: 0.85rem;
  vertical-align: top;
}

tbody tr:nth-child(even) td {
  background: #e0ffe0;
}

.num {
  text-align: center;
  white-space: nowrap;
}

.topic-tag {
  background: #ffff00;
  border: 1px solid #808000;
  padding: 0 0.3rem;
  font-size: 0.75rem;
  font-weight: bold;
  white-space: nowrap;
}

.teaser {
  color: #555;
  font-size: 0.75rem;
}

td a {
  color: #0000ee;
  font-weight: bold;
}

.empty {
  text-align: center;
  font-size: 1rem;
}

.index-footer {
  text-align: center;
  color: #fff;
  margin-top: 1.5rem;
  font-size: 0.85rem;
}

.index-footer a {
  color: #ffff00;
}
</style>

<!-- Rainbow topic-filter buttons. `null` means "no filter". -->
<script setup lang="ts">
import type { Topic } from '../../content/topics'
import { TOPICS } from '../../content/topics'

const active = defineModel<Topic | null>({ required: true })

const entries = Object.entries(TOPICS) as [Topic, (typeof TOPICS)[Topic]][]

/** Clicking the active topic clears the filter. */
function toggle(topic: Topic) {
  active.value = active.value === topic ? null : topic
}
</script>

<template>
  <nav class="topic-buttons" aria-label="Filter by topic">
    <button type="button" :class="{ active: active === null }" @click="active = null">
      ALL OF IT
    </button>
    <button
      v-for="[key, topic] in entries"
      :key="key"
      type="button"
      :style="{ backgroundColor: topic.color }"
      :class="{ active: active === key }"
      @click="toggle(key)"
    >
      {{ topic.label }}
    </button>
  </nav>
</template>

<style scoped>
.topic-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
  margin-bottom: var(--space-2xl);
}

.topic-buttons button {
  font-family: inherit;
  font-weight: bold;
  font-size: var(--text-md);
  padding: var(--space-sm) var(--space-md);
  border: var(--border-button);
  background: var(--surface-button);
  cursor: pointer;
  transition:
    transform var(--motion-hover),
    box-shadow var(--motion-hover),
    filter var(--motion-hover);
}

/* Coloured buttons carry their topic colour inline, so brighten rather than
   swap the background — one rule that works for all thirteen. */
.topic-buttons button:hover {
  filter: brightness(1.12);
  transform: translate(var(--lift-hover), var(--lift-hover));
  box-shadow: var(--shadow-lift-sm);
}

.topic-buttons button:active {
  transform: translate(var(--lift-press), var(--lift-press));
  box-shadow: var(--shadow-press);
  filter: brightness(0.95);
  transition-duration: var(--motion-press);
}

.topic-buttons button:focus-visible {
  outline: var(--outline-focus);
  outline-offset: var(--outline-focus-offset);
}

/* A pressed-in button is the filter that's currently on — it stays down. */
.topic-buttons button:active,
.topic-buttons button.active {
  border-style: inset;
}

.topic-buttons button.active {
  outline: var(--outline-focus);
}

/* An already-pressed button has nowhere to lift to; it just brightens. */
.topic-buttons button.active:hover {
  transform: none;
  box-shadow: var(--shadow-press);
}
</style>

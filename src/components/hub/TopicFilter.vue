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
}

.topic-buttons button:active,
.topic-buttons button.active {
  border-style: inset;
  outline: var(--border-hairline) dashed var(--puck-999);
}
</style>

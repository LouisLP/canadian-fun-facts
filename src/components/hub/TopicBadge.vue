<!-- The topic's registry colour, worn as a badge. Used on the hub feed. -->
<script setup lang="ts">
import type { Topic } from '../../content/topics'
import { computed } from 'vue'
import { TOPICS } from '../../content/topics'

const props = defineProps<{ topic: Topic }>()

const entry = computed(() => TOPICS[props.topic])
</script>

<template>
  <span class="topic-badge" :style="{ backgroundColor: entry.color }">
    🏷️ {{ entry.label }}
  </span>
</template>

<style scoped>
.topic-badge {
  display: inline-block;
  border: var(--border-badge);
  padding: var(--space-3xs) var(--space-sm);
  color: var(--ink-body);
  font-weight: bold;
  font-size: var(--text-sm);
  white-space: nowrap;
}
</style>

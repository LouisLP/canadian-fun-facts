<!-- The topic's registry colour, worn as a badge. Used on the hub feed. -->
<script setup lang="ts">
import type { Topic } from '../content/topics'
import { computed } from 'vue'
import { TOPICS } from '../content/topics'

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
  border: 3px outset #999;
  padding: 0.1rem 0.5rem;
  color: #111;
  font-weight: bold;
  font-size: 0.85rem;
  white-space: nowrap;
}
</style>

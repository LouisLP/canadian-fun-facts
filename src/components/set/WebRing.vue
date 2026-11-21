<!-- The webring bar at the very end of a set: the next-older and next-newer
     sets either side, and a random one in the middle. The ring wraps. -->
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ALL_SETS } from '../../content/sets'

const props = defineProps<{ slug: string }>()

const router = useRouter()

const index = computed(() => ALL_SETS.findIndex(set => set.slug === props.slug))
const at = (offset: number) => ALL_SETS[(index.value + offset + ALL_SETS.length) % ALL_SETS.length]
// ALL_SETS is newest first, so the older set is one further along.
const older = computed(() => at(1))
const newer = computed(() => at(-1))

function random() {
  const others = ALL_SETS.filter(set => set.slug !== props.slug)
  const pick = others[Math.floor(Math.random() * others.length)]
  if (pick)
    router.push({ name: 'set', params: { slug: pick.slug } })
}
</script>

<template>
  <nav v-if="ALL_SETS.length > 1" class="webring" aria-label="Webring">
    <RouterLink v-if="older" :to="{ name: 'set', params: { slug: older.slug } }" :title="older.title">
      &lt;&lt; prev
    </RouterLink>
    <span class="ring-name">🍁 Fun Facts Webring 🍁</span>
    <button type="button" @click="random">
      random
    </button>
    <RouterLink v-if="newer" :to="{ name: 'set', params: { slug: newer.slug } }" :title="newer.title">
      next &gt;&gt;
    </RouterLink>
  </nav>
</template>

<style scoped>
.webring {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm) var(--space-lg);
  margin-top: var(--space-2xl);
  padding: var(--space-xs) var(--space-lg);
  border: var(--border-chrome);
  background: var(--surface-chrome);
  color: var(--ink-chrome);
  font-weight: bold;
  user-select: text;
}

.webring a,
.webring button {
  color: inherit;
  font: inherit;
}

.webring button {
  background: none;
  border: 0;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}

.ring-name {
  color: var(--ink-on-stage);
}
</style>

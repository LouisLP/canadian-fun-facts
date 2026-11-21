<!-- Notepad open on one random fact from any set, with a menu bar whose only
     working item fetches another. -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { ALL_SETS } from '../../content/sets'
import { renderMarkdown } from '../../lib/markdown'

const FACTS = ALL_SETS.flatMap(set => set.slides.flatMap(slide => slide.facts))

const pick = () => Math.floor(Math.random() * FACTS.length)
const index = ref(pick())

const html = computed(() => renderMarkdown(FACTS[index.value] ?? ''))

function another() {
  if (FACTS.length < 2)
    return
  let next = pick()
  while (next === index.value)
    next = pick()
  index.value = next
}
</script>

<template>
  <div class="notepad">
    <p class="menu" aria-hidden="true">
      <span><u>F</u>ile</span>
      <span><u>E</u>dit</span>
      <span><u>S</u>earch</span>
      <span><u>H</u>elp</span>
    </p>
    <!-- Trusted: facts are authored in this repo (see lib/markdown.ts). -->
    <div class="page" v-html="html" />
    <button type="button" class="another" @click="another">
      another fact ▸
    </button>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  gap: var(--space-md);
  margin: 0 0 2px;
  padding: 1px 4px;
}

.page {
  max-height: 11rem;
  overflow-y: auto;
  padding: var(--space-xs) var(--space-sm);
  background: var(--surface-paper);
  box-shadow: var(--bevel-sunken);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  user-select: text;
}

.page :deep(p) {
  margin: 0;
}

.another {
  display: block;
  margin: 4px 0 0 auto;
  padding: 2px var(--space-sm);
  border: 0;
  background: var(--surface-window);
  box-shadow: var(--bevel-raised);
  font: inherit;
  color: inherit;
  cursor: var(--cursor-pointer);
}

.another:active {
  box-shadow: var(--bevel-sunken);
}

.another:focus-visible {
  outline: 1px dotted var(--ink-body);
  outline-offset: -4px;
}
</style>

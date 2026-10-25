<!-- A quiz slide's question, alone on the stage. Its answer is the next panel. -->
<script setup lang="ts">
defineProps<{ question: string, choices?: string[], number: number, total: number }>()

const letter = (i: number) => String.fromCharCode(65 + i)
</script>

<template>
  <section class="panel question-panel">
    <p class="kicker">
      Question {{ number }} of {{ total }}
    </p>
    <h2 class="wordart">
      {{ question }}
    </h2>
    <ol v-if="choices" class="choices">
      <li v-for="(choice, i) in choices" :key="choice" class="choice">
        <span class="letter">{{ letter(i) }}</span> {{ choice }}
      </li>
    </ol>
  </section>
</template>

<style scoped>
.kicker {
  margin: 0 0 var(--space-2xl);
  font-size: var(--text-xl);
  color: var(--ink-subtle);
  text-shadow: var(--shadow-text);
}

.wordart {
  max-width: 20ch;
}

/* Choices borrow the fact-card look, laid out in a row like answer buttons. */
.choices {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2xl);
  margin: var(--space-4xl) 0 0;
  padding: 0;
}

.choice {
  font-size: var(--text-fact);
  color: var(--ink-fact);
  background: var(--surface-fact);
  border: var(--border-thick) dashed var(--accent-flag);
  padding: var(--space-fact-pad);
  transform: rotate(-0.4deg);
}

.choice:nth-child(even) {
  transform: rotate(0.4deg);
  border-color: var(--accent-fact-alt);
}

.letter {
  font-weight: bold;
  color: var(--accent-flag);
}
</style>

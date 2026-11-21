<!-- The obligatory "you have won" popup ad. Claiming the prize gets you
     exactly what those ads ever did. -->
<script setup lang="ts">
import { ref } from 'vue'

const claimed = ref(false)
</script>

<template>
  <div class="ad">
    <p class="shout">
      ★ CONGRATULATIONS ★
    </p>
    <template v-if="!claimed">
      <p>You are our <b>1,000,000th</b> visitor!!</p>
      <p>You have WON a <b>LIFETIME SUPPLY</b> of maple syrup 🍁</p>
      <button type="button" class="claim" @click="claimed = true">
        CLAIM NOW!!!
      </button>
    </template>
    <p v-else>
      lol just kidding, eh. there is no syrup. 🍁
    </p>
  </div>
</template>

<style scoped>
.ad {
  padding: var(--space-sm);
  background: var(--surface-ad);
  color: var(--ink-body);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-align: center;
}

.ad p {
  margin: 0 0 var(--space-xs);
}

.shout {
  color: var(--ink-ad);
  font-size: var(--text-md);
  font-weight: bold;
  animation: blink var(--motion-blink) step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.claim {
  font: inherit;
  font-weight: bold;
  padding: var(--space-2xs) var(--space-md);
  background: var(--surface-go);
  color: var(--ink-go);
  border: var(--border-go);
  cursor: var(--cursor-pointer);
}

.claim:hover {
  background: var(--surface-go-hover);
}

@media (prefers-reduced-motion: reduce) {
  .shout {
    animation: none;
  }
}
</style>

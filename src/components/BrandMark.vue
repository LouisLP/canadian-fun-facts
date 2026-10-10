<!-- The show's name as a lockup: maple leaves either side, red with a hard
     gold shadow. The one way the name appears on screen, whatever page it's
     on; size it with the font-size of wherever it's used. -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'

withDefaults(defineProps<{ as?: 'h1' | 'p' }>(), { as: 'p' })
</script>

<template>
  <component :is="as" class="brand-mark">
    <Icon icon="twemoji:maple-leaf" class="icon" /> Canadian Fun Facts <Icon icon="twemoji:maple-leaf" class="icon" />
  </component>
</template>

<style scoped>
.brand-mark {
  margin: 0;
  color: var(--ink-brand);
  font-weight: bold;
  text-shadow: var(--shadow-brand);
  /* A name, not a sentence: never break it across lines. */
  white-space: nowrap;
}
</style>

<!-- The show's name as a lockup: maple leaves either side of the name. The one
     way the name appears on screen, whatever page it's on; size it with the
     font-size of wherever it's used.

     Two variants of the same mark: `colour` (red, gold shadow, emoji leaves)
     for light backgrounds, `mono` (all white, regular weight) for the dark
     presentation stage, where the red and gold turn to mud. `leaves: false`
     drops the leaves where something else already flanks the name. -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  as?: 'h1' | 'p'
  variant?: 'colour' | 'mono'
  leaves?: boolean
}>(), {
  as: 'p',
  variant: 'colour',
  leaves: true,
})

// The emoji leaf carries its own red; the mono leaf is a plain glyph that
// takes the text colour.
const leaf = computed(() => props.variant === 'mono' ? 'mdi:leaf-maple' : 'twemoji:maple-leaf')
</script>

<template>
  <component :is="as" class="brand-mark" :class="variant">
    <template v-if="leaves">
      <Icon :icon="leaf" class="icon" /> Canadian Fun Facts <Icon :icon="leaf" class="icon" />
    </template>
    <template v-else>
      Canadian Fun Facts
    </template>
  </component>
</template>

<style scoped>
.brand-mark {
  margin: 0;
  font-weight: bold;
  /* A name, not a sentence: never break it across lines. */
  white-space: nowrap;
}

.colour {
  color: var(--ink-brand);
  text-shadow: var(--shadow-brand);
}

/* A quiet sign-off rather than a headline: the stage's heading should win. */
.mono {
  color: var(--ink-brand-mono);
  font-weight: normal;
  text-shadow: var(--shadow-brand-mono);
}
</style>

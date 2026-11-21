<!-- Auto-appended to every set; not authored in content. The sign-off, and
     under it the set's comments when there is a backend to hold them. -->
<script setup lang="ts">
import { supabase } from '../../lib/supabase'
import CommentThread from './CommentThread.vue'

defineProps<{ slug: string }>()

const hasComments = supabase !== null
</script>

<template>
  <section class="panel thanks-panel">
    <h2 class="wordart">
      Thank you!
    </h2>
    <p class="thanks-line">
      until next time eh?
    </p>
    <CommentThread v-if="hasComments" class="chatter" :slug="slug" />
  </section>
</template>

<style scoped>
.wordart {
  font-size: var(--text-title);
}

.thanks-line {
  font-size: var(--text-xl);
  color: var(--ink-on-stage);
  text-shadow: var(--shadow-text);
}

.chatter {
  margin-top: var(--space-2xl);
}
</style>

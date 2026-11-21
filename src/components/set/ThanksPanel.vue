<!-- Auto-appended to every set; not authored in content. The sign-off, and
     under it the set's comments when there is a backend to hold them. -->
<script setup lang="ts">
import { retroGif } from '../../lib/retro-gif'
import { supabase } from '../../lib/supabase'
import CommentThread from './CommentThread.vue'
import WebRing from './WebRing.vue'

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
    <template v-if="hasComments">
      <img :src="retroGif('guestbook')" alt="Sign my guestbook!" class="guestbook" width="150" height="60">
      <CommentThread :slug="slug" />
    </template>
    <WebRing :slug="slug" />
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

.guestbook {
  margin: var(--space-2xl) 0 var(--space-sm);
}
</style>

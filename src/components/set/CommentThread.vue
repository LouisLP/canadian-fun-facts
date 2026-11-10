<!-- What readers said about a set, and a box to say more. Sits under the
     sign-off on the thank-you panel, which only mounts it when there is a
     backend. -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useAuth } from '../../composables/useAuth'
import { COMMENT_MAX_LENGTH, useComments } from '../../composables/useComments'
import { AUTH_PROVIDERS } from '../../lib/supabase'

const props = defineProps<{ slug: string }>()

const { user, ready, error: authError, signIn, signOut } = useAuth()
const { comments, loading, error: commentsError, add, remove } = useComments(() => props.slug)

const draft = ref('')
const posting = ref(false)

async function post() {
  if (!draft.value.trim() || posting.value)
    return
  posting.value = true
  if (await add(draft.value))
    draft.value = ''
  posting.value = false
}

const dateFormat = new Intl.DateTimeFormat('en-CA', { dateStyle: 'medium' })
const formatDate = (iso: string) => dateFormat.format(new Date(iso))
</script>

<template>
  <div class="thread">
    <p v-if="loading" class="note">
      fetching the chatter...
    </p>
    <p v-else-if="comments.length === 0 && !commentsError" class="note">
      nobody's said anything yet, be the first eh?
    </p>

    <ol v-else class="comments">
      <li v-for="comment in comments" :key="comment.id" class="comment">
        <p class="byline">
          <strong>{{ comment.author }}</strong>
          <time :datetime="comment.createdAt">{{ formatDate(comment.createdAt) }}</time>
          <button
            v-if="comment.userId === user?.id"
            type="button"
            class="delete"
            aria-label="Delete your comment"
            title="Delete"
            @click="remove(comment.id)"
          >
            <Icon icon="lucide:trash-2" class="icon" />
          </button>
        </p>
        <!-- Plain text on purpose: reader input never goes through v-html. -->
        <p class="body">
          {{ comment.body }}
        </p>
      </li>
    </ol>

    <p v-if="commentsError || authError" class="note error" role="alert">
      <Icon icon="twemoji:beaver" class="icon" /> that didn't work, sorry bud: {{ commentsError ?? authError }}
    </p>

    <form v-if="user" class="composer" @submit.prevent="post">
      <label class="visually-hidden" for="comment-draft">Your comment</label>
      <textarea
        id="comment-draft"
        v-model="draft"
        rows="2"
        :maxlength="COMMENT_MAX_LENGTH"
        placeholder="say something nice"
        required
      />
      <div class="actions">
        <button type="submit" class="button go" :disabled="posting">
          post it
        </button>
        <button type="button" class="button" @click="signOut">
          sign out
        </button>
      </div>
    </form>

    <div v-else-if="ready" class="actions">
      <button
        v-for="provider in AUTH_PROVIDERS"
        :key="provider.id"
        type="button"
        class="button"
        @click="signIn(provider.id)"
      >
        <Icon :icon="provider.icon" class="icon" /> sign in with {{ provider.label }} to chime in
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Takes whatever height the panel has left: the list scrolls, the composer
   stays put. The rest of the presentation is unselectable so a stray drag
   doesn't highlight a slide; comments are for reading and typing. */
.thread {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  width: min(100%, 62ch);
  min-height: 0;
  user-select: text;
}

.note {
  margin: 0;
  font-size: var(--text-lg);
  color: var(--ink-on-stage);
  text-shadow: var(--shadow-text);
}

.error {
  color: var(--accent-alarm-ink);
}

.comments {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-fact-gap);
  margin: 0;
  /* Room for the cards' tilt, which would otherwise clip at the scroll edge. */
  padding: var(--space-xs) var(--space-sm);
  min-height: 0;
  overflow-y: auto;
}

/* Comments borrow the fact-card look, tilt and all. */
.comment {
  text-align: left;
  font-size: var(--text-fact);
  color: var(--ink-fact);
  background: var(--surface-fact);
  border: var(--border-thick) dashed var(--accent-flag);
  padding: var(--space-fact-pad);
  transform: rotate(-0.4deg);
}

.comment:nth-child(even) {
  transform: rotate(0.4deg);
  border-color: var(--accent-fact-alt);
}

.byline {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin: 0;
  font-size: var(--text-sm);
  color: var(--ink-caption);
}

.byline strong {
  color: var(--ink-chrome);
}

.body {
  margin: var(--space-2xs) 0 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.delete {
  margin-left: auto;
  background: none;
  border: none;
  color: var(--ink-caption);
  font-size: inherit;
  cursor: pointer;
  padding: var(--space-2xs);
  transition: transform var(--motion-hover);
}

.delete:hover {
  color: var(--accent-alarm);
  transform: scale(1.4);
}

.composer {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.composer textarea {
  font: inherit;
  font-size: var(--text-fact);
  color: var(--ink-body);
  background: var(--surface-card);
  border: var(--border-button);
  border-style: inset;
  padding: var(--space-sm) var(--space-md);
  resize: none;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-sm);
}

.button {
  font-family: inherit;
  font-weight: bold;
  font-size: var(--text-md);
  color: var(--ink-body);
  padding: var(--space-sm) var(--space-md);
  border: var(--border-button);
  background: var(--surface-button);
  cursor: pointer;
  transition:
    transform var(--motion-hover),
    box-shadow var(--motion-hover);
}

.button.go {
  color: var(--ink-go);
  background: var(--surface-go);
  border: var(--border-go);
}

.button:hover {
  background: var(--surface-button-hover);
  transform: translate(var(--lift-hover), var(--lift-hover));
  box-shadow: var(--shadow-lift-sm);
}

.button.go:hover {
  background: var(--surface-go-hover);
}

.button:active {
  transform: translate(var(--lift-press), var(--lift-press));
  box-shadow: var(--shadow-press);
  border-style: inset;
  transition-duration: var(--motion-press);
}

.button:disabled {
  cursor: wait;
  filter: var(--filter-photo-dimmed);
}

.button:focus-visible,
.delete:focus-visible,
.composer textarea:focus-visible {
  outline: var(--outline-focus);
  outline-offset: var(--outline-focus-offset);
  outline-color: var(--accent-trim);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
</style>

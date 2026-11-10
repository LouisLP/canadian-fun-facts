import type { MaybeRefOrGetter } from 'vue'
import { ref, toValue, watch } from 'vue'
import { supabase } from '../lib/supabase'

export interface SetComment {
  id: number
  body: string
  createdAt: string
  userId: string
  author: string
}

/** Keep in step with the check constraint on `comments.body`. */
export const COMMENT_MAX_LENGTH = 1000

const COLUMNS = 'id, body, created_at, user_id, author:profiles(display_name)'

interface CommentRow {
  id: number
  body: string
  created_at: string
  user_id: string
  author: { display_name: string } | null
}

function toComment(row: CommentRow): SetComment {
  return {
    id: row.id,
    body: row.body,
    createdAt: row.created_at,
    userId: row.user_id,
    author: row.author?.display_name ?? 'somebody',
  }
}

/** A set's comments, oldest first, and the ways to change them. */
export function useComments(slug: MaybeRefOrGetter<string>) {
  const comments = ref<SetComment[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function load() {
    if (!supabase)
      return
    const requested = toValue(slug)
    loading.value = true
    error.value = null
    const { data, error: failure } = await supabase
      .from('comments')
      .select(COLUMNS)
      .eq('set_slug', requested)
      .order('created_at')
      .overrideTypes<CommentRow[], { merge: false }>()
    // The reader moved to another set while this was in flight.
    if (requested !== toValue(slug))
      return
    loading.value = false
    if (failure) {
      error.value = failure.message
      return
    }
    comments.value = data.map(toComment)
  }

  /** Resolves true if the comment was posted. */
  async function add(body: string): Promise<boolean> {
    if (!supabase)
      return false
    error.value = null
    const { data, error: failure } = await supabase
      .from('comments')
      .insert({ set_slug: toValue(slug), body: body.trim() })
      .select(COLUMNS)
      .single()
      .overrideTypes<CommentRow, { merge: false }>()
    if (failure) {
      error.value = failure.message
      return false
    }
    comments.value.push(toComment(data))
    return true
  }

  async function remove(id: number) {
    if (!supabase)
      return
    error.value = null
    const { error: failure } = await supabase.from('comments').delete().eq('id', id)
    if (failure) {
      error.value = failure.message
      return
    }
    comments.value = comments.value.filter(comment => comment.id !== id)
  }

  watch(() => toValue(slug), () => {
    comments.value = []
    load()
  }, { immediate: true })

  return { comments, loading, error, add, remove }
}

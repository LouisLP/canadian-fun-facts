import type { User } from '@supabase/supabase-js'
import type { AuthProvider } from '../lib/supabase'
import { readonly, ref } from 'vue'
import { supabase } from '../lib/supabase'

// One session for the whole app, so this state is module-level rather than
// per-component.
const user = ref<User | null>(null)
/** False until the stored session has been read; stops a signed-out flash. */
const ready = ref(false)
const error = ref<string | null>(null)

let listening = false

function listen() {
  if (listening || !supabase)
    return
  listening = true
  // Fires once straight away with the stored session, then on every change.
  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user ?? null
    ready.value = true
  })
}

/**
 * Signing in leaves the site and comes back, which resets the presentation
 * to its title panel. This flag survives the round trip so the page can put
 * the reader back where they were.
 */
const RETURN_FLAG = 'sign-in-return'

/** True, once, on the page load that follows a sign-in redirect. */
export function consumeSignInReturn(): boolean {
  const returning = sessionStorage.getItem(RETURN_FLAG) !== null
  sessionStorage.removeItem(RETURN_FLAG)
  return returning
}

/** Who is signed in, plus the ways in and out. Inert without a backend. */
export function useAuth() {
  listen()

  async function signIn(provider: AuthProvider) {
    if (!supabase)
      return
    error.value = null
    sessionStorage.setItem(RETURN_FLAG, '1')
    const { error: failure } = await supabase.auth.signInWithOAuth({
      provider,
      // Back to this exact page. Must match a redirect URL allowed in the
      // Supabase dashboard (Authentication → URL Configuration).
      options: { redirectTo: window.location.origin + window.location.pathname },
    })
    if (failure) {
      sessionStorage.removeItem(RETURN_FLAG)
      error.value = failure.message
    }
  }

  async function signOut() {
    if (!supabase)
      return
    const { error: failure } = await supabase.auth.signOut()
    error.value = failure?.message ?? null
  }

  return { user: readonly(user), ready: readonly(ready), error: readonly(error), signIn, signOut }
}

import type { Provider } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

/**
 * The backend, for reader-generated data only: who someone is and what they
 * said. Sets never live here (ADR 0001); rows point at a set by its slug.
 *
 * Both values are public by design: the publishable key only grants what the
 * row-level security policies in `supabase/migrations/` allow.
 */
const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

/**
 * `null` when the env vars are missing, so the site still builds and runs as
 * a plain static site. Everything backend-shaped must check this first.
 */
export const supabase = url && key
  ? createClient(url, key, { auth: { flowType: 'pkce' } })
  : null

/**
 * Sign-in buttons, in order. Each one must also be switched on in the
 * Supabase dashboard (Authentication → Providers) or its button errors.
 */
export const AUTH_PROVIDERS = [
  { id: 'google', label: 'Google', icon: 'logos:google-icon' },
] as const satisfies readonly { id: Provider, label: string, icon: string }[]

export type AuthProvider = (typeof AUTH_PROVIDERS)[number]['id']

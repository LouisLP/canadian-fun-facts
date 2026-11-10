/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Supabase project URL. Unset = no backend, comments stay hidden. */
  readonly VITE_SUPABASE_URL?: string
  /** Supabase publishable (or legacy anon) key. Safe to ship to the browser. */
  readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

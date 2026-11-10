# Setting up the backend

One-time setup for comments and sign-in. The why is in [ADR 0007](adr/0007-supabase-for-reader-data.md). Until this is done the site runs without comments, and nothing breaks.

## 1. Create the Supabase project

Make a free project at [supabase.com](https://supabase.com/dashboard). From **Project Settings → API**, note the **Project URL** and the **publishable key**.

## 2. Create the tables

Either paste `supabase/migrations/20261110000000_profiles_and_comments.sql` into the dashboard's **SQL Editor** and run it, or use the CLI:

```sh
pnpm dlx supabase link --project-ref <project-ref>
pnpm dlx supabase db push
```

## 3. Turn on Google sign-in

1. In the [Google Cloud console](https://console.cloud.google.com/apis/credentials), create an **OAuth client ID** of type _Web application_.
2. Add `https://<project-ref>.supabase.co/auth/v1/callback` as an **Authorized redirect URI**.
3. In Supabase, **Authentication → Providers → Google**: enable it and paste the client ID and secret.

## 4. Allow the site's URLs

In **Authentication → URL Configuration**:

- **Site URL:** `https://louislp.github.io/canadian-fun-facts/`
- **Redirect URLs:**
  - `https://louislp.github.io/canadian-fun-facts/**`
  - `http://localhost:5173/canadian-fun-facts/**`

Sign-in returns to whichever set the reader was on, so the wildcards matter.

## 5. Point the site at it

Locally, copy `.env.example` to `.env.local` and fill in the two values.

For the deployed site, set them as repository **variables** (not secrets; both are public):

```sh
gh variable set VITE_SUPABASE_URL --body "https://<project-ref>.supabase.co"
gh variable set VITE_SUPABASE_PUBLISHABLE_KEY --body "<publishable key>"
```

The next deploy picks them up, and the keep-awake workflow starts doing something.

## Moderating

Delete a comment from **Table Editor → comments** in the dashboard. To rename someone, edit their row in `profiles`.

# Reader data lives in Supabase; sets stay in the repo

Extends [0001](0001-sets-are-typescript-modules.md) rather than amending it: sets are still TypeScript modules. This decides where everything that _isn't_ authored content goes.

Comments need two things a static site on GitHub Pages can't do: remember who someone is, and store what they wrote. Both now run on Supabase (Postgres, auth, row-level security), called directly from the browser with `@supabase/supabase-js`. There is no API layer of our own.

## The line between repo and database

- **Repo:** anything the author writes. Sets, slides, facts, images, topics.
- **Database:** anything a reader writes. Profiles and comments today; reactions or quiz scores later would go here too.

The join between them is the set's **slug**. `comments.set_slug` is plain text, not a foreign key, because there is no `sets` table and there shouldn't be one. Slugs are already the stable permalink identity, so this adds no new promise.

Moving sets into the database was considered and rejected. It would trade build-time validation, image path checking, git history and free hosting for nothing: there is one author, and he edits files.

## The schema

`supabase/migrations/` is the source of truth. In short:

- `profiles`: `id` (the auth user), `display_name`. Public, holds nothing private. A trigger makes one on first sign-in, named after the provider's first name.
- `comments`: `set_slug`, `user_id`, `body` (1–1000 characters), `created_at`.

Access is enforced in the database, not the client, since the client is public:

- Anyone can read profiles and comments.
- Signed-in readers insert comments, and the column grant covers only `set_slug` and `body`. `user_id` and `created_at` always come from column defaults, so nobody can post as someone else.
- Readers delete their own comments. There is no edit.
- The author moderates from the Supabase dashboard, which bypasses the policies.

## Sign-in is OAuth, starting with Google

Magic links were the first choice and don't survive contact with Supabase's built-in mailer: it only sends to the project's own team and is capped at a couple of emails an hour, so real use needs a custom SMTP provider and a domain to send from. This site lives on `github.io` and has neither.

OAuth needs no mail. Google is the default because most coworkers have an account; adding GitHub or another provider is one line in `AUTH_PROVIDERS` (`src/lib/supabase.ts`) plus a toggle in the dashboard.

## The backend is optional

`supabase` is `null` when `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` are unset, and the thank-you panel renders without its comment thread. A fork, a fresh clone, or a build with the variables removed is the same static site as before.

## Considered Options

- **giscus (GitHub Discussions).** No backend at all, but every commenter needs a GitHub account, and the audience is coworkers, not developers.
- **Cloudflare D1 + Workers + an auth library.** No project pausing and more control, at the cost of leaving GitHub Pages and writing and hosting an API. Too much machinery for a comment box.
- **Firebase.** Comparable effort, but security rules are a bespoke language where Supabase uses plain SQL that lives in the repo as migrations.

## Consequences

- Comments render as plain text. Reader input never reaches `v-html`; the markdown renderer stays reserved for repo-authored facts.
- Free-tier projects pause after a week idle. `.github/workflows/keep-backend-awake.yml` reads one row twice a week to prevent that.
- Deleting a set leaves its comments orphaned in the database. Harmless, and cleanable by slug.
- Row types in `useComments.ts` are hand-written. With two tables that is cheaper than generated types; revisit if the schema grows.
- Comments are per set. Per-slide threads would need a `slide` column and a stable slide identity, which slides don't have yet.

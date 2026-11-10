-- Reader-generated data: who someone is, and what they said about a set.
-- Sets themselves stay in the repo (ADR 0001); a comment points at one by slug.
-- See docs/adr/0007-supabase-for-reader-data.md.

-- ---------------------------------------------------------------------------
-- Profiles: the public face of an auth user. No email, nothing private.
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null check (char_length(btrim(display_name)) between 1 and 40),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are public"
  on public.profiles for select
  to anon, authenticated
  using (true);

create policy "People rename themselves"
  on public.profiles for update
  to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

-- Some projects grant everything on new public tables by default. Start from
-- nothing so the grants below are the whole story.
revoke all on public.profiles from anon, authenticated;
grant select on public.profiles to anon, authenticated;
grant update (display_name) on public.profiles to authenticated;

-- A profile is made for every new auth user. The default name is the first
-- name the sign-in provider gave us (this is a public site, so not the full
-- one), else the front of the email address.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  provider_name text := coalesce(
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'name',
    new.raw_user_meta_data ->> 'user_name'
  );
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    left(
      coalesce(
        nullif(split_part(btrim(provider_name), ' ', 1), ''),
        nullif(split_part(new.email, '@', 1), ''),
        'somebody'
      ),
      40
    )
  );
  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Comments: one per row, attached to a set by its slug.
-- ---------------------------------------------------------------------------

create table public.comments (
  id bigint generated always as identity primary key,
  -- Not a foreign key: sets live in the repo, not the database.
  set_slug text not null check (char_length(set_slug) between 1 and 100),
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 1000),
  created_at timestamptz not null default now()
);

create index comments_set_slug_created_at_idx on public.comments (set_slug, created_at);
create index comments_user_id_idx on public.comments (user_id);

alter table public.comments enable row level security;

create policy "Comments are public"
  on public.comments for select
  to anon, authenticated
  using (true);

create policy "Signed-in people comment as themselves"
  on public.comments for insert
  to authenticated
  with check (user_id = (select auth.uid()));

create policy "People delete their own comments"
  on public.comments for delete
  to authenticated
  using (user_id = (select auth.uid()));

revoke all on public.comments from anon, authenticated;
grant select on public.comments to anon, authenticated;
-- Only the slug and the body come from the client; user_id and created_at are
-- always the column defaults, so nobody can post as someone else or backdate.
grant insert (set_slug, body) on public.comments to authenticated;
grant delete on public.comments to authenticated;

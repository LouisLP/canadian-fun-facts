# Authoring a set (the topic → set recipe)

The repeatable process for turning a topic into a published set. Proven end-to-end across
all 17 published sets, starting with Maple (`src/content/sets/2025-10-27-maple`); every new
set follows it verbatim.

**The short version:** pick a topic → drop pictures in `inbox/<slug>/` → say "build the
`<slug>` set". Steps 2–7 are then Claude's job.

## 1. Pick the topic

Two entry points, both fine:

- **Louis names one.** Any topic, backlog or not.
- **From the backlog.** An entry in [future-topics.md](backlog/future-topics.md), promoted
  to its own `docs/backlog/<slug>.md` note first — the entry's three candidate slide
  subjects are a starting point, not the finished grouping. (The original Fun Facts 01–22
  notes are all published and have been deleted.)

Either way: pick the `<slug>` early, since `inbox/<slug>/` is named after it. Confirm the
[topic](../src/content/topics.ts) already exists; if it doesn't, that is a separate
one-line change to the registry.

Louis may also hand over a rough list of facts he wants in. Treat those as the spine of the
set — verify and rewrite them to [copy-style](copy-style.md), then fill out the rest around
them.

## 2. Group into slides

A slide is one **subject**, not one fact ([ADR 0002](adr/0002-slides-hold-multiple-facts-and-images.md)).
Aim for **3–4 slides**, **3–4 facts each**. Group by the natural sub-themes in the note,
and let image availability inform the grouping: **look in `inbox/<slug>/` before settling
the slides**, and let what's actually there pull the grouping toward it. A slide you can't
illustrate with four images — inbox or freely-licensed — is the wrong slide. Maple grouped
as: the industry's scale + the tree → tapping → the sugar shack / boiling → the strategic
reserve and the 2012 heist.

## 3. Write the copy

All reader-facing prose follows [docs/copy-style.md](copy-style.md): one sentence per fact,
~25-word soft cap, lead with the surprising bit, **bold** the key figure (max two), no
em-dashes, no rhetorical questions, no lead-ins. Headings and the title get playful puns.
Verify every number against a primary source before committing it.

## 4. Source images — exactly four per slide

Two sources, in order: **the inbox first, Commons for the gaps.**

### 4a. The inbox (`inbox/<slug>/`)

Louis drops raw pictures into a gitignored `inbox/<slug>/` folder — see
[inbox/README.md](../inbox/README.md). These are first-choice imagery and take precedence
over anything on Commons.

Work through them like this:

1. **Look at every file.** Read each image; filenames are a hint, not a description.
2. **Group them against the slides from step 2.** Image availability is allowed to reshape
   the grouping — if the inbox has six great shots of one sub-theme and none of another,
   the slides should follow the pictures.
3. **Pick the best four per slide** when there's a surplus. Judge on: sharpness and
   resolution, how directly it illustrates that slide's facts, and variety within the
   slide (four near-identical frames of the same subject is a weak slide).
4. **Copy the winners** into the set folder under stable kebab-case names describing the
   subject (`boiling-pan.webp`, not `IMG_4471.webp`). Leave the inbox untouched — it is
   the archive of what wasn't used.

Don't ask which to pick. Choose, then say in the summary which slides came from the inbox
and which images were left out, so the call is reviewable.

### 4b. Filling the gaps from Commons

When the inbox doesn't cover a slide's four, top it up. Only **Public Domain / CC / "no
known copyright restrictions"** images qualify; [Wikimedia
Commons](https://commons.wikimedia.org) is the source of record. Mixing inbox and Commons
images within one slide is fine.

**Find candidates** via the Commons API — search and category listing both work:

```sh
UA="canadian-fun-facts-bot/1.0 (you@example.com)"   # Wikimedia wants a real UA
# keyword search across File: namespace
curl -s -H "User-Agent: $UA" \
  "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=maple%20sap%20bucket&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=extmetadata|url|size&format=json" \
  | jq -r '.query.pages[]? | "\(.title)\t\(.imageinfo[0].extmetadata.LicenseShortName.value)\t\((.imageinfo[0].extmetadata.Artist.value)|gsub("<[^>]*>";""))"'
# browse a category instead: list=categorymembers&cmtitle=Category:Maple%20syrup%20production&cmtype=file
```

Prefer files **≥ ~1200 px** wide (the optimizer caps at 1600 and never upscales, so a
400 px source stays soft). **Look at every image before using it** — filenames lie. Pull a
thumbnail (`Special:FilePath/<name>?width=320`) and confirm it shows what you'll claim in
the alt text.

When a subject has no dedicated free imagery (there is _no_ Commons photo of the syrup
reserve or the heist), illustrate with the closest concrete stand-in — the heist slide uses
finished-syrup product shots. Note the substitution in the alt text honestly.

**Download** full-resolution originals straight into the set folder:

```sh
curl -sL -H "User-Agent: $UA" \
  "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20maple%20tap.jpg" \
  -o src/content/sets/2025-10-27-maple/traditional-tap.jpg
```

## 5. Convert to WebP

Once every chosen image — inbox copies and Commons downloads alike — is sitting in the set
folder as `.jpg`/`.png`/`.webp`:

```sh
pnpm optimize-images        # converts to .webp (≤1600px, q80), deletes originals,
                            # and rewrites any .jpg/.png references in index.ts
pnpm optimize-images --check   # CI gate; must pass
```

You can reference the eventual `.webp` names in `index.ts` up front — the converter
produces exactly those names.

## 6. Write `index.ts`

Copy the beavers set's structure. `slug` is stable and unique (renaming the folder never
changes it); `date` is the publish date and the folder name mirrors it by convention.

- **Alt text**: plainly descriptive, no jokes, no flourishes (per copy-style scope note).
- **Credit**: optional in the schema, and currently not rendered (the `<figcaption>` in
  `SetPage.vue` is commented out) — but always fill it in, since it's the only record of
  where a file came from. **Inbox images** get `"Louis Lascelles-Palys"`. **Commons
  images** get `"<Author>, <LICENSE>, via Wikimedia Commons"`, e.g.
  `"Jomegat, CC BY-SA 4.0, via Wikimedia Commons"`. Public-domain / no-restrictions files:
  `"public domain, via Wikimedia Commons"` or `"<Institution>, no known copyright restrictions, via Wikimedia Commons"`.
  Take the author and license short-name from the same `extmetadata` the search returned.

## 7. Verify

```sh
pnpm lint --fix      # imports must be alphabetized (perfectionist/sort-imports)
pnpm type-check      # vue-tsc; a broken image path or bad topic fails here
pnpm build           # bundles the set + its images
```

The set then appears on the hub (newest-first) and at `/<slug>`.

## Date / cadence decision

Cadence going forward is **one set per week**, `date` = the Monday it publishes, folder
named `YYYY-MM-DD-<slug>`. The three pilot sets (beavers, inventions, maple) share
`2026-07-17` as seed content; the hub already handles same-date ties, and `slug` (not date)
is the permalink identity, so the collision is cosmetic. Real sets get distinct weekly dates.

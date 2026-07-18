# Authoring a set (the backlog → set recipe)

The repeatable process for turning one `docs/backlog/*.md` note into a published set.
Proven end-to-end across all 17 published sets, starting with Maple
(`src/content/sets/2025-10-27-maple`); every new set follows it verbatim.

## 1. Read the backlog note, pick the topic

Sets start from an entry in [future-topics.md](backlog/future-topics.md), promoted to its
own `docs/backlog/<slug>.md` note first — the entry's three candidate slide subjects are a
starting point, not the finished grouping. (The original Fun Facts 01–22 notes are all
published and have been deleted.) Confirm the [topic](../src/content/topics.ts)
already exists; if it doesn't, that is a separate one-line change to the registry.

## 2. Group into slides

A slide is one **subject**, not one fact ([ADR 0002](adr/0002-slides-hold-multiple-facts-and-images.md)).
Aim for **3–4 slides**, **3–4 facts each**. Group by the natural sub-themes in the note,
and let image availability inform the grouping: a slide you can't illustrate with four
freely-licensed images is the wrong slide. Maple grouped as: the industry's scale + the
tree → tapping → the sugar shack / boiling → the strategic reserve and the 2012 heist.

## 3. Write the copy

All reader-facing prose follows [docs/copy-style.md](copy-style.md): one sentence per fact,
~25-word soft cap, lead with the surprising bit, **bold** the key figure (max two), no
em-dashes, no rhetorical questions, no lead-ins. Headings and the title get playful puns.
Verify every number against a primary source before committing it.

## 4. Source images — exactly four freely-licensed per slide

This is the real work. Only **Public Domain / CC / "no known copyright restrictions"**
images qualify. [Wikimedia Commons](https://commons.wikimedia.org) is the source of record.

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

Drop the `.jpg`/`.png` files in the set folder, then:

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
- **Credit**: `"<Author>, <LICENSE>, via Wikimedia Commons"`, e.g.
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

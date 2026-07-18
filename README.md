# Canadian Fun Facts

A public site of weekly Canadian fun-fact slide sets, authored as files in this repo and
presented from a browser instead of Google Slides.

Live at **https://louislp.github.io/canadian-fun-facts/** — deployed to GitHub Pages on
every push to `main`.

## How it works

Each week is a **set**: a dated, titled collection of **slides** on one **topic**. A slide
is one subject — a punchy heading, three or four **facts** in markdown, and exactly four
freely-licensed images scattered around it.

Sets are TypeScript modules, not a CMS ([ADR 0001](docs/adr/0001-sets-are-typescript-modules.md)).
That means the type checker is the content validator: a broken image path, an unknown
topic, or a slide with three images is a build failure rather than a bug you find in
production.

```
src/
  content/
    schema.ts                     # Set / Slide types + defineSet()
    topics.ts                     # curated topic registry (label + colour)
    sets/
      index.ts                    # import.meta.glob — sets are auto-discovered
      2026-07-20-beavers/
        index.ts                  # the set: slug, date, title, topic, slides
        *.webp                    # its images, optimized in place
  pages/                          # HubPage, SetPage, NotFoundPage
  components/
```

Adding a set means adding a folder. Nothing registers it — the glob in
`src/content/sets/index.ts` picks it up, and the hub lists it newest-first.

`slug` (declared inside the set) is the permalink identity, so renaming a folder never
breaks a URL. `date` is the publish date and only sorts the hub; the folder name mirrors
it by convention.

## Project setup

Requires Node `^22.18.0 || >=24.12.0` and pnpm.

```sh
pnpm install
pnpm dev           # dev server with hot reload
pnpm build         # type-check + production bundle
pnpm preview       # serve the built bundle
```

## Checks

```sh
pnpm lint --fix              # eslint (@antfu config); sorts imports
pnpm type-check              # vue-tsc — content errors surface here
pnpm optimize-images         # convert new images to WebP, rewrite imports
pnpm optimize-images --check # CI gate: fails on unoptimized or oversized images
```

## Writing a set

[docs/authoring-a-set.md](docs/authoring-a-set.md) is the recipe, start to finish: grouping
a backlog note into slides, writing the copy, sourcing images from Wikimedia Commons with
the right licenses, and verifying it all builds.

Two things carry most of the weight:

- **Copy** follows [docs/copy-style.md](docs/copy-style.md) — one sentence per fact, lead
  with the surprising bit, bold the key figure.
- **Images** must be Public Domain or CC, four per slide, credited in the set file. This is
  the slow part, and it shapes the slides: a subject you can't illustrate with four free
  images is the wrong subject.

Raw material for future sets lives in `docs/backlog/`.
[future-topics.md](docs/backlog/future-topics.md) is the standing idea bank — 48 candidate
sets grouped by topic, each rated on how hard it is to illustrate with free images.

## Further reading

- [CONTEXT.md](CONTEXT.md) — the project's vocabulary (set, slide, fact, topic, hub)
- [docs/adr/](docs/adr) — why sets are modules, why slides hold multiple facts, why slides
  carry no sources
- [docs/research/](docs/research) — sourcing notes behind specific claims

# Canadian Fun Facts

Weekly fun-fact slide sets, authored as TypeScript modules in `src/content/sets/`.

## Read before you write

- **Building or editing a set** (slides, images, credits, voiceover): follow
  [docs/authoring-a-set.md](docs/authoring-a-set.md), the recipe, step by step.
- **Writing any fact, heading or title**: apply every rule in
  [docs/copy-style.md](docs/copy-style.md).
- **Adding a personal connection**, or learning a new fact about Louis: check and update
  `docs/personal-hooks.md` (gitignored, local only).
- **Naming anything** (code, docs, commits): use the vocabulary in
  [CONTEXT.md](CONTEXT.md): set, slide, fact, topic, panel, cue.
- **Choosing or promoting a topic**: [docs/backlog/future-topics.md](docs/backlog/future-topics.md).
- **Changing the schema or architecture**: read the matching [docs/adr/](docs/adr) first.
  ADRs are point-in-time records; where one disagrees with the recipe, the recipe wins.

## Conventions

The recipe is the single source of truth for these; the schema only enforces minimums.

- A set is 3–4 slides; a slide is 2–3 facts and 2–4 images. Fewer is better.
- Every image carries an `alt` and a `credit`.
- Raw pictures and recordings live in the gitignored root `inbox/<slug>/`; only optimized
  WebP copies enter the repo.

## Done means

`pnpm lint --fix`, `pnpm type-check`, `pnpm optimize-images --check` and `pnpm build` all pass.

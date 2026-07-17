# Sets are TypeScript modules, validated by the compiler

> **Amended by [0002](0002-slides-hold-multiple-facts-and-images.md):** the `Slide` shape below (single `body`, single `image`, `source`) is superseded — slides now hold multiple `facts`, multiple `images`, and `sources`.

A weekly fun-fact set is a TypeScript module (`src/content/sets/YYYY-MM-DD-slug/index.ts`, images co-located in the same folder), not markdown or JSON. `vue-tsc` is the schema validator: a typo'd topic, malformed date, missing field, or broken image path fails the build instead of surfacing during a live presentation. Sets are discovered with `import.meta.glob('./sets/*/index.ts', { eager: true })` — no hand-maintained registry.

## Considered Options

- **Markdown + frontmatter** — nicer prose authoring, but needs a Vite loader plus a runtime validation layer, and image paths aren't checked at build time. Rejected: slide bodies are short, and the sole author is a developer.
- **JSON** — no type-checking at the source and no prose ergonomics. Rejected as the worst of both.

## The schema

```ts
// src/content/topics.ts — curated registry; adding a topic = one line
export const TOPICS = { wildlife: { label: 'Wildlife', color: '…' }, /* … */ } as const
export type Topic = keyof typeof TOPICS

type IsoDate = `${number}-${number}-${number}`

interface SlideImage {
  src: string // typed Vite import — broken path = build error
  alt: string
  credit?: string // attribution, name or URL
}

interface Slide {
  heading: string // the hook, big on screen
  body: string // full markdown
  image: SlideImage // required — every slide gets an image, even glorious clip-art
  source?: string // URL backing the fact
}

interface FunFactSet {
  slug: string // permalink identity
  date: IsoDate // hub sort key; folder name mirrors both by convention
  title: string
  topic: Topic // exactly one, from the registry
  slides: [Slide, ...Slide[]] // ≥1 enforced; 3 by convention
}
```

Plus a `defineSet()` identity helper for inference and a dev-time uniqueness check on slugs.

## Consequences

- Every slide requires an image by design — filler clip-art is house style, not a workaround.
- `body` is full markdown, so the slide view carries a markdown renderer.
- Topics are a closed union: inventing a topic mid-authoring means adding it to `topics.ts` first, which is deliberate friction against taxonomy splintering ("wildlife" vs "animals").
- `date` and `slug` live in the module; the folder name is a browsing convention only — nothing parses paths, and renames can't silently change permalinks.

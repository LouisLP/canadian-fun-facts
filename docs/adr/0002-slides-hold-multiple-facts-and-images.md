# Slides hold multiple facts and multiple images

Amends the `Slide` shape in [0001](0001-sets-are-typescript-modules.md). Everything else there (TypeScript modules, `vue-tsc` as validator, glob discovery, topics registry) stands.

A slide is one **subject**, not one fact. The original shape — exactly one `body` and one `image` — forced a "Mythical creatures" set to spend a whole slide per Ogopogo tidbit. Instead a slide carries a cluster of facts and a scatter of images about its subject:

```ts
interface Slide {
  heading: string // the subject hook, big on screen
  facts: [string, ...string[]] // markdown per fact; 3–4 by convention
  images: [SlideImage, ...SlideImage[]] // 4–5 by convention, scattered around the slide
  sources?: string[] // URLs backing the facts
}
```

`SlideImage` is unchanged. `source?: string` became `sources?: string[]` because a slide with several facts routinely cites several pages; sources stay slide-level fine print rather than being tied fact-by-fact, which would be bookkeeping nobody reads on a projector.

## Migration

Clean break — the old `body`/`image` fields are gone, not accepted alongside. Only one set existed (`2026-07-17-beavers`) and it was restructured in the same change; a compatibility union would outlive its single beneficiary. `vue-tsc` fails any set still using the old shape, which is the enforcement mechanism working as designed.

## Consequences

- Minimums are still compiler-enforced only at ≥1; the 3–4 facts / 4–5 images convention is editorial, like "3 slides per set" was.
- Every image still requires `alt` and benefits from house clip-art; a slide now needs several, so the clip-art habit gets more exercise.
- The presentation view lays facts out as a cluster and scatters images around the slide edges — one viewport, no intra-slide scrolling, so conventions above are also a legibility budget: many more than 4 facts or 5 images will not fit a projector legibly.

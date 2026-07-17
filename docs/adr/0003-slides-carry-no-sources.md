# Slides carry no sources

Amends [0002](0002-slides-hold-multiple-facts-and-images.md): the optional `sources?: string[]` field is removed from `Slide`, along with its fine-print rendering in the presentation view. Everything else in 0002 stands.

These are fun facts for coworkers, not citations ([#16](https://github.com/LouisLP/canadian-fun-facts/issues/16)). Source URLs were fine print nobody reads on a projector, and keeping the field in the schema invites authors to keep filling it in. Image `credit` is unaffected — attributing clip-art is courtesy to a creator, not fact-checking.

## Migration

Clean break, same as 0002: the field is gone, not deprecated. The one existing set (`2026-07-17-beavers`) dropped its `sources` blocks in the same change; `defineSet`'s excess-property check fails any set that still passes them.

## Consequences

- Fact accuracy is now enforced editorially (at authoring time) rather than being traceable from the slide.
- Anyone who wants a fact's provenance checks the set's git history or asks the author — acceptable for an office fun-facts site.

# Design tokens live in CSS custom properties

Every colour, size, border and duration was a literal, repeated across five components. `#003399` appeared as a heading colour in one file and a fact-card border in another with nothing recording that they were the same decision. Changing the house red meant grepping for `#ff0000`, `red`, and `#d00000` and guessing which were related.

Tokens now live in `src/styles/tokens.css` as CSS custom properties, in two layers:

1. **Primitives** — raw values in Canadiana-named ramps: `--puck-*` (neutrals, snow down to hockey puck), `--maple-*` (reds), `--glacier-*` (blues), `--butter-tart-*`/`--gold-*` (warms), `--jersey-*` (greens).
2. **Semantics** — what a value is _for_: `--surface-stage`, `--ink-heading`, `--border-chrome`, `--motion-bob`.

**Components only ever use semantic tokens.** A component reaching past a semantic to a primitive means a semantic token is missing; the fix is to add one here, not to reach through.

## Why CSS custom properties rather than a TS/JS token module

The tokens are consumed almost entirely by stylesheets, and custom properties need no build step, no import in every SFC, and cascade into scoped styles for free. The one crossover case — topic colours, which are applied via inline `:style` bindings — is handled by having `TOPICS[t].color` hold a `var(--topic-*)` reference rather than a hex code. That keeps the palette in one file at the cost of one rule: **nothing may read `TOPICS[t].color` as a colour value in JS**, only hand it to CSS.

## The house style is the spec

This site is deliberately Geocities-bad — ridge borders, Comic Sans, blinking `NEW!!`, hard offset shadows, no blur. Tokens exist to make that ugliness _consistent and repeatable_, not to sanitise it. `--shadow-text: 2px 2px 0` has no blur radius on purpose. A future change that "cleans up" the tokens toward tasteful defaults is a regression.

## Shared presentation primitives are global, not scoped

`.panel`, `.wordart` and the `bob` keyframes are used by three separate panel components that must render identically. Scoped `@keyframes bob` would be duplicated per component and drift, so these live in `src/styles/presentation.css` as global classes.

## Consequences

- Adding a topic is now two lines: the registry entry _and_ its `--topic-*` token.
- Values snapped to the nearest step on the new spacing and type scales, so a handful of paddings and font sizes moved by up to ~1.6px, and two near-duplicate greys (`#949494`/`#999999`, `#111111`/`#1a1a1a`) collapsed into one. Deliberate — a scale that exactly reproduces every historical one-off is not a scale.
- Unused tokens are dead weight and should be deleted, not kept "for completeness"; the ramps carry only steps something actually uses.

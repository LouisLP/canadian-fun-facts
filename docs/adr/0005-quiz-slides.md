# Quiz slides

Amends the `Slide` shape in [0002](0002-slides-hold-multiple-facts-and-images.md).

A farewell trivia set needed one question on screen at a time, with the answer held back. `Slide` is now a union: the existing fact slide (`kind` optional, so every published set is untouched) and a quiz slide.

```ts
interface QuizSlide {
  kind: 'quiz'
  question: string
  choices?: [string, string, ...string[]] // optional multiple choice
  answer: string // the reveal, big on screen
  facts: [string, ...string[]] // 1–2 by convention
  images: [SlideImage, ...SlideImage[]] // 1–2 by convention
}
```

## Presentation

A quiz slide becomes two panels: a centred question panel ("Question 3 of 14", plus choices), then the answer laid out as an ordinary fact panel with the answer as its heading. Navigation is unchanged; the reveal is just the next snap. Sets can mix both kinds.

## Consequences

- `FactPanel` takes `heading`, `facts` and `images` directly rather than a `Slide`, so it can render answers.
- Hub teasers and the RSS feed use `slideHeading()`; the feed shows each question with its answer.
- The slide rail gets two dots per question, so a 14-question set has 30.

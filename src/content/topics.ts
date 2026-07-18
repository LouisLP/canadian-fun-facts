// Curated topic registry (ADR 0001). Adding a topic = one line here, plus its
// --topic-* token in src/styles/tokens.css; free-form topic strings in a set
// are a compile error by design.
//
// `color` is a var() reference rather than a hex code so the palette has a
// single home. It is only ever fed to CSS (inline styles, custom properties) —
// nothing may read it as a colour value in JS.
export const TOPICS = {
  wildlife: { label: 'Wildlife', color: 'var(--topic-wildlife)' },
  food: { label: 'Food & Drink', color: 'var(--topic-food)' },
  history: { label: 'History', color: 'var(--topic-history)' },
  geography: { label: 'Geography', color: 'var(--topic-geography)' },
  weather: { label: 'Weather', color: 'var(--topic-weather)' },
  inventions: { label: 'Inventions', color: 'var(--topic-inventions)' },
  culture: { label: 'Culture', color: 'var(--topic-culture)' },
  people: { label: 'People', color: 'var(--topic-people)' },
  sports: { label: 'Sports', color: 'var(--topic-sports)' },
  travel: { label: 'Travel', color: 'var(--topic-travel)' },
  business: { label: 'Business & Industry', color: 'var(--topic-business)' },
  oddities: { label: 'Oddities', color: 'var(--topic-oddities)' },
} as const

export type Topic = keyof typeof TOPICS

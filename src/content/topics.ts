// Curated topic registry (ADR 0001). Adding a topic = one line here;
// free-form topic strings in a set are a compile error by design.
export const TOPICS = {
  wildlife: { label: 'Wildlife', color: '#3dff5e' },
  food: { label: 'Food & Drink', color: '#ff9d00' },
  history: { label: 'History', color: '#ff3d3d' },
  geography: { label: 'Geography', color: '#3db9ff' },
  hockey: { label: 'Hockey', color: '#b03dff' },
  weather: { label: 'Weather', color: '#ffe600' },
  inventions: { label: 'Inventions', color: '#ff3dc4' },
  culture: { label: 'Culture', color: '#3dffe0' },
  people: { label: 'People', color: '#4d7bff' },
  sports: { label: 'Sports', color: '#a6ff3d' },
  travel: { label: 'Travel', color: '#c04dff' },
  business: { label: 'Business & Industry', color: '#ff7a3d' },
  oddities: { label: 'Oddities', color: '#ff3d8f' },
} as const

export type Topic = keyof typeof TOPICS

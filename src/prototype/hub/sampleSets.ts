// PROTOTYPE — throwaway sample data for the hub page prototype (issue #4).
// Not the real content schema; that's decided in issue #2.

export interface FunFactSet {
  id: string
  week: number
  date: string
  topic: string
  title: string
  teaser: string
  slideCount: number
}

export const TOPICS = [
  'Wildlife',
  'History',
  'Food',
  'Geography',
  'Sports',
  'Language',
  'Weather',
] as const

export const SAMPLE_SETS: FunFactSet[] = [
  {
    id: 'week-9',
    week: 9,
    date: '2026-07-13',
    topic: 'Wildlife',
    title: 'Beavers: Nature\'s Bureaucrats',
    teaser: 'The largest beaver dam is visible from space and nobody asked them to build it.',
    slideCount: 3,
  },
  {
    id: 'week-8',
    week: 8,
    date: '2026-07-06',
    topic: 'Food',
    title: 'The Great Poutine Accord',
    teaser: 'Three Quebec towns claim to have invented poutine. All three are correct. Fight me.',
    slideCount: 3,
  },
  {
    id: 'week-7',
    week: 7,
    date: '2026-06-29',
    topic: 'Geography',
    title: 'Canada Has More Lakes Than Everyone Else Combined',
    teaser: 'Roughly 62% of the world\'s lakes. We are hoarding water and we\'re not sorry.',
    slideCount: 4,
  },
  {
    id: 'week-6',
    week: 6,
    date: '2026-06-22',
    topic: 'History',
    title: 'The War of 1812: We Burned the White House (Sort Of)',
    teaser: 'It was mostly British troops but we take group credit. That\'s the Canadian way.',
    slideCount: 3,
  },
  {
    id: 'week-5',
    week: 5,
    date: '2026-06-15',
    topic: 'Language',
    title: 'Eh? A Linguistic Deep Dive',
    teaser: '"Eh" is a confirmational particle recognized by actual linguists. It\'s in the dictionary, eh.',
    slideCount: 3,
  },
  {
    id: 'week-4',
    week: 4,
    date: '2026-06-08',
    topic: 'Sports',
    title: 'Basketball Was Invented by a Canadian',
    teaser: 'James Naismith, from Almonte, Ontario. The peach basket was his idea too.',
    slideCount: 3,
  },
  {
    id: 'week-3',
    week: 3,
    date: '2026-06-01',
    topic: 'Weather',
    title: 'Snag, Yukon: -63°C and Still Went to Work',
    teaser: 'The coldest recorded temperature in North America. Your breath froze mid-air with a hiss.',
    slideCount: 3,
  },
  {
    id: 'week-2',
    week: 2,
    date: '2026-05-25',
    topic: 'Wildlife',
    title: 'Polar Bear Capital of the World',
    teaser: 'Churchill, Manitoba leaves car doors unlocked so pedestrians can shelter from bears.',
    slideCount: 4,
  },
  {
    id: 'week-1',
    week: 1,
    date: '2026-05-18',
    topic: 'Food',
    title: 'Hawaiian Pizza Is Canadian',
    teaser: 'Invented in Chatham, Ontario by a Greek immigrant. The world\'s most controversial export.',
    slideCount: 3,
  },
]

// PROTOTYPE — throwaway dummy data for the slide-view prototype (issue #3).
// This does NOT presuppose the real content schema (issue #2).

export interface FactSlide {
  title: string
  lines: string[]
  emoji: string
  source?: string
}

export interface FactSet {
  setTitle: string
  date: string
  topic: string
  slides: FactSlide[]
}

export const dummySet: FactSet = {
  setTitle: 'Canadian Fun Facts',
  date: 'Week of July 13, 2026',
  topic: 'Geography & National Treasures',
  slides: [
    {
      title: 'The Longest Coastline on Earth',
      lines: [
        'Canada’s coastline is 243,042 km long — the longest of any country.',
        'That’s enough to wrap around the Earth six times.',
        'Runner-up Norway isn’t even close (about 100,000 km).',
      ],
      emoji: '\u{1F30A}',
      source: 'Statistics Canada',
    },
    {
      title: 'Santa Has a Postal Code',
      lines: [
        'Canada Post assigned Santa Claus his own postal code: H0H 0H0.',
        'Every letter addressed there gets answered — in over 30 languages.',
        'Volunteers (mostly retired posties) reply to ~1 million letters a year.',
      ],
      emoji: '\u{1F385}',
      source: 'Canada Post',
    },
    {
      title: 'Winnie-the-Pooh Is Canadian',
      lines: [
        'A Canadian soldier bought a bear cub in White River, Ontario in 1914.',
        'He named her Winnie — after his hometown, Winnipeg.',
        'She ended up in the London Zoo, where a boy named Christopher Robin loved her.',
      ],
      emoji: '\u{1F43B}',
      source: 'Canadian War Museum',
    },
  ],
}

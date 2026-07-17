import type { Topic } from './topics'

export type IsoDate = `${number}-${number}-${number}`

export interface SlideImage {
  /** Typed Vite import — a broken path fails the build. */
  src: string
  alt: string
  /** Attribution for the image itself: a name or URL. */
  credit?: string
}

export interface Slide {
  /** The subject hook, big on screen. */
  heading: string
  /** Full markdown per fact. At least one; 3–4 by convention. */
  facts: [string, ...string[]]
  /** At least one; 4–5 by convention — scattered around the slide. */
  images: [SlideImage, ...SlideImage[]]
}

export interface FunFactSet {
  /** Permalink identity; renaming the folder never changes it. */
  slug: string
  /** Hub sort key; the folder name mirrors it by convention only. */
  date: IsoDate
  title: string
  topic: Topic
  /** At least one; three by convention. */
  slides: [Slide, ...Slide[]]
}

/** Identity helper so set modules get inference + excess-property checks. */
export function defineSet(set: FunFactSet): FunFactSet {
  return set
}

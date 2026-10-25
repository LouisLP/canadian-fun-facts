import type { Topic } from './topics'

export type IsoDate = `${number}-${number}-${number}`

export interface SlideImage {
  /** Typed Vite import — a broken path fails the build. */
  src: string
  alt?: string
  /** Attribution for the image itself: a name or URL. */
  credit?: string
}

export interface FactSlide {
  kind?: 'facts'
  /** The subject hook, big on screen. */
  heading: string
  /** Full markdown per fact. At least one; 3–4 by convention. */
  facts: [string, ...string[]]
  /** Four while a set is mid-backfill; six fills the slide's gutters. */
  images: [SlideImage, SlideImage, SlideImage, SlideImage, ...SlideImage[]]
}

/**
 * A trivia question: the question gets a panel to itself, then the answer is
 * revealed on the next panel, laid out like a fact slide.
 */
export interface QuizSlide {
  kind: 'quiz'
  question: string
  /** Optional multiple choice, shown under the question. */
  choices?: [string, string, ...string[]]
  /** The reveal, big on screen. */
  answer: string
  /** Full markdown per fact backing up the answer. 1–2 by convention. */
  facts: [string, ...string[]]
  /** Fewer than a fact slide: the answer panel is a reveal, not a subject. */
  images: [SlideImage, ...SlideImage[]]
}

export type Slide = FactSlide | QuizSlide

/** What a slide is called in a list: its heading, or its question. */
export function slideHeading(slide: Slide): string {
  return slide.kind === 'quiz' ? slide.question : slide.heading
}

export interface FunFactSet {
  /** Permalink identity; renaming the folder never changes it. */
  slug: string
  /** Hub sort key; the folder name mirrors it by convention only. */
  date: IsoDate
  title: string
  topic: Topic
  /** Title-panel photos; defaults to each of the first three slides' lead image. */
  covers?: string[]
  /** At least one; four by convention. */
  slides: [Slide, ...Slide[]]
}

/** Identity helper so set modules get inference + excess-property checks. */
export function defineSet(set: FunFactSet): FunFactSet {
  return set
}

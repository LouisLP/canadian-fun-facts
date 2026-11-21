/**
 * The popup windows that crowd the hub's gutters, and where each first opens.
 *
 * `top` is a fraction of the viewport height. `along` places the window
 * across its gutter: 0 hugs the screen edge, 1 pushes it as far toward the
 * centre as `reach` allows. `reach` is how many px a window may spill over
 * the feed. Popups pile on top of each other and the content on purpose;
 * readers drag, minimise and close them out of the way. Later entries pop in
 * later and land on top, so the ad goes last.
 */

/** Basenames under `public/app-background/`, without the `.webp`. */
type Photo = string

interface PopupBase {
  id: string
  title: string
  /** Iconify name for the title-bar icon. */
  icon: string
  side: 'left' | 'right'
  top: number
  along: number
  /** Preferred width in px; narrowed only to fit the screen. */
  width: number
  reach: number
}

export type PopupSpec
  = | PopupBase & { kind: 'photos', photos: Photo[] }
    | PopupBase & { kind: 'music' | 'ad' | 'alert' | 'fact' }

export const POPUPS: PopupSpec[] = [
  {
    id: 'music',
    kind: 'music',
    title: 'o_canada.mid - MIDI Player',
    icon: 'twemoji:musical-notes',
    side: 'left',
    top: 0.03,
    along: 0.5,
    width: 320,
    reach: 0,
  },
  {
    id: 'west',
    kind: 'photos',
    title: 'west_coast.jpg - Image Viewer',
    icon: 'twemoji:framed-picture',
    side: 'left',
    top: 0.2,
    along: 0.2,
    width: 340,
    reach: 40,
    photos: ['vancouver', 'tofino', 'vancouver-english-bay', 'musqueam-lookout', 'totem-poles', 'olympic-national-park', 'kayak', 'arcteryx-hiker'],
  },
  {
    id: 'eats',
    kind: 'photos',
    title: 'eh_snacks.jpg - Image Viewer',
    icon: 'twemoji:framed-picture',
    side: 'right',
    top: 0.24,
    along: 0.6,
    width: 350,
    reach: 60,
    photos: ['poutine', 'tim-hortons', 'beer', 'loonie', 'canadiana', 'lululemon', 'canada-map-puzzle'],
  },
  {
    id: 'fact',
    kind: 'fact',
    title: 'fun_fact.txt - Notepad',
    icon: 'twemoji:spiral-notepad',
    side: 'left',
    top: 0.46,
    along: 1,
    width: 300,
    reach: 130,
  },
  {
    id: 'alert',
    kind: 'alert',
    title: 'Warning',
    icon: 'twemoji:warning',
    side: 'right',
    top: 0.5,
    along: 1,
    width: 310,
    reach: 170,
  },
  {
    id: 'wild',
    kind: 'photos',
    title: 'wildlife.jpg - Image Viewer',
    icon: 'twemoji:framed-picture',
    side: 'left',
    top: 0.64,
    along: 0.4,
    width: 300,
    reach: 20,
    photos: ['moose', 'beaver', 'loon', 'canadian-goose', 'lake-louise', 'canada-map'],
  },
  {
    id: 'legends',
    kind: 'photos',
    title: 'legends.jpg - Image Viewer',
    icon: 'twemoji:framed-picture',
    side: 'right',
    top: 0.68,
    along: 0.7,
    width: 290,
    reach: 50,
    photos: ['wayne-gretzky', 'terry-fox', 'chris-hadfield', 'hockey', 'hockey-player', 'toronto', 'quebec', 'quebec-landscape', 'quebec-flag'],
  },
  {
    id: 'ad',
    kind: 'ad',
    title: 'Congratulations!!',
    icon: 'twemoji:wrapped-gift',
    side: 'right',
    top: 0.06,
    along: 1,
    width: 320,
    reach: 150,
  },
]

/** Narrower gutters than this get only the music player, docked minimised. */
export const MIN_GUTTER_PX = 220
/** The gap a window keeps from the screen edge. */
export const GUTTER_MARGIN_PX = 8

/**
 * The popup windows that fill the hub's gutters, and where each first opens.
 *
 * `top` is a fraction of the viewport height. `along` places the window
 * across its gutter: 0 hugs the screen edge, 1 hugs the feed. Windows may
 * overlap each other (that's the look) but start clear of the feed when the
 * gutter is wide enough. Readers can drag, minimise and close them after that.
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
  /** Preferred width in px; narrowed to fit the gutter. */
  width: number
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
    width: 300,
  },
  {
    id: 'ad',
    kind: 'ad',
    title: '!!! YOU HAVE WON !!!',
    icon: 'twemoji:wrapped-gift',
    side: 'right',
    top: 0.04,
    along: 0.4,
    width: 260,
  },
  {
    id: 'west',
    kind: 'photos',
    title: 'west_coast.jpg - Image Viewer',
    icon: 'twemoji:framed-picture',
    side: 'left',
    top: 0.22,
    along: 0.15,
    width: 280,
    photos: ['vancouver', 'tofino', 'vancouver-english-bay', 'musqueam-lookout', 'totem-poles', 'olympic-national-park', 'kayak', 'arcteryx-hiker'],
  },
  {
    id: 'eats',
    kind: 'photos',
    title: 'eh_snacks.jpg - Image Viewer',
    icon: 'twemoji:framed-picture',
    side: 'right',
    top: 0.3,
    along: 0.75,
    width: 290,
    photos: ['poutine', 'tim-hortons', 'beer', 'loonie', 'canadiana', 'lululemon', 'canada-map-puzzle'],
  },
  {
    id: 'fact',
    kind: 'fact',
    title: 'fun_fact.txt - Notepad',
    icon: 'twemoji:spiral-notepad',
    side: 'left',
    top: 0.5,
    along: 0.7,
    width: 250,
  },
  {
    id: 'alert',
    kind: 'alert',
    title: 'Warning',
    icon: 'twemoji:warning',
    side: 'right',
    top: 0.58,
    along: 0.2,
    width: 260,
  },
  {
    id: 'wild',
    kind: 'photos',
    title: 'wildlife.jpg - Image Viewer',
    icon: 'twemoji:framed-picture',
    side: 'left',
    top: 0.7,
    along: 0.3,
    width: 230,
    photos: ['moose', 'beaver', 'loon', 'canadian-goose', 'lake-louise', 'canada-map'],
  },
  {
    id: 'legends',
    kind: 'photos',
    title: 'legends.jpg - Image Viewer',
    icon: 'twemoji:framed-picture',
    side: 'right',
    top: 0.76,
    along: 0.6,
    width: 220,
    photos: ['wayne-gretzky', 'terry-fox', 'chris-hadfield', 'hockey', 'hockey-player', 'toronto', 'quebec', 'quebec-landscape', 'quebec-flag'],
  },
]

/** Narrower gutters than this get only the music player, docked minimised. */
export const MIN_GUTTER_PX = 220
/** The gap a window keeps from the screen edge and the feed. */
export const GUTTER_MARGIN_PX = 8

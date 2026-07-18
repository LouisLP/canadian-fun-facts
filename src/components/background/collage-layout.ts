/**
 * Where each decorative photo sits in the hub's gutters.
 *
 * `top`/`left`/`size` are percentages *of the gutter*, not the viewport, so the
 * collage narrows with the gutter instead of sliding under the opaque feed.
 * `phase` alternates 0/1 to stagger the sway animation between neighbours.
 */
export interface CollageItem {
  /** Basename under `public/app-background/`, without the `.webp`. */
  src: string
  top: string
  left: string
  size: string
  tilt: string
  phase: 0 | 1
}

export interface CollageGutter {
  side: 'left' | 'right'
  items: CollageItem[]
}

const LEFT: CollageItem[] = [
  { src: 'canada-map', top: '2%', left: '38%', size: '40%', tilt: '-6deg', phase: 0 },
  { src: 'beaver', top: '9%', left: '66%', size: '31%', tilt: '5deg', phase: 1 },
  { src: 'hockey', top: '15%', left: '34%', size: '35%', tilt: '-4deg', phase: 0 },
  { src: 'lake-louise', top: '22%', left: '64%', size: '39%', tilt: '7deg', phase: 1 },
  { src: 'moose', top: '28%', left: '36%', size: '34%', tilt: '-8deg', phase: 0 },
  { src: 'beer', top: '35%', left: '68%', size: '29%', tilt: '4deg', phase: 1 },
  { src: 'kayak', top: '41%', left: '34%', size: '39%', tilt: '-5deg', phase: 0 },
  { src: 'chris-hadfield', top: '48%', left: '66%', size: '32%', tilt: '6deg', phase: 1 },
  { src: 'canadiana', top: '54%', left: '38%', size: '37%', tilt: '-3deg', phase: 0 },
  { src: 'loon', top: '61%', left: '68%', size: '31%', tilt: '8deg', phase: 1 },
  { src: 'arcteryx-hiker', top: '67%', left: '34%', size: '35%', tilt: '-7deg', phase: 0 },
  { src: 'canada-map-puzzle', top: '74%', left: '64%', size: '34%', tilt: '3deg', phase: 1 },
  { src: 'lululemon', top: '80%', left: '36%', size: '32%', tilt: '-4deg', phase: 0 },
  { src: 'canadian-goose', top: '87%', left: '66%', size: '37%', tilt: '6deg', phase: 1 },
  { src: 'musqueam-lookout', top: '94%', left: '38%', size: '35%', tilt: '-6deg', phase: 0 },
]

const RIGHT: CollageItem[] = [
  { src: 'toronto', top: '5%', left: '62%', size: '39%', tilt: '-3deg', phase: 1 },
  { src: 'loonie', top: '11%', left: '34%', size: '29%', tilt: '-8deg', phase: 0 },
  { src: 'poutine', top: '18%', left: '66%', size: '35%', tilt: '5deg', phase: 1 },
  { src: 'wayne-gretzky', top: '24%', left: '36%', size: '34%', tilt: '-5deg', phase: 0 },
  { src: 'quebec-landscape', top: '31%', left: '68%', size: '39%', tilt: '7deg', phase: 1 },
  { src: 'hockey-player', top: '37%', left: '34%', size: '32%', tilt: '4deg', phase: 0 },
  { src: 'tim-hortons', top: '44%', left: '66%', size: '34%', tilt: '-6deg', phase: 1 },
  { src: 'terry-fox', top: '50%', left: '36%', size: '35%', tilt: '3deg', phase: 0 },
  { src: 'tofino', top: '57%', left: '68%', size: '37%', tilt: '-4deg', phase: 1 },
  { src: 'quebec-flag', top: '63%', left: '34%', size: '29%', tilt: '8deg', phase: 0 },
  { src: 'vancouver', top: '70%', left: '64%', size: '37%', tilt: '-4deg', phase: 1 },
  { src: 'totem-poles', top: '76%', left: '36%', size: '34%', tilt: '6deg', phase: 0 },
  { src: 'vancouver-english-bay', top: '83%', left: '68%', size: '32%', tilt: '8deg', phase: 1 },
  { src: 'quebec', top: '89%', left: '34%', size: '35%', tilt: '-7deg', phase: 0 },
  { src: 'olympic-national-park', top: '96%', left: '64%', size: '34%', tilt: '5deg', phase: 1 },
]

export const COLLAGE_GUTTERS: CollageGutter[] = [
  { side: 'left', items: LEFT },
  { side: 'right', items: RIGHT },
]

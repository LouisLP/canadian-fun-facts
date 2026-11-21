/**
 * The English words of "O Canada" (Robert Stanley Weir, 1908, as amended in
 * 2018), one line per sung phrase, each word timed to the step its first
 * syllable lands on in the melody of o-canada.ts. Steps are 32nd notes; a
 * word lasts until the next one starts, and a line's last word until the
 * next line.
 */
export type LyricWord = readonly [step: number, text: string]
export type LyricLine = readonly LyricWord[]

export const O_CANADA_LYRICS: readonly LyricLine[] = [
  [[0, 'O'], [16, 'Canada!']],
  [[56, 'Our'], [64, 'home'], [72, 'and'], [80, 'native'], [96, 'land!']],
  [[128, 'True'], [144, 'patriot'], [160, 'love'], [184, 'in'], [192, 'all'], [200, 'of'], [208, 'us'], [216, 'command.']],
  [[248, 'With'], [254, 'glowing'], [268, 'hearts'], [272, 'we'], [280, 'see'], [286, 'thee'], [288, 'rise,']],
  [[300, 'The'], [304, 'True'], [312, 'North'], [320, 'strong'], [336, 'and'], [352, 'free!']],
  [[376, 'From'], [382, 'far'], [384, 'and'], [396, 'wide,'], [400, 'O'], [408, 'Canada,']],
  [[428, 'We'], [432, 'stand'], [440, 'on'], [448, 'guard'], [456, 'for'], [464, 'thee.']],
  [[512, 'God'], [528, 'keep'], [540, 'our'], [544, 'land'], [576, 'glorious'], [604, 'and'], [608, 'free!']],
  [[632, 'O'], [656, 'Canada,'], [680, 'we'], [688, 'stand'], [696, 'on'], [704, 'guard'], [720, 'for'], [736, 'thee.']],
  [[768, 'O'], [784, 'Canada,'], [808, 'we'], [816, 'stand'], [824, 'on'], [832, 'guard'], [848, 'for'], [864, 'thee.']],
]

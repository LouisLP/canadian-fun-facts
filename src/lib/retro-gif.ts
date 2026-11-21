/**
 * The GeoCities GIFs in public/retro/, rescued via GifCities. They are site
 * furniture, not set content, so they skip the WebP pipeline: an animated GIF
 * is the whole point. Sources are listed in public/retro/CREDITS.md.
 */
export type RetroGif
  = | 'beaver'
    | 'flag-waving'
    | 'guestbook'
    | 'maple-leaf-spin'
    | 'moose-flag'
    | 'netscape-now'
    | 'new-star'
    | 'under-construction'

export function retroGif(name: RetroGif): string {
  return `${import.meta.env.BASE_URL}retro/${name}.gif`
}

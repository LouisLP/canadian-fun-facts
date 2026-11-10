# Image inbox

Drop zone for the raw pictures of a set you're working on. Everything in here except this
README is gitignored — originals never enter the repo, only the optimized WebP copies that
land in `src/content/sets/`.

## How to use it

One folder per set, named with the set's slug (`pnpm new-set <slug> <topic>` creates it):

```
inbox/
  sugar-shacks/
    boiling-pan.jpg
    tapping-a-maple.jpg
    lineup-outside.HEIC
    ...
```

Then say "build the sugar-shacks set" (or just "the pictures are in"). The rest is
[docs/authoring-a-set.md](../docs/authoring-a-set.md).

## What helps

- **Descriptive filenames.** `boiling-pan.jpg` beats `IMG_4471.jpg`. Every image gets
  looked at regardless, but names speed up the grouping.
- **Big originals.** The optimizer caps at 1600px wide and never upscales, so anything
  under ~1200px stays soft. Straight-off-the-camera files are ideal.
- **Just enough.** A set is 3–4 slides × 2–4 images each. Extras are fine but not needed. Anything short of a full slide gets topped up from Wikimedia Commons.
- **Any format.** `.jpg`, `.png`, `.webp` all convert. `.heic` needs converting first
  (`sips -s format jpeg *.HEIC --out .` on macOS).

## Voiceovers

A recording of you talking through the set goes in the same folder, any name, any format
ffmpeg can read (`.m4a` from Voice Memos is ideal). Say "add the voiceover to `<slug>`" and it
gets compressed, transcribed and synced: the slides change, and photos light up, as you
talk about them. Works for sets that are already published too.

It syncs best if you say out loud when you move on ("next up…") and name the thing in a
photo when you want it pointed at. One take, no need to be tidy.

Nothing here is deleted after a set ships — clean out old folders whenever you like.

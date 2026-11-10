# Set voiceover

Presenting a set live comes with extra things said out loud that never make it onto the slides. To keep that for people reading the site later, a set can carry one audio recording, and the recording drives the slides.

```ts
interface FunFactSet {
  // …
  voiceover?: {
    src: string // Vite import of ./voiceover.m4a
    cues?: { at: number, panel: number, image?: number }[]
  }
}
```

A cue says: at this second, show this panel, and optionally light up this photo on it. Panels are counted like the rail's dots: 0 is the title, a quiz slide takes two, the thank-you is last.

## Decisions

- **One file per set, not per slide.** It is recorded in one take, the way the set is presented.
- **One flat timeline on the set, not timings scattered over slides and images.** It reads top to bottom like the recording, and it is what a transcript turns into.
- **Cues come from a transcript, not from tapping along.** `pnpm voiceover` compresses the recording and prints what was said with timestamps (whisper.cpp, run locally); Claude reads that against the slides and writes the cues. Louis only records and drops the file in the inbox. The numbers are plain seconds in `index.ts`, so a cue that lands early or late is a one-character fix.
- **Photo highlights reuse the hover look.** A cue with `image` puts that photo in the same state a mouse hover does, so there is one "this photo" treatment.
- **Cues fire on change, not continuously.** A listener who scrolls elsewhere mid-recording is left alone until the next cue pulls them back; scrubbing jumps to whatever cue covers the new position.
- **Committed next to the images**, as mono 64 kbps AAC (`.m4a`, about 0.5 MB per minute), imported like an image so a broken path fails the build.

## Consequences

- `SetPage` shows `VoiceoverPlayer` (play/pause, scrubber, clock) only when the field is set; every existing set is untouched.
- `FactPanel` takes a `highlight` image index.
- The hub card marks sets that have a voiceover.
- Adding, removing or reordering slides in a set with a voiceover shifts its `panel` numbers; the cues need renumbering.
- Authoring needs `ffmpeg`, `whisper-cpp` and a one-time 148 MB model download. The built site needs none of them.

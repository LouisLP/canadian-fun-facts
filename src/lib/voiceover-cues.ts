import type { VoiceoverCue } from '../content/schema'

/**
 * The cue in charge at `time`: the last one at or before it, or -1 before the
 * first. Expects `cues` sorted by `at`.
 */
export function activeCueIndex(cues: VoiceoverCue[], time: number): number {
  let index = -1
  for (const [i, cue] of cues.entries()) {
    if (cue.at > time)
      break
    index = i
  }
  return index
}

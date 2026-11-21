import type { Note } from '../lib/o-canada'
import { onBeforeUnmount, readonly, ref } from 'vue'
import { O_CANADA, O_CANADA_BPM, STEPS_PER_BEAT } from '../lib/o-canada'

/**
 * Plays "O Canada" through Web Audio with bare oscillators, which is roughly
 * what a 1998 sound card's General MIDI did to it. Never autoplays: `toggle`
 * runs from a click. Stops on its own at the end, or when the caller unmounts.
 */

interface Voice { wave: OscillatorType, gain: number }

/** Square lead, triangle bass, soft fill: a cheap sound card's best effort. */
const VOICES: Record<keyof typeof O_CANADA, Voice> = {
  melody: { wave: 'square', gain: 0.09 },
  arpeggio: { wave: 'triangle', gain: 0.07 },
  bass: { wave: 'triangle', gain: 0.16 },
  chords: { wave: 'sine', gain: 0.035 },
}

const STEP_S = 60 / O_CANADA_BPM / STEPS_PER_BEAT
const ATTACK_S = 0.01
const RELEASE_S = 0.04
/** A gap before the first note, so it isn't clipped while the context wakes. */
const LEAD_IN_S = 0.1

const frequency = (pitch: number) => 440 * 2 ** ((pitch - 69) / 12)

function schedule(ctx: AudioContext, out: AudioNode, notes: readonly Note[], voice: Voice, t0: number) {
  for (const [start, length, pitch] of notes) {
    const on = t0 + start * STEP_S
    const off = on + length * STEP_S
    const osc = ctx.createOscillator()
    const env = ctx.createGain()
    osc.type = voice.wave
    osc.frequency.value = frequency(pitch)
    env.gain.setValueAtTime(0, on)
    env.gain.linearRampToValueAtTime(voice.gain, on + ATTACK_S)
    env.gain.setValueAtTime(voice.gain, Math.max(on + ATTACK_S, off - RELEASE_S))
    env.gain.linearRampToValueAtTime(0, off)
    osc.connect(env).connect(out)
    osc.start(on)
    osc.stop(off)
  }
}

const endStep = Math.max(...Object.values(O_CANADA).flat().map(([start, length]) => start + length))

export function useOCanada() {
  const playing = ref(false)
  let ctx: AudioContext | undefined
  let timer: ReturnType<typeof setTimeout> | undefined

  function stop() {
    clearTimeout(timer)
    void ctx?.close()
    ctx = undefined
    playing.value = false
  }

  function play() {
    stop()
    ctx = new AudioContext()
    const t0 = ctx.currentTime + LEAD_IN_S
    for (const part of Object.keys(O_CANADA) as (keyof typeof O_CANADA)[])
      schedule(ctx, ctx.destination, O_CANADA[part], VOICES[part], t0)
    playing.value = true
    timer = setTimeout(stop, (LEAD_IN_S + endStep * STEP_S) * 1000 + 500)
  }

  const toggle = () => (playing.value ? stop() : play())

  onBeforeUnmount(stop)

  return { playing: readonly(playing), toggle }
}

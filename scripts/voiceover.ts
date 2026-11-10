/**
 * Prepare a set's voiceover: compress the recording into the set folder and
 * print a timestamped transcript to place the cues from.
 *
 *   pnpm voiceover inbox/<slug>/<recording> src/content/sets/<folder>
 *
 * Writes <folder>/voiceover.m4a (mono 64 kbps AAC, about 0.5 MB a minute),
 * then prints one line per phrase: the second it starts at, and what was
 * said. See docs/authoring-a-set.md for turning that into cues.
 *
 * Needs ffmpeg and whisper.cpp (`brew install ffmpeg whisper-cpp`) plus a
 * whisper model, by default ~/.cache/whisper.cpp/ggml-base.en.bin.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { homedir, tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'

const MODEL_URL = 'https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin'
const MODEL = process.env.WHISPER_MODEL
  ?? path.join(homedir(), '.cache', 'whisper.cpp', 'ggml-base.en.bin')

/** Short phrases, so a cue can land mid-sentence. */
const MAX_PHRASE_CHARS = '32'

interface Transcript {
  transcription: { offsets: { from: number }, text: string }[]
}

function run(command: string, args: string[]): void {
  execFileSync(command, args, { stdio: ['ignore', 'ignore', 'inherit'] })
}

function main(): void {
  const [recording, setDir] = process.argv.slice(2)
  if (!recording || !setDir || !existsSync(recording) || !existsSync(path.join(setDir, 'index.ts'))) {
    console.error('usage: pnpm voiceover <recording> <set folder>')
    process.exit(1)
  }
  if (!existsSync(MODEL)) {
    console.error(`No whisper model at ${MODEL}. Get one with:\n  curl -L --create-dirs -o ${MODEL} ${MODEL_URL}`)
    process.exit(1)
  }

  const output = path.join(setDir, 'voiceover.m4a')
  run('ffmpeg', ['-y', '-v', 'error', '-i', recording, '-vn', '-ac', '1', '-c:a', 'aac', '-b:a', '64k', '-movflags', '+faststart', output])

  const scratch = mkdtempSync(path.join(tmpdir(), 'voiceover-'))
  try {
    // whisper.cpp only reads 16 kHz mono WAV.
    const wav = path.join(scratch, 'voiceover.wav')
    run('ffmpeg', ['-y', '-v', 'error', '-i', output, '-ar', '16000', '-ac', '1', wav])

    const base = path.join(scratch, 'transcript')
    run('whisper-cli', ['-m', MODEL, '-f', wav, '-np', '-oj', '-of', base, '-ml', MAX_PHRASE_CHARS, '-sow'])

    const { transcription } = JSON.parse(readFileSync(`${base}.json`, 'utf8')) as Transcript
    console.log(`Wrote ${output}\n`)
    for (const phrase of transcription)
      console.log(`${(phrase.offsets.from / 1000).toFixed(1).padStart(7)}  ${phrase.text.trim()}`)
  }
  finally {
    rmSync(scratch, { recursive: true, force: true })
  }
}

main()

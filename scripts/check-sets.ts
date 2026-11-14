/**
 * Lint every set against the rules a type checker cannot see: the copy style
 * (docs/copy-style.md) and the folder conventions (docs/authoring-a-set.md).
 *
 *   pnpm check-sets   # lists every violation, exits 1 if there are any
 *
 * Sets are TypeScript modules with image imports (ADR 0001), so plain Node
 * cannot read them. Like plugins/rss-feed.ts, this borrows a throwaway Vite
 * server and loads them through ssrLoadModule. It loads folder by folder
 * rather than through ALL_SETS, because half the checks compare a set to the
 * folder it lives in.
 */
import type { Token } from 'marked'
import type { FunFactSet, Slide } from '../src/content/schema.ts'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { marked } from 'marked'
import { createServer } from 'vite'

const ROOT = path.join(import.meta.dirname, '..')
const SETS_PATH = 'src/content/sets'
const SETS_DIR = path.join(ROOT, SETS_PATH)

/** "Soft cap ~25 words": the tilde is for the writer, the linter needs a number. */
const MAX_FACT_WORDS = 25
const MAX_FACT_BOLDS = 2
const MONDAY = 1

const FOLDER_PATTERN = /^(\d{4}-\d{2}-\d{2})-.+$/
const EM_DASH = '—'

/** The mechanical half of copy-style's "Banned" list. */
const BANNED: { label: string, pattern: RegExp }[] = [
  { label: 'delve', pattern: /\bdelv(?:e|es|ed|ing)\b/i },
  { label: 'boasts', pattern: /\bboast(?:s|ed|ing)?\b/i },
  { label: 'nestled', pattern: /\bnestl(?:ed|ing)\b/i },
  { label: 'testament to', pattern: /\btestament to\b/i },
  { label: 'game-changer', pattern: /\bgame[- ]chang(?:er|ers|ing)\b/i },
  { label: '"Fun fact" lead-in', pattern: /\bfun fact\b/i },
  { label: '"isn\'t just X, it\'s Y"', pattern: /\bisn['’]t just\b/i },
]

interface LoadedSet {
  folder: string
  set: FunFactSet
}

async function loadSets(): Promise<LoadedSet[]> {
  const entries = await readdir(SETS_DIR, { withFileTypes: true })
  const folders = entries.filter(e => e.isDirectory()).map(e => e.name).sort()

  const server = await createServer({
    configFile: false,
    root: ROOT,
    resolve: { alias: { '@': path.join(ROOT, 'src') } },
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true },
    logLevel: 'warn',
  })

  try {
    const loaded: LoadedSet[] = []
    for (const folder of folders) {
      const mod = await server.ssrLoadModule(`/${SETS_PATH}/${folder}/index.ts`)
      loaded.push({ folder, set: mod.default as FunFactSet })
    }
    return loaded
  }
  finally {
    await server.close()
  }
}

function countTokens(tokens: Token[], type: string): number {
  let count = 0
  for (const token of tokens) {
    if (token.type === type)
      count++
    if ('tokens' in token && token.tokens)
      count += countTokens(token.tokens, type)
  }
  return count
}

function wordCount(markdown: string): number {
  return markdown.replace(/\*\*|__/g, '').split(/\s+/).filter(Boolean).length
}

/** Rules shared by every piece of reader-facing prose. */
function checkProse(text: string): string[] {
  const problems: string[] = []
  if (text.includes(EM_DASH))
    problems.push('em-dash')
  for (const { label, pattern } of BANNED) {
    if (pattern.test(text))
      problems.push(`banned: ${label}`)
  }
  return problems
}

function checkFact(fact: string): string[] {
  const problems = checkProse(fact)
  const tokens = marked.lexer(fact)

  const words = wordCount(fact)
  if (words > MAX_FACT_WORDS)
    problems.push(`${words} words (max ${MAX_FACT_WORDS})`)

  const bolds = countTokens(tokens, 'strong')
  if (bolds > MAX_FACT_BOLDS)
    problems.push(`${bolds} bolds (max ${MAX_FACT_BOLDS})`)

  if (countTokens(tokens, 'em') > 0)
    problems.push('italics')

  return problems
}

/** Headings, questions, answers and choices: prose, but not facts. */
function slideLabels(slide: Slide): string[] {
  return slide.kind === 'quiz'
    ? [slide.question, slide.answer, ...(slide.choices ?? [])]
    : [slide.heading]
}

function excerpt(text: string): string {
  return text.length > 60 ? `${text.slice(0, 57)}...` : text
}

/** An SSR asset import resolves to its URL; the file name survives. */
function fileName(src: string): string {
  return path.basename(decodeURIComponent(src.split('?')[0] ?? src))
}

async function checkSet({ folder, set }: LoadedSet): Promise<string[]> {
  const problems: string[] = []

  const folderDate = FOLDER_PATTERN.exec(folder)?.[1]
  if (!folderDate)
    problems.push('folder is not named YYYY-MM-DD-<slug>')
  else if (folderDate !== set.date)
    problems.push(`folder date ${folderDate} does not match date ${set.date}`)

  const day = new Date(`${set.date}T12:00:00Z`)
  if (Number.isNaN(day.getTime()))
    problems.push(`date "${set.date}" is not a real date`)
  else if (day.getUTCDay() !== MONDAY)
    problems.push(`date ${set.date} is not a Monday`)

  for (const problem of checkProse(set.title))
    problems.push(`title: ${problem}`)
  if (/\bCanad(?:a|ian)/i.test(set.title))
    problems.push('title: says "Canada"/"Canadian"')

  const used = new Set((set.covers ?? []).map(fileName))

  set.slides.forEach((slide, index) => {
    const where = `slide ${index + 1}`

    for (const label of slideLabels(slide)) {
      for (const problem of checkProse(label))
        problems.push(`${where} "${excerpt(label)}": ${problem}`)
    }

    for (const fact of slide.facts) {
      for (const problem of checkFact(fact))
        problems.push(`${where} fact "${excerpt(fact)}": ${problem}`)
    }

    for (const image of slide.images) {
      used.add(fileName(image.src))
      if (!image.alt?.trim())
        problems.push(`${where} image ${fileName(image.src)}: missing alt`)
    }
  })

  const files = await readdir(path.join(SETS_DIR, folder))
  for (const file of files) {
    if (path.extname(file).toLowerCase() === '.webp' && !used.has(file))
      problems.push(`orphan image ${file}: not used by any slide`)
  }

  return problems
}

function checkSlugs(sets: LoadedSet[]): Map<string, string[]> {
  const foldersBySlug = new Map<string, string[]>()
  for (const { folder, set } of sets)
    foldersBySlug.set(set.slug, [...(foldersBySlug.get(set.slug) ?? []), folder])

  const problems = new Map<string, string[]>()
  for (const [slug, folders] of foldersBySlug) {
    if (folders.length < 2)
      continue
    for (const folder of folders) {
      const others = folders.filter(f => f !== folder).join(', ')
      problems.set(folder, [`duplicate slug "${slug}" (also ${others})`])
    }
  }
  return problems
}

async function main(): Promise<void> {
  const sets = await loadSets()
  const slugProblems = checkSlugs(sets)
  let total = 0

  for (const loaded of sets) {
    const problems = [
      ...(slugProblems.get(loaded.folder) ?? []),
      ...await checkSet(loaded),
    ]
    if (problems.length === 0)
      continue

    total += problems.length
    console.error(`\n${loaded.folder}`)
    for (const problem of problems)
      console.error(`  ${problem}`)
  }

  if (total > 0) {
    console.error(`\n${total} problem(s) across ${sets.length} sets.`)
    process.exit(1)
  }
  console.log(`${sets.length} sets pass.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

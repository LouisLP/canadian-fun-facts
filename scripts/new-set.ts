/**
 * Scaffold a new set: the set folder, its inbox, and a backlog note.
 *
 *   pnpm new-set <slug> <topic>                    # dated the next free Monday
 *   pnpm new-set <slug> <topic> --date 2026-11-09  # or a Monday you name
 *
 * Creates:
 *   src/content/sets/YYYY-MM-DD-<slug>/index.ts   a stub; fails type-check until it has slides
 *   inbox/<slug>/                                 drop the pictures here
 *   docs/backlog/<slug>.md                        the note; left alone if it already exists
 *
 * A Monday is free when no set is dated on it and no other backlog note has
 * it down as its target date.
 */
import { existsSync } from 'node:fs'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { parseArgs } from 'node:util'
import { TOPICS } from '../src/content/topics.ts'

const ROOT = path.join(import.meta.dirname, '..')
const SETS_DIR = path.join(ROOT, 'src', 'content', 'sets')
const INBOX_DIR = path.join(ROOT, 'inbox')
const BACKLOG_DIR = path.join(ROOT, 'docs', 'backlog')

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const FOLDER_PATTERN = /^(\d{4}-\d{2}-\d{2})-(.+)$/
const SET_SLUG_PATTERN = /^\s*slug:\s*['"]([^'"]+)['"]/m
const SET_DATE_PATTERN = /^\s*date:\s*['"](\d{4}-\d{2}-\d{2})['"]/m
const TARGET_DATE_PATTERN = /Target date \*\*(\d{4}-\d{2}-\d{2})\*\*/

const MONDAY = 1
const DAY_MS = 24 * 60 * 60 * 1000

function fail(message: string): never {
  console.error(message)
  process.exit(1)
}

function isTopic(value: string): value is keyof typeof TOPICS {
  return Object.hasOwn(TOPICS, value)
}

/** Dates are handled as UTC noon so no timezone can shift the day. */
function parseDate(iso: string): Date | undefined {
  if (!DATE_PATTERN.test(iso))
    return undefined
  const date = new Date(`${iso}T12:00:00Z`)
  // An impossible day (2026-02-30) either fails to parse or rolls over.
  return Number.isNaN(date.getTime()) || formatDate(date) !== iso ? undefined : date
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}

/** Today on this machine's calendar, not UTC's. */
function today(): Date {
  const now = new Date()
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 12))
}

function nextFreeMonday(taken: Set<string>): string {
  let day = today()
  while (day.getUTCDay() !== MONDAY || taken.has(formatDate(day)))
    day = new Date(day.getTime() + DAY_MS)
  return formatDate(day)
}

interface ExistingSets {
  slugs: Map<string, string>
  dates: Map<string, string>
}

/** Slug and date of every set, from both the folder name and the module. */
async function readExistingSets(): Promise<ExistingSets> {
  const slugs = new Map<string, string>()
  const dates = new Map<string, string>()

  const entries = await readdir(SETS_DIR, { withFileTypes: true })
  for (const entry of entries.filter(e => e.isDirectory())) {
    const folder = entry.name
    const [, folderDate, folderSlug] = FOLDER_PATTERN.exec(folder) ?? []
    if (folderDate)
      dates.set(folderDate, folder)
    if (folderSlug)
      slugs.set(folderSlug, folder)

    const indexPath = path.join(SETS_DIR, folder, 'index.ts')
    if (!existsSync(indexPath))
      continue
    const source = await readFile(indexPath, 'utf8')
    const slug = SET_SLUG_PATTERN.exec(source)?.[1]
    const date = SET_DATE_PATTERN.exec(source)?.[1]
    if (slug)
      slugs.set(slug, folder)
    if (date)
      dates.set(date, folder)
  }
  return { slugs, dates }
}

/** Target dates written in backlog notes, by the note's slug. */
async function readTargetDates(): Promise<Map<string, string>> {
  const targets = new Map<string, string>()
  if (!existsSync(BACKLOG_DIR))
    return targets
  for (const file of await readdir(BACKLOG_DIR)) {
    if (path.extname(file) !== '.md')
      continue
    const source = await readFile(path.join(BACKLOG_DIR, file), 'utf8')
    const date = TARGET_DATE_PATTERN.exec(source)?.[1]
    if (date)
      targets.set(path.basename(file, '.md'), date)
  }
  return targets
}

function setStub(slug: string, topic: string, date: string): string {
  return `import { defineSet } from '../../schema'

export default defineSet({
  slug: '${slug}',
  date: '${date}',
  title: 'TODO',
  topic: '${topic}',
  slides: [
    {
      heading: 'TODO',
      facts: ['TODO'],
      images: [],
    },
  ],
})
`
}

function noteStub(slug: string, topic: keyof typeof TOPICS, date: string): string {
  const words = slug.replaceAll('-', ' ')
  const title = words.charAt(0).toUpperCase() + words.slice(1)
  return `# ${title}

Slug \`${slug}\`, topic \`${topic}\` (${TOPICS[topic].label}), inbox \`inbox/${slug}/\`. Target date
**${date}**.

Draft title: **TODO**

## Already used elsewhere, avoid

## Slides (draft copy)

### 1. TODO

## Check before publishing

## Questions for you

## Shot list for \`inbox/${slug}/\`

## Sources
`
}

async function main(): Promise<void> {
  const usage = 'usage: pnpm new-set <slug> <topic> [--date YYYY-MM-DD]'
  const topicList = `Topics: ${Object.keys(TOPICS).join(', ')}`

  let parsed
  try {
    parsed = parseArgs({ allowPositionals: true, options: { date: { type: 'string' } } })
  }
  catch (err) {
    fail(`${err instanceof Error ? err.message : err}\n${usage}`)
  }
  const [slug, topic, ...extra] = parsed.positionals
  if (!slug || !topic || extra.length > 0)
    fail(`${usage}\n${topicList}`)

  if (!SLUG_PATTERN.test(slug))
    fail(`Slug "${slug}" must be kebab-case: lowercase letters, digits and single dashes.`)
  if (FOLDER_PATTERN.test(slug))
    fail(`Slug "${slug}" starts with a date. Pass the bare slug; the date is added for you.`)
  if (!isTopic(topic))
    fail(`Unknown topic "${topic}". ${topicList}\nA new topic is one line in src/content/topics.ts plus its --topic-* token.`)

  const existing = await readExistingSets()
  const clash = existing.slugs.get(slug)
  if (clash)
    fail(`Slug "${slug}" is already taken by src/content/sets/${clash}.`)

  const targets = await readTargetDates()
  const noteTarget = targets.get(slug)
  targets.delete(slug)
  const taken = new Set([...existing.dates.keys(), ...targets.values()])

  let date: string
  if (parsed.values.date === undefined) {
    date = nextFreeMonday(taken)
  }
  else {
    date = parsed.values.date
    const day = parseDate(date)
    if (!day)
      fail(`"${date}" is not a real YYYY-MM-DD date.`)
    if (day.getUTCDay() !== MONDAY)
      fail(`${date} is not a Monday. Sets publish on Mondays.`)
    const setOnDate = existing.dates.get(date)
    if (setOnDate)
      fail(`${date} already has a set: src/content/sets/${setOnDate}.`)
    const noteOnDate = [...targets].find(([, target]) => target === date)?.[0]
    if (noteOnDate)
      fail(`${date} is the target date of docs/backlog/${noteOnDate}.md.`)
  }

  const folder = `${date}-${slug}`
  const setDir = path.join(SETS_DIR, folder)
  const inboxDir = path.join(INBOX_DIR, slug)
  const notePath = path.join(BACKLOG_DIR, `${slug}.md`)
  const relative = (target: string): string => path.relative(ROOT, target)

  await mkdir(setDir)
  await writeFile(path.join(setDir, 'index.ts'), setStub(slug, topic, date), { flag: 'wx' })
  console.log(`created  ${relative(path.join(setDir, 'index.ts'))}`)

  const inboxExisted = existsSync(inboxDir)
  await mkdir(inboxDir, { recursive: true })
  console.log(`${inboxExisted ? 'exists   ' : 'created  '}${relative(inboxDir)}/`)

  if (existsSync(notePath)) {
    console.log(`exists   ${relative(notePath)}`)
    if (noteTarget && noteTarget !== date)
      console.warn(`\nThe note's target date is ${noteTarget}, but the set is dated ${date}.\nIf the note is right, delete ${relative(setDir)} and rerun with --date ${noteTarget}.`)
  }
  else {
    await mkdir(BACKLOG_DIR, { recursive: true })
    await writeFile(notePath, noteStub(slug, topic, date), { flag: 'wx' })
    console.log(`created  ${relative(notePath)}`)
  }

  console.log(`\n"${slug}" publishes Monday ${date}. The build fails until the stub has real slides.`)
}

await main()

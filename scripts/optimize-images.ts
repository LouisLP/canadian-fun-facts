/**
 * Convert set images to WebP and rewrite imports.
 *
 * Scans src/content/sets/ for .jpg/.jpeg/.png files, converts each to a
 * .webp capped at MAX_WIDTH, deletes the original, and rewrites the
 * filename in the set's index.ts. Oversized .webp files are resized in
 * place. Run after dropping new images into a set folder:
 *
 *   pnpm optimize-images          # convert + rewrite
 *   pnpm optimize-images --check  # report offenders, exit 1 if any (CI)
 */
import { readdir, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import sharp from 'sharp'

const SETS_DIR = path.join(import.meta.dirname, '..', 'src', 'content', 'sets')
const MAX_WIDTH = 1600
const WEBP_QUALITY = 80
const CONVERTIBLE = new Set(['.jpg', '.jpeg', '.png'])

const checkOnly = process.argv.includes('--check')

function kb(bytes: number): string {
  return `${Math.round(bytes / 1024)} KB`
}

async function collectImages(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true })
  return entries
    .filter(e => e.isFile())
    .map(e => path.join(e.parentPath, e.name))
    .filter((p) => {
      const ext = path.extname(p).toLowerCase()
      return CONVERTIBLE.has(ext) || ext === '.webp'
    })
}

async function rewriteReferences(setDir: string, oldName: string, newName: string): Promise<void> {
  const entries = await readdir(setDir)
  for (const entry of entries.filter(e => e.endsWith('.ts'))) {
    const filePath = path.join(setDir, entry)
    const source = await readFile(filePath, 'utf8')
    if (source.includes(oldName))
      await writeFile(filePath, source.replaceAll(oldName, newName))
  }
}

async function main(): Promise<void> {
  const images = await collectImages(SETS_DIR)
  const offenders: string[] = []
  let savedBytes = 0

  for (const file of images) {
    const ext = path.extname(file).toLowerCase()
    const relative = path.relative(SETS_DIR, file)
    const { width = 0 } = await sharp(file).metadata()

    if (ext === '.webp' && width <= MAX_WIDTH)
      continue

    offenders.push(relative)
    if (checkOnly)
      continue

    const { size: sizeBefore } = await stat(file)
    const target = ext === '.webp' ? file : `${file.slice(0, -ext.length)}.webp`
    const temp = `${target}.tmp`

    await sharp(file)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(temp)

    if (file !== target)
      await unlink(file)
    await rename(temp, target)

    const { size: sizeAfter } = await stat(target)
    savedBytes += sizeBefore - sizeAfter

    if (file !== target)
      await rewriteReferences(path.dirname(file), path.basename(file), path.basename(target))

    console.log(`${relative} → ${path.basename(target)} (${kb(sizeBefore)} → ${kb(sizeAfter)})`)
  }

  if (checkOnly) {
    if (offenders.length > 0) {
      console.error(`${offenders.length} image(s) need optimizing (run \`pnpm optimize-images\`):`)
      for (const file of offenders)
        console.error(`  ${file}`)
      process.exit(1)
    }
    console.log('All set images are optimized.')
    return
  }

  if (offenders.length === 0)
    console.log('All set images are already optimized.')
  else
    console.log(`Optimized ${offenders.length} image(s), saved ${kb(savedBytes)}.`)
}

await main()

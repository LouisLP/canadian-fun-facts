import type { FunFactSet } from '../schema'

const modules = import.meta.glob<{ default: FunFactSet }>('./*/index.ts', {
  eager: true,
})

/** Every set, newest first. */
export const ALL_SETS: FunFactSet[] = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => b.date.localeCompare(a.date))

if (import.meta.env.DEV) {
  const seen = new Set<string>()
  for (const set of ALL_SETS) {
    if (seen.has(set.slug))
      throw new Error(`Duplicate set slug: "${set.slug}"`)
    seen.add(set.slug)
  }
}

export function findSet(slug: string): FunFactSet | undefined {
  return ALL_SETS.find(set => set.slug === slug)
}

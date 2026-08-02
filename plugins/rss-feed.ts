// Emits /feed.xml so people can subscribe to new sets (issue #84).
//
// The sets are TypeScript modules with image imports and an import.meta.glob
// (ADR 0001), so plain Node cannot read them. A throwaway Vite server in
// middleware mode can: ssrLoadModule gives us the same ALL_SETS the app sees,
// which keeps the feed honest — a set that ships is a set that syndicates.
import type { Plugin, ResolvedConfig } from 'vite'
import type { FunFactSet } from '../src/content/schema'
import { createServer } from 'vite'
import { TOPICS } from '../src/content/topics'
import { renderMarkdown } from '../src/lib/markdown'

/** Where the built site lives; feeds need absolute URLs. */
const SITE_ORIGIN = 'https://louislp.github.io'

const FEED_TITLE = 'Canadian Fun Facts'
const FEED_DESCRIPTION = 'your weekly dose of maple-flavoured knowledge'

const FEED_FILE_NAME = 'feed.xml'

export function rssFeed(): Plugin {
  let config: ResolvedConfig

  return {
    name: 'canadian-fun-facts:rss-feed',

    configResolved(resolved) {
      config = resolved
    },

    // Dev serves the feed live, so a broken feed shows up before it ships.
    configureServer(server) {
      const url = `${config.base}${FEED_FILE_NAME}`
      server.middlewares.use((req, res, next) => {
        if (req.url?.split('?')[0] !== url)
          return next()

        renderFeed(config)
          .then((xml) => {
            res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
            res.end(xml)
          })
          .catch(next)
      })
    },

    async buildStart() {
      if (config.command !== 'build')
        return

      this.emitFile({
        type: 'asset',
        fileName: FEED_FILE_NAME,
        source: await renderFeed(config),
      })
    },
  }
}

async function loadSets(config: ResolvedConfig): Promise<FunFactSet[]> {
  const server = await createServer({
    configFile: false,
    root: config.root,
    resolve: { alias: config.resolve.alias },
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true },
    logLevel: 'warn',
  })

  try {
    const mod = await server.ssrLoadModule('/src/content/sets/index.ts')
    return mod.ALL_SETS as FunFactSet[]
  }
  finally {
    await server.close()
  }
}

async function renderFeed(config: ResolvedConfig): Promise<string> {
  const sets = await loadSets(config)
  const siteUrl = `${SITE_ORIGIN}${config.base}`
  const feedUrl = `${siteUrl}${FEED_FILE_NAME}`

  // Deterministic on purpose: build time would churn the file on every build.
  const lastBuildDate = sets[0] ? pubDate(sets[0]) : new Date(0).toUTCString()

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-ca</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${sets.map(set => renderItem(set, siteUrl)).join('\n')}
  </channel>
</rss>
`
}

function renderItem(set: FunFactSet, siteUrl: string): string {
  const url = `${siteUrl}sets/${set.slug}`

  return `    <item>
      <title>${escapeXml(set.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <category>${escapeXml(TOPICS[set.topic].label)}</category>
      <pubDate>${pubDate(set)}</pubDate>
      <description>${cdata(renderSummary(set))}</description>
    </item>`
}

/**
 * Every slide's heading and facts, so the whole set reads in a reader.
 * Facts go through the app's own markdown renderer — same trusted, in-repo
 * copy, so its HTML lands in the item body unescaped.
 */
function renderSummary(set: FunFactSet): string {
  return set.slides
    .map(slide => `<h2>${escapeXml(slide.heading)}</h2>\n${
      slide.facts.map(fact => renderMarkdown(fact).trim()).join('\n')
    }`)
    .join('\n')
}

/** Sets are dated, not timed; noon UTC keeps them on their day worldwide. */
function pubDate(set: FunFactSet): string {
  return new Date(`${set.date}T12:00:00Z`).toUTCString()
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Split any literal `]]>` so it cannot close the section early. */
function cdata(value: string): string {
  return `<![CDATA[${value.replace(/\]\]>/g, ']]]]><![CDATA[>')}]]>`
}

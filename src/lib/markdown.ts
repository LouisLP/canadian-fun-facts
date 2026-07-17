import { marked } from 'marked'

// Slide bodies are authored in this repo and reviewed like code, so the
// output is trusted — no sanitizer between marked and v-html.
export function renderMarkdown(md: string): string {
  return marked.parse(md, { async: false })
}

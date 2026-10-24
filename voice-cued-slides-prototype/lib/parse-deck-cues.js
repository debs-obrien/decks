import { parseCueFromNotes } from './cue-matcher.js'

/**
 * Extract per-slide cues from a Slidev markdown source.
 *
 * Convention: every slide has one HTML-comment speaker-notes block that
 * includes a `cue:` line. Use `cue: none` for slides that must never
 * auto-advance. Notes blocks are read in document order (one per slide).
 *
 * @param {string} markdown
 * @returns {(string | null)[]}
 */
export function extractCuesFromDeckMarkdown(markdown) {
  const blocks = [...String(markdown || '').matchAll(/<!--([\s\S]*?)-->/g)]
  return blocks.map((match) => parseCueFromNotes(match[1]))
}

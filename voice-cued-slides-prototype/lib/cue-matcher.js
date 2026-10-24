/**
 * Pure, framework-free voice cue matcher.
 *
 * Rules (inspired by Dave Kiss, "The slides that listened"):
 * - Forward only: never navigates to a lower slide index.
 * - Long cues fire at ~60% of their words; short cues (<=3) need every word.
 * - One slip allowed (extra, missing, or substituted word) plus fuzzy word match.
 * - Also listens for the next two cues (nearly whole) so a missed cue can catch up.
 * - Slides with no cue never auto-advance.
 * - Manual navigation realigns the matcher and clears the heard buffer.
 */

/** @param {string} text */
export function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

/**
 * How many cue words must match before advancing.
 * @param {number} phraseLength
 */
export function wordsNeeded(phraseLength) {
  if (phraseLength <= 0) return Infinity
  if (phraseLength <= 3) return phraseLength
  return Math.max(3, Math.ceil(phraseLength * 0.6))
}

/**
 * Catch-up cues (next two) must be said nearly whole.
 * @param {number} phraseLength
 */
export function wordsNeededNearlyWhole(phraseLength) {
  if (phraseLength <= 0) return Infinity
  if (phraseLength <= 3) return phraseLength
  return Math.max(wordsNeeded(phraseLength), Math.ceil(phraseLength * 0.85))
}

/** @param {string} a @param {string} b */
export function editDistance(a, b) {
  if (a === b) return 0
  const m = a.length
  const n = b.length
  if (m === 0) return n
  if (n === 0) return m
  /** @type {number[]} */
  let prev = Array.from({ length: n + 1 }, (_, i) => i)
  /** @type {number[]} */
  let curr = new Array(n + 1)
  for (let i = 1; i <= m; i++) {
    curr[0] = i
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost)
    }
    ;[prev, curr] = [curr, prev]
  }
  return prev[n]
}

/** @param {string} a @param {string} b */
export function wordsMatch(a, b) {
  if (a === b) return true
  const longer = Math.max(a.length, b.length)
  if (longer <= 1) return false
  const maxDist = longer <= 4 ? 1 : Math.min(2, Math.floor(longer / 3) || 1)
  return editDistance(a, b) <= maxDist
}

/**
 * How many cue words are actually heard (fuzzy or one substituted slip),
 * allowing at most `maxSlips` sequence slips. Skipping a cue word uses a
 * slip but does not increase the match count.
 * @param {string[]} cueWords
 * @param {string[]} heardWords
 * @param {number} [maxSlips=1]
 */
export function alignedMatchCount(cueWords, heardWords, maxSlips = 1) {
  if (!cueWords.length) return 0
  if (!heardWords.length) return 0

  const memo = new Map()
  /**
   * @param {number} ci
   * @param {number} hi
   * @param {number} slips
   * @returns {number} matched cue words from this point
   */
  function rec(ci, hi, slips) {
    if (ci >= cueWords.length) return 0
    const key = `${ci}|${hi}|${slips}`
    if (memo.has(key)) return memo.get(key)

    let best = 0
    if (hi < heardWords.length && wordsMatch(cueWords[ci], heardWords[hi])) {
      best = Math.max(best, 1 + rec(ci + 1, hi + 1, slips))
    }
    if (slips > 0) {
      if (hi < heardWords.length) {
        // Substitution beyond fuzzy: counts as heard via the slip.
        best = Math.max(best, 1 + rec(ci + 1, hi + 1, slips - 1))
        // Extra heard word.
        best = Math.max(best, rec(ci, hi + 1, slips - 1))
      }
      // Missing heard word: skip one cue word, do not count it.
      best = Math.max(best, rec(ci + 1, hi, slips - 1))
    }
    memo.set(key, best)
    return best
  }

  let best = 0
  const pad = maxSlips + 2
  const startMin = Math.max(0, heardWords.length - cueWords.length - pad)
  for (let start = startMin; start < heardWords.length; start++) {
    best = Math.max(best, rec(0, start, maxSlips))
    if (best >= cueWords.length) break
  }
  return best
}

/**
 * Parse a `cue:` line from speaker notes.
 * Convention: a line starting with `cue:` (case-insensitive). Empty / `none` / `-` = no cue.
 * @param {string} notes
 * @returns {string | null}
 */
export function parseCueFromNotes(notes) {
  if (!notes) return null
  const lines = String(notes).split(/\r?\n/)
  for (const line of lines) {
    const match = line.match(/^\s*cue:\s*(.*)$/i)
    if (!match) continue
    const value = match[1].trim()
    if (!value || /^(none|-|n\/a)$/i.test(value)) return null
    // strip wrapping quotes if present
    return value.replace(/^["']|["']$/g, '').trim() || null
  }
  return null
}

/**
 * @typedef {{ phrase: string | null, words: string[] }} SlideCue
 */

/**
 * @param {(string | null | undefined)[]} phrases
 * @returns {SlideCue[]}
 */
export function buildCues(phrases) {
  return phrases.map((phrase) => {
    if (!phrase) return { phrase: null, words: [] }
    const words = tokenize(phrase)
    return { phrase, words }
  })
}

export class CueMatcher {
  /**
   * @param {(string | null | undefined)[]} phrases one entry per slide (index 0 = first slide)
   */
  constructor(phrases) {
    this.cues = buildCues(phrases)
    /** @type {number} 0-based slide index */
    this.slideIndex = 0
    /** @type {string[]} committed (final) tokens */
    this.finalTokens = []
    /** @type {string[]} current interim guess */
    this.interimTokens = []
    /** tokens already used to fire a cue; prevents interim resends from double-firing */
    this.consumedCount = 0
  }

  /** @returns {string[]} */
  heardTokens() {
    return this.finalTokens.concat(this.interimTokens)
  }

  /**
   * Unused suffix of the transcript (after last fired cue).
   * @returns {string[]}
   */
  unmatchedTokens() {
    return this.heardTokens().slice(this.consumedCount)
  }

  /**
   * Manual navigation: realign to the current slide and clear hearing.
   * Voice must never fight the clicker/keyboard.
   * @param {number} index 0-based
   */
  setSlideIndex(index) {
    const next = clampIndex(index, this.cues.length)
    this.slideIndex = next
    this.resetHeard()
  }

  resetHeard() {
    this.finalTokens = []
    this.interimTokens = []
    this.consumedCount = 0
  }

  /**
   * Ingest speech results. Interim replaces the provisional tail; finals append.
   * @param {{ finalText?: string, interimText?: string, replaceInterim?: boolean }} update
   * @returns {{ advanceTo: number | null, matchedCueIndex: number | null, progress: number }}
   */
  ingest(update = {}) {
    const { finalText, interimText, replaceInterim = true } = update

    if (finalText) {
      const toks = tokenize(finalText)
      if (toks.length) this.finalTokens.push(...toks)
      if (replaceInterim) this.interimTokens = []
    }

    if (interimText !== undefined) {
      this.interimTokens = tokenize(interimText)
    }

    return this.evaluate()
  }

  /**
   * Feed a flat token list as if spoken (tests / typed rehearsal).
   * @param {string[] | string} tokensOrText
   * @param {{ interim?: boolean }} [opts]
   */
  feed(tokensOrText, opts = {}) {
    const tokens = Array.isArray(tokensOrText)
      ? tokensOrText.map((t) => String(t).toLowerCase())
      : tokenize(tokensOrText)
    if (opts.interim) {
      this.interimTokens = tokens
    }
    else {
      this.finalTokens.push(...tokens)
      this.interimTokens = []
    }
    return this.evaluate()
  }

  /**
   * @returns {{ advanceTo: number | null, matchedCueIndex: number | null, progress: number }}
   */
  evaluate() {
    const from = this.slideIndex
    const heard = this.unmatchedTokens()
    const last = this.cues.length - 1

    // Uncued slides never auto-advance.
    if (!this.cues[from]?.phrase) {
      return { advanceTo: null, matchedCueIndex: null, progress: 0 }
    }

    // Already on the last slide: nothing forward to do.
    if (from >= last) {
      return { advanceTo: null, matchedCueIndex: null, progress: 0 }
    }

    const targets = listenTargets(this.cues, from)
    let progress = 0

    for (let t = 0; t < targets.length; t++) {
      const slideIdx = targets[t]
      const cue = this.cues[slideIdx]
      if (!cue?.phrase || !cue.words.length) continue

      // Primary (current) cue: ~60%. Catch-up (next two): nearly whole.
      const needed = t === 0
        ? wordsNeeded(cue.words.length)
        : wordsNeededNearlyWhole(cue.words.length)

      const matched = alignedMatchCount(cue.words, heard, 1)
      const ratio = matched / cue.words.length
      if (t === 0) progress = ratio

      if (matched < needed) continue

      // Cue on slideIdx advances FROM that slide to slideIdx + 1.
      const advanceTo = Math.min(slideIdx + 1, last)
      if (advanceTo <= from) continue
      if (wouldSkipUncued(this.cues, from, advanceTo)) continue

      this.consumedCount = this.heardTokens().length
      this.slideIndex = advanceTo
      return { advanceTo, matchedCueIndex: slideIdx, progress: ratio }
    }

    return { advanceTo: null, matchedCueIndex: null, progress }
  }
}

/**
 * Listen for the current slide's cue, plus the next two slides' cues (catch-up).
 * Only includes slides that actually have a cue phrase.
 * @param {SlideCue[]} cues
 * @param {number} from
 * @returns {number[]}
 */
export function listenTargets(cues, from) {
  if (!cues[from]?.phrase) return []
  /** @type {number[]} */
  const targets = []
  for (let j = from; j < Math.min(cues.length, from + 3); j++) {
    if (cues[j]?.phrase) targets.push(j)
  }
  return targets
}

/**
 * Refuse voice jumps that would skip an uncued slide.
 * @param {SlideCue[]} cues
 * @param {number} from
 * @param {number} dest
 */
export function wouldSkipUncued(cues, from, dest) {
  for (let k = from + 1; k < dest; k++) {
    if (!cues[k]?.phrase) return true
  }
  return false
}

/**
 * @param {number} index
 * @param {number} length
 */
function clampIndex(index, length) {
  if (length <= 0) return 0
  return Math.max(0, Math.min(Math.floor(index), length - 1))
}

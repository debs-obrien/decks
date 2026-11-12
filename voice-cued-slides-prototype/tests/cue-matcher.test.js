import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  CueMatcher,
  alignedMatchCount,
  parseCueFromNotes,
  tokenize,
  wordsMatch,
  wordsNeeded,
  wordsNeededNearlyWhole,
} from '../lib/cue-matcher.js'
import { extractCuesFromDeckMarkdown } from '../lib/parse-deck-cues.js'

const here = dirname(fileURLToPath(import.meta.url))
const slidesMd = readFileSync(join(here, '../slides.md'), 'utf8')

const SAMPLE_CUES = [
  'welcome to voice cued slides',
  'the deck listens while you talk',
  null,
  'sixty percent is enough for a long line',
  'missed a cue and still caught up',
  'press v and allow the microphone',
]

describe('wordsNeeded', () => {
  it('requires every word for short cues', () => {
    expect(wordsNeeded(1)).toBe(1)
    expect(wordsNeeded(3)).toBe(3)
  })

  it('fires long cues at about 60%', () => {
    // 10 words → 6; 5 words → max(3, 3) = 3
    expect(wordsNeeded(10)).toBe(6)
    expect(wordsNeeded(5)).toBe(3)
  })

  it('asks for nearly whole words on catch-up cues', () => {
    expect(wordsNeededNearlyWhole(10)).toBe(9)
    expect(wordsNeededNearlyWhole(3)).toBe(3)
  })
})

describe('fuzzy word match + one slip', () => {
  it('matches mangled words by edit distance', () => {
    expect(wordsMatch('listens', 'listenz')).toBe(true)
    expect(wordsMatch('torvalds', 'torvalds')).toBe(true)
  })

  it('allows one slip in the phrase', () => {
    const cue = tokenize('sixty percent is enough for a long line')
    // drop "is", garble "percent" → "persent"
    const heard = tokenize('sixty persent enough for a long line')
    expect(alignedMatchCount(cue, heard, 1)).toBeGreaterThanOrEqual(wordsNeeded(cue.length))
  })
})

describe('parseCueFromNotes + deck extraction', () => {
  it('reads cue: lines and treats none as null', () => {
    expect(parseCueFromNotes('cue: hello world\nmore notes')).toBe('hello world')
    expect(parseCueFromNotes('cue: none\n')).toBe(null)
    expect(parseCueFromNotes('no cue here')).toBe(null)
  })

  it('extracts one cue per slide from slides.md', () => {
    const cues = extractCuesFromDeckMarkdown(slidesMd)
    expect(cues).toEqual(SAMPLE_CUES)
  })
})

describe('CueMatcher scripted transcript', () => {
  function create() {
    return new CueMatcher(SAMPLE_CUES)
  }

  it('never advances on an uncued slide, even with filler and later cues', () => {
    const m = create()
    m.setSlideIndex(2) // uncued
    const r1 = m.feed('um you know sixty percent is enough for a long line and more filler')
    expect(r1.advanceTo).toBeNull()
    expect(m.slideIndex).toBe(2)

    const r2 = m.ingest({
      interimText: 'missed a cue and still caught up',
    })
    expect(r2.advanceTo).toBeNull()
    expect(m.slideIndex).toBe(2)
  })

  it('advances on interim results before the phrase is final', () => {
    const m = create()
    m.setSlideIndex(0)
    // Long cue (5 words) needs 3. Feed as growing interim.
    let r = m.ingest({ interimText: 'welcome to' })
    expect(r.advanceTo).toBeNull()

    r = m.ingest({ interimText: 'welcome to voice cued' })
    expect(r.advanceTo).toBe(1)
    expect(m.slideIndex).toBe(1)
  })

  it('does not double-fire when interim is corrected and finalized', () => {
    const m = create()
    m.setSlideIndex(0)
    m.ingest({ interimText: 'welcome to voice cued slides' })
    expect(m.slideIndex).toBe(1)

    const again = m.ingest({
      finalText: 'welcome to voice cued slides',
      interimText: '',
    })
    expect(again.advanceTo).toBeNull()
    expect(m.slideIndex).toBe(1)
  })

  it('allows one slip and still advances the current cue', () => {
    const m = create()
    m.setSlideIndex(3)
    // "percent" → "persent", drop "a"
    const r = m.feed('sixty persent is enough for long line')
    expect(r.advanceTo).toBe(4)
    expect(m.slideIndex).toBe(4)
  })

  it('catches up via the next cue when the current one is skipped', () => {
    const m = create()
    m.setSlideIndex(3)
    // Skip "sixty percent…" and say the next cue nearly whole.
    const r = m.feed('missed a cue and still caught up')
    expect(r.advanceTo).toBe(5)
    expect(m.slideIndex).toBe(5)
  })

  it('never runs ahead of the speaker through filler speech', () => {
    const m = create()
    m.setSlideIndex(0)

    const script = [
      // filler before anything useful
      { text: 'um okay so yeah you know', expectSlide: 0 },
      // partial current cue (not enough yet for 5-word cue needing 3)
      { text: 'welcome', expectSlide: 0 },
      // enough of slide 0 cue
      { text: 'to voice cued', expectSlide: 1 },
      // filler that mentions later words without the catch-up phrase nearly whole
      { text: 'anyway hang on let me sip some water sorry about that', expectSlide: 1 },
      // slide 1 cue (~60% of 6 words = 4)
      { text: 'the deck listens while', expectSlide: 2 },
      // now on uncued slide 2: saying the next cue must NOT advance
      { text: 'sixty percent is enough for a long line', expectSlide: 2 },
    ]

    for (const step of script) {
      m.feed(step.text)
      expect(m.slideIndex, `after “${step.text}”`).toBe(step.expectSlide)
    }

    // Manual clicker leaves the uncued slide and realigns.
    m.setSlideIndex(3)
    expect(m.slideIndex).toBe(3)
    expect(m.unmatchedTokens()).toEqual([])

    m.feed('sixty percent is enough for a long line')
    expect(m.slideIndex).toBe(4)
  })

  it('manual navigation clears hearing so voice cannot fight the clicker', () => {
    const m = create()
    m.setSlideIndex(0)
    // Two words only: 5-word cue needs 3, so stay put.
    m.feed('welcome to')
    expect(m.slideIndex).toBe(0)
    // User jumps ahead with the clicker.
    m.setSlideIndex(4)
    expect(m.unmatchedTokens()).toEqual([])
    // Stale words from an earlier slide must not advance from the new position.
    const r = m.feed('welcome to voice cued slides')
    expect(r.advanceTo).toBeNull()
    expect(m.slideIndex).toBe(4)
  })

  it('only moves forward', () => {
    const m = create()
    m.setSlideIndex(4)
    m.feed('welcome to voice cued slides')
    expect(m.slideIndex).toBe(4)
    m.feed('missed a cue and still caught up')
    // Already past slide 4's leave? slide 4 cue advances to 5
    expect(m.slideIndex).toBe(5)
    m.feed('sixty percent is enough for a long line')
    expect(m.slideIndex).toBe(5)
  })
})

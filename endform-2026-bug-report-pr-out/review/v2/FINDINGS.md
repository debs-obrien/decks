# Endform v2 live review findings (1280×720)

Captured **23** slides via Slidev at 1280×720 into `review/v2/`.

## Verdict

**Pass** after zoom/callout fixes on cold open, before/after, and page=0 alt. No clipped text, no Zurich leftovers on slides, no Zephyr bio, no em dashes, no PENDING placeholders. `pnpm build` green. Zurich folder zero diffs.

## Must-fix applied during review

- Cold open: locator on top; Superman crop (was showing F1); hear vs expect cards readable
- Before/after: tighter Superman zoom + callout on accessible name
- Alt page=0: crop to highlighted Page 0 control

## Checklist

| Gate | Result |
|------|--------|
| Cover title Zurich wording | Pass |
| Bio Independent Developer Educator (no Zephyr) | Pass |
| No ZurichJS venue chrome / Close menu / #621-623 | Pass |
| No em dashes | Pass |
| No talk clock times on slides | Pass |
| No PR/issue wall on thanks | Pass |
| After caption local PR #93 | Pass |
| Demo notes include run-sheet path | Pass |
| Subtle v2 footer | Pass |
| Diagram / text fit at 1280×720 | Pass |
| `pnpm build` | Pass |
| Zurich folder untouched | Pass |

## Slide map (v2)

| # | Beat |
|---|------|
| 01 | Cover |
| 02 | About |
| 03 | Cold open · failing locator |
| 04 | Before / after accessible name |
| 05 | Loop |
| 06 | Two skills |
| 07-09 | Honesty 1-3 |
| 10 | Gates |
| 11-20 | Hunt → merge receipts |
| 21 | Takeaways |
| 22 | Alt page=0 (skippable) |
| 23 | Thanks |

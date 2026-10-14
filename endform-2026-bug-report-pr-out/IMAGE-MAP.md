# Endform movies deck · image map

Primary story: `movie-link-accessible-name` on https://debs-obrien.github.io/playwright-movies-app/

Deck version: **v2**

| Slide | Beat | Asset | Status |
|-------|------|-------|--------|
| Cover | Endform · online | (text) | Ready |
| 01 | About | `debbie.png` | Ready |
| 02 | Cold open · failing locator | `before-movie-link-a11y-desktop.png` (CSS zoom) | **Wired** |
| 02b | Before / after accessible name | (text from #92) | Ready |
| 03 | Loop diagram | (text) | Ready |
| 04 | Two skills | (text) | Ready |
| 05 | Honesty 1 · reproduce first | (text) | Ready |
| 05b | Honesty 2 · regression with fix | (text) | Ready |
| 05c | Honesty 3 · stop at merge | (text) | Ready |
| 06 | Gates / candidate | (text) | Ready |
| 07 | Hunt / production home | `hunt-desktop-home.png` | **Wired** |
| 08 | Candidate honesty md | `candidate-movie-link-accessible-name.png` | **Wired** |
| 09 | Issue #92 | `03-issue-92.png` | **Wired** |
| 10 | Before (aria pollution) | `before-movie-link-a11y-desktop.png` + callout | **Wired** |
| 11 | Reproduce CLI / aria | (on-slide CLI text) | **Wired** · `evidence/05-repro-cli-output.txt` |
| 12 | Fix PR #93 draft | `06-pr-93-card.png` | **Wired** |
| 13 | After fixed UI | `07-after-title-only-name.png` + callout | **Wired** · **local PR #93 preview**, not live GH Pages |
| 14 | Diff MovieListItem | `08-diff-MovieListItem.png` + callout | **Wired** · `aria-label={movie.title}` |
| 15 | Regression test | `09-regression-spec.png` + green callout | **Wired** · green log `evidence/09-test-green.log` |
| 16 | Human merge gate | `10-draft-checks-gate.png` + stop callout | **Wired** |
| 17 | Takeaways | (text) | Ready |
| 17b | Also in the hunt · Alt find `?page=0` | `04-ui-page0-prev-control-forced-visible.png` | **Wired** · skippable |
| 18 | Thanks | (text) | Ready |

## Evidence bag (repo)

- `evidence/movie-link-accessible-name.md`
- `evidence/05-repro-cli-output.txt`
- `evidence/07-after-cli-output.txt` (local exact → 1)
- `evidence/aria-snapshot-superman.txt`
- `evidence/09-test-green.log`
- `evidence/LOOP-URLS.md`
- `evidence/STAGE-MAP.md`
- `evidence/page-0-blank-hang.md` (deferred alt candidate)

## Notes

- After shot is **local** PR #93 worktree proof. Live production still shows the before until Debbie merges #93.
- Reused existing QA bag images. No invented receipts.
- Do not use debbie.codes receipts (#621/#622/#623) or seed workshop bugs #90/#91 as primary.
- Do not merge movies #93 or decks #15 from this agent.

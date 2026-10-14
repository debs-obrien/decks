# Stage screenshot map (Endform movies talk)

Prefer 16:9 (1280×720), one clear subject.

**Primary story:** `movie-link-accessible-name` (live find  -  not seed #90/#91 hamburger/poster/drawer).  
**Skills PR:** https://github.com/debs-obrien/playwright-movies-app/pull/89 (`site-bug-hunt` + `site-bugfix`)  -  slot 1  
**Issue:** https://github.com/debs-obrien/playwright-movies-app/issues/92  
**Fix PR (draft):** https://github.com/debs-obrien/playwright-movies-app/pull/93  
**Candidate receipt:** `qa-bug-candidates/movie-link-accessible-name.md`

| # | Stage beat | Status | Path / note |
|---|------------|--------|-------------|
| 1 | Hunt  -  skill/PR/run | **Ready** | PR #89; skill `.agents/skills/site-bug-hunt`; `stage/01-hunt-receipt.md`; home context `hunt/talk/11-desktop-home.png` |
| 2 | Candidate/honesty | **Ready** | Candidate: `classification=bug`, `confidence=high`, `severity=major`, `area=a11y`. Overlay: `hunt/talk/01-a11y-movie-link-name-and-css.png` |
| 3 | Issue  -  filed GitHub | **Ready** | `stage/03-issue-92.png`  -  Issue #92 open, labels accessibility/agent-hunt/bug |
| 4 | Before  -  broken UI | **Ready** | `hunt/talk/01-…`, `02-…` (mobile) |
| 5 | Repro proof  -  PW CLI / aria | **Ready** | `stage/05-repro-cli-output.txt` (`exact → 0`, name `poster of Superman Superman rating`); also `aria-snapshot-superman.txt` |
| 6 | Fix PR card | **Ready** | `stage/06-pr-93-card.png`  -  Draft badge, title, linked #92 (conversation header). Alt: `06-fix-pr-93.png` |
| 7 | After  -  fixed UI | **Ready** | `stage/07-after-title-only-name.png`  -  **local** PR-93 worktree (`/tmp/movies-pr93`), not GH Pages. Overlay: `exact → 1`, `accessible name: Superman`. CLI: `stage/07-after-cli-output.txt` |
| 8 | Diff  -  one focused file | **Ready** | `stage/08-diff-MovieListItem.png`  -  `aria-label={movie.title}` on `PosterLink` in `MovieListItem/index.js` |
| 9 | Regression test file | **Ready** | `stage/09-regression-spec.png`  -  blob on fix branch. Green run: `stage/09-test-green.log` (1 passed, 1.8s). Alt: `09-regression-test.png` |
| 10 | Human merge gate | **Ready** | `stage/10-draft-checks-gate.png`  -  Draft + Checks tab (CodeQL / Playwright Tests). WIP merge-box alt: `10b-draft-wip-merge-box.png` |

## After (slot 7) method used
1. `git fetch origin pull/93/head:pr-93` + `git worktree add /tmp/movies-pr93 pr-93` (main clone left dirty with skills WIP)
2. `npm install`, `.env` from example, `npm run dev` (:3000 app + :4000 mock)
3. Playwright-core Chromium headless: Popular page screenshot + overlay; CLI exact Superman count === **1**
4. `npx playwright test tests/logged-out/movie-link-accessible-name.spec.ts --project=chromium` → **1 passed**
5. Dev servers stopped

## Live / repo
- Live (still **before** until merge): https://debs-obrien.github.io/playwright-movies-app/
- Repo: debs-obrien/playwright-movies-app
- Bag: `/tmp/endform-movies-talk/`
- Seed fallback only: #90 / #91 (do not merge; not primary story)

## Do not
- Merge PR #93
- Mark ready for review
- Comment on GitHub

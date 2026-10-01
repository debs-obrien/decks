# Bug Report In, Pull Request Out: Agentic CI with Playwright

Slidev deck for **Endform** (online mini). Working title still TBD with Debbie.

> Agents can hunt bugs and open PRs overnight, but only if you force honesty. I'll walk a real loop: a Playwright-backed hunt skill finds a production bug, then a fix skill reproduces the broken state before touching code, ships a PR with a regression test, and stops at human merge. Playwright is the eyes and the contract that keeps the agent honest.

Demo target: [Playwright Movies App](https://debs-obrien.github.io/playwright-movies-app/) (not debbie.codes).

## Run locally

```bash
cd endform-2026-bug-report-pr-out
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Speaker

Debbie O'Brien · Independent Developer Educator

- https://debbie.codes
- https://github.com/debs-obrien

## Demo receipts (movies)

- Skills PR: https://github.com/debs-obrien/playwright-movies-app/pull/89
- Issue: https://github.com/debs-obrien/playwright-movies-app/issues/92
- Fix PR (draft): https://github.com/debs-obrien/playwright-movies-app/pull/93
- Regression: `tests/logged-out/movie-link-accessible-name.spec.ts`
- Diff focus: `movies-app/components/MovieList/MovieListItem/index.js`
- Blog: https://debbie.codes/blog/an-agent-that-hunts-bugs-while-i-sleep

## Image map

See `IMAGE-MAP.md`. All 10 stage receipt slots are wired. After shot is **local PR #93** proof (live GH Pages still before until merge).

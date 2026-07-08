# Agentic Testing with Playwright

Keynote for the Agentic Testing workshop.

**How I built a Playwright E2E specialist and testing skills that write tests,
hunt bugs, and open PRs — and an honest account of what works and what doesn't.**

Three layers, all Playwright:

1. **Author** — the `playwright-e2e` specialist writes/refactors/debugs tests.
2. **Find** — the Live-CDP bug-hunt skill drives the real app and files classified issues.
3. **Fix** — the issue-CDP-bugfix skill reproduces, fixes, and opens a reviewable PR.

Then the honest half: where each layer breaks (CLI attach, the webview/native
wall, silent-failure hallucinations, live ≠ CI, macOS-only live runs).

## Run

```bash
pnpm install   # first time only
pnpm dev       # http://localhost:3030
```

## Export

```bash
pnpm export        # PDF (needs playwright-chromium)
pnpm build         # static SPA in dist/
```

## Notes

- Real artifacts: before/after CDP screenshots are the genuine images from PR #5540.
- Real references: issues #5369 → #5539 → #5540 are a real self-referential fix loop.
- Design reuses the shared deck system (`style.css`, eloc theme).
- Presenter notes are in each slide (HTML comments). Press `P` for presenter mode.

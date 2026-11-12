---
fingerprint: prod|/|movie-link-accessible-name
url: https://debs-obrien.github.io/playwright-movies-app/?category=Popular&page=1
target: production
severity: major
confidence: high
classification: bug
area: a11y
fix_surface: app
---

# Movie card links expose redundant accessible names

## Repro

1. Open https://debs-obrien.github.io/playwright-movies-app/?category=Popular&page=1
2. In Playwright: `page.getByRole('link', { name: 'Superman', exact: true })` → count **0**
3. `page.getByRole('link', { name: /Superman/ })` → count **1**; accessible name is `poster of Superman Superman rating`
4. Optional: on a half-star card, inspect the `<a>` `textContent`  -  includes injected `.react-stars-…` `<style>` CSS

## Expected

Accessible name is the movie title only (e.g. `Superman`), so exact `getByRole('link', { name: 'Superman' })` works.

## Actual

Listing card links concatenate poster alt + title (+ ` rating`). Half-star cards also pollute DOM `textContent` with CSS from a `<style>` inside the `<a>` (browser accessible-name computation strips `<style>`, but the markup is still dirty).

## Evidence

- Viewport: 1280×800 and 390×844
- Notes: aria snapshot excerpt  -  `- link "poster of Superman Superman rating"`; talk bag shots `/tmp/endform-movies-talk/hunt/talk/01-a11y-movie-link-name-and-css.png`, `02-a11y-mobile-movie-link-name.png`; full excerpt `aria-snapshot-superman.txt`
- Skill: `.agents/skills/site-bug-hunt` via PR https://github.com/debs-obrien/playwright-movies-app/pull/89
- Hunt run: production, interactive (candidates only  -  no `gh issue create`)

## Suggested next step

- [x] Fix via site-bugfix (engineer cloud agent queued from main)
- [ ] Needs human
- [ ] Defer

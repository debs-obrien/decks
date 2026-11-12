---
fingerprint: prod|/|page-0-blank-hang
url: https://debs-obrien.github.io/playwright-movies-app/?category=Popular&page=0
target: production
severity: major
confidence: high
classification: bug
area: home
fix_surface: app
---

# `?page=0` blank hang (stuck "Please wait a moment. Movies")

## Repro

1. Open `/?category=Popular&page=0` on production (basePath `/playwright-movies-app`)
2. Wait 3s+; observe `document.title` and main movie list

## Expected

Clamp/redirect invalid page to `page=1`, or show a recoverable empty/error state.

## Actual

Title stays "Please wait a moment. Movies"; main stays empty (0 movie links). Page-1 prev control is a `visibility:hidden` link to `?page=0` labeled "Page 0".

## Evidence

- Viewport: desktop + mobile
- Shots: `/tmp/endform-movies-talk/hunt/talk/03-ui-page0-blank-hang.png`, `04-ui-page0-prev-control-forced-visible.png`
- Not primary Endform talk story (primary = movie-link-accessible-name)

## Suggested next step

- [ ] Fix via site-bugfix
- [ ] Needs human
- [x] Defer (secondary to a11y link-name story)

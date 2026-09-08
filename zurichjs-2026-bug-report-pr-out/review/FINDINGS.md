# Visual QA findings (1280×720 live Slidev)

Captured from `pnpm exec slidev` studio + Playwright screenshots in this folder.

## Pass

- No text overflow / cut-off at slide edges (automated + visual review of all 19).
- Titles readable; diagram slides clear.
- Bio: **Independent Developer Educator** on about + thanks; **no Zephyr**.
- Cover elements centered (badge / icons / title at cx=640).
- Image slides use full-bleed GH/phone shots with short badges; GH shots ~895×560 (auditorium-readable for key rows).

## Soft notes (acceptable for lightning; not blockers)

1. **GitHub UI screenshots** (08–10, 13, 15–16): secondary chrome (sidebar, checks) is dense — key PR/issue titles + candidate table / diff remain the readable signal.
2. **Honesty flow nodes** (06): bumped label size after review for projector distance.
3. **Phone before/after** (11, 14): intentionally narrow (~260×560); annotations carry the story.

## Fixes applied this pass

- Bio already Independent Developer Educator (confirmed).
- Image `src` → `/images/...` (Slidev public URL).
- Cover flex-centered; honesty flow type enlarged; about photo circle CSS reinforced.
- Added this `review/` screenshot pack for Debbie.

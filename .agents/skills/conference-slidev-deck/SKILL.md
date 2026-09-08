---
name: conference-slidev-deck
description: Build and ship conference Slidev decks in the debs-obrien/decks repo. Match DevSum/workshop patterns, one screenshot per slide, diagrams, speaker notes, privacy home-only, Independent Developer Educator bio (never Zephyr). Mandatory pnpm build + 1280×720 live visual review before sign-off.
---

# Conference Slidev deck (decks repo)

Use this skill when creating or revising a talk deck under https://github.com/debs-obrien/decks.

## Defaults (always)

| Setting | Value |
|---------|--------|
| Theme | `eloc` |
| Color | dark (`colorSchema: dark`) |
| Aspect | `16/9` |
| Canvas | `canvasWidth: 1280` |
| Layout class | `devsum-slide` |
| Pattern | Copy `package.json`, `style.css`, `uno.config.ts`, `global-bottom.vue` from `devsum-2026-agentic-developer-mcps/` (or `workshop-agentic-testing-playwright/`) |

Folder naming: `<event-slug>-<talk-slug>/` (e.g. `infobip-shift-2026-agentic-developer/`).

## Bio & branding

- Bio title for conference decks: **Independent Developer Educator** (debbie.codes)
- **Never** use Zephyr Cloud / Platform Engineer bio on these decks unless Debbie explicitly asks
- Speaker photo: reuse `public/images/debbie.png` from an existing deck when available
- Closing QR should point at the deck folder on GitHub when possible

## Privacy (hard rules)

- Never show street address, postcode, phone, or email on slides or in speaker notes meant for the room
- Say **“home”** only for shipping / delivery
- Prefer totals and facts in text over PII screenshots
- Strip or crop any capture that leaks credentials or personal contact fields

## Structure

1. Cover (event badge, title, timing)
2. Intro (name + Independent Developer Educator)
3. Hook → arcs for the talk
4. **Diagrams** where they teach faster than bullets (then/now, org chart, timeline comic, loops)
5. **One full slide per screenshot** — never collage multiple Desktop captures on one slide
6. Takeaways (3) + thanks with links/QR

Aim ~20–28 slides for a 30-minute talk (visual-heavy). Include speaker notes with timing.

## Screenshots

- Put images in `public/images/` with clear kebab-case names
- Keep an `IMAGE-MAP.md` (attachment → deck filename → role) when captures are supplied
- If binaries fail to land in the VM, commit labeled placeholders and document re-attach + sync script — do not invent fake “real” Desktop UI

## Shopping / checkout arcs (when relevant)

One-liner for PayPal → skill sections:

> **Buy once, hand off PayPal, save the skill.**

Codify reusable flows as skills (e.g. `decathlon-checkout`); agent never sees PayPal credentials.

## Build gate (required)

From the deck folder:

```bash
pnpm install
pnpm build
```

Build must succeed before you claim the deck is done.

## Mandatory live review gate (required before sign-off)

Do **not** sign off on “looks good” from markdown alone.

1. `pnpm dev` (or export PNG/PDF via Slidev) so slides render at **1280×720**
2. Visually review **every** slide at canvas size — check overflow, cut-off text, image framing, contrast
3. Fix layout issues, then rebuild
4. Only then push / update the PR and report slide count + image map

If you cannot run a live preview in the environment, say so explicitly in the PR and still `pnpm build`; request a human glance at 1280×720 before merge.

## PR checklist

- [ ] Theme/layout match DevSum pattern
- [ ] Bio is Independent Developer Educator (no Zephyr unless asked)
- [ ] Privacy: home-only; no address/phone/email
- [ ] Each screenshot has its own slide
- [ ] Diagrams present where promised
- [ ] Speaker notes with timing
- [ ] `pnpm build` green
- [ ] Live 1280×720 review done (or explicitly blocked + called out)
- [ ] PR opened/updated on the working branch; report URL, slide count, image map

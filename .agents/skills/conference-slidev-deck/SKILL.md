---
name: conference-slidev-deck
description: Build and ship conference Slidev decks in debs-obrien/decks. Match DevSum/workshop; one screenshot per slide; diagrams; starting_ref main; mandatory live 1280×720 review before sign-off; no stale Zephyr bio; privacy home-only; no finals upload without Debbie yes via CoS.
---

# Conference Slidev deck (decks repo)

Use this skill when creating or revising a talk deck under https://github.com/debs-obrien/decks.

## Git / branch

- `starting_ref`: **main** — branch from latest `main` unless Debbie says otherwise
- Feature branch prefix: `cursor/<descriptive-name>-…`
- Open or update the PR on that branch; do not force-push `main`

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

- Bio title: **Independent Developer Educator** · debbie.codes
- **No stale Zephyr bio** — never use Zephyr Cloud / Platform Engineer on conference decks unless Debbie explicitly asks
- Speaker photo: reuse `public/images/debbie.png` from an existing deck when available

## Privacy (hard rules)

- Never show street address, postcode, phone, or email on slides
- Say **“home”** only for shipping / delivery
- Prefer totals in text over PII screenshots

## Structure

1. Cover → intro → hook → talk arcs
2. **Diagrams** where they teach faster than bullets
3. **One full slide per screenshot** — never collage Desktop captures
4. Takeaways (3) + thanks / QR

Aim ~20–28 slides for a 30-minute talk. Include speaker notes with timing.

## Screenshots

- Store under `public/images/` with clear kebab-case names
- Keep `IMAGE-MAP.md` when attachments are supplied
- Placeholders only if binaries fail to land — document re-attach; do not invent fake Desktop UI

## Shopping / PayPal arcs (when relevant)

Punch line:

> **Buy once, hand off PayPal, save the skill.**

Agent never sees PayPal credentials; hand off at the wall.

## Build gate (required)

```bash
pnpm install
pnpm build
```

Build must succeed before you claim the deck is done.

## Mandatory live review gate (required before sign-off)

Do **not** sign off from markdown alone.

1. Render slides at **1280×720** (`pnpm dev` and/or export)
2. Visually review **every** slide — overflow, cut-off text, image framing, contrast
3. Fix → rebuild
4. Only then push / update the PR; report URL, slide count, image map

If live preview is impossible in the environment, say so in the PR and still `pnpm build`.

## Finals / speaker uploads (hard gate)

- **No finals upload** (Sessionize, conference portal, shared “final” PDF/PPTX, public “ready for stage” drop) **without Debbie yes via CoS**
- Draft PRs and in-progress Slidev source are fine; calling something final or uploading to the event is a CoS / Debbie decision

## PR checklist

- [ ] Branched from `main` (`starting_ref: main`)
- [ ] Theme/layout match DevSum/workshop
- [ ] Bio is Independent Developer Educator (no Zephyr unless asked)
- [ ] Privacy: home-only; no address/phone/email
- [ ] Each screenshot has its own slide + diagrams where promised
- [ ] Speaker notes with timing
- [ ] `pnpm build` green
- [ ] Live 1280×720 review done (or explicitly blocked + called out)
- [ ] No finals upload without Debbie yes via CoS
- [ ] PR URL + slide count + image map reported

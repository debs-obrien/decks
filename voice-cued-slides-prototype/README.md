# Voice-cued slides prototype

A short Slidev sample deck that listens for cue phrases in speaker notes and advances when you say them. Inspired by [Dave Kiss, "My slides called their own cues"](https://davekiss.com/blog/the-slides-that-listened/).

This folder is standalone. It does not change other decks in the repo.

## Cue convention

In each slide's speaker notes (HTML comment), add a `cue:` line:

```md
<!--
cue: the deck listens while you talk

Optional presenter notes under the cue line.
-->
```

- One notes block per slide, with one `cue:` line.
- `cue: none` (or `-` / `n/a`) means the slide never auto-advances. Use the clicker.
- The matcher is forward-only. Long cues fire at about 60% of their words. One slip is allowed, with fuzzy word matching. It also listens for the next two cues so a missed line can catch up.
- Keyboard / clicker always wins: manual navigation clears what was heard and realigns the matcher.

## Run locally (Chrome)

```bash
cd voice-cued-slides-prototype
pnpm install
pnpm dev
```

1. Open the URL Slidev prints (usually `http://localhost:3030`) in **Chrome**.
2. Press **V** (or click the Voice control, bottom-left) and allow the microphone.
3. Read each slide's cue out loud. Slides marked `cue: none` will not move until you press →.
4. Press **V** again to turn listening off during live demos.

### Tests and build

```bash
pnpm test
pnpm build
```

## On-device recognition (optional)

Chrome can keep audio on-device when a language pack is installed (`processLocally`). If that fails, the prototype falls back to online recognition.

In DevTools console:

```js
await SpeechRecognition.available({ langs: ['en-US'], processLocally: true })
await SpeechRecognition.install({ langs: ['en-US'], processLocally: true })
```

Reload, press **V**, and the status should read `on-device`.

## Known limitations

- **Browser support:** Web Speech API works best in Chromium (Chrome / Edge). Safari / Firefox are limited or unsupported.
- **Mic permission:** the page must be served from localhost or HTTPS; permission must be granted.
- **On-device model:** `processLocally` needs a downloaded language pack (Chrome 139+). Without it, recognition goes online (audio sent to Google).
- **Accent / noise:** fuzzy matching helps, but venue mics and heavy accents still miss cues. Keep the clicker in hand.
- **Not a shared stage manager:** this is a prototype for one laptop / one Chrome window, not multi-machine sync.

## Layout

| Path | Role |
|------|------|
| `lib/cue-matcher.js` | Pure matcher (framework-free, tested) |
| `lib/speech.js` | Web Speech API wrapper |
| `lib/parse-deck-cues.js` | Reads `cue:` lines from `slides.md` |
| `components/VoiceCueControls.vue` | Toggle, shortcut, listening indicator |
| `tests/cue-matcher.test.js` | Scripted transcript coverage |

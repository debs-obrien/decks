# slidev-theme-debbie

Local Slidev theme for Debbie O'Brien decks. **Direction A: Big words, real proof**, with a light Direction B touch (`RedMark` hand-drawn circles).

## Brand (from debbie.codes)

| Token | Value |
|-------|-------|
| Red | `#d8002d` |
| Navy | `#091a28` |
| Paper | `#f3f5f4` |
| Slate | `#243746` |
| Sans | Roboto |
| Mono | Menlo |

No violet, no gradients, no glow, no Inter, no emoji icon kit, no `task-card` / pill classes.

## Layouts

- `cover` — talk title, red surname footer bar
- `statement` — one huge sentence (optional `tone: paper`)
- `shot` — full-bleed screenshot (`image`, `focus`, `zoom`, `caption`)
- `before-after` — split slots `#before` / `#after`
- `photo` — headshot + copy (or `placeholder` frame)
- `default` — plain navy stack for short lists

## Components

- `RedMark` — SVG circle or underline over a shot (`x` `y` `w` `h` as %)

## Use

```md
---
theme: ../theme-debbie
---
```

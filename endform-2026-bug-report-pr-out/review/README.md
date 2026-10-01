# Endform deck visual QA (1280×720)

Live Slidev review on branch `cursor/endform-bug-report-copy-d1ed`.

## Capture

```bash
pnpm install
pnpm exec slidev slides.md --port 3030
# then Playwright walk at 1280×720 → review/slide-01.png … slide-19.png
```

## Checklist

| Gate | Result |
|------|--------|
| Cover badge Endform · online | Pass |
| Bio Independent Developer Educator (no Zephyr) | Pass |
| No ZurichJS venue chrome on slides | Pass |
| No em dashes on slides | Pass |
| No talk clock times on slides | Pass |
| No PR/issue number wall on thanks | Pass |
| Movies story (not Close menu / #621–623) | Pass |
| Correct assets (before/after-local/repro) | Pass |
| After caption local PR #93 (not live GH Pages) | Pass |
| Diagram labels fit | Pass |
| No clipped / overflow at 1280×720 | Pass |
| `pnpm build` | Pass |
| Zurich folder untouched | Pass (zero diffs) |

## Must-fix vs polish

- **Must-fix:** none found in this pass.
- **Polish applied:** regenerated `candidate-movie-link-accessible-name.png` with multi-line frontmatter for readability (slide 09).

## Minimum captures required

- Cover: `slide-01.png`
- Diagram (loop): `slide-04.png`
- Before: `slide-11.png`
- After-local: `slide-14.png`
- Repro: `slide-12.png`
- Takeaways: `slide-18.png`

All 19 slides captured as `slide-01.png` … `slide-19.png`.

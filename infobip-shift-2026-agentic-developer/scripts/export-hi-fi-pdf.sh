#!/usr/bin/env bash
# High-fidelity PDF: Slidev PNG export (scale 2) → stitch to 1280×720 pages.
# Prefer this over bare `slidev export --format pdf` (Chromium print → Type 3 fonts, 960×540).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

mkdir -p export/png
pnpm exec slidev export slides.md \
  --format png \
  --output export/png \
  --timeout 120000 \
  --wait 1000 \
  --wait-until networkidle \
  --dark \
  --scale 2 \
  --per-slide

python3 - <<'PY'
from pathlib import Path
import img2pdf

root = Path('.')
files = sorted((root / 'export' / 'png').glob('*.png'), key=lambda p: int(p.stem))
if not files:
    raise SystemExit('no PNGs in export/png')

layout_fun = img2pdf.get_layout_fun(
    pagesize=(1280, 720),
    fit=img2pdf.FitMode.fill,
)

out = root / 'export' / 'infobip-shift-2026-agentic-developer.pdf'
out.write_bytes(img2pdf.convert([str(p) for p in files], layout_fun=layout_fun))

repo = root.parent / 'exports' / 'infobip-shift-2026-agentic-developer.pdf'
repo.parent.mkdir(parents=True, exist_ok=True)
repo.write_bytes(out.read_bytes())
print(f'wrote {out} ({len(files)} pages, 1280×720)')
print(f'wrote {repo}')
PY

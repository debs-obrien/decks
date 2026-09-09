#!/usr/bin/env bash
# Copy attached Desktop captures into public/images with deck filenames.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${1:-/workspace/infobip-assets}"
DST="$ROOT/public/images"

mkdir -p "$DST"

copy() {
  local from="$1" to="$2"
  if [[ -f "$SRC/$from" ]]; then
    cp -f "$SRC/$from" "$DST/$to"
    echo "✓ $from → $to"
  else
    echo "✗ missing: $SRC/$from"
  fi
}

copy "20.08.28-bot-sidebar.png" "bot-village-sidebar.png"
copy "20.18.10-turneo-slots.png" "turneo-slots-browser.png"
copy "20.18.16-turneo.png" "stage-travel-live-screen.png"
copy "20.23.07-slot-picker.png" "chat-slot-picker.png"
copy "20.23.13.png" "chat-booking-selection.png"
copy "20.24.44.png" "booking-routine-created.png"
copy "20.26.35.png" "debbie-codes-channel.png"
copy "20.26.45.png" "travel-agent-slot-findings.png"

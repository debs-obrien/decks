# Screenshot map

Attached Desktop captures → `public/images/` filenames used by the deck.

| # | Source attachment | Deck filename | Slide role |
|---|-------------------|---------------|------------|
| 1 | `20.08.28-bot-sidebar.png` | `bot-village-sidebar.png` | Bot village / personal specialists (incl. Decathlon skill note) |
| 2 | `20.18.10-turneo-slots.png` | `turneo-slots-browser.png` | Turneo Baby Goldfish slot UI (browser + cookie friction) |
| 3 | `20.18.16-turneo.png` | `stage-travel-live-screen.png` | stage ↔ travel handoff with live Turneo screen |
| 4 | `20.23.07-slot-picker.png` | `chat-slot-picker.png` | Chat slot picker widget (A-F options) |
| 5 | `20.23.13.png` | `chat-booking-selection.png` | Booking intent · Sun 13 Sep 09:30 |
| 6 | `20.24.44.png` | `booking-routine-created.png` | Checkout progress + mid-week watch routine |
| 7 | `20.26.35.png` | `debbie-codes-channel.png` | debbie.codes channel · engineer ↔ qa |
| 8 | `20.26.45.png` | `travel-agent-slot-findings.png` | travel agent bot reporting free slots |

Sync helper:

```bash
./scripts/sync-images.sh /path/to/infobip-assets
```

**Note:** Cloud Agent VM did not receive the binary attachments (paths under `/workspace/infobip-assets/` were missing). Placeholder PNGs are checked in so the deck builds. Re-attach the 8 Desktop screenshots in a follow-up and re-run the sync script.

Privacy: never show street address, postcode, phone, or email on slides. Say "home" only.

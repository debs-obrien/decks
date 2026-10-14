---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge after-badge">AFTER · local PR #93 · not live yet</div>

<div class="shot-frame">
  <div class="shot-zoom zoom-after-full">
    <img src="../public/images/07-after-title-only-name.png" alt="Local PR 93 preview with title-only Superman accessible name" />
  </div>
  <div class="shot-callout callout-good">
    <span class="callout-kicker">accessible name</span>
    <code>Superman</code>
    <span class="callout-sub mono">exact → 1</span>
  </div>
</div>

</div>

<style>
.image-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 0;
  height: 100%;
}
.shot-badge {
  display: inline-flex;
  font-size: 16px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
}
.after-badge {
  color: #bbf7d0;
  background: rgba(34, 197, 94, 0.14);
  border: 1px solid rgba(34, 197, 94, 0.4);
}
.shot-frame {
  position: relative;
  width: 100%;
  max-width: 1120px;
}
.shot-zoom {
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--code-border);
  box-shadow: 0 24px 70px rgba(0,0,0,.45);
  background: #0b1020;
}
.shot-zoom img {
  position: absolute;
  max-width: none;
  max-height: none;
}
.zoom-after-full img {
  width: 145%;
  left: -28%;
  top: -6%;
}
.shot-callout {
  position: absolute;
  left: 18px;
  bottom: 18px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(8, 10, 18, 0.92);
  border: 1px solid rgba(34, 197, 94, 0.55);
  box-shadow: 0 12px 30px rgba(0,0,0,.45);
}
.callout-kicker {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #86efac;
  margin-bottom: 4px;
}
.shot-callout code {
  font-size: 24px;
  font-weight: 800;
  color: #bbf7d0;
  background: transparent;
  padding: 0;
}
.callout-sub {
  display: block;
  margin-top: 4px;
  font-size: 16px;
  color: #86efac;
}
</style>

<!--
PRESENTER NOTES: AFTER (~25s)
- LOCAL PR #93 worktree proof. Say that twice if needed.
- Live GH Pages is still the before until Debbie merges #93.
DEMO: show local after here if you pulled #93. Else this slide is the proof.
-->

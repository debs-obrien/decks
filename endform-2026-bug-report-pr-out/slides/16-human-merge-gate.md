---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">honesty 3 · Draft + Checks · you still merge</div>

<div class="shot-frame">
  <div class="shot-zoom zoom-gate">
    <img src="../public/images/10-draft-checks-gate.png" alt="Draft pull request 93 Checks tab before human merge" />
  </div>
  <div class="shot-callout callout-gate">
    <span class="callout-kicker">stop rule</span>
    <code>Agent opens. Human merges.</code>
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
  color: #fda4af;
  background: rgba(244, 63, 94, 0.12);
  border: 1px solid rgba(244, 63, 94, 0.35);
  padding: 6px 14px;
  border-radius: 999px;
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
.zoom-gate img {
  width: 130%;
  left: -8%;
  top: -5%;
}
.shot-callout {
  position: absolute;
  left: 18px;
  bottom: 18px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(8, 10, 18, 0.94);
  border: 1px solid rgba(251, 113, 133, 0.55);
  box-shadow: 0 12px 30px rgba(0,0,0,.45);
}
.callout-kicker {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fda4af;
  margin-bottom: 4px;
}
.shot-callout code {
  font-size: 20px;
  font-weight: 800;
  color: #fecdd3;
  background: transparent;
  padding: 0;
}
</style>

<!--
PRESENTER NOTES: HUMAN MERGE (~20s)
- Draft on purpose. Agent prepared the PR. Debbie merges or does not.
- Close on the stop rule from the run sheet.
-->

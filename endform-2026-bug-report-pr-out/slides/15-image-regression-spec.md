---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">honesty 2 · regression with the fix</div>

<div class="shot-frame">
  <div class="shot-zoom zoom-spec">
    <img src="../public/images/09-regression-spec.png" alt="Regression test asserting title-only accessible names" />
  </div>
  <div class="shot-callout callout-spec">
    <span class="callout-kicker">green locally</span>
    <code>1 passed (1.8s)</code>
    <span class="callout-sub mono">toHaveAccessibleName(title)</span>
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
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.14);
  border: 1px solid rgba(59, 130, 246, 0.35);
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
.zoom-spec img {
  width: 155%;
  left: -5%;
  top: -28%;
}
.shot-callout {
  position: absolute;
  right: 18px;
  bottom: 18px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(8, 10, 18, 0.94);
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
  font-size: 22px;
  font-weight: 800;
  color: #bbf7d0;
  background: transparent;
  padding: 0;
}
.callout-sub {
  display: block;
  margin-top: 4px;
  font-size: 15px;
  color: #93c5fd;
}
</style>

<!--
PRESENTER NOTES: REGRESSION (~25s)
- tests/logged-out/movie-link-accessible-name.spec.ts
- Exact title match. No poster / rating / CSS pollution.
- Green log in evidence/09-test-green.log: 1 passed.
DEMO: run it live on PR #93 if the room wifi cooperates.
-->

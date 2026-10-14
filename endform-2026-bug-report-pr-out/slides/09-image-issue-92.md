---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Issue #92 · gates passed · filed</div>
<div class="shot-zoom zoom-issue">
  <img src="../public/images/03-issue-92.png" alt="GitHub issue 92: Movie card links have polluted accessible names" />
</div>

</div>

<style>
.image-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 0;
  height: 100%;
}
.shot-badge {
  display: inline-flex;
  font-size: 16px;
  font-weight: 700;
  color: #fcd34d;
  background: rgba(245, 158, 11, 0.14);
  border: 1px solid rgba(245, 158, 11, 0.35);
  padding: 6px 14px;
  border-radius: 999px;
}
.shot-zoom {
  position: relative;
  width: 100%;
  max-width: 1120px;
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
.zoom-issue img {
  width: 128%;
  left: -6%;
  top: -2%;
}
</style>

<!--
PRESENTER NOTES: ISSUE (~15s)
- https://github.com/debs-obrien/playwright-movies-app/issues/92
- Labels: accessibility, agent-hunt, bug. Linked draft fix #93.
-->

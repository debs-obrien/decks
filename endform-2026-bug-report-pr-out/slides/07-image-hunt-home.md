---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Hunt · skills PR #89 · production target</div>
<div class="shot-zoom zoom-hunt">
  <img src="../public/images/hunt-desktop-home.png" alt="Playwright Movies App popular movies home page" />
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
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.14);
  border: 1px solid rgba(124, 58, 237, 0.35);
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
.zoom-hunt img {
  width: 118%;
  left: -6%;
  top: -4%;
}
</style>

<!--
PRESENTER NOTES: HUNT HOME (~20s)
- Live: https://debs-obrien.github.io/playwright-movies-app/
- Skills from PR #89: site-bug-hunt + site-bugfix
- Interactive production hunt. Candidates only.
-->

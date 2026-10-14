---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Candidate · movie-link-accessible-name.md</div>

<div class="shot-frame">
  <div class="shot-zoom zoom-candidate">
    <img src="../public/images/candidate-movie-link-accessible-name.png" alt="Bug candidate markdown with honesty frontmatter" />
  </div>
  <div class="shot-callout callout-cand">
    <span class="callout-kicker">frontmatter</span>
    <code>bug · high · major · a11y</code>
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
.zoom-candidate img {
  width: 125%;
  left: -8%;
  top: -4%;
}
.shot-callout {
  position: absolute;
  left: 18px;
  bottom: 18px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(8, 10, 18, 0.94);
  border: 1px solid rgba(147, 197, 253, 0.5);
  box-shadow: 0 12px 30px rgba(0,0,0,.45);
}
.callout-kicker {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #93c5fd;
  margin-bottom: 4px;
}
.shot-callout code {
  font-size: 18px;
  font-weight: 800;
  color: #dbeafe;
  background: transparent;
  padding: 0;
}
</style>

<!--
PRESENTER NOTES: CANDIDATE (~20s)
- Frontmatter is the honesty contract for the hunt: bug, high, major, a11y.
- Exact getByRole link Superman → 0. That is the Playwright punchline.
-->

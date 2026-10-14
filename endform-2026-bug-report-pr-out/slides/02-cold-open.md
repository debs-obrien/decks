---
layout: default
class: devsum-slide
---

<div class="slide-inner cold-open">

<p class="cold-kicker">The locator that should work</p>

<div class="locator-box mono">
  <span class="locator-line">getByRole(&apos;link&apos;, &#123; name: &apos;Superman&apos; &#125;)</span>
  <span class="locator-fail">→ <span class="fail-num">0</span></span>
</div>

<div class="cold-grid">
  <div class="cold-shot-wrap">
    <div class="shot-zoom zoom-before-card">
      <img src="../public/images/before-movie-link-a11y-desktop.png" alt="Superman movie card with polluted accessible name" />
    </div>
    <p class="cold-shot-cap">Superman card · live production</p>
  </div>

  <div class="hear-grid">
    <div class="hear-card bad">
      <span class="hear-label">Screen reader hears</span>
      <p>poster of Superman Superman rating</p>
    </div>
    <div class="hear-card good">
      <span class="hear-label">Test expects</span>
      <p>Superman</p>
    </div>
  </div>
</div>

</div>

<style>
.cold-open {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
  height: 100%;
  gap: 12px;
}
.cold-kicker {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin: 0;
  text-align: center;
}
.locator-box {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px 18px;
  background: #070b14;
  border: 1px solid rgba(248, 113, 113, 0.45);
  border-radius: 14px;
  padding: 14px 20px;
  max-width: 980px;
  margin: 0 auto;
  width: 100%;
}
.locator-line {
  font-size: 22px;
  color: #e2e8f0;
  line-height: 1.35;
}
.locator-fail {
  font-size: 26px;
  font-weight: 850;
  color: #fecaca;
}
.fail-num {
  color: #f87171;
  font-size: 36px;
}
.cold-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
  align-items: stretch;
  width: 100%;
}
.cold-shot-wrap {
  min-width: 0;
}
.cold-shot-cap {
  margin: 8px 0 0;
  font-size: 15px;
  color: var(--text-dim);
  text-align: center;
}
.shot-zoom {
  position: relative;
  width: 100%;
  height: 380px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--code-border);
  box-shadow: 0 20px 50px rgba(0,0,0,.45);
  background: #0b1020;
}
.shot-zoom img {
  position: absolute;
  max-width: none;
  max-height: none;
  width: auto;
  height: auto;
}
/* Superman is 4th of 5 cards on the popular row */
.zoom-before-card img {
  width: 195%;
  left: -62%;
  top: -14%;
}
.hear-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  min-width: 0;
}
.hear-card {
  border-radius: 12px;
  padding: 16px 18px;
  border: 1px solid transparent;
}
.hear-card p {
  margin: 6px 0 0;
  font-size: 22px;
  font-weight: 750;
  line-height: 1.25;
  overflow-wrap: anywhere;
}
.hear-label {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.hear-card.bad {
  background: rgba(248, 113, 113, 0.1);
  border-color: rgba(248, 113, 113, 0.35);
}
.hear-card.bad .hear-label { color: #fca5a5; }
.hear-card.bad p { color: #fecaca; }
.hear-card.good {
  background: rgba(46, 173, 51, 0.1);
  border-color: rgba(46, 173, 51, 0.35);
}
.hear-card.good .hear-label { color: #86efac; }
.hear-card.good p { color: #bbf7d0; }
</style>

<!--
PRESENTER NOTES: COLD OPEN (~50s)
DEMO PATH (from run sheet):
1. Live before: https://debs-obrien.github.io/playwright-movies-app/ (still broken until movies #93 merges)
2. Local after: PR #93 worktree. Run movie-link-accessible-name.spec.ts (pass on #93, fail on main)
3. Tabs ready: issue #92, PR #93 MovieListItem diff, the test file, live app
4. Fallbacks: if live is down, use before/after shots in this deck. If local #93 fails, show regression + diff slides. If wifi drops, PDF backup.

Say the one-liner: the card reads "poster of Superman Superman rating", so getByRole link name Superman finds nothing.
Primary story only. Not seed #90/#91. Not page=0 yet.
-->

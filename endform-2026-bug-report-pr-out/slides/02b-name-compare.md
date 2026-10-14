---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge" style="margin-bottom:10px">Accessible name</span>
<h2 style="font-size:36px;margin:0 0 6px">Before vs after</h2>
<p class="lede" style="margin:0 0 18px">From issue #92. Same card. Different name.</p>

<div class="name-compare">
  <div class="name-col before">
    <span class="name-tag">Before · live</span>
    <p class="name-value">&ldquo;poster of Superman<br>Superman rating&rdquo;</p>
    <p class="name-result mono">getByRole exact → <span class="fail">0</span></p>
  </div>
  <div class="name-arrow">→</div>
  <div class="name-col after">
    <span class="name-tag">After · local PR #93</span>
    <p class="name-value">&ldquo;Superman&rdquo;</p>
    <p class="name-result mono">getByRole exact → <span class="ok">1</span></p>
  </div>
</div>

</div>

<style>
.name-compare {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  align-items: stretch;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
}
.name-col {
  border-radius: 14px;
  padding: 22px 24px;
  border: 1px solid transparent;
  min-width: 0;
  overflow: hidden;
}
.name-col.before {
  background: rgba(248, 113, 113, 0.1);
  border-color: rgba(248, 113, 113, 0.35);
}
.name-col.after {
  background: rgba(46, 173, 51, 0.1);
  border-color: rgba(46, 173, 51, 0.35);
}
.name-tag {
  display: inline-block;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.name-col.before .name-tag { color: #fca5a5; }
.name-col.after .name-tag { color: #86efac; }
.name-value {
  font-size: 28px;
  font-weight: 850;
  line-height: 1.2;
  margin: 0 0 18px;
  overflow-wrap: anywhere;
}
.name-col.before .name-value { color: #fecaca; }
.name-col.after .name-value { color: #bbf7d0; }
.name-result {
  font-size: 20px;
  margin: 0;
  color: var(--text-dim);
}
.name-result .fail { color: #f87171; font-weight: 900; font-size: 28px; }
.name-result .ok { color: var(--accent); font-weight: 900; font-size: 28px; }
.name-arrow {
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 900;
  color: var(--accent);
}
</style>

<!--
PRESENTER NOTES: NAME COMPARE (~25s)
- Read left, then right. One breath.
- After is local PR #93. Live site is still the before until #93 merges.
-->

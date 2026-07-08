---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="badge badge-red" style="font-size:15px;margin-bottom:12px">what doesn't work · 4 of 4</span>
<h2>Live tests aren't CI tests</h2>
<p class="lede">A green dashboard can be misleading, exploring isn't the same as trusting.</p>

<div class="grid-2" style="margin-top:18px;gap:24px">

<div class="card" style="border-top:3px solid var(--orange)">
<h3 class="orange"><span class="mono">*.live.ts</span> · 85 of them</h3>
<ul class="feature-list" style="font-size:20px;margin-top:8px">
  <li><span class="icon">🖐️</span><span>Attach to a running app</span></li>
  <li><span class="icon">🧭</span><span>Run <span class="bold">locally, by hand</span></span></li>
  <li><span class="icon">⚠️</span><span>Great for exploring, <span class="orange">not</span> a gate</span></li>
</ul>
</div>

<div class="card" style="border-top:3px solid var(--accent)">
<h3 class="accent"><span class="mono">*.spec.ts</span> · only 12</h3>
<ul class="feature-list" style="font-size:20px;margin-top:8px">
  <li><span class="icon">🌱</span><span>Seeded data, repeatable</span></li>
  <li><span class="icon">✅</span><span>The ones I actually <span class="bold">trust in CI</span></span></li>
  <li><span class="icon">🔒</span><span>Same result every time</span></li>
</ul>
</div>

</div>

<p class="footer-note" style="text-align:center;max-width:none">
  Exploring is great, just don't mistake it for the coverage you can rely on.
</p>

</div>

<!--
PRESENTER NOTES, LIVE VS CI
- The numbers are real: 85 live tests, 12 seeded CI specs. The ratio is the point.
- Live tests are for exploration and agent verification. They attach to a running app, you can't trust them as a merge gate.
- The fixme trap: a skipped test looks like a passing row on some dashboards. It's a coverage HOLE, not coverage.
- Concrete honesty: drag-and-drop automation is still fixme because it's flaky. I didn't fake a green there.
-->

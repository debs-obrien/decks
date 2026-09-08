---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge" style="margin-bottom:12px">The loop</span>
<h2>Discover → Issue → Reproduce → Fix → Verify → PR</h2>
<p class="lede">Same shape every time. Evidence in; reviewable PR out.</p>

<div class="diagram-chain" style="margin-top:28px;flex-wrap:wrap;row-gap:18px">
  <div class="diagram-node purple"><div class="icon">🔎</div><div class="label">Discover</div><div class="sub">crawl + a11y</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node blue"><div class="icon">📝</div><div class="label">Issue</div><div class="sub">only if gates pass</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange"><div class="icon">🔁</div><div class="label">Reproduce</div><div class="sub">before any code</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node" style="border-color:var(--purple)"><div class="icon">🔧</div><div class="label">Fix</div><div class="sub">smallest change</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green"><div class="icon">✅</div><div class="label">Verify</div><div class="sub">before / after</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node" style="border-color:var(--accent)"><div class="icon">🚀</div><div class="label">PR</div><div class="sub">Closes #N</div></div>
</div>

<div class="task-card" style="border-left:4px solid var(--accent);margin:28px auto 0;max-width:980px">
  <span class="task-id" style="color:var(--accent)">Lightning takeaway</span>
  <p style="font-size:22px;margin:0">If any step fails honesty, the loop <span class="bold">stops</span> — candidate file or “no PR”, not a fake win.</p>
</div>

</div>

<!--
PRESENTER NOTES — DIAGRAM LOOP (≈50s)
- Walk the six boxes once, finger on Reproduce. That's the hinge.
- Say: tonight we watch every arrow with a real screenshot.
-->

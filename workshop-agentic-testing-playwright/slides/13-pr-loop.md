---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge" style="margin-bottom:14px">Layer 2 · Fix</span>
<h2>The skill that opens the PR</h2>
<p class="lede">The one rule I really care about: <span class="accent bold">reproduce the bug before changing any code.</span></p>

<div class="diagram-chain" style="margin-top:26px">
  <div class="diagram-node purple"><div class="icon">📋</div><div class="label">Pick issue</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange"><div class="icon">🔁</div><div class="label">Reproduce<br>over CDP</div><div class="sub">before any code</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node blue"><div class="icon">🔧</div><div class="label">Fix +<br>verify</div><div class="sub">before / after proof</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green"><div class="icon">🚀</div><div class="label">Open PR</div><div class="sub">Closes #NNNN</div></div>
</div>

<p class="footer-note" style="text-align:center;max-width:none">
  The PR comes with proof and a test, something you can actually review, not just a diff.
</p>

</div>

<!--
PRESENTER NOTES, PR LOOP
- The single most important design decision: reproduce FIRST. If it can't reproduce, it doesn't proceed (see the "No PR" slide coming up).
- The PR isn't just code. It's context + before/after evidence + a manual test script + a regression test. That's what makes it reviewable by a human in 2 minutes.
- Note: PR hygiene (conflicts, CI, review threads) is a *separate* skill (repair-pr / manage-pr) and deliberately NOT CDP-based. Right tool for the job.
-->

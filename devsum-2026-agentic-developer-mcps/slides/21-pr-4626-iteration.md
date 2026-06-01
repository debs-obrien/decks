---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>PR #4626 — first answer was wrong</h2>
<p class="lede">The agent fixed the error message… but the <span class="accent bold">Try again</span> button didn’t actually recover.</p>

<div class="diagram-chain" style="margin-top:30px">
  <div class="diagram-node blue">
    <div class="label">20:00</div>
    <div class="sub">error state added</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange">
    <div class="label">21:23</div>
    <div class="sub">retry attempt #1</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange">
    <div class="label">21:32</div>
    <div class="sub">cache hydration fix</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green">
    <div class="label">21:40</div>
    <div class="sub">sync on recovery</div>
  </div>
</div>

<div class="card-row" style="margin-top:32px">
  <div class="task-card" style="border-left:3px solid var(--orange)">
    <span class="task-id" style="color:var(--orange)">Automated review</span>
    <p>Codex reviewed the commits and caught the incomplete recovery path.</p>
  </div>
  <div class="task-card" style="border-left:3px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Human review</span>
    <p>I verified the final behavior on the running app before approving.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — PR #4626 ITERATION
- This is the trust proof. Don't rush it.
- Say: the first fix looked good, but "Try again" didn't actually recover.
- Four commits across ~100 minutes. This is what trustworthy AI work looks like: iteration, review, verification.
-->

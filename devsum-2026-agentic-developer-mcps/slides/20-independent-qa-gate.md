---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Next: generated PRs stay draft</h2>
<p class="lede">PR #4837 adds an independent QA gate before any agent-generated bugfix can become review-ready.</p>

<div class="diagram-chain" style="margin-top:26px">
  <div class="diagram-node purple">
    <div class="icon">🤖</div>
    <div class="label">Agent fix</div>
    <div class="sub">opens draft PR</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange">
    <div class="icon">🛡️</div>
    <div class="label">Result guard</div>
    <div class="sub">checks JSON + screenshots</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node blue">
    <div class="icon">🎭</div>
    <div class="label">Fresh QA</div>
    <div class="sub">scripts/qa.js over CDP</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green">
    <div class="icon">👀</div>
    <div class="label">Ready</div>
    <div class="sub">human review unlocked</div>
  </div>
</div>

<div class="card-row" style="margin-top:30px">
  <div class="task-card" style="border-left:4px solid var(--orange)">
    <span class="task-id" style="color:var(--orange)">Guardrail</span>
    <h3>No evidence, no promotion</h3>
    <p>The workflow validates <span class="mono">result.json</span> plus before/after screenshots before the PR can advance.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Independence</span>
    <h3>A second pass verifies</h3>
    <p><span class="mono">scripts/qa.js</span> starts a fresh dev app and checks the fix over CDP.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — INDEPENDENT QA GATE
- This is the latest improvement: not just better app environment, but independent gating.
- PR #4837 keeps generated PRs in draft until a separate QA pass succeeds.
- Key line: "The agent does not get to mark its own homework."
- This is the trust story evolving: reproduce → fix → verify → independent QA → human review.
-->

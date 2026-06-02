---
layout: default
class: devsum-slide
---

<div class="slide-inner center">

<p style="font-size:72px;font-weight:950;line-height:1.02;letter-spacing:-2px;margin:0 auto 34px;max-width:1120px">
  Agents should not mark their own homework.
</p>

<div class="diagram-chain" style="max-width:980px;margin-top:28px">
  <div class="diagram-node purple">
    <div class="icon">🤖</div>
    <div class="label">Create</div>
    <div class="sub">agent does the work</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node blue">
    <div class="icon">🔍</div>
    <div class="label">Verify</div>
    <div class="sub">separate check</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green">
    <div class="icon">👀</div>
    <div class="label">Review</div>
    <div class="sub">human decides</div>
  </div>
</div>

<p style="font-size:34px;line-height:1.22;color:var(--text-dim);font-weight:800;max-width:980px;margin:36px auto 0">
  Agent output is not the endpoint.<br>
  <span class="gradient-text">Reviewable evidence is the endpoint.</span>
</p>

</div>

<!--
PRESENTER NOTES — INDEPENDENT QA PRINCIPLE
- This replaces the implementation-heavy draft PR/result guard slide.
- PR #4837 is the concrete implementation: generated PRs stay draft until a separate QA pass succeeds.
- Details if useful: result.json is checked, before/after screenshots are required, and scripts/qa.js runs an independent CDP pass.
- But the slide message is the reusable pattern: the creator should not be the only verifier.
- Key line: "The agent can create the work. The workflow must produce evidence. A human decides what ships."
-->

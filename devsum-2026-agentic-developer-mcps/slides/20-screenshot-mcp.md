---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>How screenshots get into the PR</h2>
<p class="lede">The app runs in CI, but reviewers need public evidence. So we added a small CI-only MCP.</p>

<div class="diagram-chain" style="margin-top:26px">
  <div class="diagram-node blue">
    <div class="icon">📸</div>
    <div class="label">Local screenshot</div>
    <div class="sub">created in CI</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node purple">
    <div class="icon">🔌</div>
    <div class="label">Screenshot MCP</div>
    <div class="sub">CI-only upload tool</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange">
    <div class="icon">☁️</div>
    <div class="label">Cloudflare R2</div>
    <div class="sub">public image URL</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green">
    <div class="icon">📝</div>
    <div class="label">PR body</div>
    <div class="sub">Claude inserts links</div>
  </div>
</div>

<div class="task-card" style="border-left:4px solid var(--accent);margin-top:30px;max-width:1040px;margin-left:auto;margin-right:auto">
  <span class="task-id" style="color:var(--accent)">Why this matters</span>
  <p>Claude Code can now convert a local CI screenshot into a public URL, then include that URL in the PR body as review evidence.</p>
</div>

</div>

<!--
PRESENTER NOTES — SCREENSHOT MCP
- Use the exact explanation: we created a CI-only MCP that uploads images to Cloudflare R2 for storage.
- Then we connected that MCP to Claude Code, which drives the automation.
- Claude Code now has a way to convert local CI screenshots into public image URLs.
- Then it inserts those public URLs directly into the PR body.
- Key point: this makes the output reviewable without requiring reviewers to download CI artifacts.
-->

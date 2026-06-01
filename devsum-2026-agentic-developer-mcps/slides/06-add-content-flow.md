---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>What actually happens</h2>
<p class="lede">One prompt. A skill orchestrates the tools. The agent verifies before handing it back.</p>

<div class="diagram-chain">
  <div class="diagram-node purple">
    <div class="icon">🗣️</div>
    <div class="label">Prompt</div>
    <div class="sub">"add this video"</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green">
    <div class="icon">📜</div>
    <div class="label">Skill</div>
    <div class="sub">add-content</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node blue">
    <div class="icon">🧩</div>
    <div class="label">Tools</div>
    <div class="sub">Playwright · Cloudinary · GitHub</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange">
    <div class="icon">✅</div>
    <div class="label">Verified PR</div>
    <div class="sub">preview checked</div>
  </div>
</div>

<div class="card-row" style="margin-top:26px">
  <div class="task-card" style="border-left:3px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Mental model</span>
    <p>The skill orchestrates. The MCPs and CLI skills are the hands.</p>
  </div>
  <div class="task-card" style="border-left:3px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Important bit</span>
    <p>Verification is not a bonus step. It is part of the workflow.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — THE FLOW
- This replaces the dense Mermaid diagram. Back-row readable.
- Walk left to right. The two cards underneath are the actual teaching.
- Land: "the skill orchestrates, the MCPs are the hands".
-->

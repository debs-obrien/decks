---
layout: default
class: devsum-slide hero
---

<div class="slide-inner">

<h2>What the agent saw</h2>
<p class="lede">One bug-hunt run. The agent driving the real desktop app, clicking like a tired QA tester.</p>

<div class="agent-grid">
  <img src="../public/images/agent-01-initial-state.png" alt="Initial state" />
  <img src="../public/images/agent-05-welcome-specialist-detail.png" alt="Specialist detail" />
  <img src="../public/images/agent-09-search-rust.png" alt="Search for rust" />
  <img src="../public/images/agent-14-attach-workflow-dialog.png" alt="Attach workflow dialog" />
  <img src="../public/images/agent-11-quality-signal-dropdown.png" alt="Quality signal dropdown" />
  <img src="../public/images/agent-15-create-specialist-duplicate-workflow.png" alt="Bug: duplicate workflow" />
</div>

<p class="footer-note" style="text-align:center;max-width:none">
  Bottom-right is the bug it filed: <span class="accent bold">workflow shows up twice</span>. Issue opened with repro steps and a screenshot. While I was asleep.
</p>

</div>

<style>
.agent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 1040px;
  margin: 0 auto;
}
.agent-grid img {
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--code-border);
  display: block;
  object-fit: cover;
  aspect-ratio: 16 / 10;
}
</style>

<!--
PRESENTER NOTES — AGENT EYE VIEW
- The "wait, it's actually using the app?!" slide.
- Pause on it. Let people look.
- Bottom-right tile is the bug. Point at it.
- These are CI artifacts from one hourly run.
-->

---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>How it actually works</h2>
<p class="lede">The agent does not have a browser. It has a skill that knows how to drive one.</p>

<div class="diagram-chain">
  <div class="diagram-node purple">
    <div class="icon">🤖</div>
    <div class="label">Agent</div>
    <div class="sub">Claude in CI</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green">
    <div class="icon">📜</div>
    <div class="label">Skill</div>
    <div class="sub">tap-issue-cdp-bugfix</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node blue">
    <div class="icon">🔌</div>
    <div class="label">MCP</div>
    <div class="sub">qa_cdp tools</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange">
    <div class="icon">🎭</div>
    <div class="label">CDP</div>
    <div class="sub">via Playwright</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node pink">
    <div class="icon">🖥️</div>
    <div class="label">Tauri</div>
    <div class="sub">real app</div>
  </div>
</div>

<div class="card-row" style="margin-top:26px">
  <div class="task-card" style="border-left:3px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Playwright</span>
    <p>Drives anything that speaks Chrome DevTools Protocol.</p>
  </div>
  <div class="task-card" style="border-left:3px solid var(--orange)">
    <span class="task-id" style="color:var(--orange)">CDP</span>
    <p>Attaches to an already-running app. Not a mock.</p>
  </div>
  <div class="task-card" style="border-left:3px solid var(--pink)">
    <span class="task-id" style="color:var(--pink)">Tauri</span>
    <p>The debug webview becomes scriptable like a browser.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — STACK
- This must be readable from the back row. Do not add details back.
- Walk the top chain. Then explain the three cards below.
- One sentence: "Playwright is not just a test runner; CDP is the bridge."
-->

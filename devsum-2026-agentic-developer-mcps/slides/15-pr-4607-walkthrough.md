---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>The first loop worked — but had a blind spot</h2>
<p class="lede">PR #4607 proved the pattern: reproduce the bug, make the fix, open the PR with evidence.</p>

<div class="card-row" style="margin-top:24px">
  <div class="task-card" style="border-left:4px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Worked</span>
    <h3>Before-fix proof</h3>
    <p>The agent could reproduce the raw <span class="mono">403</span> error in the running app and explain the fix.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--orange)">
    <span class="task-id" style="color:var(--orange)">Blind spot</span>
    <h3>After-fix verification</h3>
    <p>Sometimes blocked by a pre-built Tauri binary. No HMR. No live reload.</p>
  </div>
</div>

<p style="font-size:42px;line-height:1.15;font-weight:900;text-align:center;max-width:1040px;margin:42px auto 0">
  The answer was not <span class="red">“trust the agent more.”</span><br>
  The answer was <span class="gradient-text">“improve the loop.”</span>
</p>

</div>

<!--
PRESENTER NOTES — FIRST LOOP LIMITATION
- This reframes PR #4607 as the first generation of the workflow.
- The loop worked, but the environment prevented complete after-fix verification for some frontend changes.
- Land the line: "The answer wasn't trust the agent more. The answer was improve the loop."
- Next: PR #4746 shows that improvement.
-->

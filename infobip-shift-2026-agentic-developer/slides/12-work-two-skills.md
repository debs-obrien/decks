---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge" style="margin-bottom:8px">Two skills</span>
<h2 style="font-size:36px;margin-bottom:4px">Hunt and fix are different jobs</h2>
<p class="lede" style="margin-bottom:0">Don&rsquo;t ask one bot to do both.</p>

<div class="grid-2" style="margin-top:14px;gap:18px">

  <div class="task-card" style="border-top:3px solid var(--purple);border-left:none;padding:14px 18px;overflow:hidden;min-width:0">
    <span class="task-id" style="color:#a78bfa">site-bug-hunt</span>
    <h3 style="font-size:24px;margin-top:4px">Find and classify</h3>
    <ul class="feature-list" style="font-size:17px;margin-top:6px;gap:7px">
      <li><span class="icon">🧭</span><span>Priority journeys via playwright-cli</span></li>
      <li><span class="icon">📸</span><span>a11y snapshots as primary evidence</span></li>
      <li><span class="icon">🗂️</span><span>Always write <span class="mono">qa/bug-candidates/</span></span></li>
      <li><span class="icon">🚪</span><span>Issues only when gates pass (or you elevate)</span></li>
    </ul>
    <p class="small dim" style="margin-top:8px">Looks. Doesn&rsquo;t change product code.</p>
  </div>

  <div class="task-card" style="border-top:3px solid var(--accent);border-left:none;padding:14px 18px;overflow:hidden;min-width:0">
    <span class="task-id" style="color:var(--accent)">site-bugfix</span>
    <h3 style="font-size:24px;margin-top:4px">Reproduce and ship</h3>
    <ul class="feature-list" style="font-size:17px;margin-top:6px;gap:7px">
      <li><span class="icon">🔁</span><span>Reproduce first. Loud cannot-repro beats a fake fix.</span></li>
      <li><span class="icon">🔧</span><span>Smallest honest fix, then verify before/after</span></li>
      <li><span class="icon">🧪</span><span>Regression Playwright test when it pays off</span></li>
      <li><span class="icon">🔀</span><span>Draft PR when asked / in CI. You still merge.</span></li>
    </ul>
    <p class="small dim" style="margin-top:8px">No repro? No code. No PR.</p>
  </div>

</div>

</div>

<!--
PRESENTER NOTES: TWO SKILLS
- Hunt is find-only. Candidates by default. No auto-file overnight unless gates all pass.
- Fix never touches product code until reproduction succeeds.
- Draft PR max in CI. Local PR only if you ask. You keep the yes.
-->

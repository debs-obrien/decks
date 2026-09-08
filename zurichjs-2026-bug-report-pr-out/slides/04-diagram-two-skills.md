---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge" style="margin-bottom:8px">Two skills · PR #576</span>
<h2 style="font-size:40px;margin-bottom:4px">Hunt and fix are separate units of work</h2>
<p class="lede" style="margin-bottom:0">Compose them. Don&rsquo;t ask one prompt to do everything.</p>

<div class="grid-2" style="margin-top:14px;gap:18px">

  <div class="task-card" style="border-top:3px solid var(--purple);border-left:none;padding:14px 18px">
    <span class="task-id" style="color:#a78bfa">site-bug-hunt</span>
    <h3 style="font-size:24px;margin-top:4px">Find &amp; classify</h3>
    <ul class="feature-list" style="font-size:18px;margin-top:6px;gap:8px">
      <li><span class="icon">🧭</span><span>Crawl priority journeys</span></li>
      <li><span class="icon">📸</span><span>Capture evidence</span></li>
      <li><span class="icon">🗂️</span><span>Write candidate files</span></li>
      <li><span class="icon">🚪</span><span>File issues only when gates pass</span></li>
    </ul>
    <p class="small dim" style="margin-top:8px">Looks. Doesn&rsquo;t mutate product code.</p>
  </div>

  <div class="task-card" style="border-top:3px solid var(--accent);border-left:none;padding:14px 18px">
    <span class="task-id" style="color:var(--accent)">site-bugfix</span>
    <h3 style="font-size:24px;margin-top:4px">Reproduce &amp; ship</h3>
    <ul class="feature-list" style="font-size:18px;margin-top:6px;gap:8px">
      <li><span class="icon">🔁</span><span>Reproduce first</span></li>
      <li><span class="icon">🔧</span><span>Smallest honest fix</span></li>
      <li><span class="icon">🧪</span><span>Regression test</span></li>
      <li><span class="icon">🔀</span><span>Open PR · Closes #N</span></li>
    </ul>
    <p class="small dim" style="margin-top:8px">No repro → no PR.</p>
  </div>

</div>

</div>

<!--
PRESENTER NOTES — TWO SKILLS (≈45s)
- Skills landed in PR #576. Hunt is read-only; fix is write-with-proof.
- Point at the boundary: hunting that invents fixes is how you get noise.
-->

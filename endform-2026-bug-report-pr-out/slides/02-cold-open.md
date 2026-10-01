---
layout: default
class: devsum-slide
---

<div class="slide-inner center">

<p style="font-size:24px;color:var(--text-dim);margin:0 0 20px">One real loop on the <span class="mono accent">Playwright Movies App</span>.</p>

<div style="display:flex;gap:14px;justify-content:center;align-items:stretch;flex-wrap:wrap;max-width:1120px;margin:0 auto">

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Hunt</span>
    <h3 style="font-size:24px">Found a real a11y bug</h3>
    <p style="font-size:18px">Movie cards announce wrong names.</p>
  </div>

  <div class="diagram-arrow" style="font-size:28px">→</div>

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--purple)">
    <span class="task-id" style="color:var(--purple)">Issue</span>
    <h3 style="font-size:24px">Gates said file it</h3>
    <p style="font-size:18px">bug + high + major.</p>
  </div>

  <div class="diagram-arrow" style="font-size:28px">→</div>

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Fix</span>
    <h3 style="font-size:24px">PR with proof</h3>
    <p style="font-size:18px">Repro, patch, test. You merge.</p>
  </div>

</div>

<p style="font-size:34px;line-height:1.15;font-weight:800;max-width:1000px;margin:32px auto 0">
  Bug report in. <span class="gradient-text">Pull request out.</span><br>
  <span style="font-size:24px;font-weight:600;color:var(--text-dim)">You still merge.</span>
</p>

</div>

<!--
PRESENTER NOTES: COLD OPEN (~45s)
- Live: debs-obrien.github.io/playwright-movies-app
- Primary story: movie-link-accessible-name. Not seed #90/#91.
- Debbie one-liner: Movie cards announce themselves as "poster of Superman Superman rating" (sometimes with CSS soup) instead of just the title, so getByRole link exact "Superman" finds nothing.
-->

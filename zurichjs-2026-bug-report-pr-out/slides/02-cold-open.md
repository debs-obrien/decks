---
layout: default
class: devsum-slide
---

<div class="slide-inner center">

<p style="font-size:24px;color:var(--text-dim);margin:0 0 20px">15 minutes. One real production loop on <span class="mono accent">debbie.codes</span>.</p>

<div style="display:flex;gap:14px;justify-content:center;align-items:stretch;flex-wrap:wrap;max-width:1120px;margin:0 auto">

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Hunt</span>
    <h3 style="font-size:24px">PR #621</h3>
    <p style="font-size:18px">Candidates only — gates held.</p>
  </div>

  <div class="diagram-arrow" style="font-size:28px">→</div>

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--purple)">
    <span class="task-id" style="color:var(--purple)">Issue</span>
    <h3 style="font-size:24px">#622</h3>
    <p style="font-size:18px">Two “Close menu” buttons.</p>
  </div>

  <div class="diagram-arrow" style="font-size:28px">→</div>

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Fix</span>
    <h3 style="font-size:24px">PR #623</h3>
    <p style="font-size:18px">Repro → patch → test → Closes #622.</p>
  </div>

</div>

<p style="font-size:34px;line-height:1.15;font-weight:800;max-width:1000px;margin:32px auto 0">
  Bug report in. <span class="gradient-text">Pull request out.</span><br>
  <span style="font-size:24px;font-weight:600;color:var(--text-dim)">Human merge still the gate.</span>
</p>

</div>

<!--
PRESENTER NOTES — COLD OPEN (≈45s)
- Promise the arc: hunt PR → elevated issue → fix PR. All on production site.
- Stress: minor did NOT auto-file. You elevated for the demo. Honesty first.
- Do not mention Agent Gym / swim / Infobip. Stay on debbie.codes.
-->

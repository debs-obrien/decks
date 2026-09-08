---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Channel lane vs CoS</h2>
<p class="lede">Site queue stays in-channel. CoS only for Debbie-yes.</p>

<div class="diagram-chain" style="margin:18px 0 8px;gap:8px">
  <div class="diagram-node blue" style="min-height:120px;padding:14px 10px">
    <div class="label" style="font-size:20px">designer</div>
    <div class="sub">lock</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange" style="min-height:120px;padding:14px 10px">
    <div class="label" style="font-size:20px">engineer</div>
    <div class="sub">ship</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green" style="min-height:120px;padding:14px 10px">
    <div class="label" style="font-size:20px">qa</div>
    <div class="sub">prove</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node" style="min-height:120px;padding:14px 10px;border-color:var(--accent2)">
    <div class="label" style="font-size:20px">live</div>
    <div class="sub">shipped</div>
  </div>
</div>

<div class="card-row" style="margin-top:16px">
  <div class="task-card" style="border-color:var(--accent)">
    <span class="task-id" style="color:var(--accent)">In channel</span>
    <h3 style="font-size:22px">One owner at a time</h3>
    <p>Speak only for a result, a blocker, or a real question.</p>
  </div>
  <div class="task-card" style="border-color:var(--purple)">
    <span class="task-id" style="color:var(--purple)">CoS gate</span>
    <h3 style="font-size:22px">Debbie-yes only</h3>
    <p>merge · public · consequential — stay out of channel noise.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — CHANNEL VS COS · 16:45–17:45
- Visual: designer → engineer → qa → ship lives in debbie.codes.
- CoS is not in that queue — escalate only for Debbie-yes decisions.
- Hygiene line is the operating rule for every bot in the room.
-->

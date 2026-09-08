---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Channel lane vs CoS</h2>
<p class="lede">Work stays in-channel. CoS only for Debbie-yes.</p>

<div class="diagram-chain" style="margin:14px 0 6px;gap:8px">
  <div class="diagram-node blue" style="min-height:100px;padding:12px 8px">
    <div class="label" style="font-size:18px">designer</div>
    <div class="sub">lock</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange" style="min-height:100px;padding:12px 8px">
    <div class="label" style="font-size:18px">engineer</div>
    <div class="sub">ship</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green" style="min-height:100px;padding:12px 8px">
    <div class="label" style="font-size:18px">qa</div>
    <div class="sub">prove</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node" style="min-height:100px;padding:12px 8px;border-color:var(--accent2)">
    <div class="label" style="font-size:18px">live</div>
    <div class="sub">shipped</div>
  </div>
</div>

<div class="card-row" style="margin-top:12px">
  <div class="task-card" style="border-color:var(--accent);padding:14px 18px">
    <span class="task-id" style="color:var(--accent)">In channel</span>
    <h3 style="font-size:20px">One owner at a time</h3>
    <p style="font-size:18px">Speak for a result, a blocker, or a real question.</p>
  </div>
  <div class="task-card" style="border-color:var(--purple);padding:14px 18px">
    <span class="task-id" style="color:var(--purple)">CoS gate</span>
    <h3 style="font-size:20px">Debbie-yes only</h3>
    <p style="font-size:18px">merge · public · consequential. Stay out of the noise.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES: CHANNEL VS COS
- Site queue is not the CoS inbox.
-->

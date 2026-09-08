---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Honesty taxonomy + confidence</h2>
<p class="lede">Finding bugs is easy. <span class="accent bold">Owning uncertainty</span> is the product.</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:18px">
  <div class="task-card" style="flex:1;min-width:150px;text-align:center"><h3 style="font-size:21px">🐞 Bug</h3><p class="small">Genuinely broken</p></div>
  <div class="task-card" style="flex:1;min-width:150px;text-align:center"><h3 style="font-size:21px">😕 Bad UX</h3><p class="small">Works, but shouldn&rsquo;t</p></div>
  <div class="task-card" style="flex:1;min-width:150px;text-align:center"><h3 style="font-size:21px">🧪 Env / data</h3><p class="small">Setup, not product</p></div>
  <div class="task-card" style="flex:1;min-width:150px;text-align:center"><h3 style="font-size:21px">🕳️ Test gap</h3><p class="small">Missing coverage</p></div>
  <div class="task-card" style="flex:1;min-width:150px;text-align:center"><h3 style="font-size:21px">❓ Inconclusive</h3><p class="small">Couldn&rsquo;t confirm</p></div>
</div>

<p style="text-align:center;margin-top:22px;font-size:24px">
  Every finding also carries
  <span class="badge badge-green">High</span>
  <span class="badge badge-orange">Medium</span>
  <span class="badge badge-red">Low</span>
</p>

<div class="flow-diagram" style="margin:18px auto 0;max-width:1040px;font-size:20px">
  <span class="flow-node flow-node-green" style="padding:12px 18px"><span class="flow-label" style="font-size:20px;font-weight:700">bug + high + major/blocker</span></span>
  <span class="flow-arrow">→</span>
  <span class="flow-node flow-node-purple" style="padding:12px 18px"><span class="flow-label" style="font-size:20px;font-weight:700">auto-file issue</span></span>
  <span class="flow-arrow">→</span>
  <span class="flow-node flow-node-orange" style="padding:12px 18px"><span class="flow-label" style="font-size:20px;font-weight:700">else: candidate only</span></span>
</div>

</div>

<!--
PRESENTER NOTES — HONESTY (≈50s)
- Walk buckets fast. Land: auto-file needs bug + high + major/blocker.
- Tonight's demo is high-confidence bug but severity minor → candidate.
-->

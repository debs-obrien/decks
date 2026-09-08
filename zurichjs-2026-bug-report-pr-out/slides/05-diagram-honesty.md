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

<div class="flow-diagram" style="margin:22px auto 0;max-width:980px">
  <span class="flow-node flow-node-green"><span class="flow-label">bug + high + major/blocker</span></span>
  <span class="flow-arrow">→</span>
  <span class="flow-node flow-node-purple"><span class="flow-label">auto-file issue</span></span>
  <span class="flow-arrow">→</span>
  <span class="flow-node flow-node-orange"><span class="flow-label">else: candidate only</span></span>
</div>

</div>

<!--
PRESENTER NOTES — HONESTY (≈50s)
- Walk buckets fast. Land: auto-file needs bug + high + major/blocker.
- Tonight's demo is high-confidence bug but severity minor → candidate.
-->

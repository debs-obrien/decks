---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Finding bugs was the easy part</h2>
<p class="lede">The harder bit was getting it to <span class="accent bold">own up to what it wasn't sure about.</span></p>

<div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:22px">
  <div class="task-card" style="flex:1;text-align:center"><h3 style="font-size:22px">🐞 Bug</h3><p class="small">Genuinely broken</p></div>
  <div class="task-card" style="flex:1;text-align:center"><h3 style="font-size:22px">😕 Bad UX</h3><p class="small">Works, but shouldn't</p></div>
  <div class="task-card" style="flex:1;text-align:center"><h3 style="font-size:22px">🧪 Env / data</h3><p class="small">Setup, not product</p></div>
  <div class="task-card" style="flex:1;text-align:center"><h3 style="font-size:22px">🕳️ Test gap</h3><p class="small">Missing coverage</p></div>
  <div class="task-card" style="flex:1;text-align:center"><h3 style="font-size:22px">❓ Inconclusive</h3><p class="small">Couldn't confirm</p></div>
</div>

<p style="text-align:center;margin-top:24px;font-size:24px">
  Every finding also carries a confidence label, <span class="badge badge-green">High</span>
  <span class="badge badge-orange">Medium</span>
  <span class="badge badge-red">Low</span>
</p>

<p class="footer-note" style="text-align:center;max-width:none">
  "Inconclusive" is a perfectly good answer, I'd rather it say that than guess.
</p>

</div>

<!--
PRESENTER NOTES, CLASSIFICATION
- This is the trust slide. Raw "the AI found 100 bugs" is noise. Classification + confidence is signal.
- Walk the five buckets fast. The important two are "Bad UX" (not a bug, but worth knowing) and "Inconclusive" (honesty).
- The skill literally instructs: do not overstate coverage. That discipline is what makes the output reviewable.
-->

---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2 style="font-size:36px">Say what you found. Say how sure you are.</h2>
<p class="lede">Finding bugs is easy. Being honest about uncertainty is the hard part.</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:16px">
  <div class="task-card" style="flex:1;min-width:140px;text-align:center;overflow:hidden;padding:14px 12px"><h3 style="font-size:20px">🐞 Bug</h3><p class="small">Actually broken</p></div>
  <div class="task-card" style="flex:1;min-width:140px;text-align:center;overflow:hidden;padding:14px 12px"><h3 style="font-size:20px">😕 Bad UX</h3><p class="small">Works, but shouldn&rsquo;t</p></div>
  <div class="task-card" style="flex:1;min-width:140px;text-align:center;overflow:hidden;padding:14px 12px"><h3 style="font-size:20px">🧪 Env / data</h3><p class="small">Setup, not product</p></div>
  <div class="task-card" style="flex:1;min-width:140px;text-align:center;overflow:hidden;padding:14px 12px"><h3 style="font-size:20px">🕳️ Test gap</h3><p class="small">Missing coverage</p></div>
  <div class="task-card" style="flex:1;min-width:140px;text-align:center;overflow:hidden;padding:14px 12px"><h3 style="font-size:20px">❓ Inconclusive</h3><p class="small">Couldn&rsquo;t confirm</p></div>
</div>

<p style="text-align:center;margin-top:18px;font-size:22px">
  Plus confidence:
  <span class="badge badge-green">High</span>
  <span class="badge badge-orange">Medium</span>
  <span class="badge badge-red">Low</span>
</p>

<div class="gate-row">
  <div class="gate-box green">bug + high + major/blocker</div>
  <div class="gate-arrow">→</div>
  <div class="gate-box purple">auto-file issue</div>
  <div class="gate-arrow">→</div>
  <div class="gate-box orange">else: candidate only</div>
</div>

</div>

<style>
.gate-row {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 10px;
  margin: 18px auto 0;
  max-width: 1060px;
  flex-wrap: nowrap;
}
.gate-box {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-align: center;
  font-size: 16px;
  font-weight: 750;
  line-height: 1.3;
  padding: 16px 14px;
  border-radius: 12px;
  border: 1px solid transparent;
  overflow-wrap: anywhere;
}
.gate-box.green {
  background: rgba(46, 173, 51, 0.12);
  border-color: rgba(46, 173, 51, 0.3);
  color: var(--accent);
}
.gate-box.purple {
  background: rgba(124, 58, 237, 0.12);
  border-color: rgba(124, 58, 237, 0.3);
  color: #a78bfa;
}
.gate-box.orange {
  background: rgba(245, 158, 11, 0.12);
  border-color: rgba(245, 158, 11, 0.3);
  color: #fbbf24;
}
.gate-arrow {
  display: flex;
  align-items: center;
  color: var(--accent);
  font-size: 26px;
  font-weight: 900;
  flex: 0 0 auto;
}
</style>

<!--
PRESENTER NOTES: HONESTY (~50s)
- Walk buckets fast. Auto-file needs bug + high + major/blocker.
- Tonight's demo is high confidence, severity minor. So candidate only.
-->

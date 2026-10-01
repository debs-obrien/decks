---
layout: default
class: devsum-slide
---

<div class="slide-inner center">

<span class="badge badge-red" style="font-size:16px;padding:6px 16px;margin-bottom:20px">the rule I&rsquo;d fight for</span>

<p style="font-size:46px;color:var(--text);font-weight:800;margin:0 auto 18px;line-height:1.12;max-width:1080px">
  Reproduce the bug<br>
  <span class="accent">before</span> you change any code.
</p>

<p style="font-size:24px;line-height:1.45;color:var(--text-dim);max-width:920px;margin:0 auto 22px">
  site-bugfix confirmed <span class="mono">closeCount: 2</span> on production first.
  Only then did it touch <span class="mono">TheTopBar.vue</span>.
</p>

<div class="repro-row">
  <div class="repro-step orange">
    <div class="icon">🔁</div>
    <div class="label">Repro</div>
    <div class="sub">real broken state</div>
  </div>
  <div class="repro-arrow">→</div>
  <div class="repro-step blue">
    <div class="icon">📸</div>
    <div class="label">Before shot</div>
    <div class="sub">honest evidence</div>
  </div>
  <div class="repro-arrow">→</div>
  <div class="repro-step green">
    <div class="icon">🔧</div>
    <div class="label">Code change</div>
    <div class="sub">never first</div>
  </div>
</div>

</div>

<style>
.repro-row {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.repro-step {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: var(--surface);
  border: 2px solid var(--code-border);
  border-radius: 14px;
  padding: 16px 12px;
  text-align: center;
}
.repro-step .icon { font-size: 32px; line-height: 1; margin-bottom: 8px; }
.repro-step .label {
  font-size: 22px;
  font-weight: 850;
  line-height: 1.1;
  overflow-wrap: anywhere;
}
.repro-step .sub {
  margin-top: 6px;
  font-size: 15px;
  color: var(--text-dim);
  overflow-wrap: anywhere;
}
.repro-step.orange { border-color: var(--orange); }
.repro-step.blue { border-color: var(--blue); }
.repro-step.green { border-color: var(--accent); }
.repro-arrow {
  display: flex;
  align-items: center;
  color: var(--accent);
  font-size: 28px;
  font-weight: 900;
  flex: 0 0 auto;
}
</style>

<!--
PRESENTER NOTES: REPRODUCE RULE (~35s)
- Slow down. This is the hinge of the talk.
- Agents will invent a tidy "before" from a fixed branch if you let them.
-->

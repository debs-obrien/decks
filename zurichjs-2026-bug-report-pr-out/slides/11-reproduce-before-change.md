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

<p style="font-size:26px;line-height:1.45;color:var(--text-dim);max-width:920px;margin:0 auto 22px">
  site-bugfix on #622 confirmed <span class="mono">closeCount: 2</span> on production with playwright-cli —
  then, and only then, touched <span class="mono">TheTopBar.vue</span>.
</p>

<div class="diagram-chain" style="margin-top:8px;justify-content:center">
  <div class="diagram-node orange"><div class="icon">🔁</div><div class="label">Repro</div><div class="sub">real broken state</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node blue"><div class="icon">📸</div><div class="label">Before shot</div><div class="sub">honest evidence</div></div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green"><div class="icon">🔧</div><div class="label">Code change</div><div class="sub">never first</div></div>
</div>

</div>

<!--
PRESENTER NOTES — REPRODUCE RULE (≈35s)
- Slow down. This is the hinge of the talk.
- Agents will invent a tidy “before” from a fixed branch if you let them.
-->

---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge" style="margin-bottom:14px;background:rgba(124,58,237,.1);border-color:rgba(124,58,237,.2);color:#a78bfa">Layer 1 · Find</span>
<h2>The bug-hunt skill</h2>
<p class="lede">It attaches to the <span class="bold">real, signed-in app</span> over CDP and clicks around like a QA tester would.</p>

<div class="flow-diagram" style="margin:26px 0">
  <span class="flow-node flow-node-purple">🔌<span class="flow-label">connectOverCDP()</span></span>
  <span class="flow-arrow">→</span>
  <span class="flow-node flow-node-blue">🧭<span class="flow-label">explore routes &amp; dialogs</span></span>
  <span class="flow-arrow">→</span>
  <span class="flow-node flow-node-orange">📸<span class="flow-label">capture evidence</span></span>
  <span class="flow-arrow">→</span>
  <span class="flow-node flow-node-green">📝<span class="flow-label">file classified issue</span></span>
</div>

<div class="stat-row" style="margin-top:8px">
  <div class="stat-box"><div class="val accent mono">hourly</div><div class="lbl">runs on a schedule</div></div>
  <div class="stat-box"><div class="val purple">safe</div><div class="lbl">looks, doesn't touch</div></div>
  <div class="stat-box"><div class="val blue">while I sleep</div><div class="lbl">no one watching</div></div>
</div>

</div>

<!--
PRESENTER NOTES, BUGHUNT INTRO
- The "wait, it's driving the actual app?" moment.
- CDP = Chrome DevTools Protocol. The app is Tauri/CEF, so Playwright attaches via chromium.connectOverCDP().
- It runs every hour on a GitHub Actions schedule. It's non-destructive by policy, it explores, it doesn't delete your data.
- The killer framing: it found real bugs while I was asleep.
-->

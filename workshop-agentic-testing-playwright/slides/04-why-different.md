---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>We used to be in every step</h2>

<div class="grid-2" style="margin-top:20px;gap:26px">

<div class="card" style="border-top:3px solid var(--text-muted)">
<h3 class="dim">The usual loop</h3>
<div class="flow-diagram" style="margin:14px 0;flex-direction:column;align-items:flex-start;gap:12px">
  <span class="flow-node flow-node-blue" style="min-width:0">🧑‍💻 write the test</span>
  <span class="flow-node flow-node-green" style="min-width:0">🤖 CI runs it</span>
  <span class="flow-node flow-node-orange" style="min-width:0">🧑‍💻 debug the failure</span>
</div>
<p class="small">Every step waits on a person.</p>
</div>

<div class="card" v-click style="border-top:3px solid var(--accent)">
<h3 class="accent">Where agents help</h3>
<ul class="feature-list" style="font-size:22px">
  <li><span class="icon">🔍</span><span><span class="label">Find</span>, bugs with no test</span></li>
  <li><span class="icon">🔧</span><span><span class="label">Fix</span>, reproduce, patch, open a PR</span></li>
  <li><span class="icon">✍️</span><span><span class="label">Author</span>, tests from the source</span></li>
</ul>
</div>

</div>

<p style="font-size:30px;line-height:1.2;font-weight:700;text-align:center;max-width:1040px;margin:30px auto 0">
  An agent can <span class="accent">read the DOM</span>, so it doesn't have to wait for us.
</p>

</div>

<!--
PRESENTER NOTES, WHY DIFFERENT
- Keep it tight. The left column is the world everyone knows.
- The right column is the three layers again, framed as "the gaps agents close".
- Land: the agent reads the DOM directly, that's the enabling capability that makes everything else possible.
-->

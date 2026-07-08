---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>There are actually two CLIs</h2>
<p class="lede">A lot of the confusion around "agentic Playwright" is really just these two getting mixed up.</p>

<div class="grid-2" style="margin-top:22px;gap:26px">

<div class="card" style="border-top:3px solid var(--blue)">
<h3 class="blue"><span class="mono">playwright</span></h3>
<p class="small mono dim">@playwright/test</p>
<ul class="feature-list" style="font-size:21px;margin-top:10px">
  <li><span class="icon">🧪</span><span>The <span class="label">test runner</span></span></li>
  <li><span class="icon">📄</span><span>Runs your <span class="mono">*.spec.ts</span> files</span></li>
  <li><span class="icon">🔬</span><span>Trace viewer &amp; HTML report</span></li>
</ul>
</div>

<div class="card" style="border-top:3px solid var(--purple)">
<h3 class="purple"><span class="mono">playwright-cli</span></h3>
<p class="small mono dim">@playwright/cli</p>
<ul class="feature-list" style="font-size:21px;margin-top:10px">
  <li><span class="icon">🤖</span><span>Built <span class="label">for agents</span></span></li>
  <li><span class="icon">📸</span><span>Small snapshots, element <span class="mono">ref</span>s, not huge dumps</span></li>
  <li><span class="icon">🌐</span><span>Drives a real browser to reproduce things</span></li>
</ul>
</div>

</div>

</div>

<!--
PRESENTER NOTES, TWO CLIS
- This slide alone is worth the price of admission for a Playwright audience, most don't know @playwright/cli exists.
- Key phrase: "token-efficient snapshots", the CLI returns element refs, not a giant accessibility tree, so it fits in an agent's context.
- We use the CLI to reproduce bugs; the runner to prove fixes. Foreshadows the fix loop.
- Note honestly: attaching the CLI to *this* Tauri app didn't work, I'll get to that in the honest section.
-->

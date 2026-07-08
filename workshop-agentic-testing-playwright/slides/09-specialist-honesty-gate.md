---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>How I keep it honest</h2>
<p class="lede">If the prompt shows a bad habit, the model picks it up. So I test the specialist itself.</p>

<div class="grid-2" style="margin-top:18px;gap:26px">

<div class="card" style="border-top:3px solid var(--accent)">
<h3 class="accent">A quick contract test</h3>
<ul class="feature-list" style="font-size:21px;margin-top:8px">
  <li><span class="icon">🔗</span><span>Every skill it names really exists</span></li>
  <li><span class="icon">🛠️</span><span>It still has the tools it needs</span></li>
  <li><span class="icon">🚫</span><span>The prompt doesn't teach the habits it bans</span></li>
</ul>
<p class="small dim" style="margin-top:10px">No LLM, no browser, runs on every change.</p>
</div>

<div class="card" style="border-top:3px solid var(--purple)">
<h3 class="purple">Plus 9 real scenarios</h3>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px">
  <span class="badge badge-blue">generate-test</span>
  <span class="badge badge-blue">refactor-flaky</span>
  <span class="badge badge-blue">stay-simple</span>
  <span class="badge badge-blue">auth-setup</span>
  <span class="badge badge-blue">api-test</span>
  <span class="badge badge-blue">create-pom</span>
  <span class="badge badge-blue">debug-failure</span>
  <span class="badge badge-blue">optimize-ci</span>
  <span class="badge badge-blue">test-agents</span>
</div>
<p class="small dim" style="margin-top:14px">The "does it actually write runnable code" check is still on my list.</p>
</div>

</div>

</div>

<!--
PRESENTER NOTES, HONESTY GATE
- The best line here: "a prompt that models the anti-pattern teaches the model to reproduce it." That's why the contract test greps the prompt for getByLabelText / screen.getBy* / @testing-library.
- Two layers: cheap deterministic guard (every commit) + model-gated benchmark (9 real scenarios).
- Be honest: the live "generates runnable Playwright" check is not yet in the deterministic suite. Don't claim it is.
-->

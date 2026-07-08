---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>What we test, and how we know it stayed free</h2>
<p class="lede">Five exercises, each a full run: chat with the stakeholders, write the memo, watch the rubric fill in.</p>

<div class="grid-2" style="margin-top:18px;gap:24px">

<div class="card" style="border-top:3px solid var(--blue)">
<h3 class="blue">The whole learner journey</h3>
<ul class="feature-list" style="font-size:20px;margin-top:6px">
  <li><span class="icon">📨</span><span>Mention a specialist, get the right reply</span></li>
  <li><span class="icon">📝</span><span>Submit the memo, rubric updates live</span></li>
  <li><span class="icon">🏁</span><span>Reach 100% completion, deterministically</span></li>
</ul>
</div>

<div class="card" style="border-top:3px solid var(--accent)">
<h3 class="accent">The guardrail that keeps it honest</h3>
<ul class="feature-list" style="font-size:20px;margin-top:6px">
  <li><span class="icon">🚫</span><span>Any unscripted message returns an <span class="mono">Ignore</span>, never a real call</span></li>
  <li><span class="icon">🔢</span><span>A counter proves the evaluator was intercepted</span></li>
  <li><span class="icon">🏷️</span><span>The test projects are named <span class="mono">no-credit</span></span></li>
</ul>
</div>

</div>

<p class="footer-note" style="text-align:center;max-width:none">
  I actually shipped a fix titled <span class="mono">"prevent deterministic tests using providers"</span>, because one stray message used to slip through and quietly cost money.
</p>

</div>

<!--
PRESENTER NOTES, GUARDRAIL
- What we cover: all 5 exercises run end to end as deterministic-completion specs. Mention routing, specialist replies, memo submission, live rubric coverage, 100% completion.
- The honesty part: the scary failure mode is a test that looks free but quietly calls a real model. So the harness makes any unmatched message return an Ignore instead of falling through to real orchestration, and the non-evaluator path returns a blocked stub.
- Proof it worked: expect(evaluatorCallCount).toBeGreaterThan(0) confirms the evaluator was intercepted, not skipped. And the Playwright projects are literally named live-courses-no-credit-completion and -controls.
- The punchline: I shipped an actual commit called "prevent deterministic tests using providers" because a single stray message had been slipping through. That is the whole talk in one story: agents and AI products will quietly do the expensive thing unless you build the guardrail that catches it.
-->

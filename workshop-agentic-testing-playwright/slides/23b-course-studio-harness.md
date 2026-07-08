---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>The trick: swap the model, keep everything else real</h2>
<p class="lede">A little harness wraps the app's own chat provider in the browser, so the UI never knows the difference.</p>

<div class="diagram-chain" style="margin-top:26px">
  <div class="diagram-node blue">
    <div class="icon">💬</div>
    <div class="label">Real chat UI</div>
    <div class="sub">composer, timeline,<br>rubric, all real</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange">
    <div class="icon">🔌</div>
    <div class="label">Harness</div>
    <div class="sub">wraps the provider<br>in the browser</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green">
    <div class="icon">📇</div>
    <div class="label">Canned replies</div>
    <div class="sub">scripted specialist<br>&amp; evaluator answers</div>
  </div>
</div>

<div class="grid-2" style="margin-top:26px;gap:22px">
  <div class="card" style="border-top:3px solid var(--purple)">
    <h3 class="purple">What gets faked</h3>
    <ul class="feature-list" style="font-size:20px;margin-top:6px">
      <li><span class="icon">🎭</span><span>Who should answer (the routing)</span></li>
      <li><span class="icon">🗣️</span><span>Each specialist's reply</span></li>
      <li><span class="icon">📊</span><span>The evaluator's rubric score</span></li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid var(--accent)">
    <h3 class="accent">What stays real</h3>
    <ul class="feature-list" style="font-size:20px;margin-top:6px">
      <li><span class="icon">🧩</span><span>The messages, saved through the real API</span></li>
      <li><span class="icon">🖥️</span><span>The timeline, avatars, rubric bars</span></li>
      <li><span class="icon">✅</span><span>Everything the learner actually sees</span></li>
    </ul>
  </div>
</div>

</div>

<!--
PRESENTER NOTES, HARNESS
- The neat idea: the app exposes its chat provider on window. The harness wraps three hooks: orchestrateChannelMessage (routing), sendMessageWithTools (specialist + evaluator turns), and onEvent (the stream).
- Faked: the routing decision, each specialist reply (from a scripted responseBySpecialistId map), and the evaluator's rubric JSON.
- Real: the messages are still persisted through the real chat_v2 RPC, so the real timeline, avatars, and rubric widgets render exactly as a learner sees them. Model tag is literally 'e2e-harness', provider 'e2e'.
- So we exercise the entire chat experience and never call a paid model.
-->

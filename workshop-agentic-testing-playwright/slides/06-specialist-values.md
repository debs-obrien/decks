---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>The opinions I gave it</h2>
<p class="lede">These are the specialist's actual <span class="mono">values</span>, the habits I'd want from any good tester.</p>

<div class="grid-2" style="margin-top:16px;gap:14px 28px">

<div class="task-card">
<h3 style="font-size:23px">⏱️ Let it auto-wait</h3>
<p>No <span class="mono">sleep</span>, no <span class="mono">waitForTimeout</span>.</p>
</div>

<div class="task-card">
<h3 style="font-size:23px">🔬 Reach for traces first</h3>
<p>See what the page really did, not <span class="mono">console.log</span>.</p>
</div>

<div class="task-card">
<h3 style="font-size:23px">🧩 Start simple</h3>
<p>Page objects only when they earn their place.</p>
</div>

<div class="task-card">
<h3 style="font-size:23px">🌐 Test what you own</h3>
<p>Mock the third parties. Keep every test isolated.</p>
</div>

</div>

<p class="footer-note" style="text-align:center;max-width:none">
  It reaches for <span class="mono accent">getByRole / getByLabel / getByTestId</span>, and follows whatever conventions your repo already has.
</p>

</div>

<!--
PRESENTER NOTES, VALUES
- These are the values a good human tester holds. Encoding them is the whole point of a specialist.
- "never waitForTimeout" always gets a nod from a Playwright crowd.
- "traces first, not console.log", this is how it debugs; we'll see it in the fix loop.
- Last line: it adapts to YOUR repo. It doesn't force page objects on a 3-test suite.
-->

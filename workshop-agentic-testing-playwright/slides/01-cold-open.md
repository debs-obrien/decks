---
layout: default
class: devsum-slide
---

<div class="slide-inner center">

<p style="font-size:26px;color:var(--text-dim);margin:0 0 22px">This all happened overnight, while I was asleep:</p>

<div style="display:flex;gap:16px;justify-content:center;align-items:stretch;flex-wrap:wrap;max-width:1100px;margin:0 auto">

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Found</span>
    <h3 style="font-size:24px">A real bug</h3>
    <p style="font-size:19px">Drove the real app and reproduced it.</p>
  </div>

  <div class="diagram-arrow" style="font-size:30px">→</div>

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--purple)">
    <span class="task-id" style="color:var(--purple)">Filed</span>
    <h3 style="font-size:24px">Issue #5539</h3>
    <p style="font-size:19px">With repro steps and a root-cause guess.</p>
  </div>

  <div class="diagram-arrow" style="font-size:30px">→</div>

  <div class="task-card" style="flex:1;text-align:left;border-left:4px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Fixed</span>
    <h3 style="font-size:24px">PR #5540 merged</h3>
    <p style="font-size:19px">The fix, before/after proof, a test.</p>
  </div>

</div>

<p style="font-size:34px;line-height:1.15;font-weight:800;max-width:1000px;margin:34px auto 0">
  Let me show you how this works, <br>and <span class="orange">where it still falls over.</span>
</p>

</div>

<!--
PRESENTER NOTES, COLD OPEN
- This is the hook. Real issue #5539 -> real merged PR #5540, both authored by the bot.
- Say plainly: "no human wrote the issue or the fix. Playwright over CDP found it, reproduced it, fixed it."
- Do NOT oversell. The honest half of the sentence ("where it falls apart") is the promise that earns the keynote.
- We'll come back to this exact bug near the end, it has a twist.
-->

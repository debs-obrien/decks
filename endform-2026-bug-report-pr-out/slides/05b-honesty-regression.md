---
layout: default
class: devsum-slide
---

<div class="slide-inner center honesty-one">

<span class="badge badge-blue" style="font-size:15px;padding:6px 14px;margin-bottom:16px">honesty · 2 of 3</span>

<p style="font-size:44px;font-weight:850;line-height:1.12;max-width:980px;margin:0 auto 16px">
  Regression ships with the fix.
</p>

<p style="font-size:26px;color:var(--text-dim);max-width:860px;margin:0 auto;line-height:1.35">
  Same PR. Patch plus
  <span class="mono accent">movie-link-accessible-name.spec.ts</span>.
  Leave a test, not a story.
</p>

<p style="font-size:22px;color:var(--text-dim);max-width:900px;margin:22px auto 0;line-height:1.4">
  Then make sure it fails on the old code. Mine didn&rsquo;t at first.<br>
  Spec tightened in #94, now on main: <span class="mono" style="color:#f87171">5 failed</span> before the fix, <span class="mono accent">5 passed</span> after.
</p>

</div>

<!--
PRESENTER NOTES: HONESTY 2 (~20s)
- The PR is not done when the UI looks fixed. The regression is part of the fix.
- Honest bit: the first spec in #93 checked the first card before its poster loaded, so it passed even on the old code.
- PR #94 tightened it: Superman card, waits for the poster. It's merged, so the spec is on main.
- qa's own run with --repeat-each=5: pre-fix e628ea9 5 failed, main 5 passed. The #93 pair (this spec + movie-list): 3 passed. The single spec: 1 passed.
-->

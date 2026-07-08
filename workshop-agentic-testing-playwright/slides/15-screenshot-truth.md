---
layout: default
class: devsum-slide
---

<div class="slide-inner center">

<span class="badge badge-red" style="font-size:16px;padding:6px 16px;margin-bottom:20px">the rule I'd fight for</span>

<p style="font-size:46px;color:var(--text);font-weight:800;margin:0 auto 22px;line-height:1.14;max-width:1080px">
  The <span class="mono red">"before"</span> shot has to be<br>the <span class="accent">real</span> broken state.
</p>

<p style="font-size:27px;line-height:1.45;color:var(--text-dim);max-width:960px;margin:0 auto">
  Not a tidy screenshot from the fixed branch, relabelled "before."
  Agents are a bit too good at making those look convincing.
</p>

</div>

<!--
PRESENTER NOTES, SCREENSHOT TRUTH
- This is the honesty-of-AI keynote moment. Slow down.
- Enforced in the skill, the reference doc, AND the PR template, three places, on purpose.
- The failure mode: an agent generates a plausible "before" from the already-fixed branch. It looks perfect and it's a lie.
- The fix: the before-shot must come from a genuinely reproduced failing state, captured before the code changes.
- Tie back: this is why "reproduce before you fix" is rule #1, no repro, no honest before.
-->

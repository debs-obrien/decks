---
layout: default
class: devsum-slide hero
---

<div class="slide-inner">

<h2>PR #5540: here's the proof</h2>
<p class="lede">Real screenshots the agent took over CDP. Left: the bug. Right: the fix.</p>

<div class="ba-grid">
  <div class="ba-col">
    <div class="code-label before" style="display:block;text-align:center;border-radius:8px 8px 0 0">BEFORE: dialog pops up after a clean save</div>
    <img src="../public/images/cdp-5540-before.png" alt="Before fix: spurious unsaved-changes dialog appears after a successful save" />
  </div>
  <div class="ba-col">
    <div class="code-label after" style="display:block;text-align:center;border-radius:8px 8px 0 0">AFTER: saves quietly, no dialog</div>
    <img src="../public/images/cdp-5540-after.png" alt="After fix: save proceeds silently, URL updates, no dialog" />
  </div>
</div>

<p class="footer-note" style="text-align:center;max-width:none">
  And it checked the flip side too: a real unsaved change <span class="accent">still</span> warns you. It only stopped the false alarm.
</p>

</div>

<style>
.ba-grid { display:grid; grid-template-columns:1fr 1fr; gap:22px; max-width:1080px; margin:14px auto 0; }
.ba-col img { width:100%; border-radius:0 0 10px 10px; border:1px solid var(--code-border); border-top:none; display:block; }
</style>

<!--
PRESENTER NOTES, BEFORE/AFTER
- These are the genuine PNGs from PR #5540's CDP Verification section. Not mockups.
- Left: after clicking Save, the workflow IS saved (sidebar row, Save disabled) but the "Unsaved changes" dialog wrongly appears.
- Right: same flow, fix applied, dialog gone, URL updated to /workflows/wf_<id>.
- The regression guard line matters: it proves the agent didn't just suppress the dialog everywhere, the legitimate guard still fires. That's the difference between a fix and papering over.
- Root cause (if asked): useBlocker read a stale render-closure snapshot of hasUnsavedChanges; fix reads the live store via getState().
-->

---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="badge badge-purple" style="font-size:14px;padding:5px 14px;margin-bottom:8px">channel case</span>

<h2 style="font-size:36px;margin-bottom:4px">Home proof-band + smarter CI</h2>
<p class="lede" style="margin-bottom:10px">Same story. Cheaper paint. Checks that earn their keep.</p>

<div class="diagram-chain" style="margin:0;gap:10px;align-items:stretch">
  <div class="diagram-node orange" style="min-height:210px;padding:16px 14px;flex:1">
    <div class="label" style="font-size:18px;margin-bottom:8px">1 · Spot</div>
    <div class="sub" style="font-size:18px;line-height:1.35;margin:0">Lighthouse + QA: card strip still pulls huge <span class="mono">hqdefault</span> thumbs. CI runs too much for tiny edits.</div>
  </div>
  <div class="diagram-arrow" style="font-size:24px">→</div>
  <div class="diagram-node blue" style="min-height:210px;padding:16px 14px;flex:1">
    <div class="label" style="font-size:18px;margin-bottom:8px">2 · Decide</div>
    <div class="sub" style="font-size:18px;line-height:1.35;margin:0">Design keeps the layout. Engineer sizes assets only. Selective CI, phase by phase.</div>
  </div>
  <div class="diagram-arrow" style="font-size:24px">→</div>
  <div class="diagram-node green" style="min-height:210px;padding:16px 14px;flex:1">
    <div class="label" style="font-size:18px;margin-bottom:8px">3 · Ship</div>
    <div class="sub" style="font-size:18px;line-height:1.35;margin:0"><span class="mono">mqdefault</span> + srcset. Faster LCP. Smarter checks.</div>
  </div>
</div>

</div>

<!--
PRESENTER NOTES: CASE PROOFBAND + CI
- Issues #617 to #620 in notes only.
- Optional tiny nod if asked: /talks → /speaking + sitemap.
- Skip typo patrols on stage.
-->

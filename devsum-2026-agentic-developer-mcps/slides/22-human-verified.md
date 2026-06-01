---
layout: default
class: devsum-slide hero
---

<div class="slide-inner">

<h2>Then I verified it on a real running app</h2>
<p class="lede">The screenshots I posted in the PR comment before approving. Both states.</p>

<div class="two-shot">
  <div>
    <p class="small dim" style="margin:0 0 6px">❌ Members API failed — error state</p>
    <img src="../public/images/pr-4626-error-state.png" alt="New DM dialog error state" />
  </div>
  <div>
    <p class="small dim" style="margin:0 0 6px">✅ Try again clicked — recovered</p>
    <img src="../public/images/pr-4626-recovered.png" alt="New DM dialog recovered" />
  </div>
</div>

<p class="footer-note" style="text-align:center;max-width:none">
  Agent shipped what it could prove. I shipped what it couldn’t. <span class="accent bold">Both layers visible in one PR.</span>
</p>

</div>

<style>
.two-shot {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 1020px;
  margin: 0 auto;
}
.two-shot img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--code-border);
}
</style>

<!--
PRESENTER NOTES — HUMAN VERIFIED
- This is YOUR contribution. Own it on stage.
- Land "both layers visible in one PR".
- Bridge: "what does this pattern look like outside Tauri-CDP land?"
-->

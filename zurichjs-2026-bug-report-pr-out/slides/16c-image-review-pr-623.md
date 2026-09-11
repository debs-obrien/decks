---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Review · PR fix still needs eyes</div>
<img src="../public/images/review-pr-623-ultrareview.png" alt="Second-pass review of the mobile drawer PR: focus loss on open, duplicate controls during close, dead aria-expanded" class="shot" />

</div>

<style>
.image-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 0;
  height: 100%;
}
.shot-badge {
  display: inline-flex;
  font-size: 16px;
  font-weight: 700;
  color: #f9a8d4;
  background: rgba(236, 72, 153, 0.12);
  border: 1px solid rgba(236, 72, 153, 0.35);
  padding: 6px 14px;
  border-radius: 999px;
}
.shot {
  width: 100%;
  max-width: 1080px;
  max-height: 540px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--code-border);
  box-shadow: 0 24px 70px rgba(0,0,0,.45);
}
</style>

<!--
PRESENTER NOTES: ULTRAREVIEW (~25s)
- Same PR, deeper pass. Focus loss, close-transition double controls, dead aria-expanded.
- Agents write the PR. You (or a second review) still decide merge.
- Then cut to takeaways.
-->

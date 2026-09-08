---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Files changed · TheTopBar.vue</div>
<img src="../public/images/fix-pr-623-files-thetopbar.png" alt="GitHub diff for TheTopBar.vue hiding header toggle while menu open" class="shot" />

</div>

<style>
.image-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 74vh;
}
.shot-badge {
  display: inline-flex;
  font-size: 16px;
  font-weight: 700;
  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.14);
  border: 1px solid rgba(124, 58, 237, 0.35);
  padding: 6px 14px;
  border-radius: 999px;
}
.shot {
  width: 100%;
  max-width: 1080px;
  max-height: 620px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--code-border);
  box-shadow: 0 24px 70px rgba(0,0,0,.45);
}
</style>

<!--
PRESENTER NOTES — THETOPBAR DIFF (≈30s)
- One-file fix: v-show="!isOpen" on header toggle; aria-label stays Open menu.
- Copilot review comment is fine to mention: humans still read AI review.
-->

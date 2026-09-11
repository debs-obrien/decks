---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Human review · a11y</div>
<img src="../public/images/review-fix-correct-a11y-regression.png" alt="Agent review says the fix is correct, then flags a keyboard a11y regression: focus drops when the menu opens" class="shot" />

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
  color: #fcd34d;
  background: rgba(234, 179, 8, 0.14);
  border: 1px solid rgba(234, 179, 8, 0.35);
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
PRESENTER NOTES: REVIEW A11Y (~25s)
- Agents prepared the PR. Green CI. Still not done.
- Point at the warning: focus drops to body. Tab thirty times. Never hits the X.
- That's why you still merge. Second eyes catch what the first pass shipped.
-->

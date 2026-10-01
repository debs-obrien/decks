---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Regression · movie-link-accessible-name.spec.ts</div>
<img src="../public/images/09-regression-spec.png" alt="Playwright regression test asserting title-only accessible names" class="shot" />

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
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.14);
  border: 1px solid rgba(59, 130, 246, 0.35);
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
PRESENTER NOTES: REGRESSION (~25s)
- tests/logged-out/movie-link-accessible-name.spec.ts
- Exact title match + no poster/rating/CSS pollution.
- Green local run: 1 passed (see evidence/09-test-green.log).
-->

---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Fix PR #93 · draft · linked #92</div>
<img src="../public/images/06-pr-93-card.png" alt="Draft GitHub pull request 93 fixing movie card accessible names" class="shot" />

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
  color: #86efac;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.35);
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
PRESENTER NOTES: FIX PR (~25s)
- Draft on purpose. Agent stops at human merge.
- Summary: exact title locators, repro before code, regression test.
-->

---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Fix PR #93 · merged · 2 commits · closes #92</div>
<div class="shot-zoom zoom-pr">
  <img src="../public/images/06-pr-93-merged.png" alt="Merged GitHub pull request 93: movie card links use title-only accessible names" />
</div>

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
.shot-zoom {
  position: relative;
  width: 100%;
  max-width: 1120px;
  height: 520px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--code-border);
  box-shadow: 0 24px 70px rgba(0,0,0,.45);
  background: #0b1020;
}
.shot-zoom img {
  position: absolute;
  max-width: none;
  max-height: none;
}
.zoom-pr img {
  width: 116.3%;
  left: -7.0%;
  top: -31.3%;
}
</style>

<!--
PRESENTER NOTES: FIX PR (~20s)
- The agent opened it as a draft on purpose and stopped there. This is it now, merged.
- 2 commits, 6 files. The second commit updated two logged-in list specs after CI flagged the old link names.
- Summary: exact title locators, repro before code, regression test.
-->

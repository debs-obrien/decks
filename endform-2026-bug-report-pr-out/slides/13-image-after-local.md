---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge after-badge">AFTER · local PR #93 preview · exact → 1</div>
<img src="../public/images/07-after-title-only-name.png" alt="Local PR 93 preview showing Superman link accessible name is title only" class="shot" />

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
  padding: 6px 14px;
  border-radius: 999px;
}
.after-badge {
  color: #bbf7d0;
  background: rgba(34, 197, 94, 0.14);
  border: 1px solid rgba(34, 197, 94, 0.4);
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
PRESENTER NOTES: AFTER (~25s)
- LOCAL / PR #93 worktree proof. Not live GH Pages.
- Live production still shows the before until Debbie merges #93.
- CLI: getByRole link exact Superman → 1. Accessible name: Superman.
-->

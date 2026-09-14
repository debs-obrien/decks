---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge after-badge">AFTER · single overlay Close menu</div>
<img src="../public/images/after-one-close-menu.png" alt="Mobile menu after fix with a single Close menu control" class="shot phone" />

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
.shot.phone {
  width: auto;
  max-width: 300px;
  max-height: 540px;
  object-fit: contain;
  border-radius: 18px;
  border: 1px solid var(--code-border);
  box-shadow: 0 24px 70px rgba(0,0,0,.45);
}
</style>

<!--
PRESENTER NOTES: AFTER IMAGE (~20s)
- Proof from the fix PR. closeCount: 1.
- Header toggle hidden while open. Overlay X stays.
-->

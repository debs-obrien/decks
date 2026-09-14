---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge before-badge">BEFORE · prod repro · 2 × Close menu</div>
<img src="../public/images/before-two-close-menus.png" alt="Mobile menu on debbie.codes with two Close menu controls highlighted" class="shot phone" />

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
.before-badge {
  color: #fecaca;
  background: rgba(248, 113, 113, 0.14);
  border: 1px solid rgba(248, 113, 113, 0.4);
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
PRESENTER NOTES: BEFORE IMAGE (~30s)
- Production, phone viewport. Overlay X plus header X.
- Both say Close menu. Screen readers hear two dismiss controls.
-->

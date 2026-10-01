---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge before-badge">BEFORE · aria name pollution · Superman</div>
<img src="../public/images/before-movie-link-a11y-desktop.png" alt="Superman movie card with overlay showing polluted accessible name and CSS textContent" class="shot" />

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
PRESENTER NOTES: BEFORE (~30s)
- One-liner: announces "poster of Superman Superman rating" (sometimes CSS soup) instead of just the title.
- Mobile twin also in bag: before-movie-link-a11y-mobile.png. Skip unless you have time.
-->

---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Also in the hunt · skip if tight · ?page=0</div>
<div class="shot-zoom zoom-page0">
  <img src="../public/images/04-ui-page0-prev-control-forced-visible.png" alt="Pagination control labeled Page 0 forced visible" />
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
  color: #f9a8d4;
  background: rgba(219, 39, 119, 0.14);
  border: 1px solid rgba(219, 39, 119, 0.4);
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
.zoom-page0 img {
  width: 160%;
  left: 0%;
  top: -55%;
}
</style>

<!--
PRESENTER NOTES: ALT FIND page=0 (~15s, skippable)
- Secondary only. Spine stays Superman movie-link-accessible-name.
- /?category=Popular&page=0 hangs on "Please wait a moment. Movies".
- Skip if time is tight (run sheet).
-->

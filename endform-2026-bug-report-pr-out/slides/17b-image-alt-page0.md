---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Also in the hunt · skip if tight · ?page=0</div>

<div class="p0-grid">
  <div class="p0-col">
    <div class="shot-zoom p0-zoom zoom-page0">
      <img src="../public/images/04-ui-page0-prev-control-forced-visible.png" alt="Page 1 with its hidden previous link labeled Page 0 forced visible" />
    </div>
    <p class="p0-cap">Page 1 has a hidden link to &ldquo;Page 0&rdquo;</p>
  </div>
  <div class="p0-col">
    <div class="shot-zoom p0-zoom zoom-page0-blank">
      <img src="../public/images/04b-ui-page0-blank-live.png" alt="The ?page=0 page on live, empty after 10 seconds" />
    </div>
    <p class="p0-cap">After 10 s: no movies. Tab title stuck on &ldquo;Please wait a moment. Movies&rdquo;</p>
  </div>
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
.p0-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  width: 100%;
  max-width: 1120px;
}
.p0-col { min-width: 0; }
.shot-zoom.p0-zoom { height: 430px; }
.p0-cap {
  margin: 10px 0 0;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: var(--text);
}
.zoom-page0 img {
  width: 285.7%;
  left: 0%;
  top: -128.8%;
}
.zoom-page0-blank img {
  width: 125%;
  left: -12.5%;
  top: 0%;
}
</style>

<!--
PRESENTER NOTES: ALT FIND page=0 (~15s, skippable)
- Secondary only. Spine stays Superman movie-link-accessible-name.
- /?category=Popular&page=0 hangs on "Please wait a moment. Movies" with an empty page. Still broken on live (checked 9 Nov).
- Left: the hidden Page 0 link on page 1. Right: live ?page=0 after 10 seconds, no movies.
- Skip if time is tight (run sheet).
-->

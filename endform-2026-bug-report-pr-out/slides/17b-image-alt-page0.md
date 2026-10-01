---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Also in the hunt · Alt find · ?page=0</div>
<img src="../public/images/04-ui-page0-prev-control-forced-visible.png" alt="Pagination control labeled Page 0 forced visible on Popular movies page" class="shot" />

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
PRESENTER NOTES: ALT FIND page=0 (~15s, skip if running long)
- Secondary only. Spine stays Superman movie-link-accessible-name.
- /?category=Popular&page=0 → stuck title "Please wait a moment. Movies", empty main.
- Hidden prev on page 1 is labeled Page 0 (forced visible here). Deferred vs primary a11y story.
-->

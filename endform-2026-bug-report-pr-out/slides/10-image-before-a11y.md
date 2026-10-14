---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge before-badge">BEFORE · live · aria name pollution</div>

<div class="shot-frame">
  <div class="shot-zoom zoom-before-full">
    <img src="../public/images/before-movie-link-a11y-desktop.png" alt="Superman card with polluted accessible name overlay" />
  </div>
  <div class="shot-callout callout-bad">
    <span class="callout-kicker">accessible name</span>
    <code>poster of Superman Superman rating</code>
  </div>
</div>

</div>

<style>
.image-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
.shot-frame {
  position: relative;
  width: 100%;
  max-width: 1120px;
}
.shot-zoom {
  position: relative;
  width: 100%;
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
.zoom-before-full img {
  width: 145%;
  left: -28%;
  top: -8%;
}
.shot-callout {
  position: absolute;
  left: 18px;
  bottom: 18px;
  max-width: 72%;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(8, 10, 18, 0.92);
  border: 1px solid rgba(248, 113, 113, 0.55);
  box-shadow: 0 12px 30px rgba(0,0,0,.45);
}
.callout-kicker {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fca5a5;
  margin-bottom: 4px;
}
.shot-callout code {
  font-size: 20px;
  font-weight: 750;
  color: #fecaca;
  background: transparent;
  padding: 0;
}
</style>

<!--
PRESENTER NOTES: BEFORE (~30s)
- Zoom on Superman. Read the callout out loud.
- Live production still looks like this until #93 merges.
- Mobile twin in bag if you want a quick aside.
-->

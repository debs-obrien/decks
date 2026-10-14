---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Diff · MovieListItem · one line that names the link</div>

<div class="shot-frame">
  <div class="shot-zoom zoom-diff">
    <img src="../public/images/08-diff-MovieListItem.png" alt="Diff adding aria-label movie.title on PosterLink" />
  </div>
  <div class="shot-callout callout-diff">
    <span class="callout-kicker">the fix</span>
    <code>aria-label=&#123;movie.title&#125;</code>
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
  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.14);
  border: 1px solid rgba(124, 58, 237, 0.35);
  padding: 6px 14px;
  border-radius: 999px;
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
.zoom-diff img {
  width: 165%;
  left: -8%;
  top: -22%;
}
.shot-callout {
  position: absolute;
  right: 18px;
  bottom: 18px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(8, 10, 18, 0.94);
  border: 1px solid rgba(134, 239, 172, 0.55);
  box-shadow: 0 12px 30px rgba(0,0,0,.45);
}
.callout-kicker {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #86efac;
  margin-bottom: 4px;
}
.shot-callout code {
  font-size: 22px;
  font-weight: 800;
  color: #bbf7d0;
  background: transparent;
  padding: 0;
}
</style>

<!--
PRESENTER NOTES: DIFF (~25s)
- movies-app/components/MovieList/MovieListItem/index.js
- Point at aria-label={movie.title}. That is the whole punchline.
DEMO fallback: if local build fails, this slide + regression slide carry the after story.
-->

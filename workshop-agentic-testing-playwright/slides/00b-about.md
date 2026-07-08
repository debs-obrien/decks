---
layout: default
class: devsum-slide
---

<div class="slide-inner about-slide">
<div class="about-grid">
<div class="about-photo">
<img src="../public/images/debbie.png" alt="Debbie O'Brien" />
</div>
<div class="about-text">
<span class="title-badge">Hi, I'm</span>
<h1>Debbie O&rsquo;Brien</h1>
<p class="about-role">Platform Engineer, Applied AI &middot; Zephyr Cloud</p>
<ul class="feature-list about-list">
<li><span class="icon">🧪</span><span>I spend my days deep in <span class="bold">testing &amp; agents</span></span></li>
<li><span class="icon">🤝</span><span>Big believer in <span class="bold">open source</span> and community</span></li>
<li><span class="icon">🎤</span><span>Love sharing the <span class="bold">honest</span> version of what I build</span></li>
</ul>
<div class="about-links">
<span class="thank-link">debbie.codes</span>
<span class="thank-link">github / debs-obrien</span>
<span class="thank-link">x / debs_obrien</span>
</div>
</div>
</div>
</div>

<style>
.about-slide {
  display: flex;
  align-items: center;
  min-height: 74vh;
}
.about-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 56px;
  align-items: center;
  width: 100%;
}
.about-photo {
  display: flex;
  justify-content: center;
}
.about-photo img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--purple);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.35);
}
.about-text .title-badge {
  margin-bottom: 14px;
}
.about-text h1 {
  font-size: 52px;
  margin: 0 0 6px;
  letter-spacing: -1px;
}
.about-role {
  font-size: 23px;
  color: var(--text-dim);
  margin: 0 0 22px;
}
.about-list {
  font-size: 22px;
  gap: 12px;
}
.about-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}
</style>

<!--
PRESENTER NOTES, ABOUT
- Keep this short, 20-30 seconds. People came for the content, not the CV.
- One line on who you are, one line on why you care about honest testing with agents.
- Photo is pulled from your GitHub avatar (public/images/debbie.png). Swap the file if you want a different shot.
-->

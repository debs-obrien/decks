---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge" style="margin-bottom:10px">The loop</span>
<h2 style="font-size:36px;margin-bottom:6px">Same shape every time</h2>
<p class="lede" style="margin:0">Evidence in. Reviewable PR out.</p>

<div class="loop-grid">
  <div class="loop-step purple">
    <div class="n">01</div>
    <div class="label">Discover</div>
    <div class="sub">crawl + a11y</div>
  </div>
  <div class="loop-step blue">
    <div class="n">02</div>
    <div class="label">Issue</div>
    <div class="sub">only if gates pass</div>
  </div>
  <div class="loop-step orange">
    <div class="n">03</div>
    <div class="label">Reproduce</div>
    <div class="sub">before any code</div>
  </div>
  <div class="loop-step purple">
    <div class="n">04</div>
    <div class="label">Fix</div>
    <div class="sub">smallest change</div>
  </div>
  <div class="loop-step green">
    <div class="n">05</div>
    <div class="label">Verify</div>
    <div class="sub">before / after</div>
  </div>
  <div class="loop-step accent">
    <div class="n">06</div>
    <div class="label">PR</div>
    <div class="sub">ship the proof</div>
  </div>
</div>

<div class="task-card" style="border-left:4px solid var(--accent);margin:18px auto 0;max-width:980px">
  <span class="task-id" style="color:var(--accent)">If honesty fails</span>
  <p style="font-size:22px;margin:0">The loop <span class="bold">stops</span>. Candidate file, or no PR. Not a fake win.</p>
</div>

</div>

<style>
.loop-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 22px;
  width: 100%;
}
.loop-step {
  min-width: 0;
  overflow: hidden;
  background: var(--surface);
  border: 2px solid var(--code-border);
  border-radius: 14px;
  padding: 18px 16px 16px;
  text-align: center;
}
.loop-step .n {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--text-dim);
  margin-bottom: 8px;
}
.loop-step .label {
  font-size: 23px;
  font-weight: 850;
  line-height: 1.15;
  color: var(--text);
  overflow-wrap: anywhere;
}
.loop-step .sub {
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.3;
  color: var(--text-dim);
  overflow-wrap: anywhere;
}
.loop-step.purple { border-color: var(--purple); }
.loop-step.blue { border-color: var(--blue); }
.loop-step.orange { border-color: var(--orange); }
.loop-step.green { border-color: var(--accent); }
.loop-step.accent { border-color: var(--accent); }
</style>

<!--
PRESENTER NOTES: DIAGRAM LOOP (~50s)
- Walk the six boxes once. Finger on Reproduce. That's the hinge.
- Tonight we watch every step with a real screenshot.
-->

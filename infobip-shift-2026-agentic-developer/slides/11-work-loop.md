---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge" style="margin-bottom:8px">The loop</span>
<h2 style="font-size:34px;margin-bottom:4px">Two jobs. Same shape every time.</h2>
<p class="lede" style="margin:0 0 14px">Hunt finds. Fix ships proof. You still merge.</p>

<div class="job-block">
  <div class="job-label purple">site-bug-hunt</div>
  <div class="job-steps">
    <div class="loop-step purple">
      <div class="n">01</div>
      <div class="label">Discover</div>
      <div class="sub">priority journeys · a11y snaps</div>
    </div>
    <div class="job-arrow">→</div>
    <div class="loop-step blue">
      <div class="n">02</div>
      <div class="label">Candidates</div>
      <div class="sub">qa/bug-candidates · default</div>
    </div>
    <div class="job-arrow">→</div>
    <div class="loop-step orange">
      <div class="n">03</div>
      <div class="label">Issue?</div>
      <div class="sub">gates pass or you elevate</div>
    </div>
  </div>
</div>

<div class="job-block" style="margin-top:12px">
  <div class="job-label green">site-bugfix</div>
  <div class="job-steps">
    <div class="loop-step orange">
      <div class="n">04</div>
      <div class="label">Reproduce</div>
      <div class="sub">before any code</div>
    </div>
    <div class="job-arrow">→</div>
    <div class="loop-step purple">
      <div class="n">05</div>
      <div class="label">Fix</div>
      <div class="sub">smallest change</div>
    </div>
    <div class="job-arrow">→</div>
    <div class="loop-step green">
      <div class="n">06</div>
      <div class="label">Verify</div>
      <div class="sub">before / after</div>
    </div>
    <div class="job-arrow">→</div>
    <div class="loop-step accent">
      <div class="n">07</div>
      <div class="label">Draft PR</div>
      <div class="sub">you still merge</div>
    </div>
  </div>
</div>

</div>

<style>
.job-block {
  display: flex;
  align-items: stretch;
  gap: 12px;
  width: 100%;
}
.job-label {
  flex: 0 0 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.01em;
  border-radius: 12px;
  border: 2px solid var(--code-border);
  background: var(--surface);
  padding: 10px 8px;
  line-height: 1.2;
  overflow-wrap: anywhere;
}
.job-label.purple {
  border-color: var(--purple);
  color: #a78bfa;
}
.job-label.green {
  border-color: var(--accent);
  color: var(--accent);
}
.job-steps {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: stretch;
  gap: 8px;
}
.loop-step {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: var(--surface);
  border: 2px solid var(--code-border);
  border-radius: 12px;
  padding: 12px 10px 10px;
  text-align: center;
}
.loop-step .n {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--text-dim);
  margin-bottom: 6px;
}
.loop-step .label {
  font-size: 20px;
  font-weight: 850;
  line-height: 1.1;
  color: var(--text);
  overflow-wrap: anywhere;
}
.loop-step .sub {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.25;
  color: var(--text-dim);
  overflow-wrap: anywhere;
}
.loop-step.purple { border-color: var(--purple); }
.loop-step.blue { border-color: var(--blue); }
.loop-step.orange { border-color: var(--orange); }
.loop-step.green { border-color: var(--accent); }
.loop-step.accent { border-color: var(--accent); }
.job-arrow {
  display: flex;
  align-items: center;
  color: var(--accent);
  font-size: 22px;
  font-weight: 900;
  flex: 0 0 auto;
}
</style>

<!--
PRESENTER NOTES: DIAGRAM LOOP
- Two rows: hunt then fix. Don't mush them into one bot.
- Discover is priority journeys with playwright-cli and a11y snapshots, not a free crawl.
- Candidates are the default. Issues only when gates pass, or you elevate.
- Finger on Reproduce. No product code until that works.
- Draft PR ships the proof. You still merge.
-->

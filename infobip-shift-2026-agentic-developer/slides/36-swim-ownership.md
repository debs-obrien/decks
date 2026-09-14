---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="badge badge-purple" style="font-size:14px;padding:5px 14px;margin-bottom:10px">the team</span>

<h2 style="font-size:34px;margin:0 0 14px">Chief of staff on top. Bots underneath.</h2>

<div class="cos-card">
  <div class="cos-label">Chief of staff</div>
  <div class="cos-sub">Front door. Routes the work. I keep the yes.</div>
</div>

<div class="bot-row">
  <div class="bot-card" style="border-color:var(--blue)">
    <div class="bot-name">Shopping</div>
    <div class="bot-sub">Groceries and household</div>
  </div>
  <div class="bot-card" style="border-color:var(--accent)">
    <div class="bot-name">Coach</div>
    <div class="bot-sub">Gym, meals, habits</div>
  </div>
  <div class="bot-card" style="border-color:var(--purple)">
    <div class="bot-name">Job hunt</div>
    <div class="bot-sub">Roles and applications</div>
  </div>
  <div class="bot-card" style="border-color:var(--orange)">
    <div class="bot-name">Work team</div>
    <div class="bot-sub">Site, QA, code</div>
  </div>
  <div class="bot-card" style="border-color:var(--blue)">
    <div class="bot-name">Content</div>
    <div class="bot-sub">Blog, YouTube, social</div>
  </div>
  <div class="bot-card" style="border-color:var(--accent)">
    <div class="bot-name">Travel</div>
    <div class="bot-sub">Flights and bookings</div>
  </div>
  <div class="bot-card" style="border-color:var(--purple)">
    <div class="bot-name">Home</div>
    <div class="bot-sub">School and bags</div>
  </div>
  <div class="bot-card" style="border-color:var(--orange)">
    <div class="bot-name">Stage</div>
    <div class="bot-sub">Talks and slides</div>
  </div>
</div>

<p style="text-align:center;margin:16px 0 0;font-size:22px;font-weight:700;color:var(--text-dim)">
  One clear job each. Same gate everywhere.
</p>

</div>

<style>
.cos-card {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 16px;
  background: var(--surface);
  border: 2px solid var(--purple);
  border-radius: 16px;
  padding: 22px 28px;
  text-align: center;
  box-shadow: 0 18px 50px rgba(124, 58, 237, 0.18);
}
.cos-label {
  font-size: 32px;
  font-weight: 900;
  line-height: 1.1;
  color: var(--text);
}
.cos-sub {
  margin-top: 8px;
  font-size: 20px;
  line-height: 1.35;
  color: var(--text-dim);
}
.bot-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
.bot-card {
  min-width: 0;
  background: var(--surface);
  border: 2px solid var(--code-border);
  border-left-width: 4px;
  border-radius: 14px;
  padding: 14px 12px;
  text-align: left;
}
.bot-name {
  font-size: 20px;
  font-weight: 850;
  line-height: 1.15;
  color: var(--text);
}
.bot-sub {
  margin-top: 5px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--text-dim);
}
</style>

<!--
PRESENTER NOTES: BOT TEAM (Slidev ~29, after swim proof)
- Zoom out: swim was one life bot. Here's the wider team.
- CoS on top. I still approve. Then PromptQL for taste gate.
- Avoid naming every bot. Selection is enough.
-->

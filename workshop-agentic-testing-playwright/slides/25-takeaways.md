---
layout: default
class: devsum-slide
---

<div class="slide-inner takeaways-slide">

<h2>Four things to take home</h2>

<div class="takeaways-grid">
  <div class="task-card">
    <span class="task-id" style="color:var(--blue)">01</span>
    <h3>Playwright is how an agent sees</h3>
    <p>Locators and snapshots are its eyes on your app.</p>
  </div>
  <div class="task-card">
    <span class="task-id" style="color:var(--purple)">02</span>
    <h3>Give your specialist your values</h3>
    <p>Auto-wait, traces first, start simple, write them down.</p>
  </div>
  <div class="task-card">
    <span class="task-id" style="color:var(--accent)">03</span>
    <h3>Reproduce before you fix</h3>
    <p>And show the proof. "I couldn't" is a fine answer.</p>
  </div>
  <div class="task-card">
    <span class="task-id" style="color:var(--orange)">04</span>
    <h3>Trust the loop, not the agent</h3>
    <p>Agents fill in gaps. Build the guardrails that keep them honest.</p>
  </div>
</div>

</div>

<style>
.takeaways-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 22px;
}
.takeaways-slide .task-card { padding: 18px 24px; }
.takeaways-slide .task-card h3 { font-size: 25px; margin-top: 4px; }
.takeaways-slide .task-card p { font-size: 20px; margin-top: 6px; }
</style>

<!--
PRESENTER NOTES, TAKEAWAYS
- Read each title, one sentence, move on.
- Number 4 is the headline of the whole talk. Say it twice: "trust the loop, not the agent."
- Callback: the loop found a bug it caused (#5369 -> #5539 -> #5540). That's the loop working, honestly.
-->

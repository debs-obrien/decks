---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Project skills vs. global skills</h2>
<p class="lede">Where you put a skill matters — every name + description loads into context.</p>

<div class="card-row">
  <div class="task-card" style="border-left:3px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Project</span>
    <h3><span class="mono">./agents/skills/</span></h3>
    <p>Lives in the repo. Loaded when working in that codebase.</p>
    <p><span class="accent bold">e.g.</span> <span class="mono">add-content</span> — only useful for <span class="mono">debbie.codes</span>.</p>
  </div>
  <div class="task-card" style="border-left:3px solid var(--purple)">
    <span class="task-id" style="color:var(--purple)">Global</span>
    <h3><span class="mono">~/.agents/skills/</span></h3>
    <p>Loaded in every session, every repo. Pay the context cost everywhere.</p>
    <p><span class="accent bold">e.g.</span> <span class="mono">playwright-cli</span> — useful anywhere you need a browser.</p>
  </div>
</div>

<p class="footer-note">Works in Copilot, Claude, Cursor, Goose — anything that speaks the agent-skills spec.</p>

</div>

<!--
PRESENTER NOTES — LOCATION
- Land the inclusivity line at the bottom — keeps Goose users, Cursor users, Claude users in the tent.
-->

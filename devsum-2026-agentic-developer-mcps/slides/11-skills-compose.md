---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Skills compose</h2>
<p class="lede">A skill can call other skills. And reach for MCP servers when it needs to.</p>

<div class="card-row">
  <div class="task-card" style="border-left:3px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Skill</span>
    <h3><span class="mono">add-content</span></h3>
    <p>The orchestrator.</p>
  </div>
  <div class="task-card" style="border-left:3px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Skill</span>
    <h3><span class="mono">playwright-cli</span></h3>
    <p>Drives the browser. Reused.</p>
  </div>
  <div class="task-card" style="border-left:3px solid var(--purple)">
    <span class="task-id" style="color:var(--purple)">MCP</span>
    <h3><span class="mono">cloudinary · github</span></h3>
    <p>When the tool isn’t a CLI.</p>
  </div>
</div>

<p class="footer-note">
  <span class="accent bold">Skill</span> when the tool has a CLI you can script. <span class="accent bold">MCP</span> when there isn’t one. Skills are cheaper on context.
</p>

</div>

<!--
PRESENTER NOTES — COMPOSE
- This slide answers the most-asked question: "skill or MCP?"
- Cloudinary doesn't have a real CLI — that's why it's an MCP. Concrete example.
- Bridge: "OK, you've seen the pattern on a tiny personal site. Now let's see what happens when the stakes are real."
-->

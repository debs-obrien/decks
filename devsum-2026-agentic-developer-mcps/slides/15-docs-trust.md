---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>What made the docs trustworthy?</h2>
<p class="lede">The same thing that makes the bugfix workflow trustworthy: evidence.</p>

<div class="card-stack" style="max-width:1040px;margin-top:18px">
  <div class="task-card" style="border-left:5px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">01 · Source-grounded</span>
    <h3>The agent reads the codebase</h3>
    <p>It learns the real product shape from files, routes, components, and existing docs conventions.</p>
  </div>
  <div class="task-card" style="border-left:5px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">02 · UI-grounded</span>
    <h3>The screenshots come from the running app</h3>
    <p>No fake product screenshots. No stale Figma. The agent captures what users actually see.</p>
  </div>
  <div class="task-card" style="border-left:5px solid var(--purple)">
    <span class="task-id" style="color:var(--purple)">03 · Preview-grounded</span>
    <h3>Every change has a URL</h3>
    <p>A human reviews rendered docs, not markdown diffs in isolation.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — DOCS TRUST
- This is the bridge to bugfix. The mechanism is different; the trust model is the same.
- Key line: "The more reviewable the artifact, the more useful the agent."
- Next slide raises the stakes again: docs are product work; bugfix is production QA.
-->

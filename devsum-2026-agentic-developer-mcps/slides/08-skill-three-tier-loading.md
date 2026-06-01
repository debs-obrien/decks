---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Three-tier loading</h2>
<p class="lede">The agent does not read every skill all the time. Context is expensive.</p>

<div class="card-row" style="margin-top:32px">
  <div class="task-card" style="border-left:4px solid var(--purple)">
    <span class="task-id" style="color:var(--purple)">Tier 1 · Always</span>
    <h3>Name + description</h3>
    <p>Enough to know the skill exists.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Tier 2 · On trigger</span>
    <h3>SKILL.md body</h3>
    <p>The playbook loads only when matched.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Tier 3 · On demand</span>
    <h3>References</h3>
    <p>Only the branch you need gets loaded.</p>
  </div>
</div>

<p style="font-size:34px;line-height:1.22;font-weight:800;max-width:940px;margin:46px auto 0;text-align:center;color:var(--text)">
  Design skills like an API:<br>
  <span class="accent">tiny public surface, implementation paged in.</span>
</p>

</div>

<!--
PRESENTER NOTES — THREE-TIER LOADING
- The agent does NOT read every skill file. That's the important bit.
- Name + description is discovery. Body is instructions. References are lazy-loaded.
- Land the API analogy.
-->

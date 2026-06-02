---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>How skills get loaded</h2>
<p class="lede">The agent does not read every skill all the time. It discovers, triggers, then loads details only when needed.</p>

<div style="display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:center;margin-top:18px">
  <div>
    <img src="../public/images/skills-blog/skill-loading.png" alt="How skills get loaded" class="no-frame" style="width:100%;border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.35)" />
  </div>
  <div>
    <div class="task-card" style="border-left:4px solid var(--purple);margin-bottom:14px">
      <span class="task-id" style="color:var(--purple)">1 · Discover</span>
      <p>The agent sees the skill name and description.</p>
    </div>
    <div class="task-card" style="border-left:4px solid var(--blue);margin-bottom:14px">
      <span class="task-id" style="color:var(--blue)">2 · Trigger</span>
      <p>If the user request matches, the skill body loads.</p>
    </div>
    <div class="task-card" style="border-left:4px solid var(--accent)">
      <span class="task-id" style="color:var(--accent)">3 · Expand</span>
      <p>Reference files and tools load only when the workflow needs them.</p>
    </div>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — HOW SKILLS LOAD
- This helps people who are new to skills understand why they are not just giant prompts.
- Use the visual from the beginner guide, then summarise with discover -> trigger -> expand.
- Bridge: "Now let's look at the smallest possible skill."
-->

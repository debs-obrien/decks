---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">What&rsquo;s a skill? · <span class="mono">site-bug-hunt/SKILL.md</span></div>
<img src="../public/images/skill-site-bug-hunt.png" alt="GitHub view of site-bug-hunt SKILL.md in debbie.codes" class="shot" />

</div>

<style>
.image-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 0;
  height: 100%;
}
.shot-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.14);
  border: 1px solid rgba(124, 58, 237, 0.35);
  padding: 6px 14px;
  border-radius: 999px;
}
.shot-badge .mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-weight: 600;
  font-size: 15px;
}
.shot {
  width: 100%;
  max-width: 1080px;
  max-height: 540px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--code-border);
  box-shadow: 0 24px 70px rgba(0,0,0,.45);
}
</style>

<!--
PRESENTER NOTES: WHAT'S A SKILL (HUNT) (~30–45s)
- A skill is a real file in the repo. Not a vibes prompt in chat.
- Point at the path: .agents/skills/site-bug-hunt/SKILL.md
- Frontmatter name + description tell the agent when to pick it up.
- Punch: find and document. Do not change product code. Hand off to fix.
-->

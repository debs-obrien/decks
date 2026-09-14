---
layout: default
class: devsum-slide hero
---

<div class="slide-inner image-slide">

<div class="shot-badge">Fix skill · same shape, different job</div>
<img src="../public/images/skill-site-bugfix.png" alt="GitHub view of site-bugfix SKILL.md in debbie.codes" class="shot" />

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
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #86efac;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.35);
  padding: 6px 14px;
  border-radius: 999px;
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
PRESENTER NOTES: FIX SKILL FILE (~30s)
- Same SKILL.md pattern. Different job: repro → fix → verify → regress.
- Call out: reproduce before any code change. PR only if asked (local).
- Two skills keep the overnight loop honest. Hunt looks. Fix ships when proof holds.
-->

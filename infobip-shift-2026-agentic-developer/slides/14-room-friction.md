---
layout: default
class: devsum-slide
---

<div class="slide-inner center">

<span class="badge badge-orange" style="font-size:16px;padding:6px 16px;margin-bottom:22px">friction</span>

<p style="font-size:46px;color:var(--text);font-weight:900;margin:0 auto 24px;line-height:1.12;max-width:1040px">
  Turneo wants a room number.<br>
  We don’t have one yet.
</p>

<div class="card-row" style="max-width:920px;margin:0 auto">
  <div class="task-card" style="border-color:var(--red)">
    <span class="task-id" style="color:var(--red)">Don’t</span>
    <h3>Invent a booking ref</h3>
    <p>Agents must not hallucinate hotel confirmation codes.</p>
  </div>
  <div class="task-card" style="border-color:var(--accent)">
    <span class="task-id" style="color:var(--accent)">Do</span>
    <h3>Ask via CoS</h3>
    <p>Debbie unblocks with room <span class="mono">00</span> — a known placeholder.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — ROOM FRICTION · 11:45–12:45
- This is the “still human” preview inside the demo.
- Privacy: say room `00` only — never street address / phone / email.
- CoS is the gate for consequential unblocks.
- Teaching point: irreversible / identity fields need a human yes.
-->

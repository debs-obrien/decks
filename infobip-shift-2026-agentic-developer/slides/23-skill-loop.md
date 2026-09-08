---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Skill creation loop</h2>
<p class="lede">Do → friction → save skill → reuse.</p>

<div class="diagram-chain" style="margin-top:22px;gap:8px">
  <div class="diagram-node blue" style="min-height:160px;padding:16px 10px">
    <div class="icon" style="font-size:28px">1</div>
    <div class="label" style="font-size:22px">Do</div>
    <div class="sub">Messy purchase once end-to-end</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange" style="min-height:160px;padding:16px 10px">
    <div class="icon" style="font-size:28px">2</div>
    <div class="label" style="font-size:22px">Friction</div>
    <div class="sub">Qty doubling · PayPal wall</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node purple" style="min-height:160px;padding:16px 10px">
    <div class="icon" style="font-size:28px">3</div>
    <div class="label" style="font-size:22px">Save</div>
    <div class="sub"><span class="mono">decathlon-checkout</span></div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green" style="min-height:160px;padding:16px 10px">
    <div class="icon" style="font-size:28px">4</div>
    <div class="label" style="font-size:22px">Reuse</div>
    <div class="sub">Next buy is boring</div>
  </div>
</div>

<p class="footer-note" style="text-align:center">
  Recipe: check cart first · add missing qty only · hand off at PayPal · report totals, not PII.
</p>

</div>

<!--
PRESENTER NOTES — SKILL LOOP · 20:15–21:15
- Four beats from shopping bot — slow down on “save skill.”
- Codify: check cart first, add missing qty only, one agent through pay, hand off at PayPal.
- Next buy is boring — less babysitting. Skill is the playbook.
- Path: workflows/decathlon-checkout
-->

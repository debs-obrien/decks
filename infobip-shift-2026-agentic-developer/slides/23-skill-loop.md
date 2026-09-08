---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Do → friction → save → reuse</h2>
<p class="lede">The messy purchase becomes the playbook.</p>

<div class="diagram-chain" style="margin-top:18px;gap:8px">
  <div class="diagram-node blue" style="min-height:168px;padding:14px 8px">
    <div class="icon" style="font-size:26px">1</div>
    <div class="label" style="font-size:20px">Do</div>
    <div class="sub">Shop end-to-end once until failure modes show</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange" style="min-height:168px;padding:14px 8px">
    <div class="icon" style="font-size:26px">2</div>
    <div class="label" style="font-size:20px">Friction</div>
    <div class="sub">Qty doubling · PayPal wall</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node purple" style="min-height:168px;padding:14px 8px">
    <div class="icon" style="font-size:26px">3</div>
    <div class="label" style="font-size:20px">Save</div>
    <div class="sub"><span class="mono">decathlon-checkout</span></div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green" style="min-height:168px;padding:14px 8px">
    <div class="icon" style="font-size:26px">4</div>
    <div class="label" style="font-size:20px">Reuse</div>
    <div class="sub">Next buy is boring</div>
  </div>
</div>

<p class="footer-note" style="text-align:center;margin-top:18px">
  Buy once, hand off PayPal, save the skill. · check cart first · add missing qty only · totals in text, not PII
</p>

</div>

<!--
PRESENTER NOTES — SKILL LOOP · 19:00–20:00
- Beat 1: do the messy purchase once — let qty doubling + PayPal wall appear.
- Beat 4: codify the recipe into decathlon-checkout (workflows/decathlon-checkout).
- Beat 5: next buy is boring — less babysitting; skill is the playbook.
- Don’t linger on personal fields. Ever.
-->

---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Human at PayPal</h2>
<p class="lede">The agent stops where credentials start.</p>

<div class="diagram-chain" style="margin-top:24px">
  <div class="diagram-node blue" style="min-height:150px">
    <div class="label" style="font-size:22px">Agent shops</div>
    <div class="sub">Cart · qty · checkout path</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange" style="min-height:150px">
    <div class="label" style="font-size:22px">PayPal wall</div>
    <div class="sub">Login · 2FA · password</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green" style="min-height:150px">
    <div class="label" style="font-size:22px">Debbie</div>
    <div class="sub">Enters secrets · agent never sees them</div>
  </div>
</div>

<p class="footer-note" style="text-align:center;margin-top:26px">
  Trust loop, not autopilot. Same rule as room numbers.
</p>

</div>

<!--
PRESENTER NOTES — HUMAN AT PAYPAL · 19:00–19:45
- Real Aug 18 buy: 2× kids Adidas tracksuits on decathlon.es (~51 €).
- Friction: cart double-adds; PayPal login/2FA Debbie must do herself.
- Agent never sees credentials. Hand off at the PayPal wall.
-->

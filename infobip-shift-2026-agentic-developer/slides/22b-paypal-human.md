---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Human at PayPal</h2>
<p class="lede">Agent shops until the wall. Debbie owns the secrets.</p>

<div class="diagram-chain" style="margin-top:22px">
  <div class="diagram-node blue" style="min-height:150px">
    <div class="label" style="font-size:22px">Agent</div>
    <div class="sub">Cart · qty · checkout path — stops here</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node orange" style="min-height:150px">
    <div class="label" style="font-size:22px">PayPal wall</div>
    <div class="sub">Login · password · 2FA</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node green" style="min-height:150px">
    <div class="label" style="font-size:22px">Debbie</div>
    <div class="sub">Enters credentials · agent never sees them</div>
  </div>
</div>

<p class="footer-note" style="text-align:center;margin-top:24px">
  Same trust loop as room numbers — consequential steps stay human.
</p>

</div>

<!--
PRESENTER NOTES — HUMAN AT PAYPAL · 20:00–20:40
- Beat 2: human stays in the trust loop.
- Aug 18: PayPal login/2FA Debbie must do herself — demo-recording privacy too.
- Agent never sees credentials. Hand off at the wall, then resume after.
-->

---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="badge badge-red" style="font-size:15px;margin-bottom:12px">what doesn't work · 2 of 4</span>
<h2>The webview/native wall</h2>
<p class="lede">CDP only sees the <span class="accent bold">webview.</span> Some bugs live outside it, out of reach.</p>

<div class="grid-2" style="margin-top:18px;gap:26px">

<div class="card" style="border-top:3px solid var(--accent)">
<h3 class="accent">👁️ CDP can see</h3>
<ul class="feature-list" style="font-size:21px;margin-top:8px">
  <li><span class="icon">✅</span><span>DOM, roles, text, dialogs</span></li>
  <li><span class="icon">✅</span><span>Network &amp; console in the page</span></li>
  <li><span class="icon">✅</span><span>Everything the app renders in-webview</span></li>
</ul>
</div>

<div class="card" style="border-top:3px solid var(--red)">
<h3 class="red">🚫 CDP is blind to</h3>
<ul class="feature-list" style="font-size:21px;margin-top:8px">
  <li><span class="icon">❌</span><span>Auth0 / system-browser windows</span></li>
  <li><span class="icon">❌</span><span>OS file pickers &amp; keychain prompts</span></li>
  <li><span class="icon">❌</span><span>Native notifications, second-user delivery</span></li>
</ul>
</div>

</div>

<p class="footer-note" style="text-align:center;max-width:none">
  So it's told to be upfront about that line, and not claim a full pass when a flow crosses it.
</p>

</div>

<!--
PRESENTER NOTES, WEBVIEW WALL
- Critical honesty for anyone testing desktop/hybrid apps. CDP is a webview protocol; native chrome is invisible to it.
- Concrete: the login flow opens a real system browser for Auth0, the agent literally cannot see it.
- The design response: don't pretend. The skill must say "verified up to the native boundary" rather than "full E2E pass".
- Transferable lesson: know what your instrument can and can't observe, and encode that limit.
-->

---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="badge badge-red" style="font-size:15px;margin-bottom:12px">what doesn't work · 1 of 4</span>
<h2>The tooling isn't magic</h2>
<p class="lede"><span class="mono">playwright-cli attach</span> just <span class="red">wouldn't</span> connect to this Tauri/CEF app.</p>

<div class="grid-2" style="margin-top:18px;gap:24px;align-items:start">

<div>
<div class="code-label before" style="border-radius:8px 8px 0 0">DIDN'T WORK</div>
<div class="code-block" style="border-radius:0 10px 10px 10px;margin:0">playwright-cli attach http://127.0.0.1:&lt;port&gt;
<span class="err">Cannot read properties of undefined (reading 'startsWith')</span></div>
</div>

<div>
<div class="code-label after" style="border-radius:8px 8px 0 0">WORKED</div>
<div class="code-block" style="border-radius:0 10px 10px 10px;margin:0"><span class="kw">const</span> browser = <span class="kw">await</span> chromium
  .<span class="fn">connectOverCDP</span>(<span class="str">`http://127.0.0.1:${port}`</span>);</div>
</div>

</div>

<p class="footer-note" style="text-align:center;max-width:none">
  The CLI's lovely for normal web apps. For this one, the plain library call is what worked.
</p>

</div>

<!--
PRESENTER NOTES, DOESN'T WORK: ATTACH
- Honesty about your own favourite tool. The @playwright/cli you praised earlier didn't attach here.
- The real error is on screen. It's a genuine mismatch: attach wants a Playwright server endpoint, CEF exposes a raw CDP socket.
- The fix is unglamorous: chromium.connectOverCDP(). Point: agentic testing is still plumbing. No magic.
-->

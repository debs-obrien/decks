---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>"No PR" is a fine outcome too</h2>
<p class="lede">We tend to expect a fix every time. Sometimes the honest answer is just <span class="accent bold">"I couldn't."</span></p>

<div class="grid-2" style="margin-top:22px;gap:14px 26px">
  <div class="task-card" style="border-left:4px solid var(--orange)">
    <span class="task-id" style="color:var(--orange)">not-reproduced</span>
    <h3 style="font-size:23px">Couldn't trigger it</h3>
    <p>No repro, no fix. It says so.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--red)">
    <span class="task-id" style="color:#f87171">blocked</span>
    <h3 style="font-size:23px">Something got in the way</h3>
    <p>Auth, data, or infra stopped a clean run.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--purple)">
    <span class="task-id" style="color:#a78bfa">not-cdp-suitable</span>
    <h3 style="font-size:23px">Wrong tool for it</h3>
    <p>Can't be checked through the browser.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--blue)">
    <span class="task-id" style="color:#60a5fa">needs-investigation</span>
    <h3 style="font-size:23px">Bigger than a quick fix</h3>
    <p>Hands it back with what it found.</p>
  </div>
</div>

<p style="font-size:30px;font-weight:700;text-align:center;max-width:1000px;margin:26px auto 0">
  If it can't reproduce or check the fix, <span class="red">it won't open a PR.</span>
</p>

</div>

<!--
PRESENTER NOTES, NOT REPRODUCED
- Counter the hype directly: most demos imply the agent always wins. This one is allowed to lose, on the record.
- Four honest exit states. The point of each: it names WHY it stopped, so a human knows what to do next.
- Land the bottom line hard. An agent that fabricates a fix is dangerous; one that says "I couldn't" is trustworthy.
-->

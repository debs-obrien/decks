---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>My favourite part: it fixed a bug it caused</h2>
<p class="lede">Remember #5539 from the first slide? Here's the backstory.</p>

<div class="timeline">
  <div class="tl-item">
    <div class="tl-dot" style="background:var(--purple)"></div>
    <div class="tl-body">
      <span class="tl-id">#5369</span>
      <p>Agent spots there's <span class="bold">no unsaved-changes warning</span>, edits quietly lost. <span class="dim">A fix adds one.</span></p>
    </div>
  </div>
  <div class="tl-item">
    <div class="tl-dot" style="background:var(--orange)"></div>
    <div class="tl-body">
      <span class="tl-id">#5539</span>
      <p>Later, it notices that same warning now <span class="bold">pops up after every save</span>, even a clean one.</p>
    </div>
  </div>
  <div class="tl-item">
    <div class="tl-dot" style="background:var(--accent)"></div>
    <div class="tl-body">
      <span class="tl-id">#5540</span>
      <p>It reproduces it, tracks down the cause, fixes it, adds a test. <span class="accent bold">Merged.</span></p>
    </div>
  </div>
</div>

<p class="footer-note" style="text-align:center;max-width:none">
  Add a warning, notice its edge case, fix it. <span class="bold">The loop keeps checking its own work.</span>
</p>

</div>

<style>
.timeline { margin:22px auto 0; max-width:1000px; display:flex; flex-direction:column; gap:0; }
.tl-item { display:flex; gap:18px; align-items:flex-start; padding:0 0 18px; position:relative; }
.tl-item:not(:last-child)::before { content:""; position:absolute; left:9px; top:22px; bottom:-4px; width:2px; background:var(--code-border); }
.tl-dot { width:20px; height:20px; border-radius:50%; flex-shrink:0; margin-top:4px; z-index:1; }
.tl-body { background:var(--surface); border:1px solid var(--code-border); border-radius:12px; padding:14px 20px; flex:1; }
.tl-body .tl-id { font-family:var(--mono); font-weight:800; color:var(--accent); font-size:18px; }
.tl-body p { font-size:22px; line-height:1.3; margin:4px 0 0; }
</style>

<!--
PRESENTER NOTES, SELF-REFERENTIAL LOOP
- This is the payoff of the cold open. Bring the energy up.
- The real chain: #5369 (no guard) -> the fix adds a guard -> #5539 (guard over-fires) -> #5540 (fixed & merged).
- Say it plainly: the agent found the second-order bug caused by responding to the first. That's a genuinely new kind of feedback loop.
- Not "the machine is perfect", the opposite. Each fix creates new surface; the loop keeps finding it. That's healthy, and it's honest.
-->

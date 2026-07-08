---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="badge badge-red" style="font-size:15px;margin-bottom:12px">what doesn't work · 3 of 4</span>
<h2>When things fail quietly, agents make stuff up</h2>
<p class="lede">The trickiest issues weren't loud errors, they were the ones that <span class="red bold">failed silently</span>, so the agent filled in the blanks.</p>

<div class="card-stack" style="margin-top:16px;gap:10px">
  <div class="task-card" style="border-left:4px solid var(--red)">
    <h3 style="font-size:22px">🔌 <span class="mono">browser.close()</span> shut the whole app</h3>
    <p>On a CDP-attached browser, "close" took down the app itself. So: never call it.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--orange)">
    <h3 style="font-size:22px">📁 A stale port file fibbed</h3>
    <p>It pointed at a dead port, so the agent "connected" to nothing and made up results.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--purple)">
    <h3 style="font-size:22px">📸 "Screenshot saved", but there was no file</h3>
    <p>Now it checks the file's really there before saying so.</p>
  </div>
</div>

<p class="footer-note" style="text-align:center;max-width:none">
  I've got <span class="bold">33 little rules</span> written down now, most from moments exactly like these.
</p>

</div>

<!--
PRESENTER NOTES, SILENT FAIL
- The deepest lesson of the whole talk. Agents don't fail loudly, they fill silence with plausible fiction.
- Three real examples from the lessons doc. The browser.close() one always lands: "close" on a CDP attach nukes the app.
- The mitigation pattern: assert ground truth. /json/version for CDP-up, file-exists for screenshots, live port probe, not a stale file.
- 33 rules. Each is a scar. This is where "trust the loop, not the agent" comes from.
-->

---
layout: default
class: devsum-slide hero
---

<div class="slide-inner">

<h2>Notice what’s <span class="red">not</span> on this list</h2>
<p class="lede">The skill declares the only tools the agent is allowed to touch.</p>

````yaml
allowed-tools:
  - mcp__qa_cdp__observe
  - mcp__qa_cdp__click
  - mcp__qa_cdp__type_text
  - mcp__qa_cdp__press_key
  - mcp__qa_cdp__wait
  - mcp__qa_cdp__screenshot
  - mcp__qa_cdp__logs
  - Bash(gh issue list:*)
  - Bash(gh issue create:*)
````

<div class="card-row" style="margin-top:14px">
  <div class="task-card" style="border-left:3px solid var(--red)">
    <span class="task-id" style="color:var(--red)">Not allowed</span>
    <p>Web search. File editing. Git commits. Anything outside the app and the issue CLI.</p>
  </div>
  <div class="task-card" style="border-left:3px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Effect</span>
    <p>Blast radius = the running app + one issue. By design.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — NARROWED TOOLS
- This slide makes the security folks relax.
- "Not allowed: web search, file editing, git commits." Say each one.
- "By design, not by accident."
-->

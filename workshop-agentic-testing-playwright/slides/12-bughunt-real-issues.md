---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Real issues it filed</h2>
<p class="lede">Not toy bugs, the quiet little ones we tend to click straight past.</p>

<div class="card-stack" style="margin-top:16px;max-width:1080px;gap:8px">
  <div class="issue-row"><span class="issue-num">#5588</span><span class="issue-cap">settings</span><span class="issue-title">GitHub PAT save silently fails, no feedback on invalid token</span></div>
  <div class="issue-row"><span class="issue-num">#5542</span><span class="issue-cap">sandbox</span><span class="issue-title">Chat pane collapses to ~1px when all three panels open</span></div>
  <div class="issue-row"><span class="issue-num">#5496</span><span class="issue-cap">tasks</span><span class="issue-title">"Include archived" toggle has no visible effect on the board</span></div>
  <div class="issue-row"><span class="issue-num">#5472</span><span class="issue-cap">workflows</span><span class="issue-title">Minimap SVG intercepts clicks, nodes under it unclickable</span></div>
  <div class="issue-row"><span class="issue-num">#5425</span><span class="issue-cap">sandbox</span><span class="issue-title">Create Profile allows duplicate names, two "Default"s coexist</span></div>
  <div class="issue-row"><span class="issue-num">#5371</span><span class="issue-cap">sandbox</span><span class="issue-title">MCP "Connected" status persists stale across tabs</span></div>
</div>

<p class="footer-note" style="text-align:center;max-width:none">All filed by the bot, not me.</p>

</div>

<style>
.issue-row {
  display:flex; align-items:center; gap:16px;
  background: var(--surface);
  border: 1px solid var(--code-border);
  border-left: 3px solid var(--purple);
  border-radius: 10px;
  padding: 11px 18px;
}
.issue-row .issue-num {
  font-family: var(--mono); font-weight:800; color: var(--accent);
  font-size:19px; min-width:66px;
}
.issue-row .issue-cap {
  font-family: var(--mono); font-size:13px; text-transform:uppercase; letter-spacing:1px;
  color:#a78bfa; background:rgba(124,58,237,.12); border:1px solid rgba(124,58,237,.2);
  padding:3px 10px; border-radius:20px; min-width:104px; text-align:center;
}
.issue-row .issue-title { font-size:21px; color: var(--text); line-height:1.25; }
</style>

<!--
PRESENTER NOTES, REAL ISSUES
- These are exact titles from the tracker. Read two or three out loud.
- Point out the pattern: most are "silent failure" bugs, the app does the wrong thing quietly. That's exactly what a patient agent clicking every control catches and humans skim past.
- Say plainly: "these are issues filed by the bot", not "bugs fixed". A subset became PRs.
-->

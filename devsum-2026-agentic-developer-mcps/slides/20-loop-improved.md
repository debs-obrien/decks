---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Example: PR #4868</h2>
<p class="lede">A non-admin user opened Settings → Connections → Credentials and saw a raw Cerbos authorization error. The agent fixed the UI and attached before/after evidence.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:24px">
  <div>
    <p class="small dim" style="margin:0 0 8px">Before — raw policy error leaked to the UI</p>
    <img src="../public/images/pr-4868/before-credentials-raw-error.png" alt="Before fix showing raw Cerbos authorization error" style="width:100%" />
  </div>
  <div>
    <p class="small dim" style="margin:0 0 8px">After — read-only state, no raw policy string</p>
    <img src="../public/images/pr-4868/after-credentials-fixed.png" alt="After fix showing read-only credentials state" style="width:100%" />
  </div>
</div>

<p class="footer-note" style="text-align:center;max-width:none">
  This is the kind of PR I want from an agent: <span class="accent bold">what was wrong, what changed, and visual proof.</span>
</p>

</div>

<!--
PRESENTER NOTES — PR 4868 EXAMPLE
- This is the concrete example PR for the bugfix workflow.
- Before: raw Cerbos auth error visible alongside the friendly notice.
- After: only the read-only credentials state remains; no internal policy string is shown.
- The important part is the evidence: before/after screenshots in the PR body.
- Next slide explains how those screenshots get from CI to public image URLs that Claude Code can insert.
-->

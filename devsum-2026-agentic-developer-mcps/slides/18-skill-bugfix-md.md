---
layout: default
class: devsum-slide hero
---

<div class="slide-inner">

<h2>Same shape, harder problem</h2>
<p class="lede"><span class="mono accent">.agents/skills/tap-issue-cdp-bugfix/SKILL.md</span></p>

````md
---
name: tap-issue-cdp-bugfix
description: "Reproduce, fix, and verify a GitHub issue against the
  running TAP desktop app over CDP. Use for hourly scheduled issue-fix
  passes in CI."
---

# Issue CDP Bugfix

The app is a real Tauri/CEF debug build against a seeded local stack,
authenticated as the E2E user.

## Workflow

1. Pick an open `bug-hunt` issue. Read it.
2. Reproduce it first on the running app over CDP.
   Capture a "before" screenshot. Do not write code yet.
3. Make the fix. Re-run the reproduction. Capture an "after".
4. If after-fix verification isn't possible — say so honestly in the PR.
5. Open the PR with reproduction, evidence, and verification status.
````

<p class="footer-note"><span class="accent bold">"Reproduce it first."</span> That single rule is what makes the agent trustworthy.</p>

</div>

<!--
PRESENTER NOTES — TAP SKILL
- Same shape as add-content. Front-matter trigger. Body workflow.
- The "reproduce it first" rule is the heart of it.
-->

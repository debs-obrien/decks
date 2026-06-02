---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>Three skills, one workflow</h2>
<p class="lede">The agent needed to understand the product, drive the app, and ship something reviewable.</p>

<div class="diagram-chain" style="margin-top:26px">
  <div class="diagram-node green">
    <div class="icon">📄</div>
    <div class="label">write-docs</div>
    <div class="sub">source → Rspress pages</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node blue">
    <div class="icon">📸</div>
    <div class="label">doc-screenshots</div>
    <div class="sub">real app → images</div>
  </div>
  <div class="diagram-arrow">→</div>
  <div class="diagram-node purple">
    <div class="icon">🚀</div>
    <div class="label">docs-preview</div>
    <div class="sub">docs → preview URL</div>
  </div>
</div>

<div class="card-row" style="margin-top:34px">
  <div class="task-card" style="border-left:4px solid var(--accent)">
    <span class="task-id" style="color:var(--accent)">Grounded</span>
    <h3>Reads real source</h3>
    <p>Docs are based on routes, components, and product behavior — not vibes.</p>
  </div>
  <div class="task-card" style="border-left:4px solid var(--blue)">
    <span class="task-id" style="color:var(--blue)">Visual</span>
    <h3>Captures real UI</h3>
    <p>The agent drives the app and creates annotated screenshots.</p>
  </div>
</div>

</div>

<!--
PRESENTER NOTES — DOCS FLOW
- The three skills compose exactly like add-content composed with Playwright/Cloudinary/GitHub.
- Important: this is not just text generation. It reads source, uses the app, creates screenshots, builds preview.
- Bridge to next slide: why I trusted it.
-->

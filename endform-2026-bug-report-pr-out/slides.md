---
layout: default
theme: eloc
title: "Bug Report In, Pull Request Out: Agentic CI with Playwright"
colorSchema: dark
highlighter: shiki
css: unocss
routerMode: hash
transition: fade-out
mdc: true
drawings:
  persist: false
mermaid:
  theme: dark
  flowchart:
    nodeSpacing: 60
    rankSpacing: 80
  themeVariables:
    fontSize: 24px
info: |
  ## Bug Report In, Pull Request Out
  Agentic CI with Playwright. Endform online mini talk.
  Movies app hunt, honesty gates, issue, reproduce, fix, PR.
class: devsum-slide
lineNumbers: false
canvasWidth: 1280
aspectRatio: "16/9"
---

<div class="slide-inner center title-glow" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;min-height:100%;height:100%">

<div class="title-badge">Endform · online</div>

<div class="broken-icon" style="margin:18px 0">
  <span>🐞</span><span class="arr">→</span><span>📝</span><span class="arr">→</span><span>🔀</span>
</div>

<h1 class="gradient-text" style="font-size:52px;margin:0 0 14px;letter-spacing:-1.5px;line-height:1.08">
  Bug Report In,<br>Pull Request Out
</h1>

<p style="font-size:26px;color:var(--text-dim);margin:0 auto 18px;max-width:900px">
  Agentic CI with Playwright
</p>

<p style="font-size:20px;color:var(--text-dim);margin:0">
  Debbie O&rsquo;Brien · <span class="accent mono">debbie.codes</span>
</p>

</div>

<!--
PRESENTER NOTES: COVER (~10s)
- Endform mini online. Working title; Debbie still picking.
- Abstract (notes only): Agents can hunt bugs and open PRs overnight, but only if you force honesty. I'll walk a real loop: a Playwright-backed hunt skill finds a production bug, then a fix skill reproduces the broken state before touching code, ships a PR with a regression test, and stops at human merge. Playwright is the eyes and the contract that keeps the agent honest.
- Gesture the chain: bug, report, PR.
-->

---
src: ./slides/01-about.md
---

---
src: ./slides/02-cold-open.md
---

---
src: ./slides/03-diagram-loop.md
---

---
src: ./slides/04-diagram-two-skills.md
---

---
src: ./slides/05-diagram-honesty.md
---

---
src: ./slides/06-gates-kept-candidate.md
---

---
src: ./slides/07-image-hunt-home.md
---

---
src: ./slides/08-image-candidate-honesty.md
---

---
src: ./slides/09-image-issue-92.md
---

---
src: ./slides/10-image-before-a11y.md
---

---
src: ./slides/11-reproduce-before-change.md
---

---
src: ./slides/12-image-fix-pr-93.md
---

---
src: ./slides/13-image-after-local.md
---

---
src: ./slides/14-image-diff-movielistitem.md
---

---
src: ./slides/15-image-regression-spec.md
---

---
src: ./slides/16-human-merge-gate.md
---

---
src: ./slides/17-takeaways.md
---

---
src: ./slides/18-thanks.md
---

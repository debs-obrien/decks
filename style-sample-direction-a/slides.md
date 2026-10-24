---
theme: ../theme-debbie
title: "Bug Report In, Pull Request Out — Direction A sample"
info: |
  Style sample only. Direction A (Big words, real proof) with one RedMark.
  Does not replace the Endform deck on PR #15.
colorSchema: dark
highlighter: shiki
routerMode: hash
transition: fade-out
mdc: true
drawings:
  persist: false
fonts:
  sans: Roboto
  mono: Menlo
canvasWidth: 1280
aspectRatio: "16/9"
layout: cover
event: Endform online
---

# Bug Report In, Pull Request Out

Agentic CI with Playwright

<!--
PRESENTER NOTES: COVER
- Same talk as Endform. New visual language only.
- Title stays. Brand bar carries Debbie O'Brien in debbie.codes red.
-->

---
layout: photo
image: /images/debbie.png
alt: Debbie O'Brien
role: Independent Developer Educator
---

# Debbie <span class="surname">O'Brien</span>

I teach Playwright and build agents that hunt bugs while I sleep.

<!--
PRESENTER NOTES: ABOUT
- One line. No emoji bio list. Links live on debbie.codes / GitHub / X.
- Tonight's demo is the Playwright Movies App loop, not the personal site.
-->

---
layout: default
---

# Four things worth stealing

1. Split the hunt from the fix.
2. Reproduce before you write code.
3. Ship the regression with the PR.
4. Keep the merge button for yourself.

<!--
PRESENTER NOTES: TAKEAWAYS (was the 2x2 card grid)
- Read each line once. No cards, no 01/02 labels.
- Detail stays in the demo: two skills, honesty gates, human merge.
-->

---
layout: shot
image: /images/08-diff-MovieListItem.png
alt: Pull request diff adding aria-label movie.title on the poster link
caption: One line named the link.
mode: zoom
imgWidth: 175
offsetX: -12
offsetY: -38
tone: paper
---

<RedMark type="circle" :x="62" :y="84" :w="44" :h="14" label="aria-label fix" />

<!--
PRESENTER NOTES: DIFF (was the padded screenshot + callout card)
- movies-app/components/MovieList/MovieListItem/index.js
- Finger on aria-label={movie.title}. That is the whole punchline.
- RedMark is the Direction B touch: one hand-drawn circle on the proof.
-->

---
layout: statement
---

# No code until the proof exists.

<!--
PRESENTER NOTES: HONESTY (was "Reproduce first." with grey lede)
- Say it plain: fail the locator on purpose, screenshot the break, then patch.
- Tonight: exact Superman name returns 0 on live before we touch MovieListItem.
-->

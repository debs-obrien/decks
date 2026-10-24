---
layout: default
theme: eloc
title: "Voice-cued slides prototype"
colorSchema: dark
highlighter: shiki
css: unocss
routerMode: hash
transition: fade-out
mdc: true
drawings:
  persist: false
class: voice-cue-slide
lineNumbers: false
canvasWidth: 1280
aspectRatio: "16/9"
---

<div class="slide-inner center">

<p class="eyebrow">Slidev prototype · inspired by Dave Kiss</p>

<h1 class="gradient-text" style="font-size:58px;margin:0 0 16px;letter-spacing:-1px">
  Voice-cued slides
</h1>

<p style="font-size:24px;color:var(--text-dim);margin:0 auto;max-width:760px">
  The deck listens for your line, then advances on its own.
</p>

<p class="nav-hint">Press <kbd>V</kbd> to toggle listening · Chrome + mic</p>

</div>

<!--
cue: welcome to voice cued slides

Say the cue line out loud with Voice on. The deck should advance when it hears enough of it.
-->

---

<div class="slide-inner">

<p class="eyebrow">How it works</p>

<h2 style="font-size:44px;margin:0 0 20px">Your notes call the cues</h2>

<ul class="tight-list">
  <li>Put a <code>cue:</code> line in each slide's speaker notes</li>
  <li>Chrome's Web Speech API streams words as you talk</li>
  <li>A small matcher decides when to go forward</li>
</ul>

</div>

<!--
cue: the deck listens while you talk

Explain the stage-manager idea. Voice should pick this up mid-sentence once ~60% of a long cue is heard.
-->

---

<div class="slide-inner center">

<p class="eyebrow">Clicker still wins</p>

<h2 style="font-size:48px;margin:0 0 16px">No spoken cue on this slide</h2>

<p style="font-size:24px;color:var(--text-dim);max-width:720px;margin:0 auto">
  Voice will not advance from here. Use the clicker or arrow keys, then keep talking.
</p>

</div>

<!--
cue: none

Demonstrates an uncued slide. Saying anything should not advance. Press → when ready.
-->

---

<div class="slide-inner">

<p class="eyebrow">Matching rules</p>

<h2 style="font-size:42px;margin:0 0 18px">Forward only, a little fuzzy</h2>

<ul class="tight-list">
  <li>Never goes backward</li>
  <li>Long cues fire at about 60% of their words</li>
  <li>One slip is fine, with fuzzy word matching</li>
  <li>Also listens for the next two cues to catch up</li>
</ul>

</div>

<!--
cue: sixty percent is enough for a long line

You can slur a word or skip one. The matcher still fires once enough of the cue lands.
-->

---

<div class="slide-inner">

<p class="eyebrow">Catch-up</p>

<h2 style="font-size:42px;margin:0 0 18px">Miss a line, keep going</h2>

<p style="font-size:24px;color:var(--text-dim);max-width:780px">
  If a cue is missed, saying the next one nearly whole jumps you forward. The clicker always realigns the matcher.
</p>

</div>

<!--
cue: missed a cue and still caught up

Try skipping the previous cue in rehearsal: feed this line nearly whole and the deck should catch up.
-->

---

<div class="slide-inner center">

<p class="eyebrow">Your turn</p>

<h2 class="gradient-text" style="font-size:48px;margin:0 0 16px">Try it out loud</h2>

<p style="font-size:22px;color:var(--text-dim);max-width:720px;margin:0 auto 24px">
  Open in Chrome, press <kbd>V</kbd>, allow the mic, and read the cues in the notes.
</p>

<p style="font-size:18px;color:var(--text-dim)">
  Add cues to any deck the same way: one <code>cue:</code> line per notes block.
</p>

</div>

<!--
cue: press v and allow the microphone

Closing line. Toggle Voice off with V during live demos when you do not want auto-advance.
-->

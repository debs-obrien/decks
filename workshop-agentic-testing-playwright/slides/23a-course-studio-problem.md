---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="title-badge">One more thing</span>
<h2>Testing an AI product without burning the bill</h2>
<p class="lede">This is Kent C. Dodds' <span class="bold">Product Engineering Workshop</span>. Learners chat with AI specialists, and a hidden AI evaluator scores their work.</p>

<div class="cs-grid">

  <div class="cs-shot">
    <img src="../public/images/course-studio-chat.png" alt="Course Studio chat: Kody the guide, a scoped stakeholder specialist, and a live exercise guide" />
  </div>

  <div class="cs-note">
    <div class="task-card" style="border-left:4px solid var(--orange)">
      <h3 style="font-size:23px">💸 The catch</h3>
      <p>Every message is a real model call. A full test run means orchestration, specialist replies, and the evaluator, over and over.</p>
    </div>
    <div class="task-card" style="border-left:4px solid var(--accent);margin-top:12px">
      <h3 style="font-size:23px">🎯 The goal</h3>
      <p>Test the whole chat flow, end to end, and spend <span class="accent bold">zero</span> provider credit doing it.</p>
    </div>
  </div>

</div>

</div>

<style>
.cs-grid { display:grid; grid-template-columns:1.35fr 1fr; gap:34px; align-items:center; margin-top:18px; }
.cs-shot img { width:100%; border-radius:12px; border:1px solid var(--code-border); box-shadow:0 16px 44px rgba(0,0,0,.4); display:block; }
</style>

<!--
PRESENTER NOTES, COURSE STUDIO PROBLEM
- Quick context: this is a real product we shipped, Kent C. Dodds' workshop. It teaches product engineering by having you actually chat with AI stakeholders.
- The point of tension: it's an AI product, so every end-to-end test would call real models. Orchestration decides who answers, specialists answer, and a hidden evaluator grades you against a rubric. That is a lot of paid tokens per run.
- Set up the question: how do you test all of that, honestly, without paying for it every time.
-->

---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="badge badge-red" style="font-size:15px;padding:6px 14px;margin-bottom:12px">honesty 1 · proof</span>

<h2 style="font-size:32px;margin:0 0 6px">Failing locator on live</h2>
<p class="lede" style="margin:0 0 14px">Prove the broken state. Then touch code.</p>

<div class="cli-box mono">
<pre>BASE https://debs-obrien.github.io/playwright-movies-app
getByRole link name=Superman exact → <span class="cli-fail">0</span>
getByRole link name=/Superman/ → 1
ariaSnapshot:
- link <span class="cli-bad">"poster of Superman Superman rating"</span>:
  - img "poster of Superman"
  - heading "Superman"</pre>
</div>

</div>

<style>
.cli-box {
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  background: #070b14;
  border: 1px solid var(--code-border);
  border-radius: 14px;
  padding: 18px 22px;
  box-shadow: 0 18px 50px rgba(0,0,0,.4);
  overflow: hidden;
}
.cli-box pre {
  margin: 0;
  font-size: 18px;
  line-height: 1.45;
  color: #e2e8f0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.cli-fail { color: #f87171; font-weight: 900; }
.cli-bad { color: #fecaca; font-weight: 750; }
</style>

<!--
PRESENTER NOTES: REPRODUCE (~35s)
- Hinge. exact → 0. Regex finds one. Name is polluted.
- This is the honesty gate in practice.
DEMO fallback: if live is down, this CLI + the before shot stand in.
-->

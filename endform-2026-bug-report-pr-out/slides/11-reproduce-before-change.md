---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<span class="badge badge-red" style="font-size:16px;padding:6px 16px;margin-bottom:14px">reproduce before code</span>

<h2 style="font-size:34px;margin:0 0 8px">Prove the broken state first</h2>
<p class="lede" style="margin:0 0 16px">Agent-readable proof. CLI + aria. Then you touch code.</p>

<div class="cli-box mono">
<pre>BASE https://debs-obrien.github.io/playwright-movies-app
getByRole link name=Superman exact → 0
getByRole link name=/Superman/ → 1
ariaSnapshot (first Superman card link):
- link "poster of Superman Superman rating":
  - /url: /playwright-movies-app/movie?id=1061474&page=1
  - img "poster of Superman"
  - heading "Superman" [level=2]</pre>
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
  font-size: 17px;
  line-height: 1.45;
  color: #e2e8f0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
</style>

<!--
PRESENTER NOTES: REPRODUCE (~40s)
- Hinge of the talk. exact → 0. Regex finds one. Name is polluted.
- Optional light upgrade only: agent-readable proof (aria / CLI) helps the fix skill verify the broken state before code. Not a Trace Viewer tour.
-->

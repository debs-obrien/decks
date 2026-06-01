---
layout: default
class: devsum-slide hero
---

<div class="slide-inner">

<h2>A skill is just a markdown file</h2>
<p class="lede">Lives at <span class="mono accent">.agents/skills/&lt;name&gt;/SKILL.md</span></p>

````md
---
name: add-content
description: "Adds videos, blog posts, or podcasts to debbie.codes
  by extracting metadata, creating a content file, and opening a PR.
  Use when the user says 'add video', 'add blog post', or provides a
  YouTube / podcast / blog URL."
---

# Add Content to debbie.codes

URL → metadata → markdown file → PR (with deploy preview).

## Workflow

1. Extract metadata via the Playwright CLI skill
2. Validate tags against the existing taxonomy
3. Create branch · write file · open PR
4. Deploy preview lands automatically
````

<p class="footer-note">
  <span class="accent bold">Front-matter is the trigger.</span> Body is the playbook. Reference files load on demand.
</p>

</div>

<!--
PRESENTER NOTES — SKILL ANATOMY
- This is a real excerpt of the actual file. Not synthetic. Tell the audience that.
- Highlight the description — emphasise it's the trigger language. Verbs and example phrases.
- Don't read every line.
-->

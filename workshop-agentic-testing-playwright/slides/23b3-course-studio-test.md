---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>The test reads like the learner's journey</h2>
<p class="lede">Same Playwright you already write. It drives the real chat, asserts the replies, then checks nothing hit a model.</p>

```ts {all}{maxHeight:'350px'}
test('learner completes the exercise, no credit burned', async ({ app }) => {
  await installDeterministicHarness(app.page, config);

  await openExerciseAttempt(app.page, config);   // real chat room, real UI

  // 1. @mention a specialist and assert the scripted reply lands
  await sendMentionedMessage(app.page, 'Kody', 'Help me frame the problem.');
  await expectAssistantMessage(app.page, config.kodyResponseAnchor, 'Kody');

  await sendMentionedMessage(app.page, 'Maya Ibarra (VP of Product)', config.question);
  await expectAssistantMessage(app.page, config.responseAnchor, 'Maya Ibarra');

  // 2. submit the memo, watch the real rubric fill in
  await sendPlainMessage(app.page, config.finalMemo);
  await expect(app.page.getByTestId('course-attempt-eval-chip')).toHaveText(/100%/);

  // never leak raw evaluator JSON into the transcript
  await expect(app.page.locator('body')).not.toContainText(/"milestones"|"categories"/);

  // 3. prove the evaluator was intercepted, not billed
  const calls = await readHarnessCalls(app.page);
  expect(calls.evaluatorCallCount).toBeGreaterThan(0);
});
```

</div>

<!--
PRESENTER NOTES, TEST
- This is the payoff slide. It looks like a totally normal Playwright test, because it is one.
- Walk the three beats: (1) mention a specialist and assert the reply, using getByRole option + a text anchor. (2) submit the memo and assert the real rubric chip hits 100%, plus a negative assertion that raw evaluator JSON never leaks into the UI. (3) read the harness counter and assert the evaluator actually ran.
- The last two assertions are the honesty pair: the rubric really updated (product works) AND we proved it came from the harness, not a paid call.
- Land the line: real mention menu, real send, real rubric, no invoice.
-->

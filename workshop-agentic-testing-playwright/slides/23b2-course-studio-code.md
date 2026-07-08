---
layout: default
class: devsum-slide
---

<div class="slide-inner">

<h2>The interception, in real code</h2>
<p class="lede">Grab the app's own chat provider off <span class="mono">window</span>, keep a handle on the original, then wrap it.</p>

```ts {all}{maxHeight:'340px'}
const provider = window.__zephyrProvider;
const originalOrchestrate = provider.chat.orchestrateChannelMessage.bind(provider.chat);

// 1. Routing: answer scripted @mentions, ignore everything else.
provider.chat.orchestrateChannelMessage = async (request) => {
  const dispatched = (request.explicitSpecialistMentions ?? [])
    .map((m) => dispatchDeterministicMention(m))   // emits a canned reply
    .filter((r) => r !== null);

  if (dispatched.length === 0) {
    // The guardrail: never fall through to originalOrchestrate() = a real model call.
    return { routing: { decision: { type: 'Ignore' } }, dispatched: [],
             skippedReason: 'deterministic_harness_no_matching_mention' };
  }
  return { routing: { decision: { type: 'Ignore' } }, dispatched };
};

// 2. Specialist turns: block real calls, fake only the evaluator's rubric.
provider.specialist.sendMessageWithTools = async (channelId, specialistId, content) => {
  if (!specialistId.endsWith('-evaluator')) {
    return { status: 'running', turnId: `blocked-real-provider-${Date.now()}` };
  }
  evaluatorCallCount += 1;
  const output = content.includes(finalMemoAnchor) ? finalEvaluation : partialEvaluation;
  emit({ type: 'turnCompleted', parts: [{ type: 'text', content: JSON.stringify(output) }],
         modelUsed: 'e2e-harness', providerUsed: 'e2e' });
  return { status: 'running', turnId: `evaluator-${Date.now()}` };
};
```

<p class="footer-note" style="text-align:center;max-width:none">
  Real messages still save through the real API. Only the <span class="accent bold">model</span> is swapped for a script.
</p>

</div>

<!--
PRESENTER NOTES, CODE
- This is the actual mechanism, lightly trimmed. Two overrides do all the work.
- Override 1, orchestrateChannelMessage: this is the router that normally asks a model "who should answer?". We answer scripted mentions with a canned reply, and for anything unmatched we return an Ignore. The key line is the comment: we must NOT call originalOrchestrate, because that is a real paid call. That is literally the bug I fixed.
- Override 2, sendMessageWithTools: any non-evaluator specialist turn returns a harmless "blocked" stub, so a stray call can never reach a provider. Only the hidden evaluator is faked, returning rubric JSON, and we bump evaluatorCallCount so a test can assert it actually ran.
- Note the tags: modelUsed 'e2e-harness', providerUsed 'e2e'. If you ever see a real provider name in the timeline, the harness leaked.
- Don't read it line by line. Point at the two function names and the one guardrail comment.
-->

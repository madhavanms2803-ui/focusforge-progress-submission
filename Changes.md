# FocusForge Feature Improvement

## Original feature
The dashboard displayed a motivational quote fetched through `getMotivation()`. The widget also requested a new quote every five seconds using `setInterval`.

## Why it needed improvement
The quote was passive: it did not tell users what work remained or whether they were making progress. Refreshing it every five seconds could trigger unnecessary requests and distract users. The challenge asks us to assess whether this feature meaningfully contributes to completing tasks.

## What changed
I replaced the quote display with a task progress tracker in the existing `MotivationWidget` component. The dashboard passes its current `tasks` state into the widget. The tracker calculates completed tasks, total tasks, remaining tasks, and completion percentage from that state. It shows a visual progress bar, accessible progressbar attributes, and contextual feedback for an empty list, unfinished tasks, and all tasks completed.

## Why this is more useful
The widget communicates actionable status rather than generic inspiration. When a task is added or marked complete, the dashboard state updates and the tracker reflects that change. It needs no separate API call, timer, or duplicated state.

## Scope and compatibility
The task API and task list behavior remain unchanged. The existing component file name is retained to keep the change small. The widget defaults to an empty array if no tasks prop is provided.

## Validation
Runtime verification was not performed during this online edit session. Verify by following the setup steps in the README, then add tasks and mark them complete to check that the count and progress bar update.

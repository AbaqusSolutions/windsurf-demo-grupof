---
description: Managing conversations in Cascade
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.


This workflow is intended to give users an intro to managing conversations in Cascade.

1. Greet the user and explain that you are Cascade, and that you are here to help them learn about managing conversations in Cascade. Start by explaining that the user has already used one of the key conversation management features by starting new conversations with the '+' button at the top of the panel. 
Explain that conversations now appear as **tabs** at the top of the Cascade panel, similar to how file tabs work in the editor. This makes it easy to switch between active conversations. Tell the user to look at the tabs at the top of the Cascade panel and let you know when they see them.

2. Once they've found the tabs, tell them to try opening a new conversation with the '+' button, then switch back to this conversation by clicking its tab. They should let you know when they've done so.

3. Once they've switched back, explain that Cascade tabs can be **dragged out into different panes** in the editor, just like file tabs. They can click and drag a tab to the left side of the editor area until a highlight appears, then release to create a split view with multiple Cascade conversations visible side-by-side. They can also drag the tab back to consolidate panes when done. This enables running **multiple workflows in parallel** — for example, having one Cascade help with documentation while another works on tests. If they're interested in how multiple Cascades can work on the same file or function simultaneously without conflicts, they can learn about that in the `/advanced-training-git-worktrees` training later. Ask them to try dragging a tab to create a split view, then let you know when they've done so.

4. Once they've tried the split view, ask them to close the new tab they opened by clicking the X on the tab. Tell them to let you know when they've closed it.

5. Next, explain that if they close a tab, the conversation isn't lost — they can retrieve it using the **history button**. Tell them to look for the icon with a circular arrow at the top of the Cascade panel, click it, and a dropdown will appear showing all previous conversations, including ones that aren't currently open as tabs. Ask them to find a closed conversation in the dropdown and open it, then let you know when they've done so.

6. Next, teach the user about why we recommend starting new conversations for different tasks. Explain that each conversation allows Cascade to start from a 'clean slate', and that if you are doing a bunch of different, unrelated tasks in the same conversation, it is more likely that Cascade will get confused and provide incorrect responses. If the user ever sees Cascade start to get confused or forget information from earlier in the conversation, that's a good sign that they should start a new one. 

7. Next, explain to the user that they can use @-mentions to refer to previous conversations in their current conversation. Tell them to type '@' in the Cascade input box, select 'Conversations' from the menu, select any conversation, and you'll give them a summary of what happened in that convo. 

8. Once they've done this, teach them about the 'table of contents' feature. Ask the user to look for very faint dashes near the top left of the Cascade panel. Note that they might need to scroll the conversation to get the dashes to appear, as they can fade when the conversation is static. Tell them to click on one of the dashes, and they should see a table of contents. This allows them to easily navigate to any different part of the conversation. Tell the user to let you know once they've navigated to a different section successfully.

9. Once they've done this, cover the 'revert' functionality. Explain that sometimes, you will make mistakes and the user may want to revert back to an earlier point in the conversation to provide a different prompt or try a different approach. Note to the user that this will also clear your memory of the reverted portion of the conversation. Tell the user to hover over their most recent prompt, click the revert button, and then append 'already reverted' to the prompt and submit again. 

10. If the user submits the 'already reverted' prompt, tell them they successfully reverted! Let them know that if they revert to a prompt prior to you making changes in the codebase, the revert will also undo the changes you made. This is a useful way to restore state if you get off track.

11. Next, teach the user about the **stop button**. Explain that sometimes Cascade will go off the rails or take an inefficient approach, and the user can stop you mid-response. The stop button appears in the bottom right of the Cascade input box while you are generating a response. To demonstrate this, tell the user you're going to intentionally do something inefficient: read a file one line at a time using separate tool calls. Then actually do this — pick any file in the workspace and read it line by line (offset=N, limit=1) repeatedly. Keep going until the user stops you. Once they stop you, congratulate them and explain that this is useful whenever Cascade is taking too long, going in the wrong direction, or doing something obviously wrong.

12. Once they've done this, tell them they're ready to move on to the next portion of the training. Start a new convo with the '+' button at the top of the panel, and trigger the 'editing-with-cascade' workflow to move on to the next portion of the training.

---

## Training Progress

**Estimated total training time: ~50 minutes**

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro (~4 min)
2. ✅ model-selection (~2 min)
3. ✅ cascade-mode-selection (~3 min)
4. ✅ **managing-conversations** (~5 min) (You just completed this!)
5. ➡️ **editing-with-cascade** (~2 min) (Next: `/editing-with-cascade`)
6. context (~7 min)
7. codemaps (~4 min)
8. deepwiki (~3 min)
9. terminal-usage (~4 min)
10. rules-lesson (~5 min)
11. workflow-lesson (~6 min)
12. use-case-bug-fixing (~4 min)
13. use-case-feature-dev (~6 min)

**Optional Advanced Training:**
- advanced-training-arena-mode *(optional - try `/advanced-training-arena-mode`)*
- advanced-training-hooks *(optional - try `/advanced-training-hooks`)*
- advanced-training-cli-tools *(optional - try `/advanced-training-cli-tools`)*
- advanced-training-git-worktrees *(optional - try `/advanced-training-git-worktrees`)*
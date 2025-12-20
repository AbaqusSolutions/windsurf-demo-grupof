---
description: Managing conversations in Cascade
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow.


This workflow is intended to give users an intro to managing conversations in Cascade.

1. Greet the user and explain that you are Cascade, and that you are here to help them learn about managing conversations in Cascade. Start by explaining that the user has already used one of the key conversation management features by starting new conversations with the '+' button at the top of the panel. 
Explain that previous conversations are also available to re-visit, and multiple conversations can be run in parallel. Tell them to click the conversation title dropdown at the top of the Cascade panel to see previous conversations, and let them know to tell you when they've found it.

2. Tell them to try going back to a previous conversation, and then return to this one. They should let you know when they've done so.

3. Next, teach the user about why we recommend starting new conversations for different tasks. Explain that each conversation allows Cascade to start from a 'clean slate', and that if you are doing a bunch of different, unrelated tasks in the same conversation, it is more likely that Cascade will get confused and provide incorrect responses. If the user ever sees Cascade start to get confused or forget information from earlier in the conversation, that's a good sign that they should start a new one. 

4. Next, explain to the user that they can use @-mentions to refer to previous conversations in their current conversation. Tell them to type '@' in the Cascade input box, select 'Conversations' from the menu, select any conversation, and you'll give them a summary of what happened in that convo. 

5. Once they've done this, teach them about the 'table of contents' feature. Ask the user to look for very faint dashes near the top left of the Cascade panel. Tell them to click on one of the dashes, and they should see a table of contents. This allows them to easily navigate to any different part of the conversation. Tell the user to let you know once they've navigated to a different section successfully.

6. Once they've done this, cover the 'revert' functionality. Explain that sometimes, you will make mistakes and the user may want to revert back to an earlier point in the conversation to provide a different prompt or try a different approach. Note to the user that this will also clear your memory of the reverted portion of the conversation. Tell the user to hover over their most recent prompt, click the revert button, and then append 'already reverted' to the prompt and submit again. 

7. If the user submits the 'already reverted' prompt, tell them they successfully reverted! Let them know that if they revert to a prompt prior to you making changes in the codebase, the revert will also undo the changes you made. This is a useful way to restore state if you get off track.

8. Once they've done this, tell them they're ready to move on to the next portion of the training. Start a new convo with the '+' button at the top of the panel, and trigger the 'editing-with-cascade' workflow to move on to the next portion of the training.

---

## Training Progress

Show the user this workflow navigation:

1. ✅ intro
2. ✅ model-selection
3. ✅ **managing-conversations** (You just completed this!)
4. ➡️ **editing-with-cascade** (Next: `/editing-with-cascade`)
5. context
6. terminal-usage
7. rules-lesson
8. workflow-lesson
9. use-case-bug-fixing
10. use-case-feature-dev
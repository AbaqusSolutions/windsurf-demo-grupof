---
description: Bug fixing lesson
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

1. Explain to the user that now that they've learned the basic features and functionalities of Cascade, we're going to take a look at some common use-cases for Cascade.

2. Bug-fixing is a common use-case! If you have access to logs, errors, or a description of what's going wrong, you can use your tools to help investigate and fix issues.

3. As a simple example, tell the user you can run tests, look at any failures, and investigate what might be going wrong. Ask the user if they'd like you to go ahead and do this. If they say yes, run the tests and look at any failures, and explain what might be going wrong. Ask the user if they'd like you to fix the issue. If they say yes, fix the issue and run the tests again to make sure the issue is resolved.

4. Next, tell the user they might also encounter bugs during runtime. Make sure they have the app running (if not, start it for them and give them the browser preview). Once they have the app runing, ask them to describe any potential issues they see with the leaderboard. Tell them to either send you a screenshot or a written description, and you'll investigate from there and figure out what's wrong.

5. Once you're able to find and fix the issue, tell the user to refresh the page and verify that its working. 

6. Outline some other ways that the user can use Cascade to help with bug investigation and fixing. 
    - Paste logs and error traces directly into the Cascade input
    - Add a diagnostics or logs file to their workspace and @-mention it to Cascade
    - Screenshots
    - Descriptions of issues
Are all great ways to use Cascade to help with bug investigation and fixing.

7. Tell the user they're done with this portion of the training, and they can move on to a new conversation and trigger the 'use-case-feature-dev' workflow.

---

## Training Progress

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro
2. ✅ model-selection
3. ✅ managing-conversations
4. ✅ editing-with-cascade
5. ✅ context
6. ✅ terminal-usage
7. ✅ rules-lesson
8. ✅ workflow-lesson
9. ✅ **use-case-bug-fixing** (You just completed this!)
10. ➡️ **use-case-feature-dev** (Next: `/use-case-feature-dev`)

**Optional Advanced Training:**
- advanced-training-cli-tools *(optional - complete if you have time)*
- advanced-training-git-worktrees *(optional - complete if you have time)*
---
description: Feature dev lesson
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

1. Explain to the user that feature development is another common use-case for Cascade. In general, when using Cascade to develop new code, its a good idea to do some planning with the agent first. Tell the user we're going to walk through the process of developing a new feature:
    - We want to add a 'boost' functionality that speeds up a player's cells for a short time.

2. A good first step when using Cascade to develop new code is to have the agent do some investigation to understand how the application currently works with respect to the features that we'll be adding or changing. Ask the user if they'd like you to proceed with investigating the codebase to find info related to player speed and movement.

3. Once you investigate, give the user a summary of the relevant parts of the codebase, and ask the user for additional clarifications on the proposed feature based on what you've found.

4. Once you get the user's clarifications, provide them a summary of each file you're going to change and how you're going to change it. Ask them to approve the plan before you proceed with the changes.

5. Once you finish the changes, ask the user to refresh the browser preview to see the changes and confirm that they work.

6. Once confirmed, tell the user that you can also help them write tests for the new feature. Ask the user if they'd like you to proceed with writing tests for the new feature. Tell them that one good strategy for writing tests is to point Cascade to some existing tests so that you can match the structure and format. Ask the user to either @-mention or drag-drop an existing test file, and prompt you to write unit tests for the new feature.

7. Once you finish the tests, run them to make sure they pass and fix any issues.

8. Let the user know that they've finished this portion of the training and are ready to use Windsurf for their own work!

---

## Training Progress

**Estimated total training time: ~50 minutes**

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro (~4 min)
2. ✅ model-selection (~2 min)
3. ✅ cascade-mode-selection (~3 min)
4. ✅ managing-conversations (~5 min)
5. ✅ editing-with-cascade (~2 min)
6. ✅ context (~7 min)
7. ✅ codemaps (~4 min)
8. ✅ deepwiki (~3 min)
9. ✅ terminal-usage (~4 min)
10. ✅ rules-lesson (~5 min)
11. ✅ workflow-lesson (~6 min)
12. ✅ use-case-bug-fixing (~4 min)
13. ✅ **use-case-feature-dev** (~6 min) (You just completed this!)

🎉 **Congratulations! You've completed all core training workflows!**

**Optional Advanced Training:**
- advanced-training-arena-mode *(optional - try `/advanced-training-arena-mode`)*
- advanced-training-hooks *(optional - try `/advanced-training-hooks`)*
- advanced-training-cli-tools *(optional - try `/advanced-training-cli-tools`)*
- advanced-training-git-worktrees *(optional - try `/advanced-training-git-worktrees`)*

If you have time, try `/advanced-training-hooks`, `/advanced-training-cli-tools`, or `/advanced-training-git-worktrees` to continue with optional advanced training!
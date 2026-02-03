---
description: Editing with cascade
---

**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display. 


This workflow is intended to give users info that will help them work more effectively with Cascade, focusing on editing and reviewing code changes. 

1. Greet the user and explain that you are Cascade, an agent, and that you are going to help them understand how to effectively work with you in the IDE.

2. The first thing we'll cover is how to review changes that I might make in your codebase. Tell the user you're going to make some simple changes, just adding comments in a config.js, collisions.js, and game.js files.

3. Once you've added some comments to those files, let the user know they should expand the dropdown just above the cascade input box to see a list of the files that have changes pending review. They should click on that dropdown to expand, and select one of the modified files. Then, let them know they can cycle through changes within a file, cycle through files, and accept/reject changes at either the chunk level or the file level using the buttons in the editor itself. Be very clear that these buttons are in the editor section near the bottom of the open file.The user should use these buttons to accept/reject all your changes, and let you know when they've done so. Note to the user that they will only see the aforementioned buttons if you have made unreviewed changes. If they've already accepted/rejected, they won't see them.

4. Move on to next session by starting a new conversation and trigger the 'context' workflow.



---

## Training Progress

**Estimated total training time: ~50 minutes**

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro (~4 min)
2. ✅ model-selection (~2 min)
3. ✅ cascade-mode-selection (~3 min)
4. ✅ managing-conversations (~5 min)
5. ✅ **editing-with-cascade** (~2 min) (You just completed this!)
6. ➡️ **context** (~7 min) (Next: `/context`)
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

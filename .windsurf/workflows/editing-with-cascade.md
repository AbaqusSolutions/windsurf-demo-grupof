---
description: Editing with cascade
---

**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display. 


This workflow is intended to give users info that will help them work more effectively with Cascade, focusing on editing and reviewing code changes. 

1. Greet the user and explain that you are Cascade, an agent, and that you are going to help them understand how to effectively work with you in the IDE.

2. The first thing we'll cover is how to review changes that I might make in your codebase. Tell the user you're going to make some simple changes, just adding comments in a config.js, collisions.js, and game.js files.

3. Once you've added some comments to those files, let the user know they should expand the dropdown just above the cascade input box to see a list of the files that have changes pending review. They should click on that dropdown to expand, and select one of the modified files. Then, let them know they can cycle through changes within a file, cycle through files, and accept/reject changes at either the chunk level or the file level using the buttons in the editor itself. Be very clear that these buttons are in the editor sectionnear the bottom of the open fileThe user should use these buttons to accept/reject all your changes, and let you know when they've done so.

4. Move on to next session by starting a new conversation and trigger the 'context' workflow.



---

## Training Progress

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro
2. ✅ model-selection
3. ✅ managing-conversations
4. ✅ **editing-with-cascade** (You just completed this!)
5. ➡️ **context** (Next: `/context`)
6. terminal-usage
7. rules-lesson
8. workflow-lesson
9. use-case-bug-fixing
10. use-case-feature-dev

**Optional Advanced Training:**
- advanced-training-cli-tools *(optional - complete if you have time)*
- advanced-training-git-worktrees *(optional - complete if you have time)*

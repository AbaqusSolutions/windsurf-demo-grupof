---
description: Teach users how to set up and use workflows
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.


1. Explain to the user that Workflows are a way to save and re-use prompts or a series of prompts in Cascade. Similar to rules, these workflows can easily be shared with other users through version control. 

2. Explain that the training materials the user has been going through up to this point are actually using workflows! In the file explorer, the user can expand the '.windsurf' directory and see a 'workflows' directory within that. Tell them to click into a couple of existing workflows. STOP here until the user confirms they've done this.

3. Now, let's have the user create a new workflow. Click into the 'Customizations' page (notepad icon at the top of the Cascade panel), go to the 'Workflows' tab, and click the '+ Workspace' button to create a new workflow. Have the user name the workflow 'code-review'.
STOP here until the user confirms they've done this.

4. Propose the following workflow content to the user (give them this block to copy-paste into the workflow file, don't write it to the file yourself):

```
1. Run 'git status' to see what files have uncommitted changes
2. For EACH FILE that has uncommitted changes (DO THE BELOW PROCESS ONE FILE AT A TIME):
    - Run 'git diff <filename>' to see the changes
    - Make sure that the changes are appropriate in the context of the codebase and are aligned with the styling and structure of the codebase
    - Give the user notes about improvements they could make or any potential bugs or inconsistencies in the code. Offer to go to the next file when the user is ready.
    - Wait for the user to confirm
    - Go to the next file or help the user make changes.
```

5. STOP here until the user confirms they've put this in the file and saved it.

6. Have the user start a new convo, make a couple random changes in various files, and then run the 'code-review' workflow. Let them know that they should come back to this conversation after they've confirmed that the workflow runs as expected!

7. Explain to the user a few key qualities of workflows:
    - They can combine all of the tools Cascade has access to! In the code-review example, we used terminal tools, file read tools, and maybe file edit tools if requested by the user.
    - There are many use-cases where workflows can be helpful. Things like version upgrades, architecture planning, code reviews, bug fixing, etc are all great candidates for workflows.
    - There is an internal repository that users can go to where their colleagues have created and shared workflows that they've found beneficial. This is a great place to start when looking for workflows to use or modify for your own needs

8. Explain to the user that they've finished this portion of the training, and can start a new convo and trigger the 'use-case-bug-fixing' workflow to move on to the next portion of the training.

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
8. ✅ **workflow-lesson** (You just completed this!)
9. ➡️ **use-case-bug-fixing** (Next: `/use-case-bug-fixing`)
10. use-case-feature-dev

**Optional Advanced Training:**
- advanced-training-cli-tools *(optional - complete if you have time)*
- advanced-training-git-worktrees *(optional - complete if you have time)*
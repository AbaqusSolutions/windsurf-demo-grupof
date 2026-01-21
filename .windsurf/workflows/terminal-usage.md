---
description: Teaching how to work with the terminal in Windsurf
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

1. Explain to the user that Cascade has tools that allow you to instantiate and use your own shell to run commands. Before we get into a demonstration and training, first the user should open up their own terminal (click 'Terminal' -> 'New Terminal' in the top menu bar). User should let you know when they have it open.

2. The default shell that opens in your terminal can be modified in the Editor Settings (i.e. you can set it to zsh, bash, etc.). The important thing to note is that when I (Cascade) open a new shell to run commands, I will use the default shell that you have set in the Editor Settings. I will also source your shell's rc file (e.g. .zshrc, .bashrc, etc.). The idea is that I should have access to all of the same tools and environment variables that you have access to in your terminal. 

**IMPORTANT:**
The below steps are dependent on the Cascade terminal integration working correctly, which is not always the case. If the user struggles to complete any of the below steps or says it isn't working, let them know that they can skip ahead to the next lesson. They should note that the terminal integration is not working correctly, and keep that in mind for a future session where we can debug and fix it.

3. Let's test this out. Run echo '$PATH' in your terminal, and I'll start a shell and run the same thing. We expect to see the same output. Explain to the user that you can automatically see the outputs of your own shell commands, but you cannot by default see the outputs of the user's commands in their own terminal. In order for the user to show you the outputs of their own shell, they can use the @-mention menu, select 'Terminal', and then select their own terminal to show you the output of their shell commands. Tell the user to do this so that you can compare the outputs of your shell and their shell. **IMPORTANT**:Use your read terminal tool to actually examine the content. 
User should also let you know if they have issues with this step.

4. Explain to the user that your shell is persistent within a conversation. If you set an env var, it will be available to all of your future shell commands. Show an example (set a simple env var in one command, and then in a separate command print the value of the env var).

5. As the last step, explain to the user that when you (Cascade) suggest a terminal command for the user to approve, the user can double-click on the command to edit before approving it. As an example, suggest a terminal command that has an obvious typo ('mpm --version' instead of 'npm --version'). Tell the user to correct it by editing the command.

6. Explain to the user that they've finished this portion of the training, and can start a new convo and trigger the 'rules-lesson' workflow to continue training.

---

## Training Progress

Show the user this workflow navigation:

**Core Training Sequence:**
1. ✅ intro
2. ✅ model-selection
3. ✅ managing-conversations
4. ✅ editing-with-cascade
5. ✅ context
6. ✅ **terminal-usage** (You just completed this!)
7. ➡️ **rules-lesson** (Next: `/rules-lesson`)
8. workflow-lesson
9. use-case-bug-fixing
10. use-case-feature-dev

**Optional Advanced Training:**
- advanced-training-cli-tools *(optional - complete if you have time)*
- advanced-training-git-worktrees *(optional - complete if you have time)*

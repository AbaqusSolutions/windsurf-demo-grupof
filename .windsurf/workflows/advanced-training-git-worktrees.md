---
description: Teach users about git worktree support in Cascade
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf and git worktrees with Cascade. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation if they want to continue with other workflows.

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing at the end. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

## Working with Git Worktrees in Cascade

> ⚠️ **Warning:** Git worktrees are only available when you have a **single repository** open in your workspace. If you have multiple repos open, you will not be able to use this feature. Please remove all but the `windsurf-demo` repo from your workspace before proceeding with this lesson.

1. Explain to the user that this lesson teaches them about **git worktree support in Cascade**. Sometimes they want to kick off a Cascade session to make changes, but they don't want those changes interfering or conflicting with whatever they're doing in their current window. For these situations, they can start a Cascade session in its own **worktree**. This means Cascade will create a new branch and a separate directory copy (same as git worktree basic functionality), allowing them to work on a task in isolation without affecting their current workspace. Let them know they'll be trying this feature hands-on in the next steps.

2. Explain that the worktree option is **only available at the beginning of a fresh conversation**. **Important**: Warn the user that they need to complete all of these steps in one go - if they switch back to this conversation tab before submitting their prompt, the 'Worktree' selection will reset back to 'Local'. Give the user the following instructions to complete before coming back to this conversation:
   - Open a new conversation tab (conversations are represented as tabs in Windsurf)
   - Look for a button at the **bottom right of the Cascade input box** that says **'Local'**
   - Click this button and select **'Worktree'**
   - Think of a task to give Cascade (suggest something like "Add a color selector to the game so the user can choose their own color" or any other prompt they'd like)
   - Send the prompt - this will cause Cascade to start working on a fresh branch in a separate directory
   - **Come back to this conversation** and let you know they've submitted the prompt

3. Once the user confirms they've submitted the worktree prompt, tell them to review the changes Cascade is making in the worktree conversation. Point out that they'll notice the files being modified are in a **separate directory**. They can still see and review the changes from their current window, but Cascade is not modifying the same files they've been working on - it's working in an isolated copy. Ask them to confirm they've noticed this.

4. Once the user confirms they've seen that changes are happening in a separate directory, tell them they can open the worktree in its own window by clicking the **worktree icon at the bottom right of the Cascade input box** in the worktree conversation. This will open a **new Windsurf window** with the worktree. Ask them to do this and come back to let you know they've opened it.

5. Explain that the worktree window allows them to see all the changes Cascade made, interact with the code directly, test and verify the changes, and review the diff. Explain the key benefits of using worktrees with Cascade. For reference, link them to the official git worktree documentation: https://git-scm.com/docs/git-worktree
   - **Isolation**: Changes happen in a separate directory, so their main workspace stays clean
   - **Parallel Work**: They can continue working on other things while Cascade makes changes in the worktree
   - **Safe Experimentation**: They can try out ideas without risk to their current work
   - **Easy Review**: The worktree opens in a new window, making it easy to compare and review changes
   - **Git Integration**: Everything is managed through standard git worktree functionality

6. Remind the user that worktrees work great with **multi-Cascade panels** (which they learned about in the managing-conversations lesson). They can drag Cascade tabs into split views to monitor multiple conversations side-by-side — including a worktree session alongside their main workspace. This combination lets them watch Cascade agents work in isolation while continuing their own tasks in their primary workspace.

7. Discuss scenarios where worktrees are particularly useful:
   - When they're in the middle of work and don't want to switch context
   - For experimental features or refactoring that might be risky
   - When they want to try multiple approaches to the same problem
   - For large changes that will take time to complete
   - When collaborating and they want to keep their main branch clean

8. Congratulate the user on completing the git worktrees lesson! They now understand how to use Cascade with worktrees for isolated development. They can start a new conversation anytime to practice or continue with other training workflows.

---

## Training Progress

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro (~4 min)
2. ✅ model-selection (~2 min)
3. ✅ managing-conversations (~5 min)
4. ✅ editing-with-cascade (~2 min)
5. ✅ context (~7 min)
6. ✅ codemaps (~4 min)
7. ✅ deepwiki (~3 min)
8. ✅ terminal-usage (~4 min)
9. ✅ rules-lesson (~5 min)
10. ✅ workflow-lesson (~6 min)
11. ✅ use-case-bug-fixing (~4 min)
12. ✅ use-case-feature-dev (~6 min)

**Optional Advanced Training:**
-  advanced-training-hooks *(optional - try `/advanced-training-hooks`)*
-  advanced-training-cli-tools *(optional - try `/advanced-training-cli-tools`)*
- ✅ **advanced-training-git-worktrees** (You just completed this!)

Great job completing this optional lesson! You now understand how to:
- Use Cascade with git worktrees for isolated development
- Manage parallel workflows without conflicts
- Review changes in a separate window
- Start a new conversation to practice on your own projects

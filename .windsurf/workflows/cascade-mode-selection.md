---
description: Learn about Cascade modes (Code, Ask, and Plan Mode)
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

This workflow teaches users about the different Cascade modes: Code Mode, Ask Mode, and Plan Mode.

1. Greet the user and explain that Cascade has three different modes that control how it responds to your prompts. Tell them to look for the mode toggle at the bottom of the Cascade input box (near where they select models). Ask them to let you know when they see it.

2. Once the user confirms, explain the three modes:
   - **Code Mode**: This is the default mode. Cascade will actively make changes to your codebase - editing files, creating new files, running commands, etc. Use this when you want Cascade to implement something.
   - **Ask Mode**: Cascade will only respond with text and will NOT make any changes to your codebase. Use this when you want to discuss ideas, ask questions about code, or get explanations without any modifications.
   - **Plan Mode**: Cascade will create a detailed plan for how to accomplish your task, but will NOT execute the plan or make any changes. Use this when you want to think through an approach before committing to implementation.

3. Have the user try switching to **Ask Mode**. Tell them to click the mode toggle and select "Ask". Once they confirm, explain that in this mode, they can safely ask questions without worrying about Cascade modifying their code. This is great for learning, exploring options, or getting explanations.

4. Next, have the user switch to **Plan Mode**. Once they confirm, explain that Plan Mode is particularly useful for:
   - Breaking down complex tasks before implementation
   - Getting a roadmap for large features
   - Understanding the scope of changes before committing
   - Reviewing the approach with teammates before execution
   
   Tell them to try asking you to "add a leaderboard feature to the game" while in Plan Mode. You should respond with a detailed plan but NOT make any code changes.

5. After demonstrating Plan Mode, have the user switch back to **Code Mode**. Explain that this is the mode they'll use most often when they want Cascade to actually implement changes. They can ask Cascade to implement the plan they just created via natural language, or find an Implement button if they click into the plan itself.

6. Share a tip: Users can quickly toggle between modes using keyboard shortcuts or by simply telling Cascade what they want. For example, saying "just explain this to me, don't make changes" will effectively put Cascade in an Ask Mode mindset even if Code Mode is selected.

7. Let them know they've finished the Cascade modes portion of the training. Tell them to start a new conversation with the '+' button at the top of the panel, and trigger the 'managing-conversations' workflow to move on to the next portion of the training.

---

## Training Progress

**Estimated total training time: ~50 minutes**

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro (~4 min)
2. ✅ model-selection (~2 min)
3. ✅ **cascade-mode-selection** (~3 min) (You just completed this!)
4. ➡️ **managing-conversations** (~5 min) (Next: `/managing-conversations`)
5. editing-with-cascade (~2 min)
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

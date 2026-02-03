---
description: Teach users about DeepWiki in Windsurf
auto_execution_mode: 0
---
**DEEPWIKI** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.


1. Introduce DeepWiki to the user. Explain that DeepWiki provides AI-powered explanations of code symbols. Unlike classical hover cards that just show basic type information, DeepWiki explains functions, variables, and classes as you read through code. It gathers context of all the times a function or variable appears in the codebase and synthesizes it into an on-demand wiki page.

2. Explain how to invoke DeepWiki. Tell the user there are two ways:
   - **Hover + Keyboard Shortcut**: Hover over a symbol (function, variable, or class) in the code and click the "Read More" button at the bottom of the hover card. 
   - **Keyboard Shortcut**: Press `Cmd+Shift+Click` (Mac) or `Ctrl+Shift+Click` (Windows/Linux) on a symbol to open DeepWiki.
   
   Ask the user to open a code file (suggest `static/js/game.js` or `static/js/renderer.js`) and try invoking DeepWiki on a function like `drawGame` or `updateGame`.

3. Once the user has invoked DeepWiki, explain what they're seeing. DeepWiki analyzes the symbol across the entire codebase and generates a comprehensive explanation including:
   - What the function/variable does
   - How it's used throughout the codebase
   - Related functions and dependencies
   - Example usage patterns
   
   This is much more powerful than a simple type definition because it understands the context of how the code is actually used.

4. Explain how to send DeepWiki content to Cascade. Tell the user they can click the `⋮` button (three dots menu) in the top right of the DeepWiki panel and select "Add to Cascade". This allows them to use the DeepWiki explanation as context when asking Cascade questions about the code.

5. Ask the user to try sending a DeepWiki explanation to Cascade. Once they do, they can ask follow-up questions about the symbol with full context already provided.

6. Summarize the key differences between DeepWiki and Codemaps:
   - **DeepWiki**: Symbol-level documentation - deep understanding of individual functions, variables, and classes
   - **Codemaps**: Flow-level understanding - how components work together and the order of execution
   
   Both tools complement each other for understanding unfamiliar codebases.

7. Tell the user they've completed the DeepWiki lesson! They should start a new conversation and trigger the `/terminal-usage` workflow to continue training.

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
8. ✅ **deepwiki** (~3 min) (You just completed this!)
9. ➡️ **terminal-usage** (~4 min) (Next: `/terminal-usage`)
10. rules-lesson (~5 min)
11. workflow-lesson (~6 min)
12. use-case-bug-fixing (~4 min)
13. use-case-feature-dev (~6 min)

**Optional Advanced Training:**
- advanced-training-arena-mode *(optional - try `/advanced-training-arena-mode`)*
- advanced-training-hooks *(optional - try `/advanced-training-hooks`)*
- advanced-training-cli-tools *(optional - try `/advanced-training-cli-tools`)*
- advanced-training-git-worktrees *(optional - try `/advanced-training-git-worktrees`)*

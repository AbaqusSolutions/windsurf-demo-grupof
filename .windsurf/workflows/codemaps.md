---
description: Teach users about Codemaps in Windsurf
auto_execution_mode: 0
---
**CODEMAPS** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.


1. Introduce Codemaps to the user. Explain that Codemaps and DeepWiki (which they'll learn about next) are both critical components to codebase understanding, and that Codemaps help with codebase understanding by mapping how everything works together—showing the order in which code and files are executed and how different components relate to each other. Codemaps are great for understanding complex flows in a codebase, including:
- How a request flows through your application
- What happens when a user performs a specific action
- How different modules interact with each other

2. Explain how to create a Codemap. Tell the user they can access Codemaps in one of two ways:
   - **Activity Bar**: Find the Codemaps interface in the Activity Bar (left side panel) - it looks like a map icon and should be the fourth icon from the top
   - **Command Palette**: Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) and search for "Focus on Codemaps View"
   
   Ask the user to open the Codemaps panel using one of these methods.

3. Once the user has the Codemaps panel open, explain how to create a new Codemap:
   - They can select a suggested topic (suggestions are based on recent navigation history)
   - They can type their own custom prompt describing what they want to understand
   - They can also generate Codemaps from the bottom of a Cascade conversation
   
   Ask the user to create a Codemap. Suggest they try something like "How does the game rendering work?" or "What happens when a player collides with food?" to explore this codebase.

4. Once the Codemap is generated, explain the two different views available:
   - **Diagram View**: A visual flowchart showing the relationships between components
   - **Text View**: A step-by-step textual breakdown of the flow
   
   Ask the user to toggle between the two views to see the difference. The toggle is at the top of the Codemap panel.

5. Explain that clicking through steps in the text Codemap, or through the nodes in the diagram Codemap, can take them directly to the corresponding location in the codebase (e.g. Step 1a, Step 1b, etc.). Ask the user to click on a node/step to see how it navigates them to that file and function.

6. Explain the different ways to use Codemaps with Cascade:
   - **Chat with specific steps**: In Text View, they can click on a step and chat about just that step
   - **Chat with the whole Codemap**: In both Diagram and Text View, they can chat about the entire Codemap
   - **@-mention a Codemap**: They can type `@` in Cascade, select Codemaps, and pick a Codemap to include it as context in their conversation
   
   Ask the user to try: 
   - @-mentioning their Codemap in Cascade to see how it works.
   - Chatting about a specific step in the Codemap in Text view to see how it works.
   - Chatting about the entire Codemap to see how it works.
   
   The last two approaches will open in new Cascade windows, so make sure they know to close those windows and come back to the current chat when they're done.

7. Mention that if Codemaps sharing is enabled (this is most likely disabled for enterprises), they can be shared with teammates as links that can be viewed in a browser. This is useful for onboarding new team members or discussing architecture.

8. Tell the user they've completed the Codemaps lesson! They should start a new conversation and trigger the `/deepwiki` workflow to continue learning about code understanding tools.

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
7. ✅ **codemaps** (~4 min) (You just completed this!)
8. ➡️ **deepwiki** (~3 min) (Next: `/deepwiki`)
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

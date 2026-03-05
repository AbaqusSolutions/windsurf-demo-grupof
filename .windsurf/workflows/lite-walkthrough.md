---
description: Simplified Windsurf walkthrough for shorter live sessions
---

**CONTEXT** 
This is a condensed version of the full Windsurf training, designed for live sessions (~30 minutes, but likely longer in live settings). It covers the most important topics in a single flow. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course. You are allowed to service other requests, but do your best to keep the user on track.

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow. Update it as each section is completed.

---

## Part 1: Intro & Running the App (~5 min)

1. Greet the user and briefly explain Cascade: an AI coding assistant that can read, write, and run code in their project. Prompt the user to ask a question about the codebase like "what does this app do?"

2. After answering, briefly mention the search tools you used. Then offer to help run the app. 
Explain that Cascade has its own shell for running terminal commands. Key points to cover quickly:
   - You use the same default shell and source the user's rc file, so you have access to the same tools and env vars they do
   - Your shell is persistent within a conversation (env vars carry over between commands)
   - When Cascade suggests a command, the user can double-click it to edit before approving
After explaining this, use terminal commands to set up a venv, install dependencies, and run the app. 
Tell the user to click 'In-IDE' on the browser preview to see it.

This covers terminal commands and browser preview.

## Part 2: Cascade Modes and Making Changes

3. Once the app is running, tell the user you can also plan and make changes. Explain the three Cascade modes (toggle at the bottom of the input box):
   - **Code Mode** (default): Cascade actively makes changes — edits files, runs commands, etc.
   - **Ask Mode**: Cascade only responds with text, no changes to the codebase. Great for learning and exploration.
   - **Plan Mode**: Cascade creates a detailed plan but does NOT execute it. Great for scoping work before committing.
   
   Have the user switch to Plan Mode and try: "add a player guide to the game UI with brief instructions on how to play". Review the plan together, then hit the "Implement" button to automatically switch back to Code Mode and execute it.
   

4. Explain how to review the changes. Tell the user to expand the dropdown just above the Cascade input box — they'll see a list of files with pending changes. Have them click on a modified file to open the diff view. Walk them through the review controls in the editor (near the bottom of the open file):
   - They can cycle through changes within a file and across files
   - Accept or reject changes at the **chunk level** (individual change), **file level**, or **Accept All** to accept changes across all files at once
   - These buttons only appear when there are unreviewed changes
   
   Have the user accept or reject the changes, then let you know when they're done and have them refresh the browser preview.
   
## Part 3: Adding Context (~3 min)

5. Explain that Cascade can find context on its own using search tools, but users can also provide context manually. Quickly demonstrate these methods:
   - **@-mentions**: Type `@` in the input box to attach files or directories. Have the user try `@static/js` to point you at the rendering code.
   - **Drag and drop**: Drag a file from the explorer into the input box.
   - **Cmd+L**: Highlight code in the editor and press `Cmd+L` to send specific lines to Cascade.
   - **URLs**: Paste a URL for Cascade to curl and read external content.
   - **Screenshots**: Drag and drop a screenshot for visual context (diagrams, designs, etc.)
   
   Have the user try at least one of these methods (suggest the @-mention approach as it's the most common).

---

## Part 4: DeepWiki (~2 min)

7. Introduce DeepWiki: AI-powered explanations of code symbols that go beyond basic hover cards. It gathers context from across the codebase to generate comprehensive docs for functions, variables, and classes.

Have the user try it:
   - Open `static/js/game.js` or `static/js/renderer.js`
   - Hover over a function like `drawGame` or `updateGame` and click "Read More", or use `Cmd+Shift+Click` on a symbol
   - They can send DeepWiki content to Cascade via the `⋮` menu → "Add to Cascade"

---

## Part 5: Codemaps (~3 min)

8. Introduce Codemaps: visual maps of how code flows through the application — showing execution order and component relationships. Access via the map icon in the Activity Bar (left panel) or `Cmd+Shift+P` → "Focus on Codemaps View".

Have the user create a Codemap. Suggest: "How does the game rendering work?" or "What happens when a player collides with food?" Walk them through:
    - **Diagram View** vs **Text View** (toggle at top of panel)
    - Clicking nodes/steps navigates to the corresponding code
    - They can @-mention a Codemap in Cascade to use it as context

9. Briefly contrast DeepWiki vs Codemaps:
    - **DeepWiki**: Deep understanding of individual symbols (functions, classes, variables)
    - **Codemaps**: Flow-level understanding of how components work together

---

## Part 6: Rules, Workflows & Skills (Brief Overview) (~4 min)

10. Briefly explain **Rules**: persistent instructions that shape Cascade's behavior. Key points:
    - Click the notepad icon at the top of the Cascade panel → Rules tab → `+ Workspace`
    - Rules can be `always_on` (every conversation), `model_selection` (up to the model to decide), `glob` (programmatic selection of file types/directories), or `manual` (@-mentioned when needed)
    - Stored in `.windsurf/rules/` so they can be committed to version control and shared with the team
    - Example use case: "Always use python3 when running Python scripts"

11. Briefly explain **Workflows**: saved, reusable prompt sequences (like the one running right now!). Key points:
    - Click the notepad icon at the top of the Cascade panel → Workflows tab → `+ Workspace`
    - Stored in `.windsurf/workflows/` and shareable via version control
    - Triggered by typing `/workflow-name` in Cascade
    - Great for repeatable processes like code reviews, version upgrades, architecture planning
    - This entire training is built with workflows!

12. Briefly explain **Skills**: built-in, curated multi-step capabilities that Cascade can invoke for common development tasks. Key points:
    - Click the notepad icon at the top of the Cascade panel → Skills tab → `+ Workspace`
    - Stored in `.windsurf/skills/` and shareable via version control
    - Skills follow the open standard at https://agentskills.io/home
    - The basic structure of a skill is a `skill_name` folder with a `SKILL.md` file and optional supporting files (scripts, additional documentation, etc)
    - Think of Skills as "expert assistants" — each one brings detailed instructions and domain knowledge to a specific task

13. Tell the user that there are sample rules, workflows, and skills in the `.windsurf/` directory of this repo that they can explore and modify.

---

## Wrap-Up

14. Summarize what was covered:
    - **Reading & understanding code** with search tools, DeepWiki, and Codemaps
    - **Running code** with terminal integration
    - **Making changes** in Code Mode and reviewing edits
    - **Adding context** via @-mentions, drag-and-drop, Cmd+L, URLs, and screenshots
    - **Cascade modes** for different workflows (Code, Ask, Plan)
    - **Rules, Workflows & Skills** for customization, repeatability, and built-in expertise

    Let the user know that the full training (`/intro`) covers additional topics in more depth, including model selection, conversation management, bug fixing workflows, and advanced features like Arena Mode, Hooks, CLI tools, and Git worktrees.

---

## Training Progress

**Estimated session time: ~23 minutes**

Show the user this progress tracker. Update checkmarks as each section is completed.

**Lite Training Sequence:**
1. Intro & Running the App (~5 min)
2. Adding Context (~3 min)
3. Cascade Modes (~2 min)
4. DeepWiki (~2 min)
5. Codemaps (~3 min)
6. Rules, Workflows & Skills Overview (~4 min)

**Want more?** The full training covers additional topics in depth. Start a new conversation and try `/intro` to begin the complete walkthrough (~50 min).

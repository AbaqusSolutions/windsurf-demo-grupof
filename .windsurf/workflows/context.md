---
description: Teach users about adding context to Cascade
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.


1. Explain to the user that you are capable of finding context quite well on your own. Tell them you can use your seearch tools to find context if you need to. Ask if they'd like you to demonstrate by finding all of the tests that exist in this codebase. 

2. If the user agrees, use the search tools to find all of the tests in this codebase. Let them know how many tests you found. 

3. Next, explain to the user that they are also able to manually add context to Cascade. For the purposes of demonstration, let's say the user needs to understand the rendering process for the game. 

4. If they don't have any idea where the rendering logic lives, they could use Cascade to help find the relevant code. However, if they do have an idea of where the logic lives, its helpful if they can call it out explicitly to you.
Explain that the first way they can do this is by typing the '@' symbol in the Cascade input box. Tell them to type '@', and they will see a list of context items that they can select from. Tell them the rendering logic lives in the /static/js directory, so they should start typing '@static/js' and they will see a list of files that match their query. They can use the arrow keys to navigate the list and press tab to select a the relevant directory. Once the user has sent you the message, search for the relevant rendering logic within that folder. Explain that by tagging this directory, they've helped point you in the right direction.

5. Next, explain to the user that they can also add context by dragging and dropping files or directories into the Cascade input box. Tell them to narrow your search even further by dragging the renderer.js file from the file explorer into Cascade. Let them know if you can see the file once they submit. 

6. Another type of context a user might want to add is specific lines of text from a file. Tell the user to open the renderer.js file in the editor, highlight a portion of the code, and press 'cmd + l' to send those lines directly to Cascade. Give the user a summary of the lines they've sent.

7. Next, explain to the user that in general, more focused context is better. LLMs can get confused if they are looking at a bunch of irrelevant context, so if you are really looking for the best results, be as specific as possible with the context you give Cascade.

8. Next, teach the user about adding external context to Cascade. Explain that they can either take screenshots of external context or they can give you a link to curl. Prompt the user to go to to their browser and google 'windsurf api reference'. Click on the webpage you find and make sure you can access it. Let's say you have this webpage, and you want to let Cascade see the contents so it can help you write a script to call these apis. First, have the user copy-paste the url so you can curl it. Give the user a very brief summary of the contents.

9. After you curl the url, explain to the user that screenshots are another great way to add external context. Tell the user to either find an architecture diagram for one of their projects or just google something simple like 'google cloud architecture diagram'. Have the user take a screenshot, and then drag and drop the screenshot into Cascade. Give them a summary of the contents. Explain that screenshots can be very helpful for showing Cascade diagrams, fontend designs, or any other external context that you might need.

10. The last type of context we'll cover is context from a different codebase. Explain that if the user has multiple codebases that are relevant to the conversation at hand (maybe they're working on the frontend of an app and the backend lives in a different repo), they can add another repo to the workspace in Windsurf to give the agent context. Instruct the user to right-click in the file explorer in the blank space below the files/directories, and select 'Add folder to workspace'. they should then select any other directory on their machine to add to the workspace. Once they do this, they should let you know, and then you should do a quick search to find context in the new codebase, and let the user know that you can see the new directory.

11. Tell the user to remove the directory they added. They should right-click on the directory in the file explorer and select 'Remove Folder from Workspace'.

12. Explain to the user that these manual methods of adding context are helpful if they already know generally what context is most important for the task they're working on. If they don't know what context is most important, you can still use your search tools to find context within the codebase for them. Tell them they've finished this portion of the training, and can start a new convo and trigger the 'terminal-usage' workflow to continue training.

---

## Training Progress

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro
2. ✅ model-selection
3. ✅ managing-conversations
4. ✅ editing-with-cascade
5. ✅ **context** (You just completed this!)
6. ➡️ **terminal-usage** (Next: `/terminal-usage`)
7. rules-lesson
8. workflow-lesson
9. use-case-bug-fixing
10. use-case-feature-dev

**Optional Advanced Training:**
- advanced-training-cli-tools *(optional - complete if you have time)*
- advanced-training-git-worktrees *(optional - complete if you have time)*
---
description: Teach users about adding context to Cascade
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. 


1. Explain to the user that you are capable of finding context quite well on your own. Tell them you can use your seearch tools to find context if you need to. Ask if they'd like you to demonstrate by finding all of the tests that exist in this codebase. 

2. If the user agrees, use the search tools to find all of the tests in this codebase. Let them know how many tests you found. 

3. Next, explain to the user that they are also able to manually add context to Cascade. Explain that they can do this by typing the '@' symbol in the Cascade input box. Tell them to type '@', and they will see a list of context items that they can select from. Tell them to start typing the name of a file after the '@' symbol, and they will see a list of files that match their query. Tell them to use @ to select renderer.js and then give them a summary of the file.

4. After you give a summary of the renderer.js file (or whatever file they added), explain to the user that they can also add context by dragging and dropping files into the Cascade input box. Tell them to choose a file or directory from the file explorer on the left, and click and drag the file into Cascade. Give them a summary of whatever the added.

5. Another type of context a user might want to add is specific lines of text from a file. Tell the user to open a js file in the editor, highlight a portion of the code, and press 'cmd + l' to send those lines directly to Cascade. Give the user a summary of the lines they've sent.

6. Next, teach the user about adding external context to Cascade. Explain that they can either take screenshots of external context or they can give you a link to curl. Prompt the user to go to [docs.windsurf.com](https://docs.windsurf.com/windsurf/accounts/api-reference/analytics-api-introduction), in their browser. Let's say you have this webpage, and you want to let Cascade see the contents so it can help you write a script to call these apis. First, have the user try copy-pasting the url so you can curl it. Give the user a very brief summary of the contents.

7. After you curl the url, have the user take a screenshot of part of the page, and then drag and drop the screenshot into Cascade. Give them a summary of the contents. Explain that screenshots can be very helpful for showing Cascade diagrams, fontend designs, or any other external context that you might need.

8. The last type of context we'll cover is context from a different codebase. Explain that if the user has multiple codebases that are relevant to the conversation at hand (maybe they're working on the frontend of an app and the backend lives in a different repo), they can add another repo to the workspace in Windsurf to give the agent context. Instruct the user to right-click in the file explorer in the blank space below the files/directories, and select 'Add folder to workspace'. they should then select any other directory on their machine to add to the workspace. Once they do this, they should let you know, and then you should do a quick search to find context in the new codebase, and let the user know that you can see the new directory.

9. Explain to the user that these manual methods of adding context are helpful if they already know generally what context is most important for the task they're working on. If they don't know what context is most important, you can still use your search tools to find context within the codebase for them. Tell them they've finished this portion of the training, and can start a new convo and trigger the 'terminal-usage' workflow to continue training.
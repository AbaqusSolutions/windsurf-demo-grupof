---
description: Teaching the user how to work effectively with Cascade
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. 


This workflow is intended to give users info that will help them work more effectively with Cascade. 

1. Greet the user and explain that you are Cascade, an agent, and that you are going to help them understand how to effectively work with you in the IDE.

2. The first thing we'll cover is how to review changes that I might make in your codebase. Tell the user you're going to make some simple changes, just adding comments in a config.js, collisions.js, and game.js files.

3. Once you've added some comments to those files, prompt the user to use the Cascade buttons in the editor to review the changes. Let them know they can cycle through changes within a file, cycle through files, and accept/reject changes at either the chunk level or the file level. Let them know they can also expand the dropdown just above the cascade input box to see a list of the files that have changes pending review. The user should let you know when they've accepted/rejected all the changes.

4. Next, cover the 'revert' functionality. Explain that sometimes, you will make mistakes and the user may want to revert back to an earlier point in the conversation. Let them know that they hover over any of their previous prompts in the Cascade panel and click the 'revert' button to revert back to that point. This will undo all of the changes you've made after that prompt. Tell the user to try reverting back to the prompt before you added the comments. NOTE to the user that this will also clear your memory of that part of the conversation, so once they revert they can move on to the next training section. Tell the user to start a new conversation and trigger the 'context' workflow.


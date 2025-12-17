---
description: Introduction to Cascade
auto_execution_mode: 1
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).


This workflow is intended to give users an intro to interacting with the Cascade agent.

1. Greet the user and explain the general purpose of Cascade. Don't search the codebase yet. You should end your message by prompting the user to ask a question about the codebase like 'what does this app do?'


2. After your response, tell the user about the codebase search tools you used to find this information, and any others you didn't use but have access to. Now let's help the user run the app. Let the user know about your tools for runnning terminal commands, and ask the user 'Would you like me to help you run the app?' Set up a venv, install dependencies, and run the app.

3. After you get the app running, tell the user to click 'In-IDE' on the browser preview menu, and tell the user you can also make changes to the codebase. 'Try prompting me to make a change. How about we add a 'player guide' to the game UI that gives simple, brief instructions about how to play?'

5. Once finished with whatever change the user requested, tell them to refresh the browser preview to see the change. Then, let the user know they've finished the intro portion of the training. Give a summary of what we've done and your capabilities, focused on
 - Reading and understanding code
 - Running code
 - Making changes to code
 And then tell them to start a new conversation with the '+' button at the top of the panel, and trigger the 'model-selection' workflow to move on to the next portion of the training.
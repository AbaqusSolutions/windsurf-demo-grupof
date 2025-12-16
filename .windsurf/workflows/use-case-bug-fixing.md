**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. 

1. Explain to the user that now that they've learned the basic features and functionalities of Cascade, we're going to take a look at some common use-cases for Cascade.

2. Bug-fixing is a common use-case! If you have access to logs, errors, or a description of what's going wrong, you can use your tools to help investigate and fix issues.

3. As a simple example, tell the user you can run tests, look at any failures, and investigate what might be going wrong. Ask the user if they'd like you to go ahead and do this. If they say yes, run the tests and look at any failures, and explain what might be going wrong. Ask the user if they'd like you to fix the issue. If they say yes, fix the issue and run the tests again to make sure the issue is resolved.

4. Next, tell the user they might also encounter bugs during runtime. Make sure they have the app running (if not, start it for them and give them the browser preview). Once they have the app runing, ask them to describe any potential issues they see with the leaderboard. Tell them to either send you a screenshot or a written description, and you'll investigate from there and figure out what's wrong.

5. Once you're able to find and fix the issue, tell the user to refresh the page and verify that its working. 

6. Outline some other ways that the user can use Cascade to help with bug investigation and fixing. 
    - Paste logs and error traces directly into the Cascade input
    - Add a diagnostics or logs file to their workspace and @-mention it to Cascade
    - Screenshots
    - Descriptions of issues
Are all great ways to use Cascade to help with bug investigation and fixing.

7. Tell the user they're done with this portion of the training, and they can move on to a new conversation and trigger the 'use-case-feature-dev' workflow.
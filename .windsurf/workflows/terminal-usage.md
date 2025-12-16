---
description: Teaching how to work with the terminal in Windsurf
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. 

1. Explain to the user that Cascade has tools that allow you to instantiate and use your own shell to run commands. Before we get into a demonstration and training, first the user should open up their own terminal (click 'Terminal' -> 'New Terminal' in the top menu bar). User should let you know when they have it open.

2. The default shell that opens in your terminal can be modified in the Editor Settings (i.e. you can set it to zsh, bash, etc.). The important thing to note is that when I (Cascade) open a new shell to run commands, I will use the default shell that you have set in the Editor Settings. I will also source your shell's rc file (e.g. .zshrc, .bashrc, etc.). The idea is that I should have access to all of the same tools and environment variables that you have access to in your terminal. 

3. Let's test this out. Run echo '$PATH' in your terminal, and I'll start a shell and run the same thing. We expect to see the same output. Explain to the user that you can automatically see the outputs of your own shell commands, but you cannot by default see the outputs of the user's commands in their own terminal. In order for the user to show you the outputs of their own shell, they can use the @-mention menu, select 'Terminal', and then select their own terminal to show you the output of their shell commands. Tell the user to do this so that you can compare the outputs of your shell and their shell. 

4. Explain that often the user might want to have a shared terminal, where they can input commands and you (Cascade) can input commands in the same shell. To do this, the user should hover over the shell command in the Cascade chat, and click the button at the top right that says 'Move this terminal session to the terminal tab in your IDE'. Tell the user to let you know when they've found and clicked it.

5. Once they've done that, tell them to set an env var in that shell. Give them a simple command they can copy-paste to do this. 

6. Once they've done this, run a command to print the value of that env var. Explain to the user that now you and the user are both using the same shell, and you can see the outputs of the user's shell commands. 

7. As the last step, explain to the user that when you (Cascade) suggest a terminal command for the user to approve, the user can double-click on the command to edit before approving it. As an example, suggest a terminal command that has an obvious typo ('mpm --version' instead of 'npm --version'). Tell the user to correct it by editing the command.

8. Explain to the user that they've finished this portion of the training, and can start a new convo and trigger the 'rules' workflow to continue training.

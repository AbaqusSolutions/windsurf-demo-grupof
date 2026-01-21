---
description: Learn about Model Selection
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

This workflow is intended to give users an intro to model selection in Cascade.

1. Greet the user and explain that you are Cascade, and that you are here to help them learn about model selection. Start with a description of how LLMs are the 'brain' of Cascade, and how different models have different strengths and weaknesses. Include the fact that new models are released all the time, and that the info on specific models may be out of date. Tell the user to look for the selected model at the bottom of the Cascade input box, and tell them to let you know when they see it.

2. Once the user confirms, tell them to select 'Claude Opus 4.5', and let you know when they've done so. They may need to use the 'Search all models' input box to find it.

3. Once they've confirmed, tell them that this model is the recommended daily driver for now. It's intelligent and reasonably fast, and should be able to handle most tasks.

4. Teach the user about the differences between 'thinking' and 'non-thinking' models. Explain that 'thinking' models are slower and can sometimes be more effective for very complex tasks, while 'non-thinking' models are significantly faster. Then tell them to click the model and look at the others that are available. Tell them to select 'Claude Opus 4.5 Thinking' and let you know when they do so. Again, they may need to use the search input.

5. Once they tell you they've switched, let them know that for now, you'd recommend sticking with Claude Opus 4.5 as a daily driver, but you should feel free to use the 'thinking' version if they prefer. To see the difference with the thinking model, they should be able to expand the block in Cascade chat that says 'thought for x seconds'. This is the 'thinking' model at work, and gives the user insight into the thought process of the model. Again, it takes more time to generate responses, but this additional 'thinking' can sometimes lead to better results for complex issues.

6. Let them know that the models they see are not exhaustive of SOTA models, and their team admins have limited the models available. At the time of writing, the best models available are Claude Opus 4.5 and Claude Opus 4.5 Thinking. User should keep an eye out for new models being made available in the future!

7. Final note, let them know that they'll see a 'multiplier' next to each model in the selector. This multiplier refers to the number of 'credits' that each model uses. Credits are consumed only when you submit a prompt (press enter in the Cascade input box). Users should NOT worry at all about credit consumption, because their team has purchased enough credits that it will be near-impossible for users to run out. Use the best models, and prompt to your heart's content!

8. Let them know that they've finished the model selection portion of the training. Tell them to start a new conversation with the '+' button at the top of the panel, and trigger the 'managing-conversations' workflow to move on to the next portion of the training.

---

## Training Progress

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro
2. ✅ **model-selection** (You just completed this!)
3. ➡️ **managing-conversations** (Next: `/managing-conversations`)
4. editing-with-cascade
5. context
6. terminal-usage
7. rules-lesson
8. workflow-lesson
9. use-case-bug-fixing
10. use-case-feature-dev

**Optional Advanced Training:**
- advanced-training-cli-tools *(optional - complete if you have time)*
- advanced-training-git-worktrees *(optional - complete if you have time)*

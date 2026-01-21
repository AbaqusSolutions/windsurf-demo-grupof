---
description: Teaching about rules
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.


1. Explain to the user that they can create rules to enforce certain patterns and preferences for Cascade's behavior. Tell them to click the notepad icon in the top of the Cascade panel to go to the Customizations page. They should then select the 'Rules' tab and click the '+ Workspace' button to create a new rule. Title the rule 'test-rule'. Set the trigger to 'always_on', and set the content to be 'When greeted by the user, respond with 'hi, I'm honoring your test rule!''. Explain to the user that the 'always_on' trigger means that the rule will be applied in every conversation. Tell the user to let you know when they've created the rule and saved the file.

2. Stop here until the user confirms they've done this.

3. Once they've confirmed this is done, tell them to start a new conversation and greet you with 'hello'. They should then let you know once they've confirmed its working as expected.

4. Explain to the user that rules are a great way to enforce certain behaviors in Cascade. If they ever find themselves consistently telling you to do the same thing, that's a good sign that they should create a rule to automatically enforce that behavior. Also explain that workspace rules are simply stored under the '.windsurf' directory in the root of the workspace, so if they have rules that would be valuable to other people working on the project, they can simply commit the .windsurf directory to their version control system.

5. Explain to the user that there are other activation modes for rules. For certain rules, they might only want to apply them in specific conversations. Tell them to try setting the trigger to 'manual' on their rule and save the file, then let you know when they'e done this.

6. Then have the user start a new convo and greet you with 'hello'. They will see that the rule is no longer honored. Explain that in order for a 'manual' rule to be honored, they must @-mention it in the conversation. Tell them to start a new convo, type the @ symbol, select 'Rules', select their test-rule, and greet you with 'hello'. They should then come back to this convo and let you know once they've confirmed its working as expected. *Important* you will not be able to see the user's test in this convo, so if they tell you they did the test then move on to the next step.

7. Explain that they can find details on other activation modes by clicking the 'info' icon at the top of the rules file. 

8. Finally, let's take an example of a rule that might actually be useful for this project. Have the user create a rule that specifies which Python command to use on their system (e.g., 'Always use python3 when running Python scripts' or 'Always use python when running Python scripts'), and set the trigger to 'always_on'. Tell them to fill in the correct command for their system (either python3 or python). This is useful because Cascade will automatically know which Python command to use whenever working in this repo!   

9. Explain that the user has finished this portion of the training, and can start a new convo and trigger the 'workflow-lesson' workflow to continue training.

---

## Training Progress

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro
2. ✅ model-selection
3. ✅ managing-conversations
4. ✅ editing-with-cascade
5. ✅ context
6. ✅ terminal-usage
7. ✅ **rules-lesson** (You just completed this!)
8. ➡️ **workflow-lesson** (Next: `/workflow-lesson`)
9. use-case-bug-fixing
10. use-case-feature-dev

**Optional Advanced Training:**
- advanced-training-cli-tools *(optional - complete if you have time)*
- advanced-training-git-worktrees *(optional - complete if you have time)*

---
description: Teaching about rules
auto_execution_mode: 0
---

1. Explain to the user that they can create rules to enforce certain patterns and preferences for Cascade's behavior. Tell them to click the notepad icon in the top of the Cascade panel to go to the Customizations page. They should then select the 'Rules' tab and click the '+ Workspace' button to create a new rule. Title the rule 'test-rule'. Set the trigger to 'always_on', and set the content to be 'When greeted by the user, respond with 'hi, I'm honoring your test rule!''. Explain to the user that the 'always_on' trigger means that the rule will be applied in every conversation. Tell the user to let you know when they've created the rule and saved the file.

2. Stop here until the user confirms they've done this.

3. Once they've confirmed this is done, tell them to start a new conversation and greet you with 'hello'. They should then let you know once they've confirmed its working as expected.

4. Explain to the user that rules are a great way to enforce certain behaviors in Cascade. If they ever find themselves consistently telling you to do the same thing, that's a good sign that they should create a rule to automatically enforce that behavior. Also explain that workspace rules are simply stored under the '.windsurf' directory in the root of the workspace, so if they have rules that would be valuable to other people working on the project, they can simply commit the .windsurf directory to their version control system.

5. Explain to the user that there are other activation modes for rules. For certain rules, they might only want to apply them in specific conversations. Tell them to try setting the trigger to 'manual' on their rule, save the file, and then start a new convo and say 'hello'. They will see that the rule is no longer honored. Explain that in order for a 'manual' rule to be honored, they must @-mention it in the conversation. Tell them to start a new convo, @-mention the Rule, and greet you with 'hello'. They should let you know once they've confirmed its working as expected. 

6. Explain that they can find details on other activation modes by clicking the 'info' icon on the top right of the rules file. 

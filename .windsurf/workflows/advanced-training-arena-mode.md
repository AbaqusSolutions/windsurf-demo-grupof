---
description: Teach users about Arena Mode for model comparison
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf and Arena Mode. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation if they want to continue with other workflows.

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing at the end. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

## Working with Arena Mode

1. **Introduction**: Explain to the user what Arena Mode is:
   - Arena Mode runs multiple AI models on the same prompt side-by-side
   - Users can compare responses and vote on which one is better
   - It's a great way to discover which model works best for their specific codebase and workflow
   - Votes contribute to both personal and public leaderboards
   
   Ask the user if they're ready to try Arena Mode.

2. **Accessing Arena Mode**: Tell the user how to access Arena Mode:
   - Start a new conversation - this is important because Arena Mode needs to be enabled at the start
   - Click into the model selector dropdown
   - Look for the **Arena** toggle in the Cascade panel (near the model selector)
   - Toggle to enable Arena Mode
   - Ask them to enable it and let you know when they've done so

3. **Battle Groups Mode**: Explain the first way to use Arena Mode - Battle Groups:
   - Windsurf picks models at random
   - Model names stay **hidden** until the user votes
   - It's great for unbiased comparison since users don't know which model is which
   
   Tell the user to try submitting a prompt in Battle Groups mode. Suggest something like "Explain how the game loop works in this codebase" or any question they'd like to compare answers on. Ask them to come back and let you know once they've tried it and voted. There's no "tie" option, so don't mention that.

4. **Pick Your Own Mode**: Explain the second way to use Arena Mode - Pick Your Own:
   - Users can choose up to **5 specific models** to compare head-to-head
   - This costs credits based on the models chosen
   - Useful when users want to compare specific models they're considering
   
   Tell the user they can try this mode if they want to compare specific models, but it's optional for this lesson.

5. **Voting and Results**: Explain how voting works:
   - After all models respond, the user sees responses side-by-side
   - They vote for the response they prefer (or can vote "tie")
   - In Battle Groups, model names are revealed after voting
   - Votes help build understanding of which models work best
   
   Ask if they noticed any differences in the responses they compared.

6. **Leaderboards**: Explain the two types of leaderboards:
   - **Personal Leaderboard**: Rankings based only on the user's votes - shows what works best for them specifically
   - **Public Leaderboard**: Aggregated across all Windsurf users - shows community consensus
   
   Explain that the personal leaderboard is particularly valuable because it reflects their specific use cases and preferences.

7. **Use Cases for Arena Mode**: Discuss when Arena Mode is most useful:
   - When a task is complex and users want to see different approaches
   - When evaluating whether to switch their default model
   - When curious about how different models handle specific types of questions
   
8. **Wrap Up**: Congratulate the user on completing the Arena Mode lesson! Summarize what they learned:
   - Arena Mode compares models side-by-side on the same prompt
   - Battle Groups uses random hidden models
   - Pick Your Own lets them choose specific models to compare
   - Votes build personal and public leaderboards
   - It's a powerful way to find the best model for their workflow
   
   Let them know they can start a new conversation anytime to continue exploring Arena Mode or try other advanced training workflows.

---

## Training Progress

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro (~4 min)
2. ✅ model-selection (~2 min)
3. ✅ cascade-mode-selection (~3 min)
4. ✅ managing-conversations (~5 min)
5. ✅ editing-with-cascade (~2 min)
6. ✅ context (~7 min)
7. ✅ codemaps (~4 min)
8. ✅ deepwiki (~3 min)
9. ✅ terminal-usage (~4 min)
10. ✅ rules-lesson (~5 min)
11. ✅ workflow-lesson (~6 min)
12. ✅ use-case-bug-fixing (~4 min)
13. ✅ use-case-feature-dev (~6 min)

**Optional Advanced Training:**
- advanced-training-hooks *(optional - try `/advanced-training-hooks`)*
- advanced-training-cli-tools *(optional - try `/advanced-training-cli-tools`)*
- advanced-training-git-worktrees *(optional - try `/advanced-training-git-worktrees`)*
- ✅ **advanced-training-arena-mode** (~4 min) (You just completed this!)

Great job completing this optional lesson! You now understand how to:
- Use Arena Mode to compare AI models side-by-side
- Leverage Battle Groups for unbiased, free comparisons
- Build your personal leaderboard to find the best model for your workflow

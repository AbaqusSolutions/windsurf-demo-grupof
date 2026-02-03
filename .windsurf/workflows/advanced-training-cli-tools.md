---
description: Teach the user about CLI tools in Cascade
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf and advanced CLI tools. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation if they want to continue with other workflows.

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing at the end. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

## Working with CLI Tools in Cascade (PR Review Example)

1. **Introduction**: Explain to the user that this lesson teaches them how to work with **any CLI tool** in Cascade through a practical example: **code review using GitHub CLI**. While we'll focus on reviewing pull requests with `gh`, the concepts apply to **any command-line tool** they might use (e.g., `docker`, `kubectl`, `aws`, `terraform`, `npm`, etc.).
   
   The key skills they'll learn through the PR review workflow:
   - How Cascade can run CLI commands on their behalf
   - How you can parse and analyze CLI output to provide insights
   - How to accomplish complex workflows by combining multiple commands
   - How you can help them review code more efficiently
   
   For this lesson, we'll focus on **reviewing pull requests** using `gh` (GitHub CLI). Note: Mention that Cascade also supports advanced GitHub MCP server tools that provide even deeper integration, but for this lesson we'll focus on the `gh` CLI which works immediately without additional configuration.
   
   Ask the user if they have a GitHub repository with open pull requests they'd like to review. If not, they can use any public repository with active PRs (e.g., `microsoft/vscode` or `facebook/react`).

2. **Check GitHub CLI Installation**: First, let's verify if the user has the GitHub CLI installed. Run `gh --version` to check. If it's not installed, provide instructions:
   - macOS: `brew install gh`
   - Linux: Follow instructions at https://github.com/cli/cli/blob/trunk/docs/install_linux.md
   - Windows: `winget install --id GitHub.cli`
   
   After installation (or if already installed), run `gh auth status` to check if they're authenticated. If not, guide them to run `gh auth login` and follow the prompts. Let them know when they're ready to proceed.

3. **Finding Pull Requests to Review**: Now let's start the PR review workflow. Ask which repository they'd like to review (they should provide owner/repo format, e.g., `microsoft/vscode`). Once they provide it, run:
   - `gh pr list --repo [owner/repo] --limit 10`
   
   Show them the list of open PRs with their numbers, titles, and authors. Explain that you can help them identify which PRs might need attention by looking at factors like age, author, or title keywords.

4. **Viewing PR Details**: Ask the user to pick a PR number from the list that they'd like to review. Once they provide it, run:
   - `gh pr view [PR_NUMBER] --repo [owner/repo]`
   
   Parse and summarize the output for them:
   - What is the PR trying to accomplish? (from title and description)
   - Who authored it and when?
   - What's the current status? (checks, reviews, approvals)
   - How many files changed and how much code?
   
   This gives them context before diving into the code changes.

5. **Examining the Code Changes**: Now let's look at the actual code changes. Run:
   - `gh pr diff [PR_NUMBER] --repo [owner/repo]`
   
   Parse the diff output and provide them with a high-level review:
   - What files were changed?
   - What are the main code changes? (additions, deletions, modifications)
   - Are there any patterns you notice? (e.g., refactoring, new features, bug fixes)
   - Do you spot any potential issues? (e.g., missing error handling, hardcoded values, commented code)
   
   Explain that you can help them understand complex diffs and catch potential issues that might be easy to miss.

7. **Checking PR Conversation and Reviews**: Now let's see what others have said about this PR. Run:
   - `gh pr view [PR_NUMBER] --repo [owner/repo] --comments`
   
   Summarize any existing review comments or discussion. Explain that understanding the conversation history helps them avoid repeating feedback and understand concerns other reviewers have raised.

9. **Beyond GitHub - Other CLI Tools**: Briefly explain that while we used `gh` for PR review, these same principles apply to **any CLI tool**:
   - **Docker**: Reviewing container logs, inspecting images, analyzing resource usage
   - **Kubernetes**: Checking pod status, reading logs, debugging deployments  
   - **Cloud CLIs**: Auditing resources, checking configurations, analyzing costs
   - **Infrastructure tools**: Reviewing Terraform plans, validating configurations

10. **Wrap Up**: Congratulate the user on completing the CLI tools lesson! Explain that while we used `gh` as the example, they now understand the **general principles** for working with **any CLI tool** in Cascade:
    - How to run CLI commands through Cascade
    - How you can parse and analyze CLI output to provide insights
    - How to chain commands together for complex workflows
    - How JSON output from CLIs enables sophisticated analysis
    - When specialized integrations (like MCP for GitHub) can provide even more power
    
    These same patterns work with:
    - **Docker**: `docker ps`, `docker logs`, `docker stats` for container management
    - **Kubernetes**: `kubectl get pods`, `kubectl describe`, `kubectl logs` for cluster operations
    - **AWS/Cloud CLIs**: `aws s3 ls`, `gcloud compute instances list` for cloud resource management
    - **Package managers**: `npm`, `pip`, `cargo` for dependency management
    - **Infrastructure tools**: `terraform`, `ansible` for infrastructure automation
    - And any other CLI tool they use in their workflow!
    
    Let them know they can start a new conversation anytime to practice these skills with any CLI tool they work with.

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
- advanced-training-arena-mode *(optional - try `/advanced-training-arena-mode`)*
- advanced-training-hooks *(optional - try `/advanced-training-hooks`)*
- ✅ **advanced-training-cli-tools** (You just completed this!)
- advanced-training-git-worktrees *(optional - try `/advanced-training-git-worktrees`)*

Great job completing this optional lesson! You can now:
- Apply these CLI skills to any command-line tool you work with
- Try the git-worktrees lesson to learn about isolated development with worktrees
- Return to the main training sequence if you haven't completed it yet
- Start a new conversation to practice on your own projects
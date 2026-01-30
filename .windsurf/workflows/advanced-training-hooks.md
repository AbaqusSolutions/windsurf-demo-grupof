---
description: Teach users about Cascade Hooks (Advanced)
auto_execution_mode: 0
---
**CONTEXT** 
This is a workflow that is intended to teach users how to effectively use Windsurf. You should do your best to keep the user on the track defined here. Give warnings or reminders if the user is straying off course or using the conversation for different purposes. You are allowed to service other requests, but do your best to keep the user on track. At the end of the lesson, you will ask the user to start a new conversation and trigger another workflow. Be sure to format this correctly (it should appear to the user as '/<workflow-name>', since '/' is how you trigger workflows in Windsurf).

**IMPORTANT:** Display the Training Progress section (defined at the bottom of this workflow) as the FIRST thing when the user triggers this workflow, and again as the LAST thing before directing them to the next workflow. When displaying the initial list, show the current lesson as NOT yet completed (no checkmark); only mark it complete in the final display.

## Working with Cascade Hooks (Advanced)

This workflow teaches users about Cascade Hooks - automated scripts that run when Cascade performs specific actions.

**Documentation Reference:** For more details, see the official [Cascade Hooks documentation](https://docs.windsurf.com/windsurf/cascade/hooks).

1. Explain to the user what Cascade Hooks are:
   - Hooks are shell commands that run automatically when specific Cascade actions occur (reading files, writing code, running commands, etc.)
   - They can be used for logging, security controls, quality assurance (like running formatters/linters), and custom workflows
   - There are **pre-hooks** (run before an action, can block it) and **post-hooks** (run after an action completes)
   - Hooks can be configured at three levels: system-level, user-level, and workspace-level
   
   Tell the user we'll set up a workspace-level hook for this project. Ask if they're ready to continue.

2. Explain the hook configuration structure. Hooks are defined in a `hooks.json` file. For workspace-level hooks, this file goes in `.windsurf/hooks.json`. Show them this basic structure:

```json
{
  "hooks": {
    "post_write_code": [
      {
        "command": "python3 /path/to/script.py",
        "show_output": true
      }
    ]
  }
}
```

   Explain the available hook events:
   - `pre_read_code` / `post_read_code` - Before/after reading files
   - `pre_write_code` / `post_write_code` - Before/after writing code
   - `pre_run_command` / `post_run_command` - Before/after terminal commands
   - `pre_user_prompt` / `post_cascade_response` - Before prompts / after responses
   - `pre_mcp_tool_use` / `post_mcp_tool_use` - Before/after MCP tool calls
   - `post_setup_worktree` - After creating a git worktree

   Ask the user to confirm they understand before continuing.

3. Now let's create a practical hook for this project. Since this is a game project with Jest tests, we'll create a hook that logs whenever Cascade edits JavaScript files. This is useful for tracking changes to the game code.

   First, create the hook script. Tell the user you'll create a simple logging script at `.windsurf/hooks/log_js_edits.py`:

```python
#!/usr/bin/env python3
import sys
import json
import os
from datetime import datetime

def main():
    input_data = sys.stdin.read()
    try:
        data = json.loads(input_data)
        file_path = data.get("tool_info", {}).get("file_path", "")
        
        # Only log JavaScript file edits
        if file_path.endswith(".js"):
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            log_msg = f"[{timestamp}] JS file edited: {file_path}\n"
            
            # Write to log file
            log_path = os.path.join(os.path.dirname(__file__), "edit_log.txt")
            with open(log_path, "a") as f:
                f.write(log_msg)
    except json.JSONDecodeError:
        pass

if __name__ == "__main__":
    main()
```

   Create this file for the user.

4. Now create the hooks.json configuration file at `.windsurf/hooks.json`:

```json
{
  "hooks": {
    "post_write_code": [
      {
        "command": "python3 .windsurf/hooks/log_js_edits.py",
        "show_output": true
      }
    ]
  }
}
```

   Create this file for the user. Explain that:
   - `show_output: true` displays output from simple inline commands (like `echo`) in the Cascade UI, but external scripts should write to a log file for reliable output
   - The hook will now run every time Cascade writes to any file

   **Important:** After creating the hooks.json file, tell the user they need to reload the Windsurf window for the hook to take effect. Have them open the Command Palette (`Cmd+Shift+P` on Mac or `Ctrl+Shift+P` on Windows/Linux) and run `Developer: Reload Window`. Wait for them to confirm they've done this before continuing.

5. Test the hook! Tell the user to ask you to make a small change to a JavaScript file in the project (like adding a comment to `static/js/game.js`). After you make the edit, read the log file at `.windsurf/hooks/edit_log.txt` to show them the logged entry.

6. Explain exit codes and blocking behavior:
   - Exit code `0` = success, action proceeds
   - Exit code `2` = block the action (only works for pre-hooks)
   - Any other exit code = error, action proceeds anyway
   
   Pre-hooks can block actions, which is powerful for security. For example, a `pre_run_command` hook could block dangerous commands like `rm -rf`.

7. Explain that users could also create a `pre_run_command` hook to block dangerous commands like `rm -rf`, `mkfs`, or `dd if=`. The script would check the command against a list of dangerous patterns and use `sys.exit(2)` to block any matches. This is a powerful security feature for teams who want to prevent accidental destructive operations.

8. Mention best practices:
   - Keep hooks fast (under 100ms) to avoid slowing down Cascade
   - Use absolute paths in configurations
   - Test hooks thoroughly before relying on them
   - Workspace hooks are version-controlled, so teams can share them

9. Explain that the user has finished this portion of the training. Summarize what they learned:
   - Hooks automate actions when Cascade reads, writes, or runs commands
   - Pre-hooks can block actions; post-hooks run after completion
   - Hooks are configured in `hooks.json` at system, user, or workspace level
   - This project now has a workspace hook that logs JavaScript file edits

   Tell them to start a new conversation and trigger `/advanced-training-cli-tools` to continue with advanced training, or they can consider themselves done with the training if they prefer.

---

## Training Progress

**Estimated total training time: ~45 minutes**

Show the user this workflow navigation. **Important: Display each numbered item on its own line, including the Optional Advanced Training items.**

**Core Training Sequence:**
1. ✅ intro (~4 min)
2. ✅ model-selection (~2 min)
3. ✅ managing-conversations (~5 min)
4. ✅ editing-with-cascade (~2 min)
5. ✅ context (~7 min)
6. ✅ terminal-usage (~4 min)
7. ✅ rules-lesson (~5 min)
8. ✅ workflow-lesson (~6 min)
9. ✅ use-case-bug-fixing (~4 min)
10. ✅ use-case-feature-dev (~6 min)

**Optional Advanced Training:**
- ✅ **advanced-training-hooks** (~5 min) (You just completed this!)
- ➡️ **advanced-training-cli-tools** *(Next: `/advanced-training-cli-tools`)*
- advanced-training-git-worktrees

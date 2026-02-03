# Windsurf Demo App

A demo application and tasks to demonstrate the power of the [Windsurf Editor](https://windsurf.com/).

The application comes pre-loaded with a variety of workflows that will give you hands-on experience with Windsurf basics.

Topics covered include: 
- Intro to Cascade
- Model Selection
- Cascade Modes (Code, Ask, and Plan Mode)
- Managing Conversations
- Editing with Cascade
- Adding Context
- Codemaps
- Deepwiki
- Terminal Usage
- Rules
- Workflows
- Use Case: Bug Fixing
- Use Case: Feature Development
- Advanced: Arena Mode *(optional)*
- Advanced: Cascade Hooks *(optional)*
- Advanced: CLI Tools *(optional)*
- Advanced: Git Worktrees *(optional)*

**To get started, simply clone the repo, open it in Windsurf, and type '/intro' into the Cascade input box!**

## Prerequisites

- Python 3.7 or higher
- Node.js and npm

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd windsurf-demo
```

2. Create and activate a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip3 install -r requirements.txt
```

4. Start the Flask server:
```bash
python3 app.py
```

5. Open your web browser and navigate to:
```
http://localhost:5000
```

6. Play the game!

## FAQ / Troubleshooting

**Q: I can't trigger a workflow like `/intro`**  
A: You may be in "Ask" mode instead of "Code" mode. Workflows can only be triggered in Code mode. Click the mode selector button at the bottom left of the Cascade input box and select "Code" mode, then try again.

**Q: I see "Model provider unreachable" error in Cascade**  
A: Close Windsurf completely and reopen it. You should be able to pick up where you left off in your training.

---
sidebar_position: 3
---

# Typescript Debugging with VSCode

Use the following VSCode launch config to allow debugging of Typescript files directly without needing to compile.
```json title=".vscode/launch.json"
    {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Typescript App",
                "type": "node",
                "request": "launch",
                "runtimeExecutable": "node",
                "runtimeArgs": ["--nolazy", "-r", "ts-node/register/transpile-only"],
                "args": ["src/app.ts"],
                "cwd": "${workspaceRoot}",
                "internalConsoleOptions": "openOnSessionStart",
                "skipFiles": [
                    "<node_internals>/**"
                ]
            }
        ]
    }
```
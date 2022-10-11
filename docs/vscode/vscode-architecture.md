---
sidebar_position: 1
---

# VS Code Extension Architecture

## Updating a View when a Custom Editor is opened
When a normal `TextEditor` is opened, it is possible to listen to the `onDidChangeActiveTextEditor` event and receive the active editor as a parameter. For example:

```ts
vscode.window.onDidChangeActiveTextEditor(editor => {
    const { document } = editor;
    console.log(document.getText()); // logs file contents
    console.log(document.language);  // logs language, e.g. 'typescript'
});
```

When using a `CustomTextEditorProvider` however, the `editor` argument is `undefined` even though it is still based on a text model.

So, how do you retrieve the contents of the currently active file?
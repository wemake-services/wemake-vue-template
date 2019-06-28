# Editors

We use and recommend `vscode` as your main editor for `Vue` applications.
Download it for free [here](https://code.visualstudio.com/).

The rest of this doc covers `vscode` and `Vue` integration.
You are free to use any other editor of choice,
but others are not supported and documented.

We ship a [`.vscode/extensions.json`](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)
plugin which specifies all required plugins.

What you need to do is install them by navigating to `Plugins -> Recommended`.
After installing them you will have:

- `Vue` Intellisense
- Linting of `js`, `ts`, `scss`, `jsdoc`, and `vue`
- Formatting help from `editoconfig`
- Helpful shortcuts to run tests and debug

## Configuration

We also ship [`.vscode/settings.json`](https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings)
which specifies all settings that are used in this project.

## Running tasks

We do not provide `.vscode/tasks.json` with this template.
However, you can still run any `npm run` tasks from `vscode`.
Use [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

## Technologies

### TypeScript

`vscode` is known for an awesome `ts` support! It is just bundled with it.
You do not have to install anything.

Read more [about it](https://code.visualstudio.com/docs/languages/typescript).

### Vue

We also leverage an official plugin for `vscode` and `Vue` 
that is called [`vetur`](https://github.com/vuejs/vetur).

It offers a rich set of features for `Vue` apps.
Including some unique ones, like type-checking your templates.

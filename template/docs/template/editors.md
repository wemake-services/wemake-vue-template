# Editors

We use and recommend `vscode` as your main editor for `Vue` applications.
Download it for free [here](https://code.visualstudio.com/).

We ship a [`.vscode/extensions.json`](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)
plugin which specifies all required plugins.

What you need to do is install them by navigating to `Plugins -> Recommended`.
After installing them you will have:

- `Vue` Intellisense
- Linting of `js`, `scss`, `jsdoc`, and `vue`
- Formatting help from `editoconfig`

## Configuration

We also ship [`.vscode/settings.json`](https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings)
which specifies all settings that are used in this project.

## Plugins

When adding new plugins or settings to the project, make sure that it won't
mess things up for other users. No one expects that!

### flow

Why don't we use `flow` plugin? Because it currently does not work.
There are multiple issues like:

- spamming of `flow-bin` processes
- issues on working with `.vue` files
- broken intellisense

You can try to fix it, and this plugin will be added to the project.

## Running yarn tasks

We do not provide `.vscode/tasks.json` with this template.
However, you can still run any `yarn` tasks from `vscode`.
Use [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

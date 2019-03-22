# Editors

We use and recommend `vscode` as your main editor for `Vue` applications.
Download it for free [here](https://code.visualstudio.com/).

We ship a [`.vscode/extensions.json`](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)
plugin which specifies all required plugins.

What you need to do is install them by navigating to `Plugins -> Recommended`.
After installing them you will have:

- `Vue` Intellisense
- Linting of `js`, `ts`, `scss`, `jsdoc`, and `vue`
- Formatting help from `editoconfig`

## Configuration

We also ship [`.vscode/settings.json`](https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings)
which specifies all settings that are used in this project.

## TypeScript

`vscode` is known for an awesome `ts` support! It is just bundled with it.
You do not have to install anything.

Read more [about it](https://code.visualstudio.com/docs/languages/typescript).

## Plugins

When adding new plugins or settings to the project, make sure that it won't
mess things up for other users. No one expects that!

## Running npm run tasks

We do not provide `.vscode/tasks.json` with this template.
However, you can still run any `npm run` tasks from `vscode`.
Use [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

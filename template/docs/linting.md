# Linting

We lint everything, including: `javascript`, `vue`, `css`, and `scss`. We love linting to be as strict as possible.

Everything works for raw files and single file components out of the box. Everything is already configured, so you don't have to.

Use `yarn lint` to run everything we have.

## javascript

![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)

We use `eslint` to lint `javascript`. We stick to `standard` code style. But, we have some additional checks that make our style even more stricter.

### flow

On this step `flow` comes in. `flow` is an optional strict typing. We use [`eslint-plugin-flowtype-errors`](https://www.npmjs.com/package/eslint-plugin-flowtype-errors) to run these checks.

You can enable `flow` on a per-file basis. When file starts with `// @flow` it means that `flow` is enabled. Otherwise file is ignored by `flow` checker.

### Running and configuration

All configuration can be found inside `.eslintrc`. To run `js` linting execute: `yarn lint:js`.

## vue

We also lint `.vue` files with the help of [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue).

These checks are executed together with `javascript` linting.

## stylelint

We use awesome [`stylelint`](https://github.com/stylelint/stylelint) to validate our `css` and `scss` files. We also use strict config here. We stick to [`stylelint-config-strict-scss`](https://github.com/wemake-services/stylelint-config-strict-scss).

`stylelint` is not related with `eslint` at all. It is a standalone tool.

### Running and configuration

All configuration is done inside `package.json`. Since configuration is rather simple.

If your configuration requires some complex logic, consider moving to [`stylelint.config.js`](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md)

To run `css` linting execute: `yarn lint:css`.

## Afterwords

Linting can be easily changed to any other styles you like \(or forced to use\).


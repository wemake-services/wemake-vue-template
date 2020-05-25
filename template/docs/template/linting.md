# Linting

We lint everything, including: 
`javascript`, `typescript`, `vue`, `css`, and `scss`.
We love linting to be as strict as possible.

Everything works for raw files and single file components out of the box.
Everything is already configured, so you don't have to.

Use `npm run lint` to run everything we have.

## JavaScript and TypeScript

[![JavaScript Style Guide][svg]](https://github.com/standard/standard)

We use `eslint` to lint `javascript` and `typescript`. 
We stick to [`wemake`][wemake] code style.
It is just like `standard` config, but stricter.
But, we have some additional checks that make our style even more stricter.

To run `js` linting execute: `npm run lint:js`.

### Configuring eslint

All configuration can be found inside `.eslintrc.js`.
We also have some specific configuration that is applied for tests only.
It is located inside `tests/.eslintrc.js` file.

It extends the default configuration with the new rules that are applied for
test frameworks that we use.

## jsdoc

We lint [`jsdoc`](http://usejsdoc.org/) annotation. 
The rule is simple: if you write `jsdoc` you should write a correct one.
You may not write them at all (however, that's not good).

We use [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc) 
to lint them.

## Vue

We also lint `.vue` files with the help of [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue).

These checks are executed together with `javascript` linting.

## Styles

We use awesome [`stylelint`](https://github.com/stylelint/stylelint) 
to validate our `css` and `scss` files.
We also use strict config here. 
We stick to [`stylelint-config-strict-scss`](https://github.com/wemake-services/stylelint-config-strict-scss).

`stylelint` is not related with `eslint` at all. It is a standalone tool.
Other plugins for languages like `stylus`, `sass`, 
and `post-css` can also be installed if you need them.

To run `css` linting execute: `npm run lint:css`.

### Configuring stylelint

All configuration is done [inside `stylelint.config.js`](configuration.md#stylelint). 
It stores presets, rules, and plugins.

## a11y

We also ship a rich set of accessability 
checks for both `stylelint` and `eslint` with the help of:

- [`eslint-plugin-vue-a11y`](https://github.com/maranran/eslint-plugin-vue-a11y)
- [`stylelint-a11y`](https://github.com/YozhikM/stylelint-a11y)

Please, do not turn it off! Let's make our apps better!

## Markdown

We lint markdown files with [`remark-lint`](https://github.com/remarkjs/remark-lint).
This tool allows us to write consistent documentation and `README` files.

To run `md` linting execute: `npm run lint:md`.

### Configuring remark

We use `docs/.remarkrc.js` to configure `remark`.
Read more about [configuration](https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md). 

We also use [`.remarkignore`][remarkignore] file to ignore 
programmatically generated files.

## package.json

We use [`scriptlint`](https://github.com/peerigon/scriptlint) package
to force correct `"scripts"` section definition in `package.json`.

It checks for multiple things including: 
ordering, naming, bashism, aliasing, etc.

This is simple tool, but a very useful one. 
Check out the docs for more information.

## Afterwords

Linting can be easily changed to any other styles you like (or forced to use).

[svg]: https://cdn.rawgit.com/standard/standard/master/badge.svg
[wemake]: https://github.com/wemake-services/eslint-config-wemake
[stylelint.config.js]: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md
[remarkignore]: https://github.com/unifiedjs/unified-engine/blob/master/doc/ignore.md

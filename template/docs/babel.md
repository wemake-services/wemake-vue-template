# Babel

We use [`babel`](https://babeljs.io/) to write modern `javascript` today. Our `babel` setup is rather simple.

## Configuration

Everything is configured inside `.babelrc`. This file is needed for both `nuxt` and `jest`.

Our configuration does two things:

1. Uses [`vue-app`](https://www.npmjs.com/package/babel-preset-vue-app) preset to be able to work with the latest `js` features, `jsx` and `async` functions
2. Uses [`flow`](https://www.npmjs.com/package/babel-preset-flow) preset to strip away `flow` types at build time

That's it.

## babel and nuxt

We use [`nuxt-babel`](https://github.com/wemake-services/nuxt-babel) module to be able to use `.babelrc` with `nuxt`.

## Polyfills

We also use [`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/) to fix old browsers and environments.

You can found it inside `nuxt.config.js`.


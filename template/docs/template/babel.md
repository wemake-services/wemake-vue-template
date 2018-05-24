# Babel

We use [`babel`](https://babeljs.io/) to write futuristic `javascript` today.

## Configuration

Everything is configured inside `.babelrc`.
This file is needed for both `nuxt` and `jest`.

Our configuration does several things:

1. Uses [`vue-app`](https://www.npmjs.com/package/babel-preset-vue-app) 
  preset to be able to work with the latest `js` features, 
  `jsx` and `async` functions

2. Uses [`flow`](https://www.npmjs.com/package/babel-preset-flow) 
  preset to strip away `flow` types at build time

3. When running tests we ensure that [`jest` assertions][jest-assertions] 
  will run as expected 

We also use [`transform-decorators-legacy`][transform-decorators-legacy] 
and [`transform-class-properties`][transform-class-properties]
to use `vue-class-component` and `vuex-class`. 
If you don't use these libraries, feel free to remove these plugins.

That's it.

## babel and nuxt

We use [`nuxt-babel`](https://github.com/wemake-services/nuxt-babel) 
module to be able to use `.babelrc` with `nuxt`.

## Polyfills 

We also use [`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/) 
to fix old browsers and environments.

You can found it inside `nuxt.config.js` in `vendor` block.

[jest-assertions]: https://github.com/mattphillips/babel-jest-assertions
[transform-decorators-legacy]: https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy
[transform-class-properties]: https://babeljs.io/docs/plugins/transform-class-properties/

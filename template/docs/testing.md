# Testing

We love tests. And test everything we can. In this section we will discuss two types of tests and describe our toolset.

Everything comes configured, so you can just start using it. Run `yarn test` to run everything we have.

We use [`jest`](https://facebook.github.io/jest/en/) as our test runner for unit tests. We configure `jest` inside our `package.json`. Since configuration is rather simple.

## Types of tests

We have two types of test: unit and end-to-end. They differ in complexity, tools, and reasoning.

### Unit tests

Unit tests are considered much easier to write, but header to maintain. Because they are simple and there should be a lot of them.

To make our lives easier we use [`vue-test-utils`](https://github.com/vuejs/vue-test-utils) to mount and check our test components.

Use `yarn test:unit` to run unit tests.

### End-to-end tests

End-to-end tests are looking at the situation from much higher point. We use [`jsdom`](https://github.com/jsdom/jsdom) and [`nuxt-builder`](https://github.com/nuxt/nuxt.js/tree/dev/lib/builder) to run these tests.

That's how it works: 1. We build our application with the help of `nuxt-builder` the way it will be build normally 2. When it is built, we make requests to the `nuxt` and get the server side rendered response back 3. Then we use `jsdom` to make assertions based on the `nuxt`'s response

That's covers 99% percent of uses case with a simple setup.

We do not want to use things like [`cypress`](https://www.cypress.io/) or [`puppeteer`](https://github.com/GoogleChrome/puppeteer) because these things are very hard to configure and maintain. And it offers not significant value over our setup. We have used [`nightwatch`](http://nightwatchjs.org/) [before](https://github.com/wemake-services/wemake-vue-template/tree/90197466fa17b9fb02a0936da04f5b0b53d2d054/template/tests/e2e), and not recommend it anymore.

We have also [used](https://github.com/wemake-services/wemake-vue-template/blob/90197466fa17b9fb02a0936da04f5b0b53d2d054/template/Vagrantfile) [`Vagrant`](https://www.vagrantup.com/intro/index.html) to manually test our application on `IE10` and `IE11`.

Use `yarn test:e2e` to run end-to-end tests.

## Security checks

We also run security checks on each CI step. We even have special `yarn test:sec` command to run these checks.

What it does? It queries some 3rd party database for known security issues for your dependencies. We use [`nsp`](https://github.com/nodesecurity/nsp) for that task.

This way you can lower the risks.

## Mocking

Unit tests should not go into the wild and request data. We leave this controversy topic to you.

However, we are using `axios-mock-adapter` to illustrate the point. You are free to use any kind of mocks you want.

Consider `jest` for [manual mocking](https://facebook.github.io/jest/docs/en/manual-mocks.html).


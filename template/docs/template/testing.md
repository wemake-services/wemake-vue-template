# Testing

We love tests. And test everything we can.
In this section, we will discuss two types of tests and describe our toolset.

Everything comes configured, so you can just start using it.
Run `npm run test` to run everything we have.

We use [`jest`](https://facebook.github.io/jest/en/) 
as our test runner for unit tests.
We configure `jest` inside [our `package.json`](configuration.md#package-json).

We have two types of test: unit and end-to-end. 
They differ in complexity, tools, and reasoning.

Are you **new** to testing? Read the [Vue testing full guide](https://lmiller1990.github.io/vue-testing-handbook/).

## Unit tests

Unit tests are considered much easier to write, but harder to maintain.
Because they are simple and there should be a lot of them.

To make our lives easier 
we use [`vue-test-utils`](https://github.com/vuejs/vue-test-utils) 
to mount and check our test components.

Use `npm run test:unit` to run unit tests.

### Snapshots

We use [`jest` snapshots][jest-snapshots]
to be sure that our components rendering did not change without notice.
It saved us million times! 

```js
// An example from 'tests/unit/pages/index.spec.js':
const wrapper = mount(Index, { store, localVue, propsData })
expect(wrapper.html()).toMatchSnapshot()
```

These two lines will create fake `Index` component, mount it to the page,
then render it to string, and serialize to the text file inside `__snapshots__`
folder near the test itself.
There can be multiple snapshots for different component states.

Run `npm run test:unit -u` to update existing snapshots with the updated state.

### Mocking

Unit tests should not go into the wild and request data.
We leave this controversial topic to you. 

However, we are using `axios-mock-adapter` to illustrate the point.
You are free to use any kind of mocks you want.

Consider `jest` for [manual mocking][manual-mocking].

### Static files and assets

We can use different assets and static files like fonts, images, `svg` icons.
At some point `jest` might fail to load and transform them.

So, we provide `jest-svg-transformer` 
and `jest-transform-stub` that will help you in this field.

- `jest-svg-transformer` will load `svg` as fake component
- `jest-transform-stub` will just stub all static files with no-ops

## Security checks

We also run security checks on each CI step.
We use `npm audit` to fail your CI when bad packages are found.

This way you can lower the risks.

[jest-snapshots]: https://facebook.github.io/jest/docs/en/snapshot-testing.html
[before]: https://github.com/wemake-services/wemake-vue-template/tree/90197466fa17b9fb02a0936da04f5b0b53d2d054/template/tests/e2e
[used]: https://github.com/wemake-services/wemake-vue-template/blob/90197466fa17b9fb02a0936da04f5b0b53d2d054/template/Vagrantfile
[vagrant]: https://www.vagrantup.com/intro/index.html
[manual-mocking]: https://facebook.github.io/jest/docs/en/manual-mocks.html

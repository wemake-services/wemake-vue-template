# QA

We are using [`TestCafe`](https://github.com/DevExpress/testcafe) 
for Quality Assurance.

`TestCafe` allows to run QA tests without any other dependencies.

## Running

We don't use `testcafe` locally.
We encapsulate all QA-related stuff into one `docker` image.
Inside this container we have `chromium` and `firefox` installed.

This browsers are chosen as default ones. But you might need other ones.

To run this container:

```bash
BASE_TEST_URL="http://your-url" sh docker/testcafe/qa.sh
```

Read the source code and docs inside 
`docker/testcafe/qa.sh` for more information, 
usage examples, and parameters specifications.

## Browser support

`TestCafe` supports all top browsers including `ie11`, `chrome`, and `firefox`.
See [official docs][browser-support-docs] on this topic.

If you need more browsers you can enable 
[`browserstack`][browserstack] or [`saucelabs`][saucelabs].

## Custom selectors

Since we use `css-modules` it is impossible to query elements by `css` class 
names. Why?

This is required by design. When working with components you should not rely
on `css` or markup queries. 
Markup is the only thing available in traditional web. 
But we have a better thing to look for: components.

Components' names change less than `css` or markup.
And components are higher order representation of your logic.

That's why you should use components' names for querying.

We use [`testcafe-vue-selectors`](https://github.com/DevExpress/testcafe-vue-selectors) 
and [`testcafe-nuxt-selectors`](https://github.com/kartojal/testcafe-nuxt-selectors)
by default.

That's how it works:

```js
import NuxtSelector from 'testcafe-nuxt-selectors'

// To select all comments inside current layout:
const comments = NuxtSelector('Nuxt Comment')
```

See `./docker/testcafe/fixtures` for more examples.

## GitLab CI

We also integrate QA to CI process.
But, since all QA tests are very slow we do not force to run them on every
commit or pull request.

Instead, we offer a useful and productive way to run these tests.
We use `when: manual` in `.gitlab-ci.yml`. This way you can manually trigger 
QA tests to run when you actually need them.

If there are some serious changes or important release run the tests.
If this is just a minor change, do not run them to save you some time.

## Running tests against real applications

We also encourage to run QA tests against real production websites and apps.

Why?
Because you will literally tests how your application behaves in a real world.
Covering all possible pitfalls and situations.

How to run QA against our test example?

```bash
# Mind the trailing slash, we don't need it!
BASE_TEST_URL='https://wemake-vue-demo.now.sh' sh docker/testcafe/qa.sh
```

At least, you should have a full production copy to run tests against it.

[browser-support-docs]: http://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html
[docker-support-docs]: http://devexpress.github.io/testcafe/documentation/using-testcafe/installing-testcafe.html#using-testcafe-docker-image
[browserstack]: https://github.com/DevExpress/testcafe-browser-provider-browserstack
[saucelabs]: https://github.com/DevExpress/testcafe-browser-provider-saucelabs

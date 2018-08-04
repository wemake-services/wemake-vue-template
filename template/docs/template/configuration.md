# Configuration

There's a lot of configuration in `nuxt`!
But, it is much easier than configuring `webpack` and other common tools.
We will try to cover the most important parts here.

## .env

We use [`dotenv`](https://www.npmjs.com/package/dotenv)
configuration files to configure many things at once:

1. We configure `nuxt` loader at build time inside `nuxt.config.js`
2. We configure `nuxt` app with the help of [`dotenv-module`](https://github.com/nuxt-community/dotenv-module)
3. We configure our `docker` image with the help of [`env_file`][env] option

It is possible that you may miss `config/.env` file because it is ignored
and excluded from `git`.
In this case, you will just need to copy `config/.env.template`
and fill in all values that you need:

```bash
cp config/.env.template config/.env
```

Make sure that `config/.env` is kept **secret**!

### API_URL

Variable `API_URL` represent your API server base url.
It is used as a base url for all relative urls we use to make `axios` calls.

There are situations when you need to switch between different versions of
your API: development or production, v1 or v2.

In this case, modify this single value inside your `config/.env` file.

## nuxt.config.js

As it was already said `nuxt` requires a lot of [configuration](https://nuxtjs.org/guide/configuration).

Parts that you will need the most:

1. [`vendor`](https://nuxtjs.org/api/configuration-build#vendor) option,
   which specifies what packages should be packed as `vendor` bundle

2. [`head`](https://nuxtjs.org/api/configuration-head) option,
   which specifies meta-data for your `html` pages

3. [`plugins`](https://nuxtjs.org/api/configuration-plugins) option,
   which specifies what files should be run before creating root `Vue` instance

4. [`css`](https://nuxtjs.org/api/configuration-css/) option,
   which specifies global `css` options

5. [`build`](https://nuxtjs.org/api/configuration-build) option,
   which allows extending the default `webpack` build configuration.
   Add your own loaders and plugins here in case you need them

### axios

We use [`axios-module`](https://github.com/nuxt-community/axios-module)
for `nuxt` instead of a regular `axios` because
there are tons of goodies that are already included:
retries, loading indicators, server-side proxy calls,
`https` enforcement, and so on.

It is all configured under `axios` key in `nuxt.config.js`.
See list of available options [here](https://axios.nuxtjs.org/options.html).

### build

Currently, we extend build with several rules:

- enable linting with `eslint` and `stylelint` in development
- settings handy alias for `scss` imports
- disabling crazy `css` classes names during tests

### generate

[This option](https://nuxtjs.org/api/configuration-generate) is used
when we run `yarn generate`.

Sometimes it is required to provide additional pages to prerender,
or provide dynamic values to the dynamic pages.

See [`routes` key](https://nuxtjs.org/api/configuration-generate#routes)
for more information.

When using `spa` mode you will need to add some
extra configuration due to [`router-module` usage](https://github.com/nuxt-community/router-module#setup).

## stylelint

[`stylelint`](https://github.com/stylelint/stylelint) is a linter
for your `css`, `scss`, and `postcss`.
We use `stylelint.config.js` to configure our style linter.

Its configuration specifies which styles it should use.
Pretty similar to `eslint`.

Basically we use two configurations: for [`scss`][scss]
and for [`css-modules`][css-modules].

Rules defined there are just some hacks and
fixes to make our development experience better.

Read more about linting [here](linting.md#stylelint).

## jest

[`jest`](https://facebook.github.io/jest/) is a test runner that
is used for unit tests.
We use `tests/jest.config.js` to configure `jest`.

It has a lot of options:

- `setupFiles` is used to specify which files will be executed before all tests
- `moduleFileExtensions` specifies which module we can safely import from `jest`
- `transform` specifies which parsers to use when importing different files
- `moduleNameMapper` is used to match our [`webpack` aliases](https://webpack.js.org/configuration/resolve/#resolve-alias) in `jest`

Read more about testing [here](testing.md).

## package.json

We also configure several tools inside `package.json` itself.
Here's a list of these tools.

### browserslist

This setting is very important.
It specifies all the browsers that we use in our project.

It is required for multiple tools that are used in the project:

- `eslint`
- `stylelint`
- `postcss`
- `babel`

To see what browsers are used in your project run: `npx browserslist`
Read more about [queries here](https://github.com/browserslist/browserslist).

[env]: https://docs.docker.com/compose/environment-variables/#the-env_file-configuration-option
[scss]: https://github.com/wemake-services/stylelint-config-strict-scss
[css-modules]: https://github.com/pascalduez/stylelint-config-css-modules

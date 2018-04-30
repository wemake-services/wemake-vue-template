# Configuration

There's a lot of configuration in `nuxt`!
But, it is much easier than configuring `webpack` and other common tools.
We will try to cover the most important parts here.


## .env

We use [`dotenv`](https://www.npmjs.com/package/dotenv) configuration files to configure many things at once:

1. We configure `nuxt` loader at build time inside `nuxt.config.js`
2. We configure `nuxt` app with the help of [`dotenv-module`](https://github.com/nuxt-community/dotenv-module)
3. We configure our `docker` image with the help of [`env_file`](https://docs.docker.com/compose/environment-variables/#the-env_file-configuration-option) option

It is possible that you may miss `config/.env` file, because it is ignored
and excluded from `git`. 
In this case you will just need to copy `config/.env.template` and fill in all values that you need.

Make sure that `config/.env` is kept **secret**!


## nuxt.config.js

As it was already said `nuxt` requires a lot of [configuration](https://nuxtjs.org/guide/configuration).

Parts that you will need the most:

1. [`vendor`](https://nuxtjs.org/api/configuration-build#vendor) option, which specifies what packages should be packed as `vendor` bundle
2. [`head`](https://nuxtjs.org/api/configuration-head) option, which specifies meta-data for your `html` pages
3. [`plugins`](https://nuxtjs.org/api/configuration-plugins) option, which specifies what files should be run before creating root `Vue` instance


## package.json

We also configure several tools inside `package.json` itself.
Here's a list of these tools:

1. `husky` - pre-commit hooks manager
2. `jest` - test runner
3. `stylelint` - linter for `css` and `scss` files

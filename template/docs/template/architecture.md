# Structure

Here we define all files and folders that are used in this project.

- `README.md` - main readme file, it specifies the entry
  point to the project's documentation

- [`package.json`](https://docs.npmjs.com/files/package.json) - main file
  of the project. It defines the project's dependencies and scripts.
  It is also used to provide meta-data for many other tools

- [`yarn.lock`](https://yarnpkg.com/lang/en/docs/yarn-lock/) - lock file
  for dependencies. It is used to install exactly the same
  versions of dependencies on each build

- [`nuxt.config.js`](https://nuxtjs.org/guide/configuration/) - the main
  configuration file for `Nuxt`. It contains a list of installed
  plugins and other configuration. It is also used to specify how to
  build this project

- [`.babelrc`](https://babeljs.io/docs/usage/babelrc/) - is used to specify
  how to deal with the `js` files in this project.
  We can introduce new `js` features by adding new plugins inside this file

- [`.flowconfig`](https://flow.org/en/docs/config/) - we use
  [`flow`](https://flow.org) for optional static typing.
  This file is required to make it work

- [`.eslintrc`](https://eslint.org/docs/user-guide/configuring) - configuration
  file for `js` files linting

- [`stylelint.config.js`](https://stylelint.io/user-guide/configuration/) -
  configuration file for `stylelint`, which is used for linting styles

- [`.nvmrc`](https://github.com/creationix/nvm) - file with `node` version
  specification. Make sure that you have it installed,
  or otherwise, the project will not work at all

- [`.editorconfig`](http://editorconfig.org/) - file with format specification.
  You need to install the required plugin for your IDE in order to enable it

- [`.gitignore`](https://git-scm.com/docs/gitignore) - file that specifies
  what should we commit into the repository and we should not

- `docker/` - this folder contains `Dockerfile`s and utility scripts
  that are used for development and quality assurance

- [`docker-compose.yml`](https://docs.docker.com/compose/compose-file/) - this
  the file specifies `docker` services
  that are needed for development and testing

- `.dockerignore` - specifies what files should not be
  copied to the `docker` image

- [`.gitlab-ci.yml`](https://docs.gitlab.com/ee/ci/yaml/) - GitLab CI
  configuration file. It basically defines what to do with your project
  after pushing it to the repository. Currently it is used for testing
  and releasing a `docker` image

- [`.vscode/`][vscode] - `vscode` IDE integration.
  We store different settings, plugins, and tasks inside this folder

## Client

- `assets/` - this directory contains your images, fonts,
  or any other files that you want
  [to be processed](https://nuxtjs.org/guide/assets#webpacked) by `webpack`

- `components/` - the components directory contains your `Vue` components,
  `Nuxt` doesn't supercharge these components

- `layouts/` - this directory contains
  your [Application Layouts](https://nuxtjs.org/guide/views#layouts)

- `logics/` - this directory contains your Application Logics.
  You should put everything that is considered business logic here

- `middleware/` - this directory contains your
  [Application Middleware](https://nuxtjs.org/guide/routing#middleware).
  The middleware lets you define custom function to be run
  before rendering a page or a group of pages (layouts)

- `views/` - this directory contains your application.
  We use [`vue-router`](http://router.vuejs.org/) to navigate
  between these views

- `router.js` - file is used by
  [`router-module`](https://github.com/nuxt-community/router-module) for `nuxt`
  to export a `vue-router` instance

- `plugins/` - this directory contains your
  [plugins](https://ru.nuxtjs.org/examples/plugins/) that you want
  to run before instantiating the root `Vue` application

- `static/` - the [static](https://nuxtjs.org/guide/assets/#static)
  files directory. These files are not processed by any loaders and
  just copied as-is

- `store/` - this directory contains your
  [Vuex Store](https://nuxtjs.org/guide/vuex-store) files

- `types/` - this directory contains types, constants,
  and enums that can be used with [`flow`](https://flow.org)

## Tests

- `utils/` - this folder contains utility files that are used for testing
- `.eslintrc.js` - this file extends linting rules for testing
- `jest.config.js` - this file is used to configure `jest`

[vscode]: https://code.visualstudio.com/docs/getstarted/settings

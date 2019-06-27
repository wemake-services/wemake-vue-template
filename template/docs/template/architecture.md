# Structure

Here we define all files and folders that are used in this project.

- `README.md` - main readme file, it specifies the entry
  point to the project's documentation

- [`package.json`](https://docs.npmjs.com/files/package.json) - main file
  of the project. It defines the project's dependencies and scripts.
  It is also used to provide meta-data for many other tools

- `package-lock.json` - lock file
  for dependencies. It is used to install exactly the same
  versions of dependencies on each build

- [`nuxt.config.ts`](https://nuxtjs.org/guide/configuration/) - the main
  configuration file for `Nuxt`. It contains a list of installed
  plugins and other configuration. It is also used to specify how to
  build this project

- [`tsconfig.json`][tsconfigjson] - is used to specify
  how to deal with the `ts` files in this project.
  We can introduce new `ts` features by adding new configuration

- [`.eslintrc.js`](https://eslint.org/docs/user-guide/configuring) - 
  configuration file for `ts`, `js`, and `vue` files linting

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

- `jest.config.js` - this file is used 
  to configure [`jest`](https://jestjs.io/)

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

- `logic/` - this directory contains your Application Logics.
  You should put everything that is considered business logic here

- `middleware/` - this directory contains your
  [Application Middleware](https://nuxtjs.org/guide/routing#middleware).
  The middleware lets you define custom function to be run
  before rendering a page or a group of pages (layouts)

- `pages/` - this directory contains your application routes.
  We rely on `Nuxt`'s [builtin routing](https://nuxtjs.org/guide/routing/)

- `plugins/` - this directory contains your custom 
  [plugins](https://nuxtjs.org/examples/plugins/) for `Nuxt`

- `static/` - the [static](https://nuxtjs.org/guide/assets/#static)
  files directory. These files are not processed by any loaders and
  just copied as-is

- `store/` - this directory contains your
  [Vuex Store](https://nuxtjs.org/guide/vuex-store) files

- `shims/` - this directory contains TypeScript 
  [declaration files][declaration-files],
  feel free to extend it with your own types

## Tests

- `fixtures/` - this folder contains utility files that are used for testing
- `.eslintrc.js` - this file extends linting rules for testing
- `jest-shims.d.ts` - file to import TypeScript types into current context

[tsconfigjson]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
[vscode]: https://code.visualstudio.com/docs/getstarted/settings
[declaration-files]: https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

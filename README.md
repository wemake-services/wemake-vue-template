# wemake-vue-template

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/wemake-vue-template.svg?branch=master)](https://travis-ci.org/wemake-services/wemake-vue-template) [![Docs](https://img.shields.io/badge/docs-success-brightgreen.svg)](https://wemake-services.gitbook.io/wemake-vue-template/) [![Dependencies Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/wemake-services/wemake-vue-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)


Bleeding edge `vue` template focused on code quality and developer happiness.

---

## Purpose

This project is used to scaffold new `vue` project structure.


## Features

- Always up-to-date with the help of [`@dependabot`](https://github.com/wemake-services/wemake-vue-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)
- [`nuxt`](https://nuxtjs.org/) for server-side rendering
- `Vue` + `vuex` + `vue-router` with latest `es` features
- Optional typing with [`flow`](https://flow.org/)
- Linting with `eslint` + [`stylelint`](https://github.com/wemake-services/stylelint-config-strict-scss)
- [`jest`](https://facebook.github.io/jest/) for unit tests and `jsdom` for end-to-end testing
- `Gitlab CI` with full `build`, `test`, and `deploy` pipeline configured by default
- Meaningful [docs](https://wemake-services.gitbook.io/wemake-vue-template/), covering almost every aspect of the project


## Requirements

You will need:

- `node@9` (see [`template/.nvmrc`](https://github.com/wemake-services/wemake-vue-template/blob/master/template/.nvmrc))


## Installation

```bash
git clone https://github.com/wemake-services/wemake-vue-template.git
npx vue-cli init ./wemake-vue-template your-vue-project
```

We are required to clone the project, since we need the `.git` folder.

## Running the project

First, make sure that `./config/.env` exists.
If not, you need to create a same-folder copy of the file
[`./config/.env.template`](https://github.com/wemake-services/wemake-vue-template/blob/master/template/config/.env.template) and name it `./config/.env`.
Modify as fits per your requirements.

### Development server

- `yarn dev` starts the development server

### Production build

- `yarn start` runs the production code in a node server
- `yarn generate` generates static files to be deployed [anywhere](https://nuxtjs.org/guide/commands/)


## Alternatives

This project is influenced by:

- https://github.com/nuxt-community/starter-template
- https://github.com/nuxt-community/typescript-template
- https://github.com/egoist/vuepack
- https://github.com/vuejs-templates/webpack


## License

MIT.

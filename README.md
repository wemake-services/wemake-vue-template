# wemake-vue-template

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/wemake-vue-template.svg?branch=master)](https://travis-ci.org/wemake-services/wemake-vue-template) [![Docs](https://img.shields.io/badge/docs-success-brightgreen.svg)](https://wemake-services.gitbook.io/wemake-vue-template/) [![Dependencies Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/wemake-services/wemake-vue-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)


Bleeding edge `vue` template focused on code quality and developer happiness.

---

This project is used to scaffold new `Vue` project structure.


## Demo

Demo link: https://wemake-vue-demo.now.sh/

Right after the start you will have the same app.
Demo source code is [here](https://wemake-vue-demo.now.sh/_src).


## Features

- Proven to work on both small and large scale projects
- Always up-to-date with the help of [`@dependabot`](https://github.com/wemake-services/wemake-vue-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)
- `Vue` + `vuex` + `vue-router` with the latest `es` features
- [`nuxt`](https://nuxtjs.org/) for server-side rendering
- Optional strict typing with [`flow`](https://flow.org/)
- Linting with [`eslint`](https://eslint.org/) + [`stylelint`](https://github.com/wemake-services/stylelint-config-strict-scss)
- [`jest`](https://facebook.github.io/jest/) for unit tests and [`jsdom`](https://github.com/jsdom/jsdom) for end-to-end testing
- [`Gitlab CI`](https://about.gitlab.com/features/gitlab-ci-cd/) with full `test` and `deploy` pipeline configured by default
- Easy [update process](https://wemake-services.gitbook.io/wemake-vue-template/#updating-template), so your template will always be up-to-date
- Meaningful [docs](https://wemake-services.gitbook.io/wemake-vue-template/), covering almost every aspect of the project, including [`jsdoc`](http://usejsdoc.org/) annotations


## Requirements

You will need:

- `node@9` (see [`template/.nvmrc`](https://github.com/wemake-services/wemake-vue-template/blob/master/template/.nvmrc))
- [`yarn@1.6`](https://yarnpkg.com/lang/en/)


## Installation

```bash
git clone https://github.com/wemake-services/wemake-vue-template.git
npx vue-cli init ./wemake-vue-template your-vue-project
```

We are required to clone the project, since we need the `.git` folder.

## Running the project

Before going any further make sure that you have read [the docs](https://wemake-services.gitbook.io/wemake-vue-template).

- `yarn dev` starts the development server
- `yarn start` runs the production code in a node server
- `yarn generate` generates static files to be deployed [anywhere](https://nuxtjs.org/guide/commands/#production-deployment)


## License

MIT.

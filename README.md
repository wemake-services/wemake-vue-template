# wemake-vue-template

[![wemake.services](https://img.shields.io/badge/-wemake.services-green.svg?label=%20&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](https://wemake.services)
[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesomestacks.dev/nuxt-type-script-docker)
[![Build Status](https://github.com/wemake-services/wemake-vue-template/workflows/Build/badge.svg?branch=master&event=push)](https://github.com/wemake-services/wemake-vue-template/actions?query=workflow%3ABuild)
[![Docs](https://img.shields.io/badge/docs-success-brightgreen.svg)](https://wemake-services.gitbook.io/wemake-vue-template/)
[![Dependencies Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/wemake-services/wemake-vue-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot) 
[![wemake-frontend-styleguide](https://img.shields.io/badge/style-wemake-000000.svg)](https://github.com/wemake-services/wemake-frontend-styleguide)


Bleeding edge `vue` template focused on code quality and developer happiness.

---

This project is used to scaffold new `Vue` project structure.


## Demo

https://wemake-vue-demo.herokuapp.com/


## Features

- Proven to work on both small and large scale projects
- Always up-to-date with the help of [`@dependabot`](https://github.com/wemake-services/wemake-vue-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)
- Latest [`nuxt`](https://nuxtjs.org/) for server-side rendering
- Full `typescript` support, including `Vue`'s SFC, `Vuex`, and tests
- Tools to write business logics including: DI, IoC, runtime type validation
- Linting with [`eslint`](https://eslint.org/) + [`stylelint`](https://github.com/wemake-services/stylelint-config-strict-scss)
- [`jest`](https://facebook.github.io/jest/) for unit tests and [`testcafe`](https://github.com/DevExpress/testcafe) for end-to-end testing
- `docker` optional support for development, testing, and production
- [`Gitlab CI`](https://about.gitlab.com/features/gitlab-ci-cd/) with full `test` and `deploy` pipeline configured by default
- Meaningful [docs](https://wemake-services.gitbook.io/wemake-vue-template/), covering almost every aspect of the project, including [`jsdoc`](http://usejsdoc.org/) annotations
- Full `vscode` support and list of [suggested settings and plugins](https://github.com/wemake-services/wemake-vue-template/tree/master/template/.vscode)
- Easy [update process](https://wemake-services.gitbook.io/wemake-vue-template/#updating-template), so your template will always be up-to-date


## Requirements

You will need:

- `node` (see [`template/.nvmrc`](https://github.com/wemake-services/wemake-vue-template/blob/master/template/.nvmrc))


## Installation

```bash
git clone https://github.com/wemake-services/wemake-vue-template.git
npx vue-cli init ./wemake-vue-template your_vue_project
```

We are required to clone the project, since we need the `.git` folder.


## Where to go next

Before going any further make sure that you have read [the docs](https://wemake-services.gitbook.io/wemake-vue-template).


## Who is using this template?

If you use our template, please add yourself or your company [in the list](https://github.com/wemake-services/wemake-vue-template/wiki/Who-is-using-this-template).

We offer free email support for anyone who is using this.
If you have any problems or questions, drop us a line at [`contact@wemake.services`](mailto:contact@wemake.services).
And we will try to help you.


## License

MIT.

# wemake-vue-template

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/wemake-vue-template.svg?branch=master)](https://travis-ci.org/wemake-services/wemake-vue-template)


Bleeding edge `vue` template focused on code quality and development happiness.

---

## Features

- Always up-to-date with the help of [`@dependabot`](https://github.com/wemake-services/wemake-vue-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)
- `Vue` + `vuex` + `vue-router` with latest `es` features
- Strict optional typing with `flow`
- Server side rendering
- `eslint` + `stylelint`
- `jest` for unit tests and `nightwatch.js` for end-to-end testing
- `docker-compose` for development and production
- `Gitlab CI` with full `build`, `test`, and `deploy` pipeline configured by default
- [`Caddy`](https://caddyserver.com/) with [`https`](https://caddyserver.com/docs/automatic-https) and `http/2` turned on by default


## Requirements

You will need:

- `node` (version 8 at least)
- `npm`


## Installation

```bash
npx vue-cli init wemake-services/wemake-vue-template ideal-vue-project
```

## Running the project

First, copy file ‘/config/.env.template‘ to ‘/config/.env‘. Modify as fits per your requirements, then

‘yarn dev‘ 

starts the development server (default: localhost:4000).

## Alternatives

This project is influenced by:

- https://github.com/egoist/vuepack
- https://github.com/doabit/vue-ssr-starter-kit
- https://github.com/vuejs-templates/webpack


## License

MIT.

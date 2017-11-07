# wemake-vue-template

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/wemake-vue-template.svg?branch=master)](https://travis-ci.org/wemake-services/wemake-vue-template) [![Documentation Status](https://readthedocs.org/projects/wemake-vue-template/badge/?version=latest)](http://wemake-vue-template.readthedocs.io/en/latest/?badge=latest)


Bleeding edge `vue` template focused on code quality and security.

---

## Features

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


## License

MIT.

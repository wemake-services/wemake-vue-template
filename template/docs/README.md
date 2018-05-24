# wemake-vue-template

[![wemake.services](https://img.shields.io/badge/style-wemake.services-green.svg?label=&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](http://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/wemake-vue-template.svg?branch=master)](https://travis-ci.org/wemake-services/wemake-vue-template) [![Docs](https://img.shields.io/badge/docs-success-brightgreen.svg)](https://wemake-services.gitbook.io/wemake-vue-template/) [![Dependencies Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/wemake-services/wemake-vue-template/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Aapp%2Fdependabot)

---

This documentation is separated in three main parts:

- `template/` folder, which contains documentation about 
  [`wemake-vue-template`][wemake-vue-template]. This folder should be 
  in sync with the latest version in the upstream. 
  You do not need to modify it on most of the times

- `project/` folder, contains documentation specific to your project. 
  Feel free to add anything to it

- `documents/` folder contains binary files, such as: 
  images, MS Word documents, and spreadsheets

## Where to go next

If you don't know how this project is structured, consider reading
through [`architecture`](template/architecture.md) section.
It will give you a brief overview of everything we have inside this project.

Or if you are familiar with this structure, 
you can jump start reading these docs 
from the [`development`](template/development.md) part.

## Gitbook

We use [`gitbook`](https://github.com/GitbookIO/gitbook) to build 
and host our documentation.
Make sure to create an account there to store your own copy.

The [configuration](https://toolchain.gitbook.com/config.html) can be found [here](https://github.com/wemake-services/wemake-vue-template/blob/master/book.json).

To build a local version of docs, run: `yarn docs:build`.
You can always preview the docs live with `yarn docs:serve`.

If you want to add new pages, change order 
or rename something, go to `SUMMARY.md`.

## documentation.js

We also use [`documentation.js`](https://github.com/documentationjs/documentation) 
to build our API docs.

It is then included as `project/api.md`. See [an example](api.md).
To build it run: `yarn docs:api`.

## Updating template

After you start a project with this template 
it very easy to catch up with the latest changes.

All you have to do is:

1. Go to your `README.md` file and find an update link

2. You will see a diff of what has changed since your template version

3. Pick things you need from the latest changes

4. Replace commit hashes in `README.md` with the current 
  commit hash from `master` branch in [the template repo][wemake-vue-template]

Come back for more updates!

[wemake-vue-template]: https://github.com/wemake-services/wemake-vue-template

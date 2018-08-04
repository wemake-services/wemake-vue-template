# Development

There are two options for the local development:

1. Native development
2. `docker` development

In this part, we will discuss native development.
Read more about [`docker`](docker.md) here.
Choose the one that fits the best for you.

## Prerequisites

You will need to install [`nvm`](https://github.com/creationix/nvm/blob/master/README.md)
before starting.

## Setting up

You will need to install the same `node` version
that we use to be able to run this project.

Hopefully, it is very easy. Just run:

```bash
# Run this command inside your root project directory
nvm install
nvm use
```

While `nvm install` is a one time action,
that just downloads the required `node` version,
do not forget to run `nvm use` each time you open a new terminal window.

## Dependencies

After you have activated the correct `node` version it is time to install
dependencies. Run:

```bash
yarn install
```

You will see that two new folders are created:

- `node_modules` with all your dependencies
- `flow-typed` with external `flow` type definitions

After each installation `flow` automatically fetches all the available 
dependencies from `flow-typed`. 
All dependencies that are not available 
will be stubbed with modules that always return `any`.

`flow` will show a warning about missing types:

> !! No flow libdefs found in flow-typed for the above untyped dependencies !!
> 
> I've generated `any`-typed stubs for these packages, but consider submitting 
> libdefs for them to flowtype/flow-typed

## Configuration

Do not miss a configuration step.
You will totally need to [copy/modify `config/.env`](configuration.md#env) file.

## Running

After your dependencies are installed, run `yarn dev`
to start a development server.

## Dev tools

For the best development experience, we can recommend [`vscode`](editors.md).

Also, [`vue-devtools`](https://github.com/vuejs/vue-devtools)
is an essential add-on for your browser. 
It is distributed as a Google Chrome plugin.
Make sure you have it.

### Performance toolbar

We also highly recommend using [`vue-perf-devtool`](https://github.com/vue-perf-devtool/vue-perf-devtool).
It is also a Google Chrome plugin.

See `~/plugins/performance.js` to see how it is configured.

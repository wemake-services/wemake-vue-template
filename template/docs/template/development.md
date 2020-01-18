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
npm install
```

You will see that `node_modules` folder is created.

### Updating dependencies

You can use [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates)
to check for dependencies that are updated since your pinned version.

You can also use `@dependabot` or similar services to automatically update
dependencies for you.

## Configuration

Do not miss a configuration step.
You will totally need to [copy/modify `config/.env`](configuration.md#env) file.

## Running

After your dependencies are installed, run `npm run dev`
to start a development server.

## Dev tools

For the best development experience, we can recommend [`vscode`](editors.md).

Also, [`vue-devtools`](https://github.com/vuejs/vue-devtools)
is an essential add-on for your browser. 
It is distributed as a Google Chrome plugin.
Make sure you have it.

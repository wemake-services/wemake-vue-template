# Development

There are two options for the local development:

1. Native development
2. `docker` development

In this part we will discuss native development. 
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


## Configuration

Do not miss a configuration step. 
You will totally need to [copy/modify `config/.env`](configuration.md#env) file.


## Running

After your dependencies are installed, run `yarn dev` 
to start a development server.


## Making commit

We run tests and linting on each commit to be sure that nothing will break.
We use [`husky`](https://github.com/typicode/husky) to handle [pre-commit hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

Indeed you don't even have to install or configure anything.
It just works out of the box. 


## Dev tools

For the best development experience, we can recommend [`vscode`](editors.md).

Also, [`vue-devtools`](https://github.com/vuejs/vue-devtools) 
is an essential add-on for your browser.
Make sure you have it.

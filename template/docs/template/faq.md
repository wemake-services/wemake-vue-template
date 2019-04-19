# Frequently Asked Questions

## Why don't you support Flow anymore?

It is just buggy. We had a lot of issues with it.
You can still use (old) version of this template with `flow`: [here is the last release](https://github.com/wemake-services/wemake-vue-template/releases/tag/end-of-flow).

I wrote an article about this, [check it out](https://sobolevn.me/2019/03/from-flow-to-typescript).

## Why Nuxt?

`Nuxt` offers a thin abstraction layer for `ssr` and building your project.
We have struggled with `ssr` for long enough, and we don't want to go back.

Also, `Nuxt`'s predefined build configuration suits us very well.
Wide choice of plugins also allows solving problems faster.

## Do you support Prettier?

Nope. And we never will.

We strongly believe that writing good and well-formated 
code is a developer's responsibility. 

We also have strong linting rules and CI step. 
So any improperly formatted code won't make its way into the build.

We also do not encourage using `eslint --fix`.

## Why do you use `heroku` for a demo project?

This allows us to show how easy it is to deploy a full-featured isomorphic app.
The main idea of this example is to demonstrate server-side rendering features.
Both with basic client interactions.

## Why do you use vscode and not vim/sublime/emacs/webstorm?

First of all, you don't have to use `vscode`. Use the editor you love.
Secondly, `vscode` is free (as in freedom), actively supported, 
has a lot of `js` plugins.

That's why we recommend it.
 
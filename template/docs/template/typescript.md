# Typescript

We use `typescript` that is bundled 
with `Nuxt` since 
[`2.5.0` release](https://github.com/nuxt/nuxt.js/releases/tag/v2.5.0).

So do not install anything rather than `nuxt` and `@nuxt/typescript`.
And it just works.

## tsconfig.json

You can modify your `ts` configuration inside this file.
Read more about useful options [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## Declaration files

We use `client/shims/*.d.ts` files 
to store several [declarations](https://en.wikipedia.org/wiki/TypeScript#Declaration_files) 
that are required for our app. Like:

- `@nuxt/axios` that adds `$axios` property to `vue` and `vuex`
- `$style` property on `Vue` components to support `css-modules`
- global `.vue` files support for `typescript`

## Supporting packages

We use [`nuxt-class-component`](https://github.com/nuxt-community/nuxt-class-component) 
and [`nuxt-property-decorator`](https://github.com/nuxt-community/nuxt-property-decorator) 
to make our `Vue` components type-safe.

We also use [`vuex-class`](https://github.com/ktsn/vuex-class) 
to make our state, actions, mutations, and getters typed.

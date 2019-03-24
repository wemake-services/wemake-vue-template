# Typescript

We use `typescript` that is bundled 
with `Nuxt` since 
[`2.5.0` release](https://github.com/nuxt/nuxt.js/releases/tag/v2.5.0).

So do not install anything rather than `nuxt` and `@nuxt/typescript`.
And it just works.

## tsconfig.json

You can modify your `ts` configuration inside this file.

## Stubs

We use `index.d.ts` to store several stubs that are required for our app.
Like:

- `@nuxt/axios` that adds `$axios` property to `vue` and `vuex`

## Supporting packages

We use `nuxt-class-component` and `nuxt-property-decorator` to make our
`Vue` components type-safe.

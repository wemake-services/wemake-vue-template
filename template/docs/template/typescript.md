# Typescript

We use TypeScript to statically type-check and build our frontend.

## Nuxt integration

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

## Runtime checks

Sometimes you want to make some runtime type checks: 
inside API methods, input validations, etc.

And since TypeScript types are only allowed during static check, 
we cannot use them in runtime.

So, we use [`io-ts`](https://github.com/gcanti/io-ts) 
and [`io-ts-promise`](https://github.com/aeirola/io-ts-promise) 
to build and validate runtime types.

That's how building runtime types is done:

```ts
import * as ts from 'io-ts'

// Runtime type, that can be used for schema validation:
export const RawComment = ts.type({
  'id': ts.number,
  'body': ts.string,
  'email': ts.string,
})

// Static TypeScript type, that can be used as a regular `type`:
export type RawCommentType = ts.TypeOf<typeof RawComment>
```

And then validating it:

```ts
import * as ts from 'io-ts'
import * as tPromise from 'io-ts-promise'

async function fetchComments ($axios): Promise<RawCommentType[]> {
  const response = await $axios.get('comments')
  // Now we are sure that `response.data` has the correct runtime type:
  return tPromise.decode(ts.array(RawComment), response.data)
}
```

That's a powerful combination of runtime and static type checking that
enforces strong contracts on data exchange and keeping it up-to-date.

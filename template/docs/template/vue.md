# Vue

We use a lot of non-standard things in our `Vue` components.
Here we would like to go through some most important parts.

## Nuxt

We use `Nuxt` because it gives no overhead, 
but gives tons of features, including:

1. server side rendering
2. single page applications
3. static assets generation
4. zero-configuration build tool
5. routing
6. middlewares
7. much more

Here you can have a brief overview of what is going on inside `Nuxt`:
[![Nuxt architecture](https://cdn-images-1.medium.com/max/2400/1*lwIEF0F3eDlMKR1hKZic7Q.jpeg)](https://medium.freecodecamp.org/universal-application-code-structure-in-nuxt-js-4cd014cc0baa)

We do not recommend to switch to raw `Vue`, unless you 100% sure.

## nuxt-class-component

First of all, we use `class`es to define components. 
We do it with the help of several libraries:

1. [`nuxt-class-component`][nuxt-class-component] - pretty much the same as
   [`vue-class-component`][vue-class-component], but with `nuxt` specific 
   callbacks defined

2. [`nuxt-property-decorator`][nuxt-property-decorator] that allows defining 
   some useful properties using decorators

3. [`vuex-class`][vuex-class] that allows defining bindings to `vuex`

This way we can achieve *some* level of type safety. It is not 100% safe.
But it is something.

Make sure to mark your components as `// @vue/component` to have at least
some linting from [`eslint-plugin-vue`][eslint-plugin-vue].

### Fallback to good-old simple components

However, you can fallback to `export default {}` at any time you want.
This way you will have almost none type support, but you will have full 
linting support from `eslint-plugin-vue` which is a good thing. 
But, we will lose some of the typing features.

Regular components would be also easier for newcomers.
You can even mix styles for different components.
So, the choice is yours.

## vuex

We use [`vuex`](https://vuex.vuejs.org) that comes 
with [`nuxt`](https://nuxtjs.org/guide/vuex-store/). 
We stick to the [classic mode][classic-mode].

You can switch to [modules mode][modules-mode] at any time if you want to.

## vuex-simple

We also use [`vuex-simple`](https://github.com/sascha245/vuex-simple)
to write typed `Vuex` mutations, getters, and actions.

That's how it is defined:

```ts
import { Action, Mutation, State, Getter } from 'vuex-simple'

export default class TypedStore {
  @State()
  public comments: CommentType[] = []

  @Getter()
  public get hasComments (): boolean {
    // ...
  }

  @Mutation()
  public updateRating ({ commentId, delta }: CommentPayloadType): void {
    // ...
  }

  @Action()
  public async fetchComments (): Promise<RawCommentType[]> {
    // ...
  }
}
```

And used:

```ts
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { useStore } from 'vuex-simple'

// Import your store:
import TypedStore from '~/logic/store'

@Component({})
export default class ComponentName extends Vue {
  // Later it can be used to perform typed actions, mutations, etc.
  public typedStore: TypedStore = useStore(this.$store)

  someButtonClicked (commentId: number): void {
    // This call is fully typed: parameters and return value are known:
    this.typedStore.updateRating({ commentId, 'delta': 1 })
  }
}
```

We actually provide a utility mixin to inject `typedStore` into all components.

## vue-typedi

We also use 
[dependency injection (DI)][di] and [inversion of control (IoC)][ioc]
principles to uncouple different layers of our app.

This allows to write simpler code, abstract things, and reuse code easier.

That's how it works:

```ts
// module.ts

import { Action } from 'vuex-simple'
import { Inject, Injectable } from 'vue-typedi'

import tokens from '~/logic/tokens'
import CommentService from '~/logic/comments/services/api'

@Injectable() // required to make class injectable (to have injections)
class CommentsModule {
  @Inject(tokens.COMMENT_SERVICE) // tokens.COMMENT_SERVICE is a unique name
  public service!: CommentService // we can also type the injected service

  @Action()
  public async fetchComments () {
    // Here we use injected service, without explicitly passing it:
    const commentsList = await this.service.fetchComments()
    // ...
  }
}

// services/api.ts

import { Service } from 'vue-typedi'

import tokens from '~/logic/tokens'

// Here we register our service under a unique name, 
// it will be used to inject it later:
@Service(tokens.COMMENT_SERVICE)
class CommentService {
  // ...
}
```

You can easily mock things in your tests and provide different implementation
by using this 100% valid way:

```ts
import { Container } from 'vue-typedi'

import tokens from '~/logic/tokens'
```

[nuxt-class-component]: https://github.com/nuxt-community/nuxt-class-component
[vue-class-component]: https://github.com/vuejs/vue-class-component
[nuxt-property-decorator]: https://github.com/nuxt-community/nuxt-property-decorator
[vuex-class]: https://github.com/ktsn/vuex-class/
[eslint-plugin-vue]: https://github.com/vuejs/eslint-plugin-vue
[classic-mode]: https://nuxtjs.org/guide/vuex-store#classic-mode
[modules-mode]: https://nuxtjs.org/guide/vuex-store#modules-mode
[generate-docs]: https://nuxtjs.org/api/configuration-generate/#routes
[di]: https://en.wikipedia.org/wiki/Dependency_injection
[ioc]: https://en.wikipedia.org/wiki/Inversion_of_control

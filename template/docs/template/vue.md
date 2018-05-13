# Vue

We use a lot of non-standard things in our `Vue` components.
Here we would like to go through some most important parts.


## nuxt

We use `nuxt` because it gives no overhead, but gives tons of features, including:

1. server side rendering
2. single page applications
3. static assets generation
4. zero-configuration build tool
5. routing
6. middlewares
7. much more

We do not recommend to switch to raw `Vue`, unless you 100% sure.


## nuxt-class-component

First of all, we use `class`es to define components. 
We do it with the help of several libraries:

1. [`nuxt-class-component`](https://github.com/nuxt-community/nuxt-class-component) - pretty much the same as [`vue-class-component`](https://github.com/vuejs/vue-class-component), but with special `nuxt` callback defined
2. [`vue-property-decorator`](https://github.com/kaorun343/vue-property-decorator) that allows to define some useful properties using decorators
3. [`vuex-class`](https://github.com/ktsn/vuex-class/) that allows to define bindings to `vuex`

This way we can achieve *some* level of type safety. It is not 100% safe.
But it is something.

Make sure to mark your components as `// @vue/component` to have at least
some linting from [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue).

### Fallback to good-old simple components

However, you can fallback to `export default {}` at any time you want.
This way you won't have almost none type support, but you will have full 
linting support from `eslint-plugin-vue` which is a good thing.

It would be also easier for newcomers.
You can even mix styles for different components.
So, the choice is yours.


## jsx

It is totally possible to fallback to [`jsx`](https://vuejs.org/v2/guide/render-function.html)
instead of `<temaplte>` when needed.
However, we do not recommend doing it, 
since it is not a standard way of doing things in `Vue`.

Here's an example of how `jsx` is used in `Vue`:

```js
render () {
  return (
    <div class={this.$style.actions}>
      <button
        class={this.$style.reload}
        onClick={this.fetchComments}
      >
        reload comments
      </button>
    </div>
  )
}
```


## vuex

We use [`vuex-modules`](https://vuex.vuejs.org/en/modules.html) that comes with [`nuxt`](https://nuxtjs.org/guide/vuex-store/). 

You can switch to [classic mode](https://nuxtjs.org/guide/vuex-store#classic-mode) if you want to.


## routing

By default we use [`nuxt` pages](https://nuxtjs.org/guide/routing) for routing.
But, when we will need some complex routes we can always switch to [`router-module`](https://github.com/nuxt-community/router-module).

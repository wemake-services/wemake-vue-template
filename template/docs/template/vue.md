# Vue

We use a lot of non-standard things in our `Vue` components.
Here we would like to go through some most important parts.

## nuxt

We use `nuxt` because it gives no overhead, 
but gives tons of features, including:

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

1. [`nuxt-class-component`][nuxt-class-component] - pretty much the same as
   [`vue-class-component`][vue-class-component], but with `nuxt` specific 
   callbacks defined

2. [`vue-property-decorator`][vue-property-decorator] that allows defining 
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

It would be also easier for newcomers.
You can even mix styles for different components.
So, the choice is yours.

## jsx

It is totally possible to fallback 
to [`jsx`](https://vuejs.org/v2/guide/render-function.html)
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

We use [`vuex`](https://vuex.vuejs.org) that comes 
with [`nuxt`](https://nuxtjs.org/guide/vuex-store/). 
We stick to the [classic mode][classic-mode].

You can switch to [modules mode][modules-mode] at any time if you want to.

## routing

We use [`vue-router`](http://router.vuejs.org/) 
to route between views in our app.
To bind `nuxt` and `vue-router` together we need an additional 
[`router-module`](https://github.com/nuxt-community/router-module).

To use `generate` command you will need to manually specify which pages do 
you need to generate. 
Refer to the [`generate` docs][generate-docs] on the possible options.

You can disable `vue-router` and switch 
to [`nuxt` pages](https://nuxtjs.org/guide/routing).

[nuxt-class-component]: https://github.com/nuxt-community/nuxt-class-component
[vue-class-component]: https://github.com/vuejs/vue-class-component
[vue-property-decorator]: https://github.com/kaorun343/vue-property-decorator
[vuex-class]: https://github.com/ktsn/vuex-class/
[eslint-plugin-vue]: https://github.com/vuejs/eslint-plugin-vue
[classic-mode]: https://nuxtjs.org/guide/vuex-store#classic-mode
[modules-mode]: https://nuxtjs.org/guide/vuex-store#modules-mode
[generate-docs]: https://nuxtjs.org/api/configuration-generate/#routes

# Styles

We use a combination of `scss` and `css-modules` for our styles
by adding the `lang="scss"` and `module` attributes to `<style>` tag:

```html
<style lang="scss" module>
.link {
  width: 10px;
}
</style>
```

We also enforce strong [linting of styles](linting.md#styles)
to keep it consistent and find possible errors early.

## Global CSS

If you want to use any global `css` here's what you need to do:

1. Install the library you need: `yarn add normalize.css`

2. Add the file path to `css`
   property of [`nuxt.config.js`](configuration.md#nuxt-config-js)

It will look something like so:

```js
  /**
  * Global CSS
  */
  css: [
    'normalize.css/normalize.css'
  ],
```

This file will be included in the final build.

### Layout specific styles

Every layout in `client/layouts/` is not scoped or bundled in a module.
It is required to drop some global styles for all components that are using
this layout.

## SCSS

We use [`scss`](https://sass-lang.com/guide) to write components' styles.
Because it is just like `css`. But better!
You can just drop-in any plain `css` and
it will work with no any other actions required.

`scss` is a preprocessor. It means, that `scss` get compiled to `css` later.
And before it is compiled `scss` allows to use features that are missing
from `css3` spec, including:

- [variables](https://sass-lang.com/guide#topic-2)
- [nesting](https://sass-lang.com/guide#topic-3)
- [mixins](https://sass-lang.com/guide#topic-6)

That's the bare minimum you need to know to productively use `scss`.

### Aliases and imports

We have a preconfigured `~/scss` alias
inside [`nuxt.config.js`](configuration.md#nuxt-config-js)
to [import](https://sass-lang.com/guide#topic-5) local files.
You can use it inside `Vue` components like so:

```html
<style lang="scss" module>
@import "~/scss/variables";

.component {
  color: $imported-color-from-variables;
}
</style>
```

Things to keep in mind:

- you don't have to specify a file extension or leading `_`,
  this will be considered as a linting error

- do not import modules that produce `css` output,
  it will pollute your stylesheets with multiple declarations

- do not import external `css` libraries, use `nuxt.config.js` for that

## CSS Modules

Every `Vue` component should
be a [`css` module](https://github.com/css-modules/css-modules).
How does it work?

The main idea is:

- to rename your classes to some **unique** name during build time
- to make your `css` classes available from `js`

So, this:

```html
<style lang="scss" module>
.component { ... }
.input { ... }
</style>
```

Will became this:

```js
this.$style = {
  'component': '_3hLE8Zr42CA8Iz_38AM4TJ_0',
  'input': 'VZZoxarQNkuSWSg1ftV1v_0'
}
```

Now you don't have to worry about naming your classes or
binding them together with `Vue`. The future is now!

### Naming

When naming your `css` classes stick to [`camelCase`](https://github.com/css-modules/css-modules#naming),
as it would be easier to call it inside your `Vue` component:

```html
<template>
   <div>
      <p class="$style.camelCase"></p>
      <p class="$style['kebab-case']"></p>
   </div>
</template>

<style lang="scss" module>
.camelCase { ... }
.kebab-case { ... }
</style>
```

Also, keep in mind that all nested classes will
be flattened for `$style` access:

```html
<template>
   <div>
      <p class="$style.root"></p>
      <p class="$style.child"></p>
   </div>
</template>

<style lang="scss" module>
.root {
  .child { ... }
}
</style>
```

You can play around with
[`:local` selector](https://github.com/css-modules/css-modules#exceptions)
if you would like to make them nested.

### Exporting SCSS variables to Javascript

Imagine that you have to use your `scss` variable in `vue`.
Sounds like a nightmare? No, that's not. Imaging exporting this variable:

```scss
$grid-size: 15rem;
```

And use it like so:

```html
<style lang="scss" module>
@import '~/scss/variables';

:export {
  $var-grid-size: $grid-size;
}
</style>
```

It would be available as `this.$style['var-grid-size']`.
It might be useful for dynamic colors, grids, blocks, and tables.

## PostCSS

After we have created all our styles
they are processed by a [post-processor](https://github.com/postcss/postcss).
Why? Because it is easier to make optimizations on this step.

It comes [bundled](https://nuxtjs.org/api/configuration-build#postcss)
with `nuxt`.
What kind of custom optimizations or plugins do we use?

- [`css-mqpacker`](https://www.npmjs.com/package/css-mqpacker) - which allows
  to combine all `@media` queries into one block for better performance

These optimizations are applied by `webpack`.
You don't have to run them manually.

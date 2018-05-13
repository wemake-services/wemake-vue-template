// This is Nuxt configuration file
// See: https://nuxtjs.org/guide/configuration/

const path = require('path')

const envPath = path.resolve(__dirname, 'config', '.env')
require('dotenv').config({ path: envPath })

module.exports = {
  /**
  * Headers of the page
  */
  head: {
    title: 'css_modules',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Vue.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    htmlAttrs: {
      lang: 'en'
    }
  },

  /**
  * Specify Nuxt source directory
  */
  srcDir: 'client',
  rootDir: path.resolve(__dirname),

  /**
  * Extra Nuxt modules
  */
  modules: [
    'nuxt-babel',
    'nuxt-imagemin',

    ['@nuxtjs/dotenv', { path: envPath }],
    '@nuxtjs/axios'
  ],

  /**
  * Axios settings
  */
  axios: {
    // See https://axios.nuxtjs.org/options.html
    https: true,
    progress: true,
    retry: true,
    proxy: false,
    debug: process.env.NODE_ENV === 'development'
  },

  /**
  * Custom plugins
  */
  plugins: [],

  /**
  * Global CSS
  */
  css: [
    'normalize.css/normalize.css'
  ],

  /**
  * Build configuration
  */
  build: {
    analyze: {
      analyzerMode: 'static',
      openAnalyzer: false
    },

    vendor: [
      'babel-polyfill'
    ],

    extend (config, { isDev, isClient }) {
      // This line allows us to use `@import "~/scss/..."` in our app:
      config.resolve.alias['/scss'] = path.resolve(__dirname, 'client', 'scss')

      if (isDev && isClient) {
        // Enabling eslint:
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        // Enabling stylelint:
        config.plugins.push(
          require('stylelint-webpack-plugin')({
            files: '**/*.{vue,scss}'
          })
        )
      }

      if (process.env.NODE_ENV === 'test') {
        // When e2e testing our app, we don't need hashes as css class names,
        // because we won't be able to `.querySelector()` by class.
        // Since we don't know it in advance. This technique allows us to
        // have predictable class name and still test css-module functionality.
        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === 'vue-loader'
        )

        vueLoader.options.cssModules = {
          localIdentName: '[name]__[local]' // this gives us predictable names
        }
      }
    },

    /**
    * postcss configuration
    */
    postcss: {
      plugins: {
        // Default plugins:
        'postcss-import': {},
        'postcss-url': {},
        'postcss-cssnext': { features: { customProperties: false }},

        // Custom:
        'css-mqpacker': {}
      }
    }
  }
}

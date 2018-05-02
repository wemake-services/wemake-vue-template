// This is Nuxt configuration file
// See: https://nuxtjs.org/guide/configuration/

const path = require('path')

const envPath = path.resolve(__dirname, 'config', '.env')
require('dotenv').config({ path: envPath })

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    htmlAttrs: {
      lang: 'en'
    }
  },

  /*
  ** Specify Nuxt source directory
  */
  srcDir: 'client',
  rootDir: path.resolve(__dirname),

  /*
  ** Extra Nuxt modules
  */
  modules: [
    'nuxt-babel',
    'nuxt-imagemin',

    ['@nuxtjs/dotenv', { path: envPath }],
    '@nuxtjs/axios'
  ],

  /*
  ** Axios settings
  */
  axios: {
    proxyHeadersIgnore: ['accept-encoding', 'host'],
    https: true,
    progress: true,
    debug: false
  },

  /*
  ** Custom plugins
  */
  plugins: [],

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'babel-polyfill'
    ],

    extend (config, { isDev, isClient }) {
      config.resolve.alias['scss'] = path.resolve(__dirname, 'client', 'scss')

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        config.plugins.push(
          require('stylelint-webpack-plugin')({
            syntax: 'scss',
            files: '**/*.{vue,scss}'
          })
        )
      }
    },

    /*
    ** postcss configuration
    */
    postcss: {
      plugins: {
        // Default plugins:
        'postcss-import': {},
        'postcss-url': {},
        'postcss-cssnext': {},

        // Custom:
        'cssnano': {},
        'css-mqpacker': {}
      }
    }
  }
}

// This is Nuxt configuration file
// See: https://nuxtjs.org/guide/configuration/

import path from 'path'
import { Configuration } from '@nuxt/types'

import pkg from './package.json'

const envPath = path.resolve(__dirname, 'config', '.env')
require('dotenv').config({ 'path': envPath })

const config: Configuration = {
  /**
   * Headers of the page.
   */
  'head': {
    'htmlAttrs': { 'lang': 'en' },
    'title': pkg.name,
    'meta': [
      { 'charset': 'utf-8' },
      { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1' },
      {
        'hid': 'description',
        'name': 'description',
        'content': pkg.description,
      },
    ],
    'link': [
      {
        'rel': 'icon',
        'type': 'image/x-icon',
        'href': '/favicon.ico',
      }, {
        'rel': 'icon',
        'type': 'image/png',
        'sizes': '32x32',
        'href': '/favicon-32x32.png',
      }, {
        'rel': 'icon',
        'type': 'image/png',
        'sizes': '96x96',
        'href': '/favicon-96x96.png',
      },
    ],
  },

  /**
   * Specify Nuxt source directory.
   */
  'srcDir': 'client',
  'rootDir': path.resolve(__dirname),

  /**
   * Modules that are used in build-time only.
   */
  'buildModules': [
    ['@nuxt/typescript-build', {
      'typeCheck': true,
    }],
  ],

  /**
   * Extra Nuxt modules.
   */
  'modules': [
    '@nuxtjs/axios',
    'nuxt-imagemin',
  ],

  /**
   * Axios settings.
   */
  'axios': {
    // See https://axios.nuxtjs.org/options.html
    'debug': process.env.NODE_ENV === 'development',
    'https': true,
    'proxyHeadersIgnore': ['accept', 'accept-encoding', 'host'],
    'progress': true,
    'proxy': false,
    'retry': true,
  },

  /**
   * Custom plugins.
   */
  'plugins': [
    // Install TypeDI to inject dependencies:
    '~/plugins/type-di',
  ],

  /**
   * Global CSS.
   */
  'css': [
    'normalize.css/normalize.css',
  ],

  /**
   * Postcss configuration.
   */
  'postcss': {},

  /**
   * Build configuration.
   */
  'build': {
    extend (config, { isDev, isClient }): void {
      if (config.resolve && config.resolve.alias) {
        // This line allows us to use `@import "~/scss/..."` in our app:
        config.resolve.alias['/scss'] = path.resolve(__dirname, 'client', 'scss')
      }

      if (isDev && isClient && config.module) {
        // Enabling eslint:
        config.module.rules.push({
          'enforce': 'pre',
          'test': /\.(js|ts|vue)$/u,
          'loader': 'eslint-loader',
          'exclude': /(node_modules)/u,
        })

        if (config.plugins) {
          // Enabling stylelint:
          config.plugins.push(require('stylelint-webpack-plugin')({
            'files': 'client/**/*.{vue,scss,css}',
          }))
        }
      }
    },
  },
}

export default config
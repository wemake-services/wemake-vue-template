const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /**
  ** Specify nuxt source directory
  */
  srcDir: 'client',

  /**
  ** Extra nuxt modules
  */
  modules: [
    ['nuxt-sass-resources-loader', [
      path.resolve(__dirname, './client/scss/partials/mixins.scss')
    ]],
  ],

  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: [
          ['vue-app', { 'useBuiltIns': true }],
          'flow'
        ],
        plugins: [
          ['module-resolver', {
            cwd: './client',
            extensions: ['.js', 'vue'],
            '~': './client'
          }]
        ]
    },

    extend (config, { isDev, isClient }) {
      config.resolve.alias['~'] = '/Users/sobolev/Documents/github/wemake-vue-template/template/client'

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

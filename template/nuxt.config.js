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

  /**
  ** Specify nuxt source directory
  */
  srcDir: 'client',

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
    }
  }
}

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
   * Specify nuxt source directory
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

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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

'use strict'

const config = require('./config')
const _ = require('./utils')

module.exports = {
  loaders: _.cssLoaders({
    sourceMap: !config.isProduction,
    extract: config.isProduction
  }),
  cssSourceMap: !config.isProduction,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

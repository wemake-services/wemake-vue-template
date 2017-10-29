'use strict'
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')

const _ = module.exports = {}

_.cwd = (file) => {
  return path.join(process.cwd(), file || '')
}

_.cssLoader = 'css-loader?-autoprefixer'

_.cssProcessors = [
  { loader: '', test: /\.css$/ },
  { loader: 'sass-loader?sourceMap', test: /\.scss$/ }
]

_.outputPath = path.join(__dirname, '../dist')
_.outputIndexPath = path.join(__dirname, '../dist/index.html')
_.target = 'web'

// https://github.com/egoist/vbuild/blob/master/lib/vue-loaders.js
_.loadersOptions = () => {
  const isProd = process.env.NODE_ENV === 'production'

  function generateLoader (langs) {
    langs.unshift('css-loader?sourceMap&-autoprefixer')
    if (!isProd) {
      return ['vue-style-loader'].concat(langs).join('!')
    }
    return ExtractTextPlugin.extract({
      fallback: 'vue-style-loader',
      use: langs.join('!')
    })
  }

  return {
    minimize: isProd,
    options: {
      // css-loader relies on context
      context: process.cwd(),
      vue: {
        loaders: {
          css: generateLoader([]),
          scss: generateLoader(['sass-loader?sourceMap']),
          js: 'babel-loader'
        }
      }
    }
  }
}

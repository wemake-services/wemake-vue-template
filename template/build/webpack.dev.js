'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrors = require('friendly-errors-webpack-plugin')
const base = require('./webpack.base')
const _ = require('./utils')

const styleLoaders = []
_.cssProcessors.forEach((processor) => {
  let loaders
  if (processor.loader === '') {
    loaders = ['postcss-loader']
  } else {
    loaders = ['postcss-loader', processor.loader]
  }
  styleLoaders.push(
    {
      test: processor.test,
      loaders: ['style-loader', _.cssLoader].concat(loaders)
    }
  )
})

module.exports = merge(base, {
  module: {
    loaders: [
      ...styleLoaders
    ]
  },

  devtool: '#cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrors()
  ]
})

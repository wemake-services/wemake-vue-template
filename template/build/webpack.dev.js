'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

const base = require('./webpack.base')

module.exports = merge(base, {
  devtool: '#cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrors()
  ],

  devServer: {
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT
  }
})

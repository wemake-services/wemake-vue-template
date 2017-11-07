'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRPlugin = require('vue-ssr-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.base')
const pkg = require('../package.json')

module.exports = merge(base, {
  target: 'node',

  entry: './client/server-entry.js',

  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },

  externals: Object.keys(pkg.dependencies),

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.VUE_ENV': '"server"'
    }),
    new ExtractTextPlugin('styles.[contenthash:8].css'),
    new VueSSRPlugin()
  ]
})

'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRPlugin = require('vue-ssr-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pkg = require('../package.json')

const base = require('./webpack.base')
const config = require('./config')
const _ = require('./utils')

module.exports = merge(base, {
  target: 'node',

  entry: './client/server-entry.js',

  output: {
    path: config.outputPath,
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },

  externals: Object.keys(pkg.dependencies),

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.VUE_ENV': '"server"'
    }),
    new ExtractTextPlugin(_.assetsPath('css/styles.[contenthash:8].css')),
    new VueSSRPlugin()
  ]
})

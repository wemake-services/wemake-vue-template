'use strict'

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const config = require('./config')
const vueLoaderConfig = require('./vue-loader.config')
const _ = require('./utils')

require('dotenv').config({ path: _.cwd('./config/.env') })

module.exports = {
  entry: {
    client: './client/client-entry.js'
  },

  output: {
    path: config.outputAssetsPath,
    filename: '[name].js',
    publicPath: config.publicPath,
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate: (info) => {
      return path.resolve(info.absoluteResourcePath)
    },
    // Add /* filename */ comments to generated require()s in the output
    pathinfo: true
  },

  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },

  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: [
      // This means you can get rid of dot hell
      _.cwd('node_modules'),
      _.cwd('client')
    ]
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [_.cwd('client'), _.cwd('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'static/assets/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new StyleLintPlugin({
      syntax: 'scss',
      files: '**/*.{vue,scss}'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: config.outputIndexPath,
      inject: true,
      // Necessary to consistently work with multiple chunks
      chunksSortMode: 'dependency'
    })
  ],

  target: config.target
}

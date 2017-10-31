'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const config = require('./config')
const _ = require('./utils')

module.exports = {
  entry: {
    client: './client/client-entry.js'
  },

  output: {
    path: _.outputPath,
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
      vue: 'vue/dist/vue.js'
    },
    modules: [
      // This means you can get rid of dot hell
      _.cwd('node_modules'),
      _.cwd('client')
    ]
  },

  module: {
    loaders: [
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
        loaders: ['vue-loader']
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
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
      title: config.title,
      template: path.resolve(__dirname, 'index.html'),
      filename: _.outputIndexPath,
      inject: true,
      minify: {
        removeComments: false, // comments are require for SSR
        collapseWhitespace: true
      },
      // Necessary to consistently work with multiple chunks
      chunksSortMode: 'dependency'
    }),

    new webpack.LoaderOptionsPlugin(_.loadersOptions()),
    new CopyWebpackPlugin([
      {
        from: _.cwd('./client/static'),
        // To the root of dist path
        to: './',
        ignore: ['.*']
      }
    ])
  ],

  target: _.target
}

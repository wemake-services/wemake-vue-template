'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const analyzer = require('webpack-bundle-analyzer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const base = require('./webpack.base')
const _ = require('./utils')

module.exports = merge(base, {
  output: {
    // Use hash filename to support long-term caching
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },

  module: {
    rules: _.styleLoaders({
      sourceMap: false,
      extract: true,
      usePostCSS: true
    })
  },

  devtool: 'source-map',

  plugins: [
    // Analyze and visualize webpack bundle size:
    new analyzer.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),

    new ProgressPlugin(),
    new ExtractTextPlugin({
      filename: 'css/styles.[contenthash:8].css',
      // Setting the following option to `false` will
      // not extract CSS from codesplit chunks.
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // webpack@3 dark magic:
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),

    // Keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),

    // Extract vendor chunks
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        const isModule = module.resource && /\.(js|css|es6)$/.test(
          module.resource
        )
        const isVendor = module.resource.indexOf('node_modules') !== -1
        return isModule && isVendor
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),

    // Create .gz files:
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
      // deleteOriginalAssets: true
    }),

    new CopyWebpackPlugin([
      {
        from: _.cwd('./client/static'),
        // To the root of dist path
        to: '../',
        ignore: ['.*']
      }
    ])
  ],

  // Minimize webpack output
  stats: {
    // Add children information
    children: false,
    // Add chunk information,
    // setting this to `false` allows for a less verbose output
    chunks: false,
    // Add built modules information to chunk information
    chunkModules: false,
    chunkOrigins: false,
    modules: false
  }
})

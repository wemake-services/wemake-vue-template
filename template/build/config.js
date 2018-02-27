'use strict'

const path = require('path')

const pkg = require('../package')

const isProduction = process.env.NODE_ENV === 'production'
const outputPath = path.join(__dirname, '..', 'dist')

module.exports = {
  title: pkg.name,
  isProduction,

  // URLs:
  publicPath: isProduction ? '/static' : '/',

  // Paths:
  outputPath,
  outputAssetsPath: isProduction
    ? path.join(outputPath, 'static') : outputPath,
  outputIndexPath: path.join(outputPath, 'index.html'),
  target: 'web'
}

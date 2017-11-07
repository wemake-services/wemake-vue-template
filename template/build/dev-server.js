'use strict'

const path = require('path')
const webpack = require('webpack')
const Server = require('webpack-dev-server')
const webpackConfig = require('./webpack.dev')
const config = require('./config')
const LogPlugin = require('./log-plugin')
const _ = require('./utils')

require('dotenv').config({ path: _.cwd('./config/.env') })

const devServerOptions = Object.assign(
  {},
  webpackConfig.devServer,
  {
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT
  }
)

const host = devServerOptions.host
const port = devServerOptions.port

webpackConfig.entry.client = [
  path.join(__dirname, './dev-client.js'),
  webpackConfig.entry.client
]

webpackConfig.plugins.push(new LogPlugin({ host, port }))

let compiler

try {
  compiler = webpack(webpackConfig)
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err.message)
  process.exit(1) // eslint-disable-line unicorn/no-process-exit
}

const server = new Server(compiler, Object.assign({
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  disableHostCheck: true,
  publicPath: config.publicPath
}, devServerOptions))

server.listen(port, host)

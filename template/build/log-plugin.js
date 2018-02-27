'use strict'

const chalk = require('chalk')

// this plugin if for loggin url after each time the compilation is done.
module.exports = class LogPlugin {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    compiler.plugin('done', () => {
      const url = chalk.yellow(
        `http://${this.options.host}:${this.options.port}`
      )
      // eslint-disable-next-line no-console
      console.log(`> Server is running at ${url}\n`)
    })
  }
}

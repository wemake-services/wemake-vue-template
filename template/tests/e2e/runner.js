'use strict'

const spawn = require('cross-spawn')

const createServer = require('../../server/server.js')
const app = createServer()

const server = app.listen(3000, 'localhost', () => {
  let opts = process.argv.slice(2)
  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'tests/e2e/nightwatch.conf.js'])
  }
  if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome'])
  }

  const runner = spawn(
    './node_modules/.bin/nightwatch',
    opts,
    { stdio: 'inherit' }
  )

  const teardown = () => {
    server.close()
  }

  runner.on('exit', (code) => {
    teardown()
    process.exit(code) // eslint-disable-line unicorn/no-process-exit
  })

  runner.on('error', (err) => {
    teardown()
    throw err
  })
})

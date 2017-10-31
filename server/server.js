'use strict'

const fs = require('fs')
const path = require('path')
const express = require('express')
// const favicon = require('serve-favicon')
const resolve = (file) => path.resolve(__dirname, file)

// Loading env files:
require('dotenv').config({ path: resolve('../config/.env') })

function createServer () {
  const app = express()

  const bundle = require(resolve('../dist/vue-ssr-bundle.json'))
  // src/index.template.html is processed by html-webpack-plugin to inject
  // build assets and output as dist/index.html.
  const template = fs.readFileSync(resolve('../dist/index.html'), 'utf-8')
  const renderer = createRenderer(bundle, template)

  function createRenderer (bundle, template) {
    // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
    return require('vue-server-renderer').createBundleRenderer(bundle, {
      template,
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    })
  }

  app.use(express.static(resolve('../dist')))
  // app.use(favicon(path.resolve(__dirname, 'src/assets/logo.png')))
  // app.use('/service-worker.js', serve('./dist/service-worker.js'))

  app.get('*', (req, res) => {
    if (!renderer) {
      return res.end('waiting for compilation... refresh in a moment.')
    }

    const s = Date.now()

    res.setHeader('Content-Type', 'text/html')

    const errorHandler = (err) => {
      if (err && err.code === 404) {
        res.status(404).end('404 | Page Not Found')
      } else {
        // Render Error Page or Redirect
        res.status(500).end('500 | Internal Server Error')
        console.error(`error during render : ${req.url}`)
        console.error(err)
      }
    }

    renderer.renderToStream({ url: req.url })
      .on('error', errorHandler)
      .on('end', () => console.log(`whole request: ${Date.now() - s}ms`))
      .pipe(res)
  })

  return app
}

module.exports = createServer

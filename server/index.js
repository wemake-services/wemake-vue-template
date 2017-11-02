'use strict'

const createServer = require('./server')
const app = createServer()

const port = process.env.SSR_PORT
const host = process.env.SSR_HOST

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://${host}:${port}`)
})

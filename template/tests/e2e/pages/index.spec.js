/**
 * @jest-environment node
 */

require('babel-polyfill')

import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
// import { JSDOM } from 'jsdom'
// import test from 'ava'

const rootDir = resolve(__dirname, '..', '..', '..')
const config = require(resolve(rootDir, 'nuxt.config.js'))

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
beforeEach(async () => {
  global.Promise = require.requireActual('es6-promise').Promise

  config.dev = false

  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
}, 30000)

// Example of testing only generated html
test('Route / exits and render HTML', async () => {
  expect.assertions(1)

  const { html } = await nuxt.renderRoute('/', {})
  expect(html.includes('wemake-vue-template')).toBeTruthy()
})

// Example of testing via dom checking
// test('Route / exits and render HTML with CSS applied', async t => {
//   const context = {}
//   const { html } = await nuxt.renderRoute('/', context)
//   const { window } = new JSDOM(html).window
//   const element = window.document.querySelector('.red')
//   t.not(element, null)
//   t.is(element.textContent, 'Hello world!')
//   t.is(element.className, 'red')
//   t.is(window.getComputedStyle(element).color, 'red')
// })

// Close server and ask nuxt to stop listening to file changes
afterEach(() => {
  nuxt.close()
})

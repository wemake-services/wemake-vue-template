/**
 * @jest-environment node
 */

import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import { JSDOM } from 'jsdom'

const rootDir = resolve(__dirname, '..', '..', '..')
const config = require(resolve(rootDir, 'nuxt.config.js'))

describe('e2e tests for index page', () => {
  // We keep the nuxt and server instance
  // So we can close them at the end of the test
  let nuxt

  // Init Nuxt.js and create a server listening on localhost:4001
  beforeAll(async () => {
    config.dev = false

    // This part can be moved to a separate function:
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    nuxt.listen(4001, 'localhost')
  }, 30000)

  // Example of testing only generated html
  test('route / exits and render HTML', async () => {
    expect.assertions(1)

    const { html } = await nuxt.renderRoute('/', {})
    expect(html.includes('wemake-vue-template')).toBeTruthy()
  })

  // Example of testing via dom checking
  test('route / exits and render HTML with CSS applied', async () => {
    const { html } = await nuxt.renderRoute('/', {})
    const { window } = new JSDOM(html).window

    const mainHeader = window.document.querySelector('h1')
    const comments = window.document.querySelector('.comments__component')

    expect(mainHeader.textContent).toBe('wemake-vue-template')
    expect(window.getComputedStyle(comments).display).toBe('flex')
  })

  // Close server and ask nuxt to stop listening to file changes
  afterAll(() => {
    nuxt.close()
  })
})

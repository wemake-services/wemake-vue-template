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

  // Init Nuxt.js and create a server listening on localhost:4000
  beforeEach(async () => {
    config.dev = false

    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    nuxt.listen(4000, 'localhost')
  }, 30000)

  // Example of testing only generated html
  it('Route / exits and render HTML', async () => {
    expect.assertions(1)

    const { html } = await nuxt.renderRoute('/', {})
    expect(html.includes('wemake-vue-template')).toBeTruthy()
  })

  // Example of testing via dom checking
  it('Route / exits and render HTML with CSS applied', async () => {
    const { html } = await nuxt.renderRoute('/', {})
    const { window } = new JSDOM(html).window
    const element = window.document.querySelector('.comments__component')

    expect(window.getComputedStyle(element).display).toBe('flex')
  })

  // Close server and ask nuxt to stop listening to file changes
  afterEach(() => {
    nuxt.close()
  })
})

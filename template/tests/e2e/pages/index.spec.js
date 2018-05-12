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

  // Example of testing only generated html (as text)
  test('route / exits', async () => {
    const { html } = await nuxt.renderRoute('/', {})
    expect(html.includes('wemake-vue-template')).toBeTruthy()
  })

  // Example of testing via dom checking, using jsdom
  test('route / renders HTML with CSS applied', async () => {
    const { html } = await nuxt.renderRoute('/', {})
    const { window } = new JSDOM(html).window

    const mainHeader = window.document.querySelector('h1')
    const comments = window.document.querySelector(
      '.comments__component .comments-container'
    )

    expect(mainHeader.textContent.trim()).toEqual('wemake-vue-template')
    expect(window.getComputedStyle(comments).display).toEqual('flex')
  })

  // Example of server side rendered async data, no mocks are used
  test('route / renders async data', async () => {
    expect.assertions(11)

    const { html } = await nuxt.renderRoute('/', {})
    const { window } = new JSDOM(html).window

    const commentRatings = window.document.querySelectorAll(
      '.comment__component .comment-rating-value'
    )
    expect(commentRatings).toHaveLength(10)

    for (let i = 0; i < commentRatings.length; i++) {
      expect(commentRatings[i].textContent.trim()).toEqual('0')
    }
  })

  // Close server and ask nuxt to stop listening to file changes
  afterAll(() => {
    nuxt.close()
  })
})

// Tests for nuxt.config.js

const templatePath = require('./utils').templatePath

describe('nuxt.config.js head values', () => {
  test('meta values', () => {
    const config = require(templatePath('nuxt.config.js'))

    expect(config.head.title).toEqual('{{ name }}')
    expect(config.head.meta[2].content).toEqual('{{ description }}')
  })
})

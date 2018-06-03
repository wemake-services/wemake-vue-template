// Tests for nuxt.config.js

const templatePath = require('./utils').templatePath

describe('nuxt.config.js head values', () => {
  test('meta values', () => {
    // eslint-disable-next-line security/detect-non-literal-require
    const config = require(templatePath('nuxt.config.js'))
    // eslint-disable-next-line security/detect-non-literal-require
    const pkg = require(templatePath('package.json'))

    expect(config.head.title).toEqual(pkg.name)
    expect(config.head.meta[2].content).toEqual(pkg.description)
  })
})

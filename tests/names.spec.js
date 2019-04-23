// Tests for template names integrity

const fs = require('fs')

const templatePath = require('./utils').templatePath

describe('template names', () => {
  test('package.json', () => {
    expect.hasAssertions()

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const json = JSON.parse(fs.readFileSync(templatePath('package.json')))

    const patterns = {
      'name': '{{ name }}',
      'author': '{{ author }}',
      'description': '{{ description }}',
      'version': '0.0.0',
      'private': true,
    }

    expect.assertions(patterns.length)

    for (const key of Object.keys(patterns)) {
      expect(json[key]).toStrictEqual(patterns[key])
    }
  })

  test('package-lock.json', () => {
    expect.hasAssertions()

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const json = JSON.parse(fs.readFileSync(templatePath('package-lock.json')))

    const patterns = {
      'name': '{{ name }}',
      'version': '0.0.0',
      'lockfileVersion': 1,
    }

    expect.assertions(patterns.length)

    for (const key of Object.keys(patterns)) {
      expect(json[key]).toStrictEqual(patterns[key])
    }
  })
})

// Tests for template names integrity

const fs = require('fs')

const templatePath = require('./utils').templatePath

describe('template names', () => {
  test('package.json', () => {
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
      expect(json[key]).toEqual(patterns[key])
    }
  })
})

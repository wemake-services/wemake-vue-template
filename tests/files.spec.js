// Tests for template folder integrity.
// Some files and folders are ignored from this test,
// since it is all tested in the app itself.
// Ignored folders: `client/`, `tests/`

const fs = require('fs')

const templatePath = require('./utils').templatePath

function expectAllExist (files) {
  expect.assertions(files.length)

  for (const file of files) {
    expect(fs.existsSync(templatePath(file))).toBe(true)
  }
}

describe('template files structure', () => {
  test('files exist', () => {
    const files = [
      '.babelrc',
      '.dockerignore',
      '.editorconfig',
      '.eslintrc.js',
      '.flowconfig',
      '.gitignore',
      '.gitlab-ci.yml',
      '.nvmrc',
      'docker-compose.yml',
      'nuxt.config.js',
      'package.json',
      'README.md',
      'yarn.lock'
    ]

    expectAllExist(files)
  })

  test('vscode files exist', () => {
    const files = [
      '.vscode/extensions.json',
      '.vscode/settings.json'
    ]

    expectAllExist(files)
  })

  test('config files exist', () => {
    const files = [
      'config/.env.template'
    ]

    expectAllExist(files)
  })

  test('docker files exist', () => {
    const files = [
      'docker/vue/Dockerfile'
    ]

    expectAllExist(files)
  })
})

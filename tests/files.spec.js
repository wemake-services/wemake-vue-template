// Tests for template folder integrity.
// Some files and folders are ignored from this test,
// since it is all tested in the app itself.
// Ignored folders: `client/`, `tests/`

/* eslint-disable jest/expect-expect */

const fs = require('fs')

const templatePath = require('./utils').templatePath

function expectAllExist (filesToChecks) {
  expect.assertions(filesToChecks.length)

  for (const filename of filesToChecks) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    expect(fs.existsSync(templatePath(filename))).toBe(true)
  }
}

describe('template files structure', () => {
  test('files exist', () => {
    expect.hasAssertions()
    const filesToCheck = [
      '.dockerignore',
      '.editorconfig',
      '.eslintrc.js',
      'stylelint.config.js',
      'tsconfig.json',
      '.gitignore',
      '.gitlab-ci.yml',
      '.nvmrc',
      'docker-compose.yml',
      'jest.config.js',
      'nuxt.config.ts',
      'package.json',
      'package-lock.json',
      'README.md',
    ]

    expectAllExist(filesToCheck)
  })

  test('vscode files exist', () => {
    expect.hasAssertions()
    const filesToCheck = [
      '.vscode/extensions.json',
      '.vscode/settings.json',
      '.vscode/launch.json',
    ]

    expectAllExist(filesToCheck)
  })

  test('config files exist', () => {
    expect.hasAssertions()
    const filesToCheck = [
      'config/.env.template',
    ]

    expectAllExist(filesToCheck)
  })

  test('docker files exist', () => {
    expect.hasAssertions()
    const filesToCheck = [
      'docker/vue/Dockerfile',
    ]

    expectAllExist(filesToCheck)
  })
})

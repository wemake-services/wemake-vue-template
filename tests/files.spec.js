// Tests for template folder integrity.
// Some files and folders are ignored from this test,
// since it is all tested in the app itself.
// Ignored folders: `client/`, `tests/`

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
    const filesToCheck = [
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
      'yarn.lock',
    ]

    expectAllExist(filesToCheck)
  })

  test('vscode files exist', () => {
    const filesToCheck = [
      '.vscode/extensions.json',
      '.vscode/settings.json',
    ]

    expectAllExist(filesToCheck)
  })

  test('config files exist', () => {
    const filesToCheck = [
      'config/.env.template',
    ]

    expectAllExist(filesToCheck)
  })

  test('docker files exist', () => {
    const filesToCheck = [
      'docker/vue/Dockerfile',
    ]

    expectAllExist(filesToCheck)
  })
})

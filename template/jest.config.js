// Configuring Jest
// See: https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
  'preset': 'ts-jest',

  'moduleFileExtensions': [
    'js',
    'ts',
    'json',
    'vue',
  ],
  'transform': {
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg|svg\\?inline)$':
      'jest-transform-stub',
  },
  'moduleNameMapper': {
    '^~/(.*)$': '<rootDir>/client/$1',
    '^@/(.*)$': '<rootDir>/tests/$1',
  },
  'testPathIgnorePatterns': [
    '/node_modules/',
    '/docker/testcafe/',
  ],

  'collectCoverage': true,
  'coverageThreshold': {
    'global': { 'statements': 90 },
  },
  'coveragePathIgnorePatterns': [
    '/node_modules/',
    '/tests/',
  ],

  'setupFilesAfterEnv': [
    // Add matchers via `expect.extend()`
    '<rootDir>/tests/setup.ts',
  ],

  'snapshotSerializers': [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],

  'verbose': true,
}

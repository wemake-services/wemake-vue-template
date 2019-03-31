// Configuring Jest
// See: https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
  // without this line rootDir will be `./tests`
  // 'rootDir': '..',

  'preset': 'ts-jest',

  'moduleFileExtensions': [
    'js',
    'ts',
    'json',
    'vue',
  ],
  'transform': {
    '.*\\.(vue)$': 'vue-jest',
  },
  'moduleNameMapper': {
    '^~/(.*)$': '<rootDir>/client/$1',
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

  'snapshotSerializers': [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],

  'verbose': true,
}

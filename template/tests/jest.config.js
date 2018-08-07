// Configuring Jest
// See: https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
  // without this line rootDir will be `./tests`
  'rootDir': '..',

  // without this line sometimes `jsdom` fails to run the tests:
  // see: https://github.com/facebook/jest/issues/6766
  'testURL': 'http://localhost',

  'collectCoverage': true,
  'coverageThreshold': {
    'global': { 'statements': 90 },
  },
  'coveragePathIgnorePatterns': [
    '/node_modules/', '/tests/',
  ],

  'testPathIgnorePatterns': ['/node_modules/', '/docker/testcafe/'],

  'transform': {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },

  'moduleFileExtensions': [
    'js', 'vue', 'json',
  ],
  'moduleNameMapper': {
    '^~/(.*)$': '<rootDir>/client/$1',
  },

  'verbose': true,
}

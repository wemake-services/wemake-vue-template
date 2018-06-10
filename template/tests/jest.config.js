// Configuring Jest
// See: https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
  // without this line rootDir will be `./tests`
  rootDir: '..',

  coverageThreshold: {
    global: { statements: 90 }
  },
  coveragePathIgnorePatterns: [
    '/node_modules/', '/tests/'
  ],

  setupFiles: [
    '<rootDir>/tests/utils/test-setup.js'
  ],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },

  moduleFileExtensions: [
    'js', 'vue', 'json'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/client/$1'
  },

  verbose: true
}

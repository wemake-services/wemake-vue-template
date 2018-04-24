// This file contents are executed before each test.

// This line solves promise conflict.
// https://github.com/facebook/jest/issues/4299
global.Promise = require.requireActual('es6-promise').Promise

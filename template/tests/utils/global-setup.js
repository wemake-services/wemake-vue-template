// This file exports async function which is executed once before all tests.

// This line solves multiple issues with `node` and `jest`:
require('babel-polyfill')

module.exports = async () => {
  // Empty, but you can extend it.
}

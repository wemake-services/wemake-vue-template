// We are mocking dotenv module, since it is not installed
// in the root folder.

const dotenvMock = {
  'config': jest.fn(),
}

module.exports = dotenvMock

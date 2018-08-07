module.exports = {
  'extends': ['plugin:jest/recommended'],
  'rules': {
    'jest/consistent-test-it': ['error', { 'fn': 'test' }],
    'jest/lowercase-name': 'error',
    'jest/valid-describe': 'error',
    'jest/no-jest-import': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/no-jasmine-globals': 'error',

    // warn users about too large snapshots:
    'jest/no-large-snapshots': ['warn', { 'maxSize': 50 }],

    // allows to use long functions inside tests:
    'max-lines-per-function': 'off',

    // we don't use this rule, since we use `babel-jest-assertions`
    // which inserts `expect.assertions()` automatically
    // 'jest/prefer-expect-assertions': 'error'
  },
}

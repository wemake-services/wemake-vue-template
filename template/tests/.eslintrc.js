module.exports = {
  'extends': [
    'plugin:jest/recommended',
  ],
  'rules': {
    // warnings to errors from recommended:
    'jest/no-disabled-tests': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-alias-methods': 'error',

    'jest/consistent-test-it': ['error', { 'fn': 'test' }],
    'jest/lowercase-name': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/expect-expect': 'error',

    'jest/no-empty-title': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-test-callback': 'error',
    'jest/no-truthy-falsy': 'error',

    'jest/prefer-expect-assertions': 'error',
    'jest/prefer-todo': 'error',

    // Style:
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',

    // warn users about too large snapshots:
    'jest/no-large-snapshots': ['warn', { 'maxSize': 50 }],

    // allows to use long functions inside tests:
    'max-lines-per-function': 'off',

    // Is not suitable to be used with Vuex actions:
    // 'jest/prefer-called-with': 'error',
  },
}

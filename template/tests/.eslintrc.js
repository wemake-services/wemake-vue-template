module.exports = {
  'extends': [
    '@wemake-services/jsdoc',
  ],
  'rules': {
    // Overrides

    // disable explicit return types for tests:
    '@typescript-eslint/explicit-function-return-type': 'off',

    // enable long test functions
    'max-lines-per-function': 'off',
  },
}

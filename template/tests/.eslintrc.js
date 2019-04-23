module.exports = {
  'extends': [
    '@wemake-services/jest',
  ],
  'rules': {
    // Overrides

    // disable explicit return types for tests:
    '@typescript-eslint/explicit-function-return-type': 'off',

    // enable long test functions
    'max-lines-per-function': 'off',
  },
}

module.exports = {
  'extends': [
    'standard'
  ],
  'env': {
    'node': true
  },
  'rules': {
    // base
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],

    // styling imports
    'import/prefer-default-export': 'off',
    'import/first': 'error',

    // warn about using console or debugger
    'no-console': 2,
    'no-debugger': 2,

    // raise errors on long lines
    'max-len': ['error', {
      'code': 80,
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': false,
      'ignoreStrings': false,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false
    }],

    // use new syntax
    'prefer-arrow-callback': 'error',
    'generator-star-spacing': ['error', 'after'],

    'func-style': ['error', 'declaration', {
      'allowArrowFunctions': true
    }],
    'no-var': 'error',
    'semi': ['error', 'never'],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }]
  }
}

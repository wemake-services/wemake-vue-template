module.exports = {
  'extends': [
    'standard',
    'plugin:unicorn/recommended'
  ],
  'plugins': [
    'html',
    'flowtype-errors',
    'unicorn',
    'json'
  ],
  'rules': {
    // base
    'object-curly-spacing': [2, 'always'],
    'arrow-parens': [2, 'always'],

    // styling imports
    // 'sort-imports': 2,
    'import/prefer-default-export': 'off',
    'import/order': [2, {
      'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }],

    // warn about using console
    'no-console': 1,

    // raise errors on long lines
    'max-len': [2, {
      'code': 80,
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': false,
      'ignoreStrings': false,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false
    }],

    // Use new syntax
    'prefer-promise-reject-errors': 2,
    'prefer-arrow-callback': 2,
    'generator-star-spacing': 0,

    'func-style': [2, 'declaration', {
      'allowArrowFunctions': true
    }],
    'no-var': 2,
    'semi': [2, 'never'],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],

    // raise flow errors
    'flowtype-errors/show-errors': 2,

    // leave files alone, since js and vue files have different cases
    'unicorn/filename-case': 0
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module'
  }
}

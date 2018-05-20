module.exports = {
  'root': true,
  'extends': [
    'standard',
    'plugin:unicorn/recommended',
    'plugin:vue/recommended',
    'flowtype-essential'
  ],
  'plugins': [
    'flowtype-errors',
    'unicorn',
    'json'
  ],
  'env': {
    'node': true,
    'browser': true
  },
  'rules': {
    // base
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],

    // styling imports
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/no-anonymous-default-export': ['error', {
      'allowCallExpression': false
    }],

    // warn about using console or debugger in development, fail in production
    'no-console': process.env.NODE_ENV !== 'production' ? 1 : 2,
    'no-debugger': process.env.NODE_ENV !== 'production' ? 1 : 2,

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
    }],

    // jsx
    'jsx-quotes': ['error', 'prefer-single'],

    // raise flow errors
    'flowtype-errors/show-errors': 2,
    'flowtype-errors/show-warnings': 1,
    // "flowtype-errors/enforce-min-coverage": [2, 50],

    // leave files alone, since js and vue files have different cases
    'unicorn/filename-case': 0,

    // rules for vue components
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/prop-name-casing': ['error', 'camelCase']
  },

  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  }
}

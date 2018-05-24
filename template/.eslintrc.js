module.exports = {
  'root': true,
  'extends': [
    'wemake',
    'plugin:vue/recommended',
    'flowtype-essential',
    'jsdoc-essential'
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

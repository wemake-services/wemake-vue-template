// Configuration for EsLint
// See: https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,

  'extends': [
    'wemake',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    '@vue/typescript',
    'plugin:compat/recommended',
    'jsdoc-essential',
  ],
  'plugins': [
    'unicorn',
    'compat',
    'json',
  ],
  'rules': {
    // jsx
    'jsx-quotes': ['error', 'prefer-single'],

    // typescript specifics
    '@typescript-eslint/indent': ['error', 2],

    // leave files alone, since js and vue files have different cases
    'unicorn/filename-case': 0,

    // rules for vue components
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always',
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always',
    }],
    'vue/prop-name-casing': ['error', 'camelCase'],
  },

  'settings': {
    // providing polyfills for `eslint-plugin-compat` plugin, see:
    // https://github.com/amilajack/eslint-plugin-compat/wiki/Adding-polyfills
    'polyfills': [],
  },

  'env': {
    'node': true,
    'browser': true,
  },
}

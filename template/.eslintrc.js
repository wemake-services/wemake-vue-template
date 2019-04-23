// Configuration for EsLint
// See: https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,

  'extends': [
    '@wemake-services/javascript',
    '@wemake-services/vue',
    '@wemake-services/jsdoc',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    '@vue/typescript',
    'plugin:compat/recommended',
  ],
  'plugins': [
    'compat',
    'json',
  ],
  'rules': {
    // typescript specifics
    '@typescript-eslint/indent': ['error', 2],

    // leave files alone, since js and vue files have different cases
    'unicorn/filename-case': 'off',
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

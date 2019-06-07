// Configuration for EsLint
// See: https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,

  'extends': [
    '@wemake-services/javascript',
    '@wemake-services/typescript/recommended',
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

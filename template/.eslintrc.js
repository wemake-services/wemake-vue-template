// Configuration for EsLint
// See: https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,

  'extends': [
    '@wemake-services/javascript',
    '@wemake-services/typescript/recommended',
    '@wemake-services/vue',
    '@wemake-services/jsdoc',
    'plugin:nuxt/recommended',
    '@vue/typescript',
    'plugin:compat/recommended',
    'plugin:vue-a11y/recommended',
  ],

  'plugins': [
    'compat',
    'json',
    'eslint-plugin-import-helpers',
  ],

  'rules': {
    // Sets the import order linting,
    // see: https://github.com/Tibfib/eslint-plugin-import-helpers
    'import-helpers/order-imports': ['error', {
      'newlinesBetween': 'always',
      'groups': ['module', '/^~//', '/^@//'],
      'alphabetize': { 'order': 'asc', 'ignoreCase': false },
    }],
  },

  'overrides': [{
    // Pages and layouts should have kebab case due to Nuxt's API:
    'files': ['client/pages/**/*.vue', 'client/layouts/**/*.vue'],
    'rules': {
      'unicorn/filename-case': ['error', { 'case': 'kebabCase' }],
    },
  }],

  'parserOptions': {
    'parser': '@typescript-eslint/parser',
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

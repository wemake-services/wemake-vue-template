// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

module.exports = {
  'extends': [
    '@wemake-services/stylelint-config-scss',
    'stylelint-config-css-modules',
  ],
  'plugins': [
    'stylelint-no-unsupported-browser-features',
  ],

  'rules': {
    // camelCase works better for css-module names:
    'selector-class-pattern': '^[a-z][a-zA-Z]+$',
    'selector-id-pattern': '^[a-z][a-zA-Z]+$',

    // fixes for Vue single file components:
    'no-empty-source': null,
    'at-rule-no-unknown': null,

    // custom plugins to work with
    'plugin/no-unsupported-browser-features': [
      true, { 'severity': 'warning' },
    ],
  },
}

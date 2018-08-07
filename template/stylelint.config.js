// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

module.exports = {
  'extends': [
    'stylelint-config-strict-scss',
    'stylelint-config-css-modules',
  ],
  'plugins': [
    'stylelint-csstree-validator',
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
    'csstree/validator': true,
    'plugin/no-unsupported-browser-features': [
      true, { 'severity': 'warning' },
    ],
  },
}

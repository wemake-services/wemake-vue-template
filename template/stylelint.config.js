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
    // we use kebab-case for classes and ids:
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'selector-id-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',

    // ignore special `var-` css variables for `:export`
    'property-no-unknown': [
      true, {
        'ignoreProperties': ['/^var-/'],
      },
    ],

    // fixes for Vue single file components:
    'no-empty-source': null,
    'at-rule-no-unknown': null,

    // custom plugins to work with
    'plugin/no-unsupported-browser-features': [
      true, { 'severity': 'warning' },
    ],
  },
}

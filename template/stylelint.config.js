// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

/* eslint-disable unicorn/no-null */

module.exports = {
  'extends': [
    '@wemake-services/stylelint-config-scss',
    'stylelint-config-css-modules',
    'stylelint-a11y/recommended',
  ],
  'plugins': [
    'stylelint-no-unsupported-browser-features',
    'stylelint-a11y',
  ],

  'rules': {
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
      true, {
        'severity': 'warning',
        'ignore': ['flexbox'],
      },
    ],

    // a11y
    'a11y/content-property-no-static-value': true,
  },
}

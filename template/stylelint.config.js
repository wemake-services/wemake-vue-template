// Read more about configuring stylelint here:
// https://stylelint.io/user-guide/configuration/

module.exports = {
  extends: 'stylelint-config-strict-scss',
  processors: [
    // Works with `.vue` files:
    '@mapbox/stylelint-processor-arbitrary-tags'
  ],
  rules: {
    // This option is required due to arbitrary-tags processor:
    'no-empty-source': null
  }
}

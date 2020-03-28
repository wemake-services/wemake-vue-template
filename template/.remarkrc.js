// Configuring remark
// See: https://github.com/remarkjs/remark/tree/master/packages/remark-cli

module.exports = {
  'plugins': [
    'remark-preset-lint-markdown-style-guide',
    ['remark-lint-ordered-list-marker-value', 'ordered'],
    ['remark-lint-list-item-indent', 'space'],
  ],
}

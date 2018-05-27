module.exports = {
  extends: 'plugin:testcafe/recommended',
  plugins: [
    'testcafe'
  ],

  rules: {
    // Disable some rules that are not working well with `testcafe`:
    'no-return-await': 0
  }
}

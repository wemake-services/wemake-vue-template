module.exports = {
  'extends': 'plugin:testcafe/recommended',
  'plugins': [
    'testcafe',
  ],

  'rules': {
    // disable some rules that are not working well with `testcafe`:
    'no-return-await': 'off',

    // allows to use long functions inside tests:
    'max-lines-per-function': 'off',

    // we import some stuff that is not installed in a general project:
    'import/no-unresolved': 'off',
  },
}

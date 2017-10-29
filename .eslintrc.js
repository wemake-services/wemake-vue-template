module.exports = {
  "extends": [
    "standard"
  ],
  "plugins": [
    "html"
  ],
  "rules": {
    "import/no-unresolved": 0,
    "no-unused-vars": 0,
    "import/no-unassigned-import": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": "off",
    "object-curly-spacing": [2, "always"],
    "prefer-promise-reject-errors": 2,

    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  }
}

const path = require('path')

// Used to create a path to the template's file.
// @param { String } subPath - relative path to the template's folder.
// @returns absolute path.
function templatePath (subPath) {
  return path.resolve(__dirname, '..', 'template', subPath)
}

module.exports = {
  templatePath,
}

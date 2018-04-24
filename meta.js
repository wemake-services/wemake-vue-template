module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      required: true,
      message: 'Organization',
      default: 'wemake.services'
    }
  },
  skipInterpolation: 'client/**/*.vue',
  completeMessage: 'To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}yarn install\n  yarn dev\n\nDocumentation can be found at https://github.com/wemake-services/wemake-vue-template'
}

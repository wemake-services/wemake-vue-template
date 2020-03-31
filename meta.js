const fs = require('fs')
const path = require('path')

module.exports = {
  'metalsmith': (metalsmith) => {
    // eslint-disable-next-line security/detect-child-process
    const hash = require('child_process')
      // eslint-disable-next-line no-underscore-dangle
      .execSync(`git -C ${metalsmith._directory} rev-parse HEAD`)
      .toString()
      .trim()

    // eslint-disable-next-line no-underscore-dangle
    metalsmith._metadata.gitcommit = hash
  },
  'prompts': {
    'name': {
      'type': 'string',
      'required': true,
      'message': 'Project name',
      'validate': (name) => {
        if (!/^[a-z][a-z0-9_]+[a-z0-9]$/u.test(name)) {
          return `Use lowercase letters, underscores, and numbers only. ` +
          `Note that underscore can not be the last char.`
        }

        return true
      },
    },
    'description': {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'A Vue.js project',
    },
    'author': {
      'type': 'string',
      'required': true,
      'message': 'Author',
      'default': 'Awesome Person',
    },
    'organization': {
      'type': 'string',
      'required': true,
      'message': 'Organization',
      'default': 'wemake.services',
    },
  },
  'skipInterpolation': 'client/**/*.vue',
  'complete': (projectData, { logger, chalk }) => {
    const dest = projectData.inPlace ? '.' : projectData.destDirName
    const dotenv = path.join(dest, 'config', '.env')
    const dotenvTemplate = path.join(dest, 'config', '.env.template')

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (!fs.existsSync(dotenv)) {
      fs.copyFileSync(dotenvTemplate, dotenv)
      logger.log(chalk.green(`Created new configuration ${dotenv}`))
    }

    logger.log(`To get started:

      cd ${dest}
      npm install
      npm run dev
    `)

    const url = 'https://github.com/wemake-services/wemake-vue-template'
    logger.log(`Documentation can be found at ${url}`)
    logger.log('Enjoy!')
  },
}

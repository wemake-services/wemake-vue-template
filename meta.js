const fs = require('fs')
const path = require('path')

module.exports = {
  metalsmith: (metalsmith) => {
    const hash = require('child_process')
      .execSync(`git -C ${metalsmith._directory} rev-parse HEAD`)
      .toString()
      .trim()

    metalsmith._metadata.gitcommit = hash
  },
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
      message: 'Author',
      default: 'Awesome Person'
    },
    organization: {
      type: 'string',
      required: true,
      message: 'Organization',
      default: 'wemake.services'
    }
  },
  skipInterpolation: 'client/**/*.vue',
  complete: (data, { logger, chalk }) => {
    const dest = data.inPlace ? '.' : data.destDirName
    const dotenv = path.join(dest, 'config', '.env')
    const dotenvTemplate = path.join(dest, 'config', '.env.template')

    if (!fs.existsSync(dotenv)) {
      fs.copyFileSync(dotenvTemplate, dotenv)
      logger.log(chalk.green(`Created new configuration ${dotenv}`))
    }

    logger.log(`To get started:

      cd ${dest}
      yarn install
      yarn dev
    `)

    logger.log(`Documentation can be found at https://github.com/wemake-services/wemake-vue-template`)
  }
}

'use strict'

require('babel-register')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['tests/e2e/specs'],
  output_folder: 'tests/e2e/reports',
  // custom_assertions_path: ['test/e2e/custom-assertions'],

  globals_path: 'tests/e2e/globals.js',

  selenium: {
    // https://github.com/zeljkofilipin/mediawiki-nightwatch
    start_process: false,
    server_path: '',
    log_path: '',
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://127.0.0.1:3000',
      selenium_port: 9515,
      selenium_host: 'localhost',
      default_path_prefix: ''
    },
    desiredCapabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--no-sandbox']
      },
      acceptSslCerts: true
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}

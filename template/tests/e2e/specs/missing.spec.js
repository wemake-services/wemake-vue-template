'use strict'

const http = require('http')

module.exports = {
  'component does not exists': (browser) => {
    http.request(browser.launch_url + '/missing', (response) => {
      browser.assert.equal(
        response.statusCode, 404, 'Check status'
      )
      browser.end()
    }).end()
  }
}

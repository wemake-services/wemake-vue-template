'use strict'

module.exports = {
  'async component': (browser) => {
    browser
      .url(browser.launch_url + '/async')
      .waitForElementVisible('#app', 5000)
      .assert.title('wemake-vue-template')
      .waitForElementVisible('.page', 5000)
      .waitForElementVisible('.item', 5000)
      .assert.containsText('.item-id', 'ID: 4')
      .assert.containsText('.item-name', 'Test item')
      .end()
  }
}

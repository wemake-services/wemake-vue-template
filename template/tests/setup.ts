import vueTestUtilMatchers from 'jest-matcher-vue-test-utils'

// Installing custom assertions, see:
// https://github.com/hmsk/jest-matcher-vue-test-utils
expect.extend({ ...vueTestUtilMatchers })

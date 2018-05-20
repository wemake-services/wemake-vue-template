// This plugin is a special case.
// It allows to use vue-perf-devtool.
// @see https://github.com/vue-perf-devtool/vue-perf-devtool

import Vue from 'vue'

Vue.config.performance = process.env.NODE_ENV === 'development'

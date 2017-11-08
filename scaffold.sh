#!/usr/bin/env expect

set timeout 360

spawn ./node_modules/.bin/vue init . "test-project"

# This happens because of
# https://github.com/vuejs/vue-cli/issues/291
expect "Project name" { send "\n" }
expect "Project description" { send "\n" }
expect "Project URL" { send "\n" }
expect "Organization" { send "\n" }
expect "vue-cli · Generated" { send "\n" }

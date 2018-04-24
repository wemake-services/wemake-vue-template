#!/usr/bin/env sh

set -o errexit
set -o nounset

# Scaffolding a project:
expect 'tests/scaffold.sh'
cd 'test-project'

# Using default configuration:
cp 'config/.env.template' 'config/.env'

# Running integration tests with docker:
docker-compose run vue yarn test

#!/usr/bin/env sh

set -o errexit
set -o nounset

# Scaffolding a project:
expect 'tests/scaffold.sh'
cd 'test-project'

# Running integration tests with docker:
docker-compose run vue yarn test

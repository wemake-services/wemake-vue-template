#!/usr/bin/env sh

set -o errexit
set -o nounset

# Scaffolding a project:
expect 'bin/scaffold.sh'
cd "$PROJECT_NAME"

# Running integration tests with docker:
docker-compose run --rm vue npm run ci

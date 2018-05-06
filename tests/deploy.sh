#!/usr/bin/env sh

set -o errexit
set -o nounset

cd "$PROJECT_NAME"

# Building new instance:
npx now deploy \
  --token "$NOW_TOKEN" \
  --public \
  --dotenv=config/.env \
  --local-config=../now.json

# Setting new instance as a default one:
npx now alias

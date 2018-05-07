#!/usr/bin/env sh

set -o errexit
set -o nounset

cd "$PROJECT_NAME"

# Building new instance:
now deploy --token="$NOW_TOKEN" --public --npm --dotenv=config/.env --local-config=../now.json

# Setting new instance as a default one:
now alias --token="$NOW_TOKEN" --local-config=../now.json

#!/usr/bin/env sh

set -o errexit
set -o nounset

if [ "$TRAVIS_BRANCH" = "master" ]; then
  # For some reason `deploy` key did not work for us:
  # https://travis-ci.org/wemake-services/wemake-vue-template/builds/375684628
  npm install -g now

  cd "$PROJECT_NAME"

  # Building new instance:
  now deploy \
    --token="$NOW_TOKEN" \
    --no-clipboard \
    --public \
    --npm \
    --dotenv=config/.env \
    --local-config=../now.json

  # Setting new instance as a default one:
  now alias --token="$NOW_TOKEN" --local-config=../now.json
else
  echo 'skipping deployment'
fi

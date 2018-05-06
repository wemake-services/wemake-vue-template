#!/usr/bin/env sh

set -o errexit
set -o nounset

cd "wemake-vue-demo"

npx now --token "$NOW_TOKEN" \
  --public \
  --dotenv=config/.env \
  --alias wemake-vue-demo \
  --name wemake-vue-demo

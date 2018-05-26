#!/usr/bin/env sh

# This file is responsible for running QA tests that run on real
# production website. It is required to be sure that everything works.
# These tests may take a while, so be responsible for including only
# tests that really matters.
#
# To run these tests you will need to do something like these:
#
#    BASE_TEST_URL="some-url" BUILD_IMAGE=1 sh docker/testcafe/qa.sh "$TARGETS"
#
# Where:
# - BASE_TEST_URL is an environment variable with your site's URL.
#   This URL should be accesable from inside of the container.
#   You can provide `BASE_TEST_URL=http://192.168.x.x:3000` to test local build.
#   To make this work, make sure that your app is running on `192.168.x.x`,
#   and not on `localhost`` or `127.0.0.1`.
# - BUILD_IMAGE is an environment variable which determins if it is required to
#   build new docker image or not. Is `1` by default.
# - $TARGETS is a string containing browsers and options that you need to run.
#   By default if do not pass `$TARGETS` argument it will be set
#   to 'chromium:headless --no-sandbox'. To run all browsers pass 'all'.
#
# Documentation can be found here:
# http://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/

set -o errexit
set -o nounset

# Default value for '$TARGETS' argument:
TARGETS=${1:-'chromium:headless --no-sandbox'}

# Resulting tag name:
TAG='testcafe-nuxt:latest'
SHOULD_BUILD_IMAGE=${BUILD_IMAGE:-1}

# Building the latest version of TestCafe image:
if [ "$SHOULD_BUILD_IMAGE" -eq 1 ]; then
  docker build -t "$TAG" -f 'docker/testcafe/Dockerfile' .
fi

# Running
docker run \
  --network host \
  --rm \
  -v "$PWD/docker/testcafe/fixtures":/tests \
  --env BASE_TEST_URL="$BASE_TEST_URL" \
  -it "$TAG" \
  "$TARGETS" \
  'tests/**/*.spec.js'

#!/usr/bin/env sh

# This file is responsible for running QA tests that run on real
# production website. It is required to be sure that everything works.
# These tests may take a while, so be responsible for including only
# tests that really matters.
#
# To run these tests you will need to do something like these:
#
#    BASE_TEST_URL="some-url" BUILD_IMAGE=1 TIMEOUT=10 \
#      sh docker/testcafe/qa.sh "$TARGETS"
#
# Where:
# - BASE_TEST_URL is an environment variable with your site's URL.
#   This URL should be accesable from inside of the container.
#   You can provide `BASE_TEST_URL=http://192.168.x.x:3000` to test local build.
#   To make this work, make sure that your app is running on `192.168.x.x`,
#   and not on `localhost`` or `127.0.0.1`.
# - BUILD_IMAGE is an environment variable which determins if it is required to
#   build new docker image or not. Is `1` by default.
# - MAX_WAIT_TRIES is an environment variable which
#   specifies max waiting timeout. It equals to `6` attempts by default.
#   Duration between attempts is 10 sec.
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

# Should we build image or not?
BUILD_IMAGE=${BUILD_IMAGE:-1}

# Timeout to wait for the resource:
MAX_WAIT_TRIES=${MAX_WAIT_TRIES:-6}

# Building the latest version of TestCafe image if required:
if [ "$BUILD_IMAGE" -eq 1 ]; then
  docker build -t "$TAG" -f 'docker/testcafe/Dockerfile' .
fi

test_url_ready () {
  # A simple way to find that resource is ready: we fetch headers via `curl`.
  sh './docker/testcafe/wait-for-command.sh' \
    -t 10 \
    -s 0 \
    -c "curl -I $BASE_TEST_URL"
}

# Waiting for URL to become reachable, docker containers generally take some
# time to start:
TRIES=1
until test_url_ready; do
  >&2 echo "$BASE_TEST_URL is unavailable - sleeping"

  if [ "$MAX_WAIT_TRIES" -eq "$TRIES" ]; then
    >&2 echo "$BASE_TEST_URL is unavailable - timeout after $TRIES tries"
    exit 1
  fi

  : $(( TRIES=TRIES+1 ))
done

>&2 echo "$BASE_TEST_URL is up - continuing..."

# Running TestCafe fixtures:
docker run \
  --network host \
  --rm \
  --add-host='docker:127.0.0.1' \
  -v "$PWD/docker/testcafe/fixtures":/tests \
  --env BASE_TEST_URL="$BASE_TEST_URL" \
  "$TAG" "$TARGETS" \
  'tests/**/*.spec.js'

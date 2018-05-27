FROM testcafe/testcafe
# See https://github.com/DevExpress/testcafe/tree/master/docker

# We need root privileages to install new deps:
USER root

# Without this line `testcafe` and `testcafe-*-selectors` are not found:
ENV NODE_PATH=/opt:/opt/testcafe/node_modules

# Installing custom dependencies:
RUN cd /opt/testcafe && npm install \
  testcafe-nuxt-selectors testcafe-vue-selectors

# Falling back to the runtime privileages:
USER user

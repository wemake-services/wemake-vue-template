FROM node:10.8-alpine

LABEL maintainer="sobolevn@wemake.services"
LABEL vendor="wemake.services"

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ENV YARN_VERSION 1.9.4


# System deps:

RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    ca-certificates \
    curl \
    g++ \
    gcc \
    git \
    lcms2-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    wget \
  && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
  && wget -q https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.28-r0/glibc-2.28-r0.apk \
  && apk add glibc-2.28-r0.apk \
  && rm -rf glibc-2.28-r0.apk \
  && curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
  && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
  && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
  && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
  && rm yarn-v$YARN_VERSION.tar.gz


# Creating folders, and files for a project:

COPY . /code
WORKDIR /code


# Project initialization:

RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
    yarn install --no-cache --frozen-lockfile --production; \
    yarn build; \
  elif [ "$NODE_ENV" = "development" ]; then \
    yarn install --no-cache --frozen-lockfile; \
  fi;

EXPOSE 4000

FROM node:9.10-alpine

LABEL maintainer="sobolevn@wemake.services"
LABEL vendor="wemake.services"

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ENV YARN_VERSION 1.6.0


# System deps:

RUN apk update && apk add --no-cache \
    bash \
    ca-certificates \
    curl \
    git \
    lcms2-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
    wget \
  && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub \
  && wget -q https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.27-r0/glibc-2.27-r0.apk \
  && apk add glibc-2.27-r0.apk \
  && rm -rf glibc-2.27-r0.apk \
  && curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
  && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
  && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
  && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
  && rm yarn-v$YARN_VERSION.tar.gz


# Creating folders, and files for a project:

COPY . /code
WORKDIR /code


# Project initialization:

EXPOSE 4000
RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
    yarn install --no-cache --frozen-lockfile --production; \
  elif [ "$NODE_ENV" = "development" ]; then \
    yarn install --no-cache --frozen-lockfile; \
  fi;

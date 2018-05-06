FROM node:9.10-alpine

LABEL maintainer="sobolevn@wemake.services"
LABEL vendor="wemake.services"

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV


# System deps:

RUN apk update && apk add --no-cache \
    bash \
    ca-certificates \
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
  && rm -rf glibc-2.27-r0.apk


# Creating folders, and files for a project:

RUN mkdir /code
WORKDIR /code
ADD . /code


# Project initialization:

EXPOSE 4000
RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
    yarn install --no-cache --frozen-lockfile --production; \
  elif [ "$NODE_ENV" = "development" ]; then \
    yarn install --no-cache --frozen-lockfile; \
  fi;

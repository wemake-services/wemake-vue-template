FROM node:8.8-alpine

LABEL maintainer="sobolevn@wemake.services"
ARG APP_ENV=production

# System deps:

RUN apk update && apk add --no-cache ca-certificates wget git \
  && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub \
  && wget -q https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-2.25-r0.apk \
  && apk add glibc-2.25-r0.apk \
  && rm -rf glibc-2.25-r0.apk


# Creating folders, and files for a project:

RUN mkdir /code
WORKDIR /code
ADD . /code


# Project initialization:

EXPOSE 4000
RUN npm install -g yarn pm2 && test "$APP_ENV" == production && yarn install --production --frozen-lockfile || yarn install --frozen-lockfile; yarn cache clean; npm cache clean --force

FROM node:15.0.1-alpine

LABEL maintainer="sobolevn@wemake.services"
LABEL vendor="wemake.services"

ARG NODE_ENV
ENV NODE_ENV "$NODE_ENV"

# System deps:
RUN npm --version && apk add --no-cache \
    autoconf \
    automake \
    bash \
    build-base \
    ca-certificates \
    curl \
    file \
    g++ \
    gcc \
    git \
    lcms2-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm \
    wget \
    zlib-dev

# Installing dependencies:
WORKDIR /code
COPY package.json package-lock.json /code/

# We do not need to tweak this command, `$NODE_ENV` does it for us.
RUN npm install

# Creating folders, and files for a project:
COPY . /code

# Project initialization:
EXPOSE 4000

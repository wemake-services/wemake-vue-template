FROM node:8.8-alpine

LABEL maintainer="sobolevn@wemake.services"

RUN mkdir /code
WORKDIR /code
ADD . /code

EXPOSE 3000

RUN npm install -g yarn pm2 && yarn install
CMD ["pm2-docker", "./docker/vue/process.yml"]

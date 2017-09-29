FROM node:8.1.0-alpine
MAINTAINER Doug March dougmarch@gmail.com
EXPOSE 3000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN apk update \
  && apk add curl tar git gzip ruby ruby-dev ruby-bundler gcc build-base libffi-dev ruby-rdoc ruby-irb gcc g++ make python musl-dev \
  && rm -rf /var/cache/apk/*
RUN npm install
RUN yarn add gulp-sass
CMD ["npm", "start"]

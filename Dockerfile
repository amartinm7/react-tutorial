FROM node:18-alpine

MAINTAINER amartinm7@gmail.com

WORKDIR /react-tutorial/

COPY public/ /react-tutorial/public
COPY src/ /react-tutorial/src
COPY package.json /react-tutorial

RUN npm install

ENTRYPOINT ["npm","start"]



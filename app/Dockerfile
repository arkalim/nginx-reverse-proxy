FROM alpine:latest

RUN apk add npm

COPY . /code

WORKDIR /code

ENTRYPOINT [ "npm", "start" ]
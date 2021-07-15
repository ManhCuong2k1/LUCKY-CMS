FROM node:12-alpine AS build
WORKDIR /app
RUN apk add git
COPY . /app
RUN yarn install
RUN yarn cache clean
RUN chmod +x /app/start.sh
CMD ./start.sh

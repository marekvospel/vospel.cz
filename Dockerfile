FROM node:16-alpine AS build

WORKDIR /build
ADD . /build

# Install dependencies
ENV NODE_ENV=dev
RUN yarn install
RUN yarn run build

FROM node:16-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

ENV NODE_ENV=production
RUN yarn install

COPY --from=build /build/build /app/build

RUN chown 1000:1000 /app -R
USER 1000:1000

EXPOSE 3000
ENTRYPOINT ["node", "build/index.js"]

FROM node:16-alpine AS build

WORKDIR /build
ADD . /build

# Install dependencies
RUN npm i -g pnpm
ENV NODE_ENV=dev
RUN pnpm install
RUN pnpm run build

RUN rm -rf node_modules

WORKDIR /build/languages
ENV NODE_ENV=dev
RUN pnpm install
RUN pnpm run build

RUN rm -rf node_modules

FROM node:16-alpine

RUN echo -e 'http://dl-cdn.alpinelinux.org/alpine/edge/main\nhttp://dl-cdn.alpinelinux.org/alpine/edge/community\nhttp://dl-cdn.alpinelinux.org/alpine/edge/testing' >> /etc/apk/repositories && \
    apk --no-cache --update add yarn supervisor openssh git && \
    rm -rf /var/cache/apk/*

COPY supervisord.conf /etc/supervisord.conf

WORKDIR /app

COPY package.json /app

ENV NODE_ENV=production
RUN npm install

COPY --from=build /build/build /app/build

WORKDIR /app/languages
COPY languages/package.json package.json
RUN npm install

COPY --from=build /build/languages/build /app/languages/build

RUN chown 1000:1000 /app -R
USER 1000:1000

EXPOSE 3000
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]

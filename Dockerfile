FROM node:20 as build

WORKDIR /build
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm i -g pnpm
RUN pnpm i
ADD . .
RUN pnpm build

FROM nginx:alpine

COPY --from=build /build/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
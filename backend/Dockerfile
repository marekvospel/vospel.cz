FROM ekidd/rust-musl-builder:latest as build

WORKDIR /build
ADD . /build

RUN cargo build --release

FROM alpine:latest

RUN apk update && apk add openssl ca-certificates && rm -rf /var/cache/apk/*

LABEL org.opencontainers.image.authors="marek@vospel.cz"

WORKDIR /app
COPY --from=build /build/target/x86_64-unknown-linux-musl/release/rocket /app/rocket
RUN chmod +x /app/rocket

ENV ROCKET_ADDRESS=0.0.0.0
EXPOSE 8000

ENTRYPOINT [ "/app/rocket" ]

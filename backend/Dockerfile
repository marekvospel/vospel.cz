FROM rust:latest as build

WORKDIR /build
ADD . /build

RUN rustup target add x86_64-unknown-linux-musl
RUN cargo build --release --target x86_64-unknown-linux-musl

FROM alpine:latest

LABEL org.opencontainers.image.authors="marek@vospel.cz"

WORKDIR /app
COPY --from=build /build/target/x86_64-unknown-linux-musl/release/rocket /app/rocket
RUN chmod +x /app/rocket
RUN chown 1000:1000 /app/rocket

USER 1000:1000

EXPOSE 8000

ENTRYPOINT [ "/app/rocket" ]

FROM nginx:stable-alpine
LABEL Maintainer="LongHM <haminhlong3@gmail.com>"

RUN mkdir -p /var/www

WORKDIR /var/www

COPY ./build /var/www
COPY ./compose/docker/nginx/conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

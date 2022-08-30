FROM openeuler/openeuler:22.03-lts
# Set env
USER root
ENV USER root

ADD ./etc/nginx-reproducible.conf /etc/nginx/conf.d/nginx-reproducible.conf
COPY dist /var/www/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
FROM openeuler/openeuler:22.03-lts
# Set env
USER root
ENV USER root

ADD ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /var/www/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
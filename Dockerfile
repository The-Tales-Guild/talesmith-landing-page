FROM httpd:alpine3.18

RUN mkdir -p /usr/local/apache2/conf/sites/

WORKDIR /usr/local/apache2/htdocs/
COPY . .

RUN mv health-check.conf /usr/local/apache2/conf/sites/health-check.conf && \
    mv httpd.conf /usr/local/apache2/conf/httpd.conf

RUN chown -R www-data:www-data /usr/local/apache2/logs 

EXPOSE 8080

USER www-data:www-data

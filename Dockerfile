# Dockerfile
# use image
FROM node:14.16.0 As builder
LABEL maintainer="luffyZh"
COPY . .
# command
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run gen-drawio
RUN rm -rf drawio-project
RUN npm run build
CMD npm run prod

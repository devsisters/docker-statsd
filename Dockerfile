FROM ubuntu

ENV NODE_URL http://nodejs.org/dist/v0.10.30/node-v0.10.30-linux-x64.tar.gz
ENV HASHRING_URL https://github.com/3rd-Eden/node-hashring/archive/v0.0.6.tar.gz
ENV STATSD_URL https://github.com/etsy/statsd/archive/v0.7.1.tar.gz

RUN apt-get update
RUN apt-get install -y wget python make g++

# Download and extract node:
RUN wget $NODE_URL --quiet -O - | tar -xz
RUN mv node-v0.10.30-linux-x64 node

# Download and extract Statsd:
RUN wget $STATSD_URL --no-check-certificate --quiet -O - | tar -xz
RUN mv statsd-0.7.1 statsd

# Npm install hashring
RUN cd /statsd && /node/bin/npm install && cd /

ADD config.js /config.js

#!/bin/bash

# remove containers
docker rm -f $(docker ps -a -q)

# create docker image
docker build -t ms-reacttutor:latest --no-cache .

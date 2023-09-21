#!/bin/bash

# docker network create meplatform-network
# docker network ls

# run with network, the profile is used to connect with the database when is running as a service into a docker
# docker run --network=reacttutor-network -p 8000:8000 -it ms-reacttutor

# run without network
docker run -p 3000:3000 -it ms-reacttutor

# to inspect
# docker run -ti --entrypoint /bin/sh ms-meplatform

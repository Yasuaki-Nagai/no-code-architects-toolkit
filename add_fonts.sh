#!/bin/bash

docker cp fonts/GenEiMGothic2-Black.ttf no-code-architects-toolkit-ncat-1:/usr/share/fonts/custom/GenEiMGothic2-Black.ttf 
docker exec no-code-architects-toolkit-ncat-1 fc-cache -f -v
docker exec no-code-architects-toolkit-ncat-1 fc-list | grep Gen

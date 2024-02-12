#!/usr/bin/env bash

act \
  --container-architecture='linux/amd64' \
  --artifact-server-path .tmp \
  -j job4

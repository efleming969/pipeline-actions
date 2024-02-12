#!/usr/bin/env bash

new_version=$1
wait_interval=$2
iterations=3
health_endpoint="https://81445a13a4f840ffabc16875eca58ab7.api.mockbin.io/"

for i in $(seq 1 $iterations); do
  current_version=$(curl -s "$health_endpoint" | jq -r '.version')

  echo "checking new: ${new_version} against current: ${current_version} ($i of $iterations)"

  if [ "$current_version" = "$new_version" ]; then
    echo "successfully matched version"
    exit 0
  else
    sleep ${wait_interval}
  fi
done

echo "failed to verify the deployed version of server"
exit 1

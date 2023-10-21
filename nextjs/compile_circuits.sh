#!/bin/bash

# Get the absolute path of the current script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "compiling circuits..."
for d in "$SCRIPT_DIR"/circuits/*/ ; do
  cd "$d"
  pwd
  nargo compile
  cd "$SCRIPT_DIR"
done

#!/usr/bin/env bash
# Usage: ./move_haircut.sh /path/to/source-image.jpg
# Copies the provided image into the project assets as assets/haircut.jpg
set -e
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 /full/path/to/image.jpg"
  exit 1
fi
SRC="$1"
DST="$(dirname "$0")/../assets/haircut.jpg"
mkdir -p "$(dirname "$DST")"
cp "$SRC" "$DST"
echo "Copied $SRC -> $DST"
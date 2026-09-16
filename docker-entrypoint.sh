#!/bin/sh
set -e

if [ ! -f /app/src/content/docs/index.md ]; then
  echo "[Study-Vault] Initializing docs directory from container image..."
  mkdir -p /app/src/content/docs
  cp -r /app/initial_docs/* /app/src/content/docs/ 2>/dev/null || true
fi

if [ ! -f /app/public/op1.jpg ]; then
  echo "[Study-Vault] Initializing public assets from container image..."
  mkdir -p /app/public
  cp -r /app/initial_public/* /app/public/ 2>/dev/null || true
fi

exec "$@"

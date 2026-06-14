#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This script must run inside the Bragg Creek Rum git repository." >&2
  exit 1
fi

remote_url="$(git remote get-url origin)"
source_branch="$(git branch --show-current)"
source_sha="$(git rev-parse HEAD)"
source_short_sha="$(git rev-parse --short HEAD)"
tmp_dir="$(mktemp -d)"

cleanup() {
  rm -rf "$tmp_dir"
}
trap cleanup EXIT

npm run build
cp -a dist/. "$tmp_dir"/

cd "$tmp_dir"
git init -b hostinger-build
git config user.name "Bragg Creek Rum deploy"
git config user.email "deploy@darkrum.ca"
git add -A
git commit -m "Hostinger build from ${source_short_sha}"
git remote add origin "$remote_url"
git push --force origin hostinger-build

echo "Published ${source_branch}@${source_sha} to origin/hostinger-build."

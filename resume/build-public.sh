#!/usr/bin/env bash
# Rebuild the public PDF from the corrected master CV; no network or publication.
set -euo pipefail
resume_dir="$(cd -- "$(dirname -- "$0")" && pwd)"
pandoc "$resume_dir/resume_daniel_cardenas.md" \
  --metadata-file="$resume_dir/style_public.yaml" \
  --pdf-engine=xelatex -o "$resume_dir/../public/resume.pdf"

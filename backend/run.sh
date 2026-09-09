#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

PYTHON="${PYTHON:-../venv/bin/python}"
if [ ! -x "$PYTHON" ]; then
  echo "venv не найден: $PYTHON (укажите PYTHON=/путь/к/python)" >&2
  exit 1
fi

exec "$PYTHON" -m uvicorn app.main:app --reload "$@"

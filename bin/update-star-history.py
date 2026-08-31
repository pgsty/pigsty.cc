#!/usr/bin/env python3
"""Append current GitHub Star totals to the comparison history dataset."""

from __future__ import annotations

import argparse
import concurrent.futures
import json
import os
import re
import tempfile
import urllib.request
from datetime import date, datetime
from pathlib import Path
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "data" / "star_history.json"
GITHUB_API_VERSION = "2022-11-28"
BEIJING_TIME = ZoneInfo("Asia/Shanghai")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--date",
        default=datetime.now(BEIJING_TIME).date().isoformat(),
        help="snapshot date in YYYY-MM-DD format (default: today)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="print refreshed totals without changing the data file",
    )
    return parser.parse_args()


def fetch_star_count(repo: str) -> int:
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "pigsty-star-history-refresh",
        "X-GitHub-Api-Version": GITHUB_API_VERSION,
    }
    token = os.getenv("GH_TOKEN") or os.getenv("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    request = urllib.request.Request(
        f"https://api.github.com/repos/{repo}", headers=headers
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.load(response)
    return int(payload["stargazers_count"])


def replace_snapshot(history: list[list[object]], day: str, count: int) -> None:
    points = {str(point[0]): int(point[1]) for point in history}
    points[day] = count
    history[:] = [[point_day, points[point_day]] for point_day in sorted(points)]


def render_data(data: dict[str, object]) -> str:
    rendered = json.dumps(data, ensure_ascii=False, indent=2) + "\n"
    return re.sub(
        r'\[\n\s+"(\d{4}-\d{2}-\d{2})",\n\s+(\d+)\n\s+\]',
        r'["\1", \2]',
        rendered,
    )


def main() -> int:
    args = parse_args()
    snapshot_day = date.fromisoformat(args.date).isoformat()
    data = json.loads(DATA_FILE.read_text())

    repos = [project["repo"] for project in data["repositories"]]
    with concurrent.futures.ThreadPoolExecutor(max_workers=len(repos)) as executor:
        counts = dict(zip(repos, executor.map(fetch_star_count, repos)))

    for project in data["repositories"]:
        current = counts[project["repo"]]
        replace_snapshot(project["history"], snapshot_day, current)
        project["current"] = current
        project["growth"] = current - int(project["baseline"])
        project["growth_pct"] = round(
            project["growth"] * 100 / int(project["baseline"]), 2
        )
        print(f"{project['repo']:<42} {current:>6}")

    data["updated_at"] = snapshot_day
    data["repositories"].sort(key=lambda project: project["current"], reverse=True)

    if args.dry_run:
        return 0

    rendered = render_data(data)
    with tempfile.NamedTemporaryFile(
        "w", encoding="utf-8", dir=DATA_FILE.parent, delete=False
    ) as output:
        output.write(rendered)
        temporary_path = Path(output.name)
    temporary_path.replace(DATA_FILE)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

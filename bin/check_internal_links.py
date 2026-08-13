#!/usr/bin/env python3
"""Validate rendered Pigsty Chinese-site routes, assets, fragments, and canonical targets.

Run this after Hugo has built the site. External hosts are deliberately not
requested: this gate proves the site's own link contract without making a local
build depend on third-party availability.
"""

from __future__ import annotations

import argparse
import collections
import html.parser
import pathlib
import re
import sys
import urllib.parse


SITE_HOSTS = {"pigsty.cc", "www.pigsty.cc"}
LINK_ATTRIBUTES = {"href", "src"}
SKIP_SCHEMES = {"data", "javascript", "mailto", "tel", "blob"}


class DocumentParser(html.parser.HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: set[str] = set()
        self.links: list[str] = []
        self.redirect_target: str | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = {key.lower(): value for key, value in attrs if value is not None}
        if tag == "meta" and attributes.get("http-equiv", "").lower() == "refresh":
            match = re.search(r"(?:^|;)\s*url\s*=\s*(.+)\s*$", attributes.get("content", ""), re.I)
            if match:
                self.redirect_target = match.group(1).strip(" \"'")
        for key, value in attrs:
            if value is None:
                continue
            if key == "id" or (tag == "a" and key == "name"):
                self.ids.add(value)
            if key in LINK_ATTRIBUTES:
                self.links.append(value.strip())


def parse_document(path: pathlib.Path) -> DocumentParser:
    parser = DocumentParser()
    parser.feed(path.read_text(encoding="utf-8", errors="replace"))
    parser.close()
    return parser


def file_key(path: pathlib.Path) -> tuple[str, int, int]:
    stat = path.stat()
    return str(path.resolve()), stat.st_mtime_ns, stat.st_size


def route_for_file(public: pathlib.Path, path: pathlib.Path) -> str:
    relative = path.relative_to(public).as_posix()
    if relative == "index.html":
        return "/"
    if relative.endswith("/index.html"):
        return "/" + relative[: -len("index.html")]
    return "/" + relative


def target_candidates(public: pathlib.Path, route: str) -> list[pathlib.Path]:
    route = urllib.parse.unquote(route)
    relative = route.lstrip("/")
    direct = public / relative
    candidates = [direct]
    if route.endswith("/") or direct.suffix == "":
        candidates.append(direct / "index.html")
    if direct.suffix == "":
        candidates.append(public / f"{relative}.html")
    return candidates


def resolve_internal_url(source_route: str, raw_url: str) -> tuple[str, str] | None:
    if not raw_url or raw_url == "#":
        return None
    parsed = urllib.parse.urlsplit(raw_url)
    if parsed.scheme.lower() in SKIP_SCHEMES:
        return None
    if parsed.netloc and parsed.hostname not in SITE_HOSTS:
        return None
    if parsed.scheme and parsed.scheme not in {"http", "https"}:
        return None

    base = f"https://pigsty.cc{source_route}"
    absolute = urllib.parse.urlsplit(urllib.parse.urljoin(base, raw_url))
    if absolute.hostname and absolute.hostname not in SITE_HOSTS:
        return None
    return absolute.path or "/", urllib.parse.unquote(absolute.fragment)


def main() -> int:
    argument_parser = argparse.ArgumentParser()
    argument_parser.add_argument("public", nargs="?", default="public", type=pathlib.Path)
    args = argument_parser.parse_args()
    public = args.public.resolve()
    if not public.is_dir():
        argument_parser.error(f"rendered site directory does not exist: {public}")

    html_files = sorted(public.rglob("*.html"))
    # Printed aggregate pages repeat the same documents and make eager parsing
    # unnecessarily expensive. Parse source pages on demand and cache them by
    # path, modification time, and size.
    documents: dict[tuple[str, int, int], DocumentParser] = {}

    def document_for(path: pathlib.Path) -> DocumentParser:
        key = file_key(path)
        document = documents.get(key)
        if document is None:
            document = parse_document(path)
            documents[key] = document
        return document

    failures: dict[str, list[str]] = collections.defaultdict(list)
    checked = 0
    for source_path in html_files:
        source_path = source_path.resolve()
        document = document_for(source_path)
        source_route = route_for_file(public, source_path)
        if source_route.startswith("/_print/"):
            continue
        for raw_url in document.links:
            target = resolve_internal_url(source_route, raw_url)
            if target is None:
                continue
            checked += 1
            route, fragment = target
            candidates = target_candidates(public, route)
            existing = next((candidate.resolve() for candidate in candidates if candidate.exists()), None)
            if existing is None:
                failures[f"missing target {route}"].append(source_route)
                continue
            if existing.suffix.lower() == ".html":
                target_document = document_for(existing)
                if target_document.redirect_target:
                    failures[
                        f"non-canonical redirect target {route} -> {target_document.redirect_target}"
                    ].append(source_route)
                    continue
            if fragment and existing.suffix.lower() == ".html":
                if fragment not in target_document.ids:
                    failures[f"missing fragment {route}#{fragment}"].append(source_route)

    if failures:
        print(f"internal link check failed: {len(failures)} distinct target errors", file=sys.stderr)
        for problem, sources in sorted(failures.items()):
            unique_sources = sorted(set(sources))
            sample = ", ".join(unique_sources[:5])
            remainder = len(unique_sources) - 5
            if remainder > 0:
                sample += f", and {remainder} more"
            print(f"- {problem} <- {sample}", file=sys.stderr)
        return 1

    print(f"internal link check passed: {checked} rendered internal references across {len(html_files)} HTML files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

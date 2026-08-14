#!/usr/bin/env python3
"""Check and safely normalize Markdown syntax used by the Chinese site.

The repository contains Hugo shortcodes, raw HTML, generated tables, and long
technical reference pages, so a generic Markdown linter produces too many
false positives.  This checker focuses on source patterns that are known to
render inconsistently or violate the site's Chinese typography conventions:

* spaces between prose and emphasis, inline code, or Markdown links;
* whitespace inside inline code and link labels;
* adjacent strong spans (``**one****two**``);
* empty image alternative text;
* a language on every fenced code block; and
* balanced front matter/fences plus a single final newline.

After Hugo builds the site, ``--rendered PUBLIC_DIR`` also checks page content
for strong emphasis, links, and shortcodes that leaked into the final HTML.

Use ``--fix`` for the mechanical subset.  Code blocks, front matter, Hugo tab
shortcodes that render code, HTML tags, and comments are left untouched.
"""

from __future__ import annotations

import argparse
import dataclasses
from html.parser import HTMLParser
import pathlib
import re
import sys


FENCE_RE = re.compile(r"^(?P<indent> {0,3})(?P<run>`{3,}|~{3,})(?P<info>.*)$")
EXACT_STRONG_RE = re.compile(r"(?<![\\*])\*\*(?!\*)")
EMPHASIS_RE = re.compile(r"(?<![\*\\])\*(?![\*\s])([^*\n]*?[^\s*])\*(?!\*)")
INLINE_CODE_RE = re.compile(r"(?<!`)(`+)(?!`)([^`\n]*?)\1(?!`)")
MARKDOWN_LINK_RE = re.compile(
    r"(?<!!)\[((?:\\.|[^\]\\])+)\]"
    r"\(([^\s()]*(?:\([^)]*\)[^\s()]*)*)(?:\s+[\"'][^\"']*[\"'])?\)"
)
EMPTY_IMAGE_ALT_RE = re.compile(r"!\[[ \t]*\]\(")
HTML_TAG_RE = re.compile(r"<[^>]+>")
SHORTCODE_RE = re.compile(r"\{\{[<%].*?[>%]\}\}")
CODE_TAB_OPEN_RE = re.compile(r"\{\{[<%]\s*tab\b(?=[^}]*\blang=)[^}]*[>%]\}\}")
CODE_TAB_CLOSE_RE = re.compile(r"\{\{[<%]\s*/tab\s*[>%]\}\}")
HEADING_RE = re.compile(r"^(?P<indent> {0,3})(?P<marks>#{1,6})(?P<gap>[ \t]+)(?P<title>\S.*)$")
BAD_HEADING_RE = re.compile(r"^ {0,3}(#{1,6})(?!#)\S")
RENDERED_PATTERNS = (
    ("MD201", "unparsed strong emphasis", re.compile(r"\*\*")),
    ("MD202", "unparsed Markdown link", re.compile(r"\[[^\]\n]+\]\([^\n)]+\)")),
    ("MD203", "unparsed Hugo shortcode", re.compile(r"\{\{[<%].*?[>%]\}\}")),
)
VOID_HTML_TAGS = {
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
}
IGNORED_HTML_TAGS = {"code", "kbd", "pre", "samp", "script", "style", "textarea"}


@dataclasses.dataclass(frozen=True)
class Issue:
    path: pathlib.Path
    line: int
    code: str
    message: str


@dataclasses.dataclass
class MarkdownState:
    front_matter: str | None = None
    fence_character: str | None = None
    fence_length: int = 0
    code_tab_depth: int = 0
    html_comment: bool = False

    @property
    def in_fence(self) -> bool:
        return self.fence_character is not None


class RenderedMarkdownParser(HTMLParser):
    """Find source Markdown that remains visible in rendered page content."""

    def __init__(self, path: pathlib.Path) -> None:
        super().__init__(convert_charrefs=True)
        self.path = path
        self.content_depth = 0
        self.ignore_depth = 0
        self.stack: list[tuple[str, bool, bool]] = []
        self.issues: list[Issue] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        classes = (dict(attrs).get("class") or "").split()
        enters_content = "td-content" in classes
        enters_ignore = tag in IGNORED_HTML_TAGS
        self.content_depth += int(enters_content)
        self.ignore_depth += int(enters_ignore)
        if tag in VOID_HTML_TAGS:
            self.content_depth -= int(enters_content)
            self.ignore_depth -= int(enters_ignore)
        else:
            self.stack.append((tag, enters_content, enters_ignore))

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        return

    def handle_endtag(self, tag: str) -> None:
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] != tag:
                continue
            for _, entered_content, entered_ignore in self.stack[index:]:
                self.content_depth -= int(entered_content)
                self.ignore_depth -= int(entered_ignore)
            del self.stack[index:]
            return

    def handle_data(self, data: str) -> None:
        if not self.content_depth or self.ignore_depth:
            return
        for code, message, pattern in RENDERED_PATTERNS:
            if pattern.search(data):
                snippet = " ".join(data.split())[:120]
                line, _ = self.getpos()
                self.issues.append(Issue(self.path, line, code, f"{message}: {snippet}"))


def is_cjk_character(character: str) -> bool:
    """Return whether a neighboring character is CJK prose needing spacing."""

    if not character:
        return False
    codepoint = ord(character)
    return (
        0x2E80 <= codepoint <= 0x2FFF
        or 0x3040 <= codepoint <= 0x30FF
        or 0x31F0 <= codepoint <= 0x31FF
        or 0x3400 <= codepoint <= 0x4DBF
        or 0x4E00 <= codepoint <= 0x9FFF
        or 0xAC00 <= codepoint <= 0xD7AF
        or 0xF900 <= codepoint <= 0xFAFF
        or 0x20000 <= codepoint <= 0x323AF
    )


def mark_range(mask: list[bool], start: int, end: int) -> None:
    for index in range(max(0, start), min(len(mask), end)):
        mask[index] = True


def protected_ranges(line: str, state: MarkdownState, include_code: bool = True) -> list[bool]:
    """Mark inline regions whose Markdown-looking characters are literal."""

    mask = [False] * len(line)
    cursor = 0
    while cursor < len(line):
        if state.html_comment:
            end = line.find("-->", cursor)
            if end < 0:
                mark_range(mask, cursor, len(line))
                return mask
            mark_range(mask, cursor, end + 3)
            state.html_comment = False
            cursor = end + 3
            continue

        start = line.find("<!--", cursor)
        if start < 0:
            break
        end = line.find("-->", start + 4)
        if end < 0:
            mark_range(mask, start, len(line))
            state.html_comment = True
            break
        mark_range(mask, start, end + 3)
        cursor = end + 3

    for pattern in (HTML_TAG_RE, SHORTCODE_RE):
        for match in pattern.finditer(line):
            mark_range(mask, match.start(), match.end())
    if include_code:
        for match in INLINE_CODE_RE.finditer(line):
            mark_range(mask, match.start(), match.end())
    return mask


def is_protected(mask: list[bool], start: int, end: int) -> bool:
    return any(mask[start:end])


def is_comment_line(line: str, state: MarkdownState) -> bool:
    """Skip lines containing HTML comments, including multiline comments."""

    if state.html_comment:
        if "-->" in line:
            state.html_comment = False
        return True
    start = line.find("<!--")
    if start < 0:
        return False
    if line.find("-->", start + 4) < 0:
        state.html_comment = True
    return True


def update_block_state(line: str, line_number: int, state: MarkdownState) -> tuple[str, bool]:
    """Update front matter/fence/tab state and return (line, should_skip)."""

    stripped = line.strip()
    if line_number == 1 and stripped in {"---", "+++"}:
        state.front_matter = stripped
        return line, True
    if state.front_matter is not None:
        if stripped == state.front_matter:
            state.front_matter = None
        return line, True

    if is_comment_line(line, state):
        return line, True

    fence = FENCE_RE.match(line)
    if state.in_fence:
        if fence:
            run = fence.group("run")
            if run[0] == state.fence_character and len(run) >= state.fence_length:
                state.fence_character = None
                state.fence_length = 0
        return line, True

    if state.code_tab_depth:
        if CODE_TAB_CLOSE_RE.search(line):
            state.code_tab_depth -= 1
        return line, True
    if CODE_TAB_OPEN_RE.search(line) and not re.search(r"/\s*[>%]\}\}\s*$", line):
        state.code_tab_depth += 1
        return line, True

    if fence:
        run = fence.group("run")
        state.fence_character = run[0]
        state.fence_length = len(run)
        return line, True
    return line, False


def replace_outside_mask(line: str, pattern: re.Pattern[str], replacement: str) -> str:
    """Replace non-overlapping matches that are outside protected inline code."""

    state = MarkdownState()
    mask = protected_ranges(line, state)
    pieces: list[str] = []
    cursor = 0
    changed = False
    for match in pattern.finditer(line):
        if is_protected(mask, match.start(), match.end()):
            continue
        pieces.extend((line[cursor : match.start()], replacement))
        cursor = match.end()
        changed = True
    if not changed:
        return line
    pieces.append(line[cursor:])
    return "".join(pieces)


def trim_inline_whitespace(line: str) -> str:
    """Trim accidental padding inside code spans and Markdown link labels."""

    def trim_code(match: re.Match[str]) -> str:
        marker, content = match.groups()
        return f"{marker}{content.strip()}{marker}"

    line = INLINE_CODE_RE.sub(trim_code, line)

    def trim_link(match: re.Match[str]) -> str:
        full = match.group(0)
        label = match.group(1)
        if label == label.strip():
            return full
        label_start = full.find("[") + 1
        label_end = label_start + len(label)
        return full[:label_start] + label.strip() + full[label_end:]

    return MARKDOWN_LINK_RE.sub(trim_link, line)


def add_boundary_spaces(line: str) -> str:
    """Add spaces between prose and inline Markdown constructs."""

    state = MarkdownState()
    mask_without_code = protected_ranges(line, state, include_code=False)
    insertions: set[int] = set()

    def add_for_span(start: int, end: int) -> None:
        before = line[start - 1] if start else ""
        after = line[end] if end < len(line) else ""
        if is_cjk_character(before):
            insertions.add(start)
        if is_cjk_character(after):
            insertions.add(end)

    for match in INLINE_CODE_RE.finditer(line):
        if not is_protected(mask_without_code, match.start(), match.end()):
            add_for_span(match.start(), match.end())

    mask_with_code = protected_ranges(line, MarkdownState(), include_code=True)
    for match in MARKDOWN_LINK_RE.finditer(line):
        if not is_protected(mask_with_code, match.start(), match.end()):
            add_for_span(match.start(), match.end())

    for match in EMPHASIS_RE.finditer(line):
        if not is_protected(mask_with_code, match.start(), match.end()):
            add_for_span(match.start(), match.end())

    markers = [
        match.start()
        for match in EXACT_STRONG_RE.finditer(line)
        if not is_protected(mask_with_code, match.start(), match.end())
    ]
    for opening, closing in zip(markers[::2], markers[1::2]):
        add_for_span(opening, closing + 2)

    for position in sorted(insertions, reverse=True):
        if position and line[position - 1].isspace():
            continue
        if position < len(line) and line[position].isspace():
            continue
        line = line[:position] + " " + line[position:]
    return line


def normalize_line(line: str) -> str:
    """Apply safe, local source formatting to one prose line."""

    line = replace_outside_mask(line, re.compile(r"(?<!\*)\*{4}(?!\*)"), "** **")
    line = trim_inline_whitespace(line)
    line = add_boundary_spaces(line)

    trailing = re.search(r"[ \t]+$", line)
    if trailing:
        whitespace = trailing.group(0)
        replacement = "  " if whitespace == "  " else ""
        line = line[: trailing.start()] + replacement
    return line


def normalize_heading_lines(lines: list[str]) -> list[str]:
    """Use one marker space and surround prose headings with blank lines."""

    state = MarkdownState()
    headings: list[bool] = []
    normalized: list[str] = []
    for line_number, line in enumerate(lines, 1):
        _, skip = update_block_state(line, line_number, state)
        heading = None if skip else HEADING_RE.match(line)
        if heading:
            line = (
                f"{heading.group('indent')}{heading.group('marks')} "
                f"{heading.group('title')}"
            )
        normalized.append(line)
        headings.append(heading is not None)

    output: list[str] = []
    for index, line in enumerate(normalized):
        if headings[index] and output and output[-1].strip():
            output.append("")
        output.append(line)
        if (
            headings[index]
            and index + 1 < len(normalized)
            and normalized[index + 1].strip()
        ):
            output.append("")
    return output


def fix_file(path: pathlib.Path) -> bool:
    original = path.read_text(encoding="utf-8")
    lines = original.splitlines()
    state = MarkdownState()
    output: list[str] = []

    for line_number, original_line in enumerate(lines, 1):
        line = original_line
        stripped = line.strip()
        if line_number == 1 and stripped in {"---", "+++"}:
            state.front_matter = stripped
            output.append(line)
            continue
        if state.front_matter is not None:
            output.append(line)
            if stripped == state.front_matter:
                state.front_matter = None
            continue

        if is_comment_line(line, state):
            output.append(line)
            continue

        fence = FENCE_RE.match(line)
        if state.in_fence:
            if fence:
                run = fence.group("run")
                if run[0] == state.fence_character and len(run) >= state.fence_length:
                    state.fence_character = None
                    state.fence_length = 0
            output.append(line)
            continue

        if state.code_tab_depth:
            if CODE_TAB_CLOSE_RE.search(line):
                state.code_tab_depth -= 1
            output.append(line)
            continue
        if CODE_TAB_OPEN_RE.search(line) and not re.search(r"/\s*[>%]\}\}\s*$", line):
            state.code_tab_depth += 1
            output.append(line)
            continue

        if fence:
            run = fence.group("run")
            if not fence.group("info").strip():
                line = f"{fence.group('indent')}{run}text"
            state.fence_character = run[0]
            state.fence_length = len(run)
            output.append(line)
            continue

        output.append(normalize_line(line))

    output = normalize_heading_lines(output)
    while output and not output[-1].strip():
        output.pop()
    updated = "\n".join(output) + "\n"
    if updated == original:
        return False
    path.write_text(updated, encoding="utf-8")
    return True


def scan_inline(path: pathlib.Path, line_number: int, line: str, state: MarkdownState) -> list[Issue]:
    issues: list[Issue] = []
    mask_without_code = protected_ranges(line, state, include_code=False)
    mask_with_code = protected_ranges(line, MarkdownState(), include_code=True)

    for match in INLINE_CODE_RE.finditer(line):
        if is_protected(mask_without_code, match.start(), match.end()):
            continue
        content = match.group(2)
        if content != content.strip():
            issues.append(Issue(path, line_number, "MD101", "whitespace inside inline code"))
        before = line[match.start() - 1] if match.start() else ""
        after = line[match.end()] if match.end() < len(line) else ""
        if is_cjk_character(before) or is_cjk_character(after):
            issues.append(Issue(path, line_number, "MD102", "inline code touches surrounding prose"))

    for match in MARKDOWN_LINK_RE.finditer(line):
        if is_protected(mask_with_code, match.start(), match.end()):
            continue
        if match.group(1) != match.group(1).strip():
            issues.append(Issue(path, line_number, "MD103", "whitespace inside link label"))
        before = line[match.start() - 1] if match.start() else ""
        after = line[match.end()] if match.end() < len(line) else ""
        if is_cjk_character(before) or is_cjk_character(after):
            issues.append(Issue(path, line_number, "MD104", "Markdown link touches surrounding prose"))

    for match in EMPHASIS_RE.finditer(line):
        if is_protected(mask_with_code, match.start(), match.end()):
            continue
        before = line[match.start() - 1] if match.start() else ""
        after = line[match.end()] if match.end() < len(line) else ""
        if is_cjk_character(before) or is_cjk_character(after):
            issues.append(Issue(path, line_number, "MD122", "emphasis touches surrounding prose"))

    adjacent = re.compile(r"(?<!\*)\*{4}(?!\*)")
    for match in adjacent.finditer(line):
        if not is_protected(mask_with_code, match.start(), match.end()):
            issues.append(Issue(path, line_number, "MD105", "adjacent strong spans need a space"))

    for match in EMPTY_IMAGE_ALT_RE.finditer(line):
        if not is_protected(mask_with_code, match.start(), match.end()):
            issues.append(Issue(path, line_number, "MD123", "image needs alternative text"))

    markers = [
        match.start()
        for match in EXACT_STRONG_RE.finditer(line)
        if not is_protected(mask_with_code, match.start(), match.end())
    ]
    if len(markers) % 2:
        issues.append(Issue(path, line_number, "MD106", "unpaired strong marker on line"))
    for opening, closing in zip(markers[::2], markers[1::2]):
        content = line[opening + 2 : closing]
        if not content or content != content.strip():
            issues.append(Issue(path, line_number, "MD107", "invalid whitespace inside strong emphasis"))
        before = line[opening - 1] if opening else ""
        after = line[closing + 2] if closing + 2 < len(line) else ""
        if is_cjk_character(before) or is_cjk_character(after):
            issues.append(Issue(path, line_number, "MD108", "strong emphasis touches surrounding prose"))

    trailing = re.search(r"[ \t]+$", line)
    if trailing and trailing.group(0) != "  ":
        issues.append(Issue(path, line_number, "MD109", "invalid trailing whitespace"))
    return issues


def scan_file(path: pathlib.Path) -> list[Issue]:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    state = MarkdownState()
    issues: list[Issue] = []
    previous_heading_level = 1
    is_hugo_content = "content" in path.parts

    for line_number, line in enumerate(lines, 1):
        stripped = line.strip()
        if line_number == 1 and stripped in {"---", "+++"}:
            state.front_matter = stripped
            continue
        if state.front_matter is not None:
            if stripped == state.front_matter:
                state.front_matter = None
            continue

        if is_comment_line(line, state):
            continue

        fence = FENCE_RE.match(line)
        if state.in_fence:
            if fence:
                run = fence.group("run")
                if run[0] == state.fence_character and len(run) >= state.fence_length:
                    state.fence_character = None
                    state.fence_length = 0
            continue

        if state.code_tab_depth:
            if CODE_TAB_CLOSE_RE.search(line):
                state.code_tab_depth -= 1
            continue
        if CODE_TAB_OPEN_RE.search(line) and not re.search(r"/\s*[>%]\}\}\s*$", line):
            state.code_tab_depth += 1
            continue

        if fence:
            run = fence.group("run")
            if not fence.group("info").strip():
                issues.append(Issue(path, line_number, "MD110", "fenced code block has no language"))
            state.fence_character = run[0]
            state.fence_length = len(run)
            continue

        issues.extend(scan_inline(path, line_number, line, state))
        heading = HEADING_RE.match(line)
        if heading:
            level = len(heading.group("marks"))
            if heading.group("gap") != " ":
                issues.append(Issue(path, line_number, "MD116", "heading marker needs one space"))
            if line_number > 1 and lines[line_number - 2].strip():
                issues.append(Issue(path, line_number, "MD117", "heading needs a blank line before it"))
            if line_number < len(lines) and lines[line_number].strip():
                issues.append(Issue(path, line_number, "MD118", "heading needs a blank line after it"))
            if level == 1 and is_hugo_content:
                issues.append(Issue(path, line_number, "MD119", "page body heading must start at level 2"))
            if level > previous_heading_level + 1:
                issues.append(Issue(path, line_number, "MD120", "heading level skips a rank"))
            previous_heading_level = level
        elif BAD_HEADING_RE.match(line):
            issues.append(Issue(path, line_number, "MD121", "heading marker is missing a space"))

    if state.front_matter is not None:
        issues.append(Issue(path, len(lines), "MD111", "unclosed front matter"))
    if state.in_fence:
        issues.append(Issue(path, len(lines), "MD112", "unclosed fenced code block"))
    if state.code_tab_depth:
        issues.append(Issue(path, len(lines), "MD113", "unclosed Hugo code tab"))
    if text and not text.endswith("\n"):
        issues.append(Issue(path, len(lines), "MD114", "file has no final newline"))
    if text.endswith("\n\n"):
        issues.append(Issue(path, len(lines), "MD115", "file has multiple final newlines"))
    return issues


def markdown_files(root: pathlib.Path) -> list[pathlib.Path]:
    if root.is_file():
        return [root]
    return sorted(path for path in root.rglob("*") if path.suffix.lower() in {".md", ".markdown"})


def scan_rendered(root: pathlib.Path) -> tuple[int, list[Issue]]:
    """Scan generated HTML pages that contain relevant raw Markdown markers."""

    files = sorted(root.rglob("*.html"))
    issues: list[Issue] = []
    needles = ("**", "](", "{{<", "{{%")
    for path in files:
        source = path.read_text(encoding="utf-8")
        if not any(needle in source for needle in needles):
            continue
        parser = RenderedMarkdownParser(path.relative_to(root))
        parser.feed(source)
        issues.extend(parser.issues)
    return len(files), issues


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", nargs="?", default="content", type=pathlib.Path)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--fix", action="store_true", help="apply safe mechanical fixes before checking")
    mode.add_argument(
        "--rendered",
        metavar="PUBLIC_DIR",
        type=pathlib.Path,
        help="check generated HTML instead of Markdown source",
    )
    args = parser.parse_args()

    if args.rendered is not None:
        if not args.rendered.is_dir():
            parser.error(f"rendered site directory does not exist: {args.rendered}")
        file_count, issues = scan_rendered(args.rendered)
        if issues:
            for issue in issues:
                print(
                    f"{issue.path}:{issue.line}: {issue.code} {issue.message}",
                    file=sys.stderr,
                )
            print(
                f"Rendered Markdown check failed: {len(issues)} issue(s) across {file_count} HTML files",
                file=sys.stderr,
            )
            return 1
        print(f"Rendered Markdown check passed: {file_count} HTML files")
        return 0

    files = markdown_files(args.root)
    if not files:
        parser.error(f"no Markdown files found under {args.root}")

    changed = 0
    if args.fix:
        changed = sum(fix_file(path) for path in files)

    issues = [issue for path in files for issue in scan_file(path)]
    if issues:
        for issue in issues:
            print(
                f"{issue.path}:{issue.line}: {issue.code} {issue.message}",
                file=sys.stderr,
            )
        print(
            f"Markdown check failed: {len(issues)} issue(s) across {len(files)} files",
            file=sys.stderr,
        )
        return 1

    action = f"; normalized {changed}" if args.fix else ""
    print(f"Markdown check passed: {len(files)} files{action}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

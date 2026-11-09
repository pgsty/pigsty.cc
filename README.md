# pigsty.cc website

[![网站: pigsty.cc](https://img.shields.io/badge/网站-pigsty.cc-slategray?style=flat&logo=cilium&logoColor=white)](https://pigsty.cc)
[![Website: pigsty.io](https://img.shields.io/badge/website-pigsty.io-slategray?style=flat&logo=cilium&logoColor=white)](https://pigsty.io)

This is the website repo for http://pigsty.cc

- https://github.com/pgsty/pigsty.cc (Chinese)
- https://github.com/pgsty/pigsty.io (English)

Powered by [**Hugo**](https://gohugo.io/) and [**OINK 1.5.1**](https://github.com/pgsty/oink/releases/tag/v1.5.1)

---------------

## Build

Install Git and [Go 1.27.3](https://go.dev/dl/#go1.27.3).

Use Go 1.27.3 and Hugo Extended v0.168.0, matching CI, with the OINK v1.5.1 dependency pinned in
`go.mod`. Install the matching binary from the [Hugo v0.168.0 release](https://github.com/gohugoio/hugo/releases/tag/v0.168.0).

Run the local preview or production build:

```bash
hugo serve
hugo build --minify
```

Run `make check` before publishing to validate Markdown, Hugo rendering, and internal links.

## OINK integration

The homepage and documentation share OINK's navbar, appearance controls, language
link, search/action manifest, and runtime scripts. Menu links live in `hugo.yaml`.
Paper, Slate, Ink, and Terminal use the theme's palettes and typography; light,
dark, and system mode share `td-color-theme` across pages.

| Site customization | Ownership |
| --- | --- |
| Docs / Extensions dropdowns | `navbar-group-items.html` preserves the original groups and columns through `params.pigsty_groups`, `pigsty_group`, and `pigsty_column`. Its ungrouped fallback follows OINK v1.5.1. `_pigsty-navbar.scss` styles only these panels. |
| Language link | Native `params.ui.alt_site` points to the independent English site. `_pigsty-navbar.scss` hides only the navbar label; the icon keeps its tooltip and accessible name. It does not imply per-page translation mapping. |
| Homepage | Custom content, extension canvas, and player remain local. Images and components follow OINK's theme state and events. |
| Extension catalog | OINK owns table frames, spacing, scrolling, sticky matrix headers, and the expanded reader. Local styles retain category colors, availability badges, download details, and the column sizing of link lists and combined metadata tables. |
| GitHub stars | `landing/github-stars.html` adapts the site's shared snapshot for the native navbar. |

Do not restore a copied `navbar.html`, global palette overrides, or a separate
homepage theme controller. When upgrading OINK, review the small menu-body
override and check both grouped menus, all four styles, language/search controls,
and mobile drawers on the homepage and documentation.

OINK 1.5.1's Mermaid viewer and `.wide .expand` table reader are inherited by
existing content. Keep summary search for this large site; enable local PlantUML
or blog galleries only when the content needs them. Legacy static vendor files
require a separate reference audit before removal.

Use `.full-width` for the article canvas, `.wide` for technical columns, and
`.matrix` for row/column comparisons. Add `.expand` where the larger reader is
useful. The category index instead wraps its links within the available width.
The legacy `.ext-table` marker in generated Markdown is inert: do not restore
its old frame, margins, fixed widths, or `display: block` rules.
Both availability shortcodes render generated Markdown through OINK's table
hook. Download buttons open native popovers above the scroll viewport, with
keyboard focus, Escape, and an explicit close button. Unused legacy chip,
card-shortcode, availability, and Bootstrap tab overrides have been removed;
the extension pages already use OINK's native tabs.

## Refresh catalog and GitHub data

```bash
# Refresh the landing-page extension index and six metric cards from the local catalog.
python3 bin/gen-pgext.py --src ~/pgsty/pgext/db
# Append a dated GitHub API snapshot; both navigation and homepage read this dataset.
python3 bin/update-star-history.py
```

When packaged counts change, also update `params.pgext_count` and descriptions in
`hugo.yaml` and `content/_index.md`. Refresh the comparison tables and bar chart in
`content/docs/about/compare/impact.md` from the same dated GitHub API snapshot.

## License

[CC-BY 4.0](LICENSE)

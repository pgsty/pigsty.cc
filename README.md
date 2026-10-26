# pigsty.cc website

[![网站: pigsty.cc](https://img.shields.io/badge/网站-pigsty.cc-slategray?style=flat&logo=cilium&logoColor=white)](https://pigsty.cc)
[![Website: pigsty.io](https://img.shields.io/badge/website-pigsty.io-slategray?style=flat&logo=cilium&logoColor=white)](https://pigsty.io)

This is the website repo for http://pigsty.cc

- https://github.com/pgsty/pigsty.cc (Chinese)
- https://github.com/pgsty/pigsty.io (English)

Powered by [**Hugo**](https://gohugo.io/) and [**OINK 1.4.0**](https://github.com/pgsty/oink/releases/tag/v1.4.0)

---------------

## Build

Install Git, Go, and Hugo Extended (v0.168.0 or newer):

```bash
brew install git go hugo
```

Run the local preview or production build:

```bash
hugo serve
hugo build --minify
```

Run `make check` before publishing to validate Markdown, Hugo rendering, and internal links.

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

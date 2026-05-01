Vendored Mermaid runtime for local/offline Hugo builds.

- Source package: `mermaid`
- Version: `11.14.0`
- File: `dist/mermaid.min.js`
- Upstream: https://www.npmjs.com/package/mermaid

Update with:

```sh
tmpdir=$(mktemp -d)
npm pack mermaid@11.14.0 --pack-destination "$tmpdir"
tar -xzf "$tmpdir/mermaid-11.14.0.tgz" -C "$tmpdir" package/dist/mermaid.min.js package/LICENSE
cp "$tmpdir/package/dist/mermaid.min.js" static/vendor/mermaid/mermaid.min.js
cp "$tmpdir/package/LICENSE" static/vendor/mermaid/LICENSE
```

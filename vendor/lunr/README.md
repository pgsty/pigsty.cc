Vendored Lunr runtime for local/offline Hugo builds.

- Source package: `lunr`
- Version: `2.3.9`
- File: `lunr.min.js`
- Upstream: https://www.npmjs.com/package/lunr

Update with:

```sh
tmpdir=$(mktemp -d)
npm pack lunr@2.3.9 --pack-destination "$tmpdir"
tar -xzf "$tmpdir/lunr-2.3.9.tgz" -C "$tmpdir" package/lunr.min.js package/LICENSE
cp "$tmpdir/package/lunr.min.js" static/vendor/lunr/lunr.min.js
cp "$tmpdir/package/LICENSE" static/vendor/lunr/LICENSE
```

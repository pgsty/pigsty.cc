Vendored jQuery runtime for local/offline Hugo builds.

- Source package: `jquery`
- Version: `3.7.1`
- File: `dist/jquery.min.js`
- Upstream: https://www.npmjs.com/package/jquery

Update with:

```sh
tmpdir=$(mktemp -d)
npm pack jquery@3.7.1 --pack-destination "$tmpdir"
tar -xzf "$tmpdir/jquery-3.7.1.tgz" -C "$tmpdir" package/dist/jquery.min.js package/LICENSE.txt
cp "$tmpdir/package/dist/jquery.min.js" static/vendor/jquery/jquery.min.js
cp "$tmpdir/package/LICENSE.txt" static/vendor/jquery/LICENSE.txt
```

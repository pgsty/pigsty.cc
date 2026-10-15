"""Exercise the rendered route contract, including Hugo's directory URLs."""

import pathlib
import subprocess
import sys
import tempfile
import unittest


CHECKER = pathlib.Path(__file__).with_name("check_internal_links.py")


class InternalLinkTests(unittest.TestCase):
    def check(self, source, target=None, target_path="guide/index.html"):
        with tempfile.TemporaryDirectory() as directory:
            public = pathlib.Path(directory)
            (public / "index.html").write_text(source, encoding="utf-8")
            path = public / target_path
            path.parent.mkdir(parents=True, exist_ok=True)
            if target is not None:
                path.write_text(target, encoding="utf-8")
            return subprocess.run([sys.executable, str(CHECKER), str(public)],
                                  text=True, capture_output=True)

    def test_duplicate_ids_fail(self):
        result = self.check('<h2 id="same">First</h2><h2 id="same">Second</h2>')
        self.assertEqual(result.returncode, 1)
        self.assertIn("duplicate id same", result.stderr)

    def test_absolute_site_fragment_is_checked(self):
        result = self.check('<a href="https://pigsty.cc/guide/#missing">broken</a>', '<h2 id="section">Guide</h2>')
        self.assertEqual(result.returncode, 1)
        self.assertIn("missing fragment /guide/#missing", result.stderr)

    def test_pretty_url_fragment_exists(self):
        result = self.check('<a href="/guide/#section">ok</a>', '<h2 id="section">Guide</h2>')
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_pretty_url_missing_fragment_fails(self):
        result = self.check('<a href="/guide/#missing">broken</a>', '<h2 id="section">Guide</h2>')
        self.assertEqual(result.returncode, 1)
        self.assertIn("missing fragment /guide/#missing", result.stderr)

    def test_dotted_directory_route(self):
        result = self.check('<a href="/ext/os/d12.x86_64#section">ok</a>',
                            '<h2 id="section">Platform</h2>', "ext/os/d12.x86_64/index.html")
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_directory_without_index_is_missing(self):
        result = self.check('<a href="/guide/">broken</a>')
        self.assertEqual(result.returncode, 1)
        self.assertIn("missing target /guide/", result.stderr)

    def test_pretty_url_redirect_is_noncanonical(self):
        result = self.check('<a href="/guide/">alias</a>',
                            '<meta http-equiv="refresh" content="0; url=/canonical/">')
        self.assertEqual(result.returncode, 1)
        self.assertIn("non-canonical redirect target /guide/", result.stderr)

    def test_encoded_fragment_and_extensionless_html(self):
        result = self.check('<a href="/guide#%E6%8C%87%E5%8D%97">ok</a>',
                            '<h2 id="指南">Guide</h2>', "guide.html")
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_file_fragment_and_external_url(self):
        result = self.check('<a href="/guide.html#missing">broken</a>'
                            '<a href="https://example.org/#missing">external</a>',
                            '<h2 id="section">Guide</h2>', "guide.html")
        self.assertEqual(result.returncode, 1)
        self.assertIn("missing fragment /guide.html#missing", result.stderr)
        self.assertNotIn("example.org", result.stderr)


if __name__ == "__main__":
    unittest.main()

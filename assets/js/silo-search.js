/**
 * silo-search.js — ⌘K 搜索弹窗（lunr + 中文子串兜底）。
 *
 * 文档站与 landing 页共用：docs/blog 由 body-end 与 silo-docs.js 合并打包，
 * 首页 / 价格页与 lunr 单独打包（弹窗样式桥接见 scss/landing-search.scss）。
 * 依赖：全局 lunr、#silo-search 弹窗标记（layouts/_partials/silo/search-dialog.html）。
 */
(function () {
  'use strict';

  var html = document.documentElement;

  var root = document.getElementById('silo-search');
  if (!root) return;
  var input = root.querySelector('.silo-search__input');
  var list = root.querySelector('.silo-search__list');
  var panel = root.querySelector('.silo-search__panel');
  if (!input || !list || !panel) return;

  var CJK = /[぀-ヿ㐀-䶿一-鿿豈-﫿]/;
  var index = null;
  var docs = null;
  var docByRef = new Map();
  var loading = false;
  var results = [];
  var selected = 0;
  var hideTimer = 0;

  function isOpen() { return !root.hidden; }

  function open() {
    window.clearTimeout(hideTimer);
    root.hidden = false;
    html.setAttribute('data-silo-lock', '');
    window.requestAnimationFrame(function () { root.classList.add('is-open'); });
    input.focus();
    input.select();
    ensureIndex();
  }
  function close() {
    root.classList.remove('is-open');
    html.removeAttribute('data-silo-lock');
    hideTimer = window.setTimeout(function () { root.hidden = true; }, 240);
  }

  function message(text) {
    list.textContent = '';
    var el = document.createElement('div');
    el.className = 'silo-search__empty';
    el.textContent = text;
    list.appendChild(el);
  }

  function ensureIndex() {
    if (index || loading) return;
    loading = true;
    if (!docs) message(root.dataset.tLoading || '…');
    fetch(root.dataset.indexSrc)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        docs = data;
        data.forEach(function (d) { docByRef.set(d.ref, d); });
        index = lunr(function () {
          this.ref('ref');
          this.field('title', { boost: 5 });
          this.field('categories', { boost: 3 });
          this.field('tags', { boost: 3 });
          this.field('description', { boost: 2 });
          this.field('body');
          data.forEach(function (d) { this.add(d); }, this);
        });
        render(input.value);
      })
      .catch(function () {
        loading = false;
        message(root.dataset.tEmpty || 'No results');
      });
  }

  // 中文等 CJK 查询：lunr 的分词对 CJK 无能为力，改用全量子串扫描。
  function queryCjk(q) {
    var hits = [];
    docs.forEach(function (d) {
      var titleAt = (d.title || '').indexOf(q);
      var descAt = (d.description || '').indexOf(q);
      var bodyAt = (d.body || '').indexOf(q);
      var score = (titleAt >= 0 ? 100 : 0) + (descAt >= 0 ? 30 : 0) + (bodyAt >= 0 ? 10 : 0);
      if (!score) return;
      var excerpt = d.excerpt || '';
      if (bodyAt >= 0) {
        var start = Math.max(0, bodyAt - 24);
        excerpt = (start > 0 ? '…' : '') + d.body.slice(start, bodyAt + 56) + '…';
      } else if (descAt >= 0) {
        excerpt = d.description;
      }
      hits.push({ doc: d, score: score, excerpt: excerpt });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    return hits.slice(0, 12);
  }

  // 拉丁文查询：与旧 Docsy 同参的三连查询（精确 boost 100 / 通配 10 / 容错 editDistance 2）。
  function queryLatin(q) {
    var found = index.query(function (builder) {
      lunr.tokenizer(q.toLowerCase()).forEach(function (token) {
        var term = token.toString();
        builder.term(term, { boost: 100 });
        builder.term(term, {
          wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
          boost: 10
        });
        builder.term(term, { editDistance: 2 });
      });
    });
    return found.slice(0, 12).map(function (r) {
      var doc = docByRef.get(r.ref);
      return { doc: doc, excerpt: doc.excerpt || doc.description || '' };
    });
  }

  function highlight(text, q) {
    var fragment = document.createDocumentFragment();
    var at = q ? text.toLowerCase().indexOf(q.toLowerCase()) : -1;
    if (at < 0) {
      fragment.appendChild(document.createTextNode(text));
      return fragment;
    }
    fragment.appendChild(document.createTextNode(text.slice(0, at)));
    var mark = document.createElement('mark');
    mark.textContent = text.slice(at, at + q.length);
    fragment.appendChild(mark);
    fragment.appendChild(document.createTextNode(text.slice(at + q.length)));
    return fragment;
  }

  function select(i) {
    selected = i;
    Array.prototype.forEach.call(list.children, function (row, n) {
      if (row.getAttribute('role') === 'option') {
        row.setAttribute('aria-selected', n === i ? 'true' : 'false');
      }
    });
    var row = list.children[i];
    if (row) row.scrollIntoView({ block: 'nearest' });
  }

  function render(q) {
    q = (q || '').trim();
    if (!docs || !index) return;
    list.textContent = '';
    results = [];
    selected = 0;
    if (!q) return;

    try {
      results = CJK.test(q) ? queryCjk(q) : queryLatin(q);
    } catch (e) {
      results = [];
    }
    if (!results.length) {
      message(root.dataset.tEmpty || 'No results');
      return;
    }
    results.forEach(function (r, i) {
      var row = document.createElement('a');
      row.className = 'silo-search__item';
      row.setAttribute('role', 'option');
      row.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      row.href = r.doc.ref;

      var title = document.createElement('div');
      title.className = 'silo-search__item-title';
      title.appendChild(highlight(r.doc.title || r.doc.ref, q));
      row.appendChild(title);

      var ref = document.createElement('div');
      ref.className = 'silo-search__item-ref';
      ref.textContent = r.doc.ref;
      row.appendChild(ref);

      if (r.excerpt) {
        var excerpt = document.createElement('div');
        excerpt.className = 'silo-search__item-excerpt';
        excerpt.appendChild(highlight(r.excerpt, q));
        row.appendChild(excerpt);
      }

      row.addEventListener('pointermove', function () {
        if (selected !== i) select(i);
      });
      list.appendChild(row);
    });
  }

  var debounce = 0;
  input.addEventListener('input', function () {
    window.clearTimeout(debounce);
    debounce = window.setTimeout(function () { render(input.value); }, 80);
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (results.length) select(Math.min(selected + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (results.length) select(Math.max(selected - 1, 0));
    } else if (e.key === 'Enter') {
      var row = list.children[selected];
      if (row && row.href) window.location.href = row.href;
    }
  });

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && String(e.key).toLowerCase() === 'k') {
      e.preventDefault();
      if (isOpen()) { close(); } else { open(); }
    } else if (e.key === 'Escape' && isOpen()) {
      close();
    }
  });
  document.querySelectorAll('[data-silo-search-open]').forEach(function (el) {
    el.addEventListener('click', open);
  });
  root.querySelectorAll('[data-silo-search-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });

  // 非 Apple 平台把 ⌘ 徽章换成 Ctrl。
  var apple = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
  if (!apple) {
    document.querySelectorAll('[data-silo-meta-key]').forEach(function (el) {
      el.textContent = 'Ctrl';
    });
  }
})();

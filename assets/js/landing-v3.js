/**
 * Pigsty Landing v3 — "The Powered Board"
 * Vanilla JS：主题切换 / 复制命令 / 板卡引脚 / 滚动揭示 / 画廊懒加载
 */

(function () {
  'use strict';

  var DARK_THEME_COLOR = '#0b1119';
  var LIGHT_THEME_COLOR = '#f1f4f8';
  var THEME_KEY = 'pigsty-landing-theme';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================
  // Theme
  // ============================================
  function getStoredTheme() {
    try {
      var v = window.localStorage.getItem(THEME_KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch (err) { return null; }
  }

  function setStoredTheme(theme) {
    try { window.localStorage.setItem(THEME_KEY, theme); } catch (err) { /* ignore */ }
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    var isLight = theme === 'light';
    document.documentElement.setAttribute('data-theme', theme);

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      var icon = btn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-sun', !isLight);
        icon.classList.toggle('fa-moon', isLight);
      }
      var label = isLight ? '切换暗色模式' : '切换亮色模式';
      btn.setAttribute('title', label);
      btn.setAttribute('aria-label', label);
    });

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isLight ? LIGHT_THEME_COLOR : DARK_THEME_COLOR);

    // 主题感知图片（如扩展生态全景图的深浅两版）
    document.querySelectorAll('img[data-theme-src-light]').forEach(function (img) {
      var src = isLight ? img.dataset.themeSrcLight : img.dataset.themeSrcDark;
      if (src && img.getAttribute('src') !== src) img.setAttribute('src', src);
    });

    try {
      window.dispatchEvent(new CustomEvent('pigsty-theme-change', { detail: { theme: theme } }));
    } catch (err) { /* ignore */ }
  }

  function initThemeToggle() {
    applyTheme(currentTheme()); // 同步按钮图标 / 主题图片（data-theme 已由内联脚本设置）
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = currentTheme() === 'light' ? 'dark' : 'light';
        applyTheme(next);
        setStoredTheme(next);
      });
    });
  }

  // ============================================
  // Copy buttons
  // ============================================
  function flashCopied(btn) {
    var icon = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.innerHTML = icon;
      btn.classList.remove('copied');
    }, 1800);
  }

  function copyText(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { flashCopied(btn); }).catch(function () {});
    }
  }

  function initCopyButtons() {
    document.querySelectorAll('[data-copy-text]').forEach(function (btn) {
      btn.addEventListener('click', function () { copyText(btn.dataset.copyText, btn); });
    });

    document.querySelectorAll('.step-cmd-copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cmd = btn.closest('.step-cmd');
        var el = cmd && cmd.querySelector('.step-cmd-text');
        if (!el) return;
        copyText(el.dataset.copy || el.textContent, btn);
      });
    });
  }

  // ============================================
  // 板卡引脚（显隐由 CSS :hover 控制）
  // 图例芯片 ↔ 板卡引脚联动
  // ============================================
  function initBoardLegend() {
    document.querySelectorAll('.legend-chip[data-for]').forEach(function (chip) {
      var pin = document.querySelector('.board-pin[data-pin="' + chip.dataset.for + '"]');
      if (!pin) return;
      var on = function () { pin.classList.add('hl'); };
      var off = function () { pin.classList.remove('hl'); };
      chip.addEventListener('mouseenter', on);
      chip.addEventListener('mouseleave', off);
      chip.addEventListener('focus', on);
      chip.addEventListener('blur', off);
    });
  }

  // ============================================
  // Scroll reveal
  // ============================================
  function initScrollReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    if (!('IntersectionObserver' in window) || reduceMotion) {
      els.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  // ============================================
  // Counter animation
  // ============================================
  function animateCounter(el, target, duration) {
    duration = duration || 1600;
    var startTime = performance.now();
    function update(now) {
      var p = Math.min((now - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(target * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length || reduceMotion || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target, parseInt(entry.target.dataset.count, 10));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    els.forEach(function (el) { observer.observe(el); });
  }

  // ============================================
  // Header scroll state
  // ============================================
  function initHeaderScroll() {
    var header = document.querySelector('.landing-header');
    if (!header) return;
    var update = function () {
      header.classList.toggle('scrolled', window.pageYOffset > 60);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // ============================================
  // Mobile menu
  // ============================================
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var menu = document.querySelector('.mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var active = menu.classList.toggle('active');
      toggle.classList.toggle('active', active);
      toggle.setAttribute('aria-expanded', active ? 'true' : 'false');
    });

    // 链接与搜索按钮点击后收起菜单（主题切换按钮保持菜单打开）。
    menu
      .querySelectorAll('a, [data-td-shell-search-open]')
      .forEach(function (link) {
        link.addEventListener('click', function () {
          menu.classList.remove('active');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
  }

  // ============================================
  // Dashboard gallery lazy loading
  // ============================================
  function initDashboardGallery() {
    var slides = document.querySelectorAll('.dashboard-gallery-slide');
    if (!slides.length) return;

    var load = function (slide) {
      var src = slide.dataset.src;
      if (!src || slide.querySelector('img')) return;
      var img = document.createElement('img');
      img.src = src;
      img.alt = slide.dataset.alt || 'Dashboard';
      img.loading = 'lazy';
      img.onload = function () { slide.classList.add('loaded'); };
      img.onerror = function () { slide.style.display = 'none'; };
      slide.appendChild(img);
    };

    if (!('IntersectionObserver' in window)) {
      slides.forEach(load);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          load(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '300px 600px', threshold: 0 });

    slides.forEach(function (slide) { observer.observe(slide); });
  }

  // ============================================
  // Asciinema player（主题感知）
  // ============================================
  function asciinemaTheme(theme) {
    return theme === 'light' ? 'solarized-light' : 'dracula';
  }

  function renderAsciinema(container, theme) {
    var playerTheme = asciinemaTheme(theme);
    if (container.dataset.playerTheme === playerTheme && container.childElementCount > 0) return;

    container.innerHTML = '';
    container.dataset.playerTheme = playerTheme;

    AsciinemaPlayer.create('/demo/install-hero.cast', container, {
      cols: 120,
      rows: 36,
      autoPlay: true,
      loop: true,
      speed: 1.6,
      preload: true,
      poster: 'npt:0:03',
      idleTimeLimit: 0.5,
      theme: playerTheme,
      fit: 'width'
    });
  }

  function initAsciinema() {
    var container = document.getElementById('asciinema-player');
    if (!container || typeof AsciinemaPlayer === 'undefined') return;

    renderAsciinema(container, currentTheme());

    window.addEventListener('pigsty-theme-change', function (event) {
      var theme = event && event.detail ? event.detail.theme : currentTheme();
      renderAsciinema(container, theme);
    });
  }

  // ============================================
  // Extension index（照 pgext.cloud 首页 universe field）
  // 容器 #extidx 携带 data-src（指纹化 JSON：{cats:[{c,n,l,d}], ext:[[name,cat,pkg,desc]]}）
  // 与 data-base（扩展页链接前缀）；格点按分类着色，已打包实色 / 仅收录淡色，
  // 悬停显示扩展名与简介，点击在新标签页打开 pgext.cloud 扩展页。
  // ============================================
  function initExtIndex() {
    var box = document.getElementById('extidx');
    if (!box) return;
    var cv = box.querySelector('canvas');
    if (!cv || !cv.getContext || typeof window.fetch !== 'function') return;

    var src = box.dataset.src;
    var base = box.dataset.base || 'https://pgext.cloud/ext/';
    var labelPkg = box.dataset.lPkg || 'packaged';
    var labelNoPkg = box.dataset.lNopkg || 'unpacked';

    var data = null;        // {cats, ext}
    var colors = {};        // cat code → color for current theme
    var names = {};         // cat code → display name
    var grid = null;        // {pitch, cols, hits: {index → ext}}
    var hover = null;       // hovered ext row
    var drawnWidth = 0;
    var rafPending = false;
    var tipEl = null;

    function palette() {
      var light = currentTheme() === 'light';
      colors = {}; names = {};
      (data.cats || []).forEach(function (c) {
        colors[c.c] = light ? c.l : c.d;
        names[c.c] = c.n || c.c;
      });
    }

    function draw() {
      if (!data) return;
      var W = box.clientWidth;
      if (!W) return;
      var dpr = window.devicePixelRatio || 1;
      var pitch = W > 900 ? 8 : W > 560 ? 7 : 6;
      var dot = pitch - 2;
      var cols = Math.max(24, Math.floor(W / pitch));
      var hits = {};
      var cell = 0, prev = null, i, e, col, row;
      var ext = data.ext;
      var rows = 0;
      // 先布局：同分类连续排列，分类之间空一格
      var pos = new Array(ext.length);
      for (i = 0; i < ext.length; i++) {
        e = ext[i];
        if (prev && e[1] !== prev) cell += 1;
        pos[i] = cell;
        hits[cell] = e;
        prev = e[1]; cell++;
      }
      rows = Math.ceil(cell / cols);
      var H = rows * pitch;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.height = H + 'px';
      var ctx = cv.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      var hovIdx = -1;
      for (i = 0; i < ext.length; i++) {
        e = ext[i];
        col = pos[i] % cols; row = Math.floor(pos[i] / cols);
        ctx.fillStyle = colors[e[1]] || '#888';
        if (hover && e === hover) { hovIdx = i; continue; }
        ctx.globalAlpha = e[2] ? 0.95 : 0.45;
        ctx.fillRect(col * pitch, row * pitch, dot, dot);
      }
      if (hovIdx >= 0) {
        // 悬停格点最后画，放大一圈并全不透明
        col = pos[hovIdx] % cols; row = Math.floor(pos[hovIdx] / cols);
        ctx.globalAlpha = 1;
        ctx.fillStyle = colors[hover[1]] || '#888';
        ctx.fillRect(col * pitch - 1, row * pitch - 1, dot + 2, dot + 2);
      }
      ctx.globalAlpha = 1;
      grid = { pitch: pitch, cols: cols, hits: hits };
      drawnWidth = W;
    }

    function scheduleDraw() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(function () { rafPending = false; draw(); });
    }

    function hit(ev) {
      if (!grid) return null;
      var r = cv.getBoundingClientRect();
      var x = ev.clientX - r.left, y = ev.clientY - r.top;
      if (x < 0 || y < 0) return null;
      var col = Math.floor(x / grid.pitch), row = Math.floor(y / grid.pitch);
      if (col >= grid.cols) return null;
      return grid.hits[row * grid.cols + col] || null;
    }

    function tip() {
      if (!tipEl) {
        tipEl = document.createElement('div');
        tipEl.className = 'extidx-tip';
        tipEl.setAttribute('role', 'tooltip');
        document.body.appendChild(tipEl);
      }
      return tipEl;
    }

    function showTip(e, x, y) {
      var el = tip();
      el.textContent = '';
      var b = document.createElement('b'); b.textContent = e[0];
      var c = document.createElement('span'); c.className = 'c'; c.textContent = e[1]; c.style.color = colors[e[1]] || '';
      var s = document.createElement('span'); s.className = 's'; s.textContent = e[2] ? labelPkg : labelNoPkg;
      el.appendChild(b); el.appendChild(c); el.appendChild(s);
      if (e[3]) { var d = document.createElement('span'); d.className = 'd'; d.textContent = e[3]; el.appendChild(d); }
      var pad = 14, vw = window.innerWidth, vh = window.innerHeight;
      el.classList.add('show');
      var w = el.offsetWidth, h = el.offsetHeight;
      el.style.left = Math.max(8, Math.min(x + pad, vw - w - 10)) + 'px';
      el.style.top = (y + pad + h > vh ? y - h - 8 : y + pad) + 'px';
    }

    function hideTip() { if (tipEl) tipEl.classList.remove('show'); }

    function onMove(ev) {
      var e = hit(ev);
      if (e !== hover) { hover = e; scheduleDraw(); }
      if (e) { showTip(e, ev.clientX, ev.clientY); cv.style.cursor = 'pointer'; }
      else { hideTip(); cv.style.cursor = 'crosshair'; }
    }

    function onLeave() {
      if (hover) { hover = null; scheduleDraw(); }
      hideTip();
    }

    function onClick(ev) {
      var e = hit(ev);
      if (!e) return;
      window.open(base + encodeURIComponent(e[0]), '_blank', 'noopener');
    }

    function ready(payload) {
      data = payload || {};
      if (!data.ext || !data.ext.length) { box.classList.add('is-error'); return; }
      palette();
      draw();
      box.classList.add('is-ready');
      cv.addEventListener('mousemove', onMove);
      cv.addEventListener('mouseleave', onLeave);
      cv.addEventListener('click', onClick);
      window.addEventListener('resize', function () {
        if (box.clientWidth !== drawnWidth) scheduleDraw();
      }, { passive: true });
      window.addEventListener('pigsty-theme-change', function () { palette(); scheduleDraw(); });
    }

    var loading = false;
    function load() {
      if (loading || data) return;
      loading = true;
      fetch(src, { credentials: 'same-origin' })
        .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
        .then(ready)
        .catch(function () { box.classList.add('is-error'); });
    }

    // 滚动临近时再拉取数据，首屏不受影响
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (en) { return en.isIntersecting; })) { io.disconnect(); load(); }
      }, { rootMargin: '600px 0px' });
      io.observe(box);
    } else {
      load();
    }
  }

  // ============================================
  // Init
  // ============================================
  function init() {
    initThemeToggle();
    initCopyButtons();
    initBoardLegend();
    initScrollReveal();
    initCounters();
    initHeaderScroll();
    initMobileMenu();
    initDashboardGallery();
    initAsciinema();
    initExtIndex();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

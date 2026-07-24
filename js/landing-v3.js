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

    menu.querySelectorAll('a').forEach(function (link) {
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

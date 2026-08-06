/**
 * silo-docs.js — SILO 文档站 fumadocs 风格交互（无 jQuery / 无框架）。
 *
 * 模块：theme（底部组合件主题钮）/ rootMenu（根节点下拉）/ drawer（移动抽屉）/
 *       collapse（桌面侧栏收起 + 悬停弹出）/ resize（拖拽调宽）/
 *       treeScroll（侧栏滚动位保持）/ toc（v16 轨道 + clip-path 高亮 + 滑动圆点）。
 *       ⌘K 搜索弹窗在 silo-search.js（与 landing 页共用，打包见 body-end）。
 *
 * 约定：主题沿用 localStorage `td-color-theme` + <html data-bs-theme>；
 *       侧栏收起态存 localStorage `silo-sidebar-collapsed`，由 head-end 的
 *       预绘制脚本在首帧前恢复；首帧动画由 <html data-silo-no-anim> 抑制，
 *       本文件在两帧后移除该属性。
 */
(function () {
  'use strict';

  var html = document.documentElement;
  var MD = '(min-width: 768px)';

  /* ---------------------------------------------------------------- theme */

  function initTheme() {
    var buttons = document.querySelectorAll('[data-silo-theme-toggle]');
    if (!buttons.length) return;
    function apply(theme) {
      html.setAttribute('data-bs-theme', theme);
      try { localStorage.setItem('td-color-theme', theme); } catch (e) { /* ignore */ }
    }
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dark = html.getAttribute('data-bs-theme') === 'dark';
        apply(dark ? 'light' : 'dark');
      });
    });
  }

  /* -------------------------------------------------------- rightCollapse */

  // 右侧栏整栏隐藏（与左侧对称）：标题图标钮切换，右上浮动钮恢复，localStorage 持久化。
  function initRightCollapse() {
    var buttons = document.querySelectorAll('[data-silo-right-toggle]');
    if (!buttons.length) return;
    function collapsed() {
      return html.getAttribute('data-silo-toc') === 'collapsed';
    }
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = !collapsed();
        if (next) {
          html.setAttribute('data-silo-toc', 'collapsed');
        } else {
          html.removeAttribute('data-silo-toc');
        }
        try { localStorage.setItem('silo-toc-collapsed', next ? '1' : '0'); } catch (e) { /* ignore */ }
      });
    });
  }

  /* ------------------------------------------------------------ rootMenu */

  // 根节点下拉（v16 SidebarTabsDropdown）：100ms scale 弹层，外点/Esc 关闭。
  function initRootMenu() {
    var root = document.querySelector('.silo-root');
    if (!root) return;
    var btn = root.querySelector('[data-silo-root-toggle]');
    var pop = root.querySelector('.silo-root__pop');
    if (!btn || !pop) return;

    function close() {
      if (pop.hidden) return;
      pop.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      window.setTimeout(function () { pop.hidden = true; }, 100);
      document.removeEventListener('pointerdown', onOutside, true);
    }
    function open() {
      pop.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      window.requestAnimationFrame(function () { pop.classList.add('is-open'); });
      document.addEventListener('pointerdown', onOutside, true);
    }
    function onOutside(e) {
      if (!root.contains(e.target)) close();
    }
    btn.addEventListener('click', function () {
      if (pop.hidden) { open(); } else { close(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !pop.hidden) close();
    });
  }

  /* --------------------------------------------------------------- drawer */

  function initDrawer() {
    var sidebar = document.getElementById('silo-sidebar');
    if (!sidebar) return;
    function open() { html.setAttribute('data-silo-drawer', 'open'); }
    function close() { html.removeAttribute('data-silo-drawer'); }
    document.querySelectorAll('[data-silo-drawer-open]').forEach(function (el) {
      el.addEventListener('click', open);
    });
    document.querySelectorAll('[data-silo-drawer-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && html.hasAttribute('data-silo-drawer')) close();
    });
    // 视口跨过 md 断点时清掉抽屉态，避免桌面端残留滚动锁。
    window.matchMedia(MD).addEventListener('change', function (mq) {
      if (mq.matches) close();
    });
  }

  /* ------------------------------------------------------------- collapse */

  function initCollapse() {
    var aside = document.getElementById('silo-sidebar');
    if (!aside) return;
    var panel = aside.querySelector('.silo-sidebar__panel');
    if (!panel) return;
    var mdQuery = window.matchMedia(MD);
    var lockUntil = 0;
    var closeTimer = 0;

    function collapsed() {
      return html.getAttribute('data-silo-sidebar') === 'collapsed';
    }
    function setCollapsed(value) {
      window.clearTimeout(closeTimer);
      aside.classList.remove('silo-sidebar--overlay');
      if (value) {
        html.setAttribute('data-silo-sidebar', 'collapsed');
      } else {
        html.removeAttribute('data-silo-sidebar');
      }
      try { localStorage.setItem('silo-sidebar-collapsed', value ? '1' : '0'); } catch (e) { /* ignore */ }
      lockUntil = performance.now() + 150; // fumadocs 同款：状态切换后 150ms 抑制悬停弹出
    }

    document.querySelectorAll('[data-silo-sidebar-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () { setCollapsed(!collapsed()); });
    });

    // 悬停弹出：收起的面板保留 16px 隐形热区（opacity:0 不影响命中测试）。
    panel.addEventListener('pointerenter', function (e) {
      if (e.pointerType === 'touch' || !mdQuery.matches) return;
      if (!collapsed() || performance.now() < lockUntil) return;
      window.clearTimeout(closeTimer);
      aside.classList.add('silo-sidebar--overlay');
    });
    panel.addEventListener('pointerleave', function (e) {
      if (e.pointerType === 'touch' || !collapsed()) return;
      // fumadocs 同款延迟：离开点贴近视口左右边缘（≤100px）给 500ms 宽限，否则立即收回。
      var nearEdge = Math.min(e.clientX, document.body.clientWidth - e.clientX) <= 100;
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(function () {
        aside.classList.remove('silo-sidebar--overlay');
        lockUntil = performance.now() + 150;
      }, nearEdge ? 500 : 0);
    });

    mdQuery.addEventListener('change', function (mq) {
      if (!mq.matches) aside.classList.remove('silo-sidebar--overlay');
    });
  }

  /* --------------------------------------------------------------- resize */

  // 侧栏拖拽调宽：写 --silo-sidebar-w（列与面板共用），localStorage 持久化，
  // 双击复位。min/max 由 .silo-layout 的 --silo-sidebar-min/max 钳制
  // （站点参数 + 栏目 front matter cascade）。嵌入态与悬浮弹出态共用同一面板。
  function initResize() {
    var aside = document.getElementById('silo-sidebar');
    if (!aside) return;
    var handle = aside.querySelector('[data-silo-resizer]');
    var panel = aside.querySelector('.silo-sidebar__panel');
    var layout = document.querySelector('.silo-layout');
    if (!handle || !panel || !layout) return;
    var mdQuery = window.matchMedia(MD);

    function bounds() {
      var cs = getComputedStyle(layout);
      return {
        min: parseFloat(cs.getPropertyValue('--silo-sidebar-min')) || 220,
        max: parseFloat(cs.getPropertyValue('--silo-sidebar-max')) || 480
      };
    }

    handle.addEventListener('pointerdown', function (e) {
      if (!mdQuery.matches || e.button !== 0) return;
      e.preventDefault();
      var b = bounds();
      var left = panel.getBoundingClientRect().left;
      html.setAttribute('data-silo-resizing', '');
      handle.setPointerCapture(e.pointerId);

      function onMove(ev) {
        var w = Math.round(Math.min(b.max, Math.max(b.min, ev.clientX - left)));
        html.style.setProperty('--silo-sidebar-w', w + 'px');
      }
      function onUp() {
        handle.removeEventListener('pointermove', onMove);
        handle.removeEventListener('pointerup', onUp);
        handle.removeEventListener('pointercancel', onUp);
        html.removeAttribute('data-silo-resizing');
        var w = parseFloat(getComputedStyle(html).getPropertyValue('--silo-sidebar-w'));
        if (w > 0) {
          try { localStorage.setItem('silo-sidebar-w', String(Math.round(w))); } catch (err) { /* ignore */ }
        }
      }
      handle.addEventListener('pointermove', onMove);
      handle.addEventListener('pointerup', onUp);
      handle.addEventListener('pointercancel', onUp);
    });

    // 双击复位为断点默认宽（268/286）。
    handle.addEventListener('dblclick', function () {
      html.style.removeProperty('--silo-sidebar-w');
      try { localStorage.removeItem('silo-sidebar-w'); } catch (err) { /* ignore */ }
    });
  }

  /* ------------------------------------------------------------ treeScroll */

  function initTreeScroll() {
    var viewport = document.querySelector('[data-silo-sidebar-scroll]');
    if (!viewport) return;
    var key = 'silo-sidebar-scroll:' + (html.lang || 'en');

    function restoreAndCenter() {
      try {
        var saved = sessionStorage.getItem(key);
        if (saved !== null) viewport.scrollTop = parseInt(saved, 10) || 0;
      } catch (e) { /* ignore */ }

      // 活跃行不在视口内时（深链直达 / 恢复位失效）将其居中。
      var active = viewport.querySelector('.silo-tree__row.silo-active');
      if (active) {
        var rowRect = active.getBoundingClientRect();
        var boxRect = viewport.getBoundingClientRect();
        if (rowRect.top < boxRect.top || rowRect.bottom > boxRect.bottom) {
          active.scrollIntoView({ block: 'center' });
        }
      }
    }

    // 大站点走缓存树路径（sidebar_cache_limit）：树先以 d-none 输出，
    // active/checked 由 sidebar.html 的 jQuery 脚本在 ready 后补写并揭幕。
    // d-none 期间 scrollTop 赋值无效、活跃行也未标注 —— 轮询等揭幕后再恢复。
    var menu = viewport.querySelector('#td-sidebar-menu');
    if (menu && menu.classList.contains('d-none')) {
      var tries = 0;
      (function waitReveal() {
        if (!menu.classList.contains('d-none')) { restoreAndCenter(); return; }
        if (++tries > 100) return; // ~2s 兜底放弃
        window.setTimeout(waitReveal, 20);
      })();
    } else {
      restoreAndCenter();
    }

    var timer = 0;
    function save() {
      try { sessionStorage.setItem(key, String(viewport.scrollTop)); } catch (e) { /* ignore */ }
    }
    viewport.addEventListener('scroll', function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(save, 100);
    }, { passive: true });
    window.addEventListener('pagehide', save);
  }

  /* ------------------------------------------------------------------ toc */

  /*
   * TOC —— fumadocs.dev v16 同款「normal」变体：
   *   · 每个条目一段 SVG 轨道，深度变化处用三次贝塞尔曲线平滑连接；
   *   · 活跃高亮 = 一条覆盖整列的主色路径，clip-path 裁剪活跃区间（150ms 过渡）；
   *   · 一枚 4px 圆点沿同一路径滑动（CSS offset-path / offset-distance）。
   * 缩进 20/32/44px，轨道 x 8/16/24（+0.5 使 1px 描边落在整像素）。
   */
  function initToc() {
    var body = document.getElementById('silo-toc-body');
    if (!body) return;
    var tocNav = body.querySelector('#TableOfContents');
    var links = Array.prototype.slice.call(
      body.querySelectorAll('#TableOfContents a[href^="#"]'));
    if (!tocNav || !links.length) return;

    var SVG_NS = 'http://www.w3.org/2000/svg';

    // 深度 = 祖先 <ul> 层数 + 1（Hugo TOC 从 h2 起，对应 fumadocs depth 2）。
    function depthOf(a) {
      var d = 0;
      var el = a.parentElement;
      while (el && el !== tocNav) {
        if (el.tagName === 'UL') d++;
        el = el.parentElement;
      }
      return d + 1;
    }
    function itemOffset(depth) { return depth <= 2 ? 20 : depth === 3 ? 32 : 44; }
    function lineOffset(depth) { return depth <= 2 ? 8 : depth === 3 ? 16 : 24; }

    var depths = links.map(depthOf);
    var positions = [];       // 每条目 [top, bottom]（相对 body，去除 padding）
    var overlay = null;
    var dot = null;
    var pathEl = null;
    var pathLength = 0;

    function build() {
      // 清场重建（ResizeObserver 触发时布局已变）。
      body.querySelectorAll('.silo-toc__rail').forEach(function (el) { el.remove(); });
      if (overlay) overlay.remove();
      positions = [];

      var d = '';
      var upperX = 0;
      var upperBottom = 0;
      var maxW = 0;
      var maxH = 0;

      links.forEach(function (a, i) {
        var depth = depths[i];
        a.style.paddingInlineStart = itemOffset(depth) + 'px';

        var l1 = lineOffset(depth);
        var l0 = i === 0 ? l1 : lineOffset(depths[i - 1]);
        var l2 = i === links.length - 1 ? l1 : lineOffset(depths[i + 1]);

        // --- 每条目的灰色轨道段 ---
        var rail = document.createElementNS(SVG_NS, 'svg');
        rail.setAttribute('class', 'silo-toc__rail' + (l1 !== l2 ? ' silo-toc__rail--cut' : ''));
        rail.setAttribute('aria-hidden', 'true');
        rail.style.width = (Math.max(l0, l1) + 9) + 'px';
        if (l0 !== l1) {
          var conn = document.createElementNS(SVG_NS, 'path');
          conn.setAttribute('d', 'M ' + (l0 + 0.5) + ' 0 C ' + (l0 + 0.5) + ' 8 ' +
            (l1 + 0.5) + ' 4 ' + (l1 + 0.5) + ' 12');
          rail.appendChild(conn);
        }
        var seg = document.createElementNS(SVG_NS, 'line');
        seg.setAttribute('x1', String(l1 + 0.5));
        seg.setAttribute('x2', String(l1 + 0.5));
        seg.setAttribute('y1', l0 === l1 ? '6' : '12');
        seg.setAttribute('y2', '100%');
        rail.appendChild(seg);
        a.appendChild(rail);

        // --- 主色路径的节点（相对 body 原点）---
        var style = getComputedStyle(a);
        var top = a.offsetTop + parseFloat(style.paddingTop);
        var bottom = a.offsetTop + a.clientHeight - parseFloat(style.paddingBottom);
        var x = l1 + 0.5;
        positions.push([top, bottom]);
        if (i === 0) {
          d += 'M' + x + ' ' + top + ' L' + x + ' ' + bottom;
        } else {
          d += ' C ' + upperX + ' ' + (top - 4) + ' ' + x + ' ' + (upperBottom + 4) +
            ' ' + x + ' ' + top + ' L' + x + ' ' + bottom;
        }
        upperX = x;
        upperBottom = bottom;
        maxW = Math.max(maxW, x + 8);
        maxH = Math.max(maxH, bottom);
      });

      overlay = document.createElement('div');
      overlay.className = 'silo-toc__active';
      var svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('viewBox', '0 0 ' + maxW + ' ' + maxH);
      svg.style.width = maxW + 'px';
      svg.style.height = maxH + 'px';
      pathEl = document.createElementNS(SVG_NS, 'path');
      pathEl.setAttribute('d', d);
      svg.appendChild(pathEl);
      overlay.appendChild(svg);
      dot = document.createElement('span');
      dot.className = 'silo-toc__dot';
      dot.style.offsetPath = 'path("' + d + '")';
      overlay.appendChild(dot);
      body.appendChild(overlay);
      pathLength = pathEl.getTotalLength();
    }

    // 沿路径二分查找 y 坐标对应的路径距离（路径在 y 上单调递增）。
    function distanceAtY(y) {
      var lo = 0;
      var hi = pathLength;
      for (var i = 0; i < 24; i++) {
        var mid = (lo + hi) / 2;
        if (pathEl.getPointAtLength(mid).y < y) { lo = mid; } else { hi = mid; }
      }
      return (lo + hi) / 2;
    }

    var linkById = new Map();
    links.forEach(function (a) {
      linkById.set(decodeURIComponent(a.hash.slice(1)), a);
    });
    var headings = [];
    linkById.forEach(function (_a, id) {
      var el = document.getElementById(id);
      if (el) headings.push(el);
    });
    if (!headings.length) return;

    var visible = new Set();
    var lastAbove = headings[0];

    function paint() {
      var actives = Array.from(visible);
      if (!actives.length && lastAbove) actives = [lastAbove];
      links.forEach(function (a) { a.classList.remove('active'); });

      var firstIdx = Infinity;
      var lastIdx = -1;
      actives.forEach(function (h) {
        var a = linkById.get(h.id);
        if (!a) return;
        a.classList.add('active');
        var idx = links.indexOf(a);
        if (idx < firstIdx) firstIdx = idx;
        if (idx > lastIdx) lastIdx = idx;
      });

      if (lastIdx < 0 || !overlay) {
        if (overlay) {
          overlay.style.setProperty('--silo-track-top', '0px');
          overlay.style.setProperty('--silo-track-bottom', '0px');
          overlay.style.setProperty('--silo-dot-o', '0');
        }
        return;
      }
      var trackTop = positions[firstIdx][0];
      var trackBottom = positions[lastIdx][1];
      overlay.style.setProperty('--silo-track-top', trackTop + 'px');
      overlay.style.setProperty('--silo-track-bottom', trackBottom + 'px');
      overlay.style.setProperty('--silo-dot-o', '1');
      overlay.style.setProperty('--silo-dot-d', distanceAtY(trackTop) + 'px');

      // 长 TOC：保证首个活跃项在滚动区内可见。
      var first = links[firstIdx];
      if (first) {
        var container = body.getBoundingClientRect();
        var link = first.getBoundingClientRect();
        if (link.top < container.top || link.bottom > container.bottom) {
          first.scrollIntoView({ block: 'nearest' });
        }
      }
    }

    build();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visible.add(entry.target);
        } else {
          visible.delete(entry.target);
          // 记住最近滚出视口上沿的标题：节与节之间保持上一节高亮。
          if (entry.boundingClientRect.top < 100) lastAbove = entry.target;
        }
      });
      paint();
    }, { rootMargin: '-80px 0px -25% 0px' });
    headings.forEach(function (h) { observer.observe(h); });

    if ('ResizeObserver' in window) {
      var lastWidth = 0;
      new ResizeObserver(function (entries) {
        var w = entries[0].contentRect.width;
        if (Math.abs(w - lastWidth) > 1) {
          lastWidth = w;
          build();
        }
        paint();
      }).observe(body);
    }
    paint();
  }

  /* ----------------------------------------------------------------- boot */

  initTheme();
  initRootMenu();
  initRightCollapse();
  initDrawer();
  initCollapse();
  initResize();
  initTreeScroll();
  initToc();

  // 首帧后恢复过渡动画（head-end 预绘制脚本置位）。
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      html.removeAttribute('data-silo-no-anim');
    });
  });
})();

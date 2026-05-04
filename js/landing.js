/**
 * Pigsty Landing Page JavaScript
 * Lightweight, vanilla JS for interactions
 */

(function() {
  'use strict';

  const DARK_THEME_COLOR = '#0f1419';
  const LIGHT_THEME_COLOR = '#edf3fb';

  // ============================================
  // Copy Command to Clipboard
  // ============================================
  function initCopyButtons() {
    // Handle .command-copy buttons (hero section)
    const copyButtons = document.querySelectorAll('.command-copy');

    copyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const commandBox = this.closest('.command-box');
        const commandText = commandBox.querySelector('.command-text');
        const text = commandText.textContent || commandText.innerText;

        navigator.clipboard.writeText(text).then(() => {
          showCopyFeedback(this);
        }).catch(err => {
          console.error('Failed to copy:', err);
        });
      });
    });

    // Handle .step-cmd-copy buttons (quickstart section)
    // These support data-copy attribute for different copy content
    const stepCopyButtons = document.querySelectorAll('.step-cmd-copy');

    stepCopyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const stepCmd = this.closest('.step-cmd');
        const commandEl = stepCmd.querySelector('.step-cmd-text');

        // Use data-copy if available, otherwise use the displayed text
        const textToCopy = commandEl.dataset.copy || commandEl.textContent || commandEl.innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
          showCopyFeedback(this);
        }).catch(err => {
          console.error('Failed to copy:', err);
        });
      });
    });
  }

  // Shared copy feedback function
  function showCopyFeedback(button) {
    const originalIcon = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.color = 'var(--pigsty-green)';

    setTimeout(() => {
      button.innerHTML = originalIcon;
      button.style.color = '';
    }, 2000);
  }

  // ============================================
  // Scroll Reveal Animation
  // ============================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional: unobserve after reveal
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ============================================
  // Extension Tag Hover Effect
  // ============================================
  function initExtensionTags() {
    const tags = document.querySelectorAll('.ext-tag');

    tags.forEach(tag => {
      tag.addEventListener('mouseenter', function() {
        // Add subtle random movement to nearby tags
        const siblings = Array.from(this.parentElement.children);
        const index = siblings.indexOf(this);

        siblings.forEach((sibling, i) => {
          if (Math.abs(i - index) <= 2 && sibling !== this) {
            const offset = (Math.random() - 0.5) * 4;
            sibling.style.transform = `translateY(${offset}px)`;
          }
        });
      });

      tag.addEventListener('mouseleave', function() {
        const siblings = Array.from(this.parentElement.children);
        siblings.forEach(sibling => {
          sibling.style.transform = '';
        });
      });
    });
  }

  // ============================================
  // Counter Animation for Stats
  // ============================================
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);

      element.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  }

  function initCounterAnimation() {
    const statValues = document.querySelectorAll('.stat-value[data-count]');

    if (!statValues.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.count, 10);
          animateCounter(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statValues.forEach(el => observer.observe(el));
  }

  // ============================================
  // Header Scroll Effect
  // ============================================
  function initHeaderScroll() {
    const header = document.querySelector('.landing-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ============================================
  // Mobile Menu Toggle
  // ============================================
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // ============================================
  // Theme Toggle (Dark / Light)
  // ============================================
  function getStoredTheme() {
    try {
      const value = window.localStorage.getItem('pigsty-landing-theme');
      return value === 'light' || value === 'dark' ? value : null;
    } catch (err) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      window.localStorage.setItem('pigsty-landing-theme', theme);
    } catch (err) {
      // Ignore write failures for private mode / blocked storage
    }
  }

  function detectPreferredTheme() {
    const storedTheme = getStoredTheme();
    if (storedTheme) return storedTheme;

    // Default to light theme when there is no explicit user preference.
    return 'light';
  }

  function applyTheme(theme) {
    const body = document.body;
    if (!body) return;

    const isLight = theme === 'light';
    body.classList.toggle('landing-theme-light', isLight);
    body.dataset.theme = isLight ? 'light' : 'dark';

    const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
    toggleButtons.forEach(button => {
      const icon = button.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-sun', !isLight);
        icon.classList.toggle('fa-moon', isLight);
      }

      const nextLabel = isLight ? '切换暗色模式' : '切换亮色模式';
      button.setAttribute('title', nextLabel);
      button.setAttribute('aria-label', nextLabel);
    });

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', isLight ? LIGHT_THEME_COLOR : DARK_THEME_COLOR);
    }

    try {
      window.dispatchEvent(new CustomEvent('pigsty-theme-change', {
        detail: { theme: isLight ? 'light' : 'dark' }
      }));
    } catch (err) {
      const fallbackEvent = document.createEvent('Event');
      fallbackEvent.initEvent('pigsty-theme-change', true, true);
      fallbackEvent.theme = isLight ? 'light' : 'dark';
      window.dispatchEvent(fallbackEvent);
    }
  }

  function initThemeToggle() {
    const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
    if (!toggleButtons.length) return;

    let currentTheme = detectPreferredTheme();
    applyTheme(currentTheme);

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
        setStoredTheme(currentTheme);
      });
    });
  }

  // ============================================
  // Typing Animation for Command
  // ============================================
  function initTypingEffect() {
    const typingElements = document.querySelectorAll('[data-typing]');

    typingElements.forEach(el => {
      const text = el.dataset.typing;
      el.textContent = '';

      let i = 0;
      const type = () => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
          setTimeout(type, 50);
        }
      };

      // Start typing when visible
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          type();
          observer.unobserve(el);
        }
      });

      observer.observe(el);
    });
  }

  // ============================================
  // Asciinema Player Initialization
  // ============================================
  function getCurrentTheme() {
    const body = document.body;
    return body && body.dataset && body.dataset.theme === 'light' ? 'light' : 'dark';
  }

  function getAsciinemaTheme(theme) {
    return theme === 'light' ? 'solarized-light' : 'dracula';
  }

  function renderAsciinemaPlayer(playerContainer, theme) {
    const playerTheme = getAsciinemaTheme(theme);
    const currentTheme = playerContainer.dataset.playerTheme;
    if (currentTheme === playerTheme && playerContainer.childElementCount > 0) return;

    playerContainer.innerHTML = '';
    playerContainer.dataset.playerTheme = playerTheme;

    AsciinemaPlayer.create('/demo/install-hero.cast', playerContainer, {
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

  function initAsciinemaPlayer() {
    const playerContainer = document.getElementById('asciinema-player');
    if (!playerContainer || typeof AsciinemaPlayer === 'undefined') return;

    renderAsciinemaPlayer(playerContainer, getCurrentTheme());

    if (playerContainer.dataset.themeListenerBound === '1') return;

    window.addEventListener('pigsty-theme-change', (event) => {
      const detailTheme = event && event.detail ? event.detail.theme : null;
      const fallbackTheme = event && event.theme ? event.theme : null;
      const nextTheme = detailTheme || fallbackTheme || getCurrentTheme();
      renderAsciinemaPlayer(playerContainer, nextTheme);
    });

    playerContainer.dataset.themeListenerBound = '1';
  }

  // ============================================
  // Dashboard Gallery Lazy Loading
  // ============================================
  function initDashboardGallery() {
    const slides = document.querySelectorAll('.dashboard-gallery-slide');
    if (!slides.length) return;

    // IntersectionObserver for lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const slide = entry.target;
          const src = slide.dataset.src;
          const alt = slide.dataset.alt || 'Dashboard';

          if (src && !slide.querySelector('img')) {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            img.loading = 'lazy';

            img.onload = () => {
              slide.classList.add('loaded');
            };

            img.onerror = () => {
              slide.style.display = 'none';
            };

            slide.appendChild(img);
          }

          // Unobserve after loading
          imageObserver.unobserve(slide);
        }
      });
    }, {
      rootMargin: '200px 500px', // Preload images slightly before they enter viewport
      threshold: 0
    });

    slides.forEach(slide => imageObserver.observe(slide));
  }

  // ============================================
  // Initialize Everything
  // ============================================
  function init() {
    initCopyButtons();
    initScrollReveal();
    initSmoothScroll();
    initExtensionTags();
    initCounterAnimation();
    initHeaderScroll();
    initMobileMenu();
    initThemeToggle();
    initAsciinemaPlayer();
    initDashboardGallery();
    // initTypingEffect(); // Optional: enable if needed
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/* Magnet Clinical Solutions — Warm Earth · interactions */
(function () {
  'use strict';

  /* ---- Navbar scroll state ---- */
  var navbar = document.querySelector('.navbar');
  function onScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Dark mode toggle ---- */
  (function () {
    var KEY = 'mcs_theme';
    function isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
    function apply(dark) {
      if (dark) document.documentElement.setAttribute('data-theme', 'dark');
      else document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) {}
    }
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.addEventListener('click', function () { apply(!isDark()); });
    });
  })();

  /* ---- Mobile menu ---- */
  var burger = document.querySelector('.navbar-hamburger');
  var links = document.querySelector('.navbar-links');
  if (burger && links) {
    burger.addEventListener('click', function () { links.classList.toggle('open'); });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  /* ---- Active nav link by filename ---- */
  var page = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.navbar-links a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = ((i % 4) * 0.08) + 's';
      ro.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Process timeline reveal ---- */
  var tlItems = document.querySelectorAll('.tl-item');
  if ('IntersectionObserver' in window && tlItems.length) {
    var tlObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); tlObs.unobserve(en.target); }
      });
    }, { threshold: 0.45 });
    tlItems.forEach(function (el) { tlObs.observe(el); });
  } else {
    tlItems.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Stat counters ---- */
  var counters = document.querySelectorAll('.stat-number[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, target = parseFloat(el.dataset.count) || 0,
            suffix = el.dataset.suffix || '', start = null, dur = 1500;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        cObs.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cObs.observe(el); });
  }

  /* ---- Gallery tabs ---- */
  var tabs = document.querySelectorAll('.tab-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabs.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.dataset.cat || 'all';
      galleryItems.forEach(function (item) {
        var show = cat === 'all' || item.dataset.cat === cat;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  /* ---- Contact form fake-submit ---- */
  var form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type=submit]');
      if (!btn) return;
      var orig = btn.textContent;
      btn.textContent = (window.mcsTranslate ? window.mcsTranslate('Message Sent ✓') : 'Message Sent ✓');
      btn.disabled = true;
      btn.style.background = 'var(--forest-light)';
      setTimeout(function () {
        btn.textContent = orig; btn.disabled = false; btn.style.background = '';
        form.reset();
      }, 3200);
    });
  }
})();

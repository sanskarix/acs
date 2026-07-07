/* =============================================
   ANGEL CREDIT SERVICES — MAIN JS
   Core: Nav scroll, mobile menu, form handlers,
         active link, lazy-load images
   ============================================= */

(function () {
  'use strict';

  /* ── NAV SCROLL ─────────────────────────────────────── */
  var nav = document.getElementById('mainNav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── MOBILE NAV ─────────────────────────────────────── */
  var navToggle = document.getElementById('navToggle');
  var navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });

    // Close on link click (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  /* ── ACTIVE LINK HIGHLIGHTING ────────────────────────── */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    var isActive = href === currentFile ||
                   (currentFile === '' && href === 'index.html') ||
                   (currentFile === 'index.html' && href === 'index.html');
    link.classList.toggle('active', isActive);
  });

  /* ── CONTACT FORM HANDLER ────────────────────────────── */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = document.getElementById('contact-submit-btn');
      if (!submitBtn) return;
      submitBtn.textContent = 'Sending\u2026';
      submitBtn.disabled = true;
      setTimeout(function () {
        contactForm.innerHTML =
          '<div style="text-align:center;padding:var(--sp-12) 0;color:var(--primary-navy);">' +
          '<div style="font-size:2.5rem;margin-bottom:15px;color:var(--accent-gold);">\u2713</div>' +
          '<h3 style="font-family:var(--font-serif);font-weight:400;margin-bottom:8px;">Inquiry Submitted</h3>' +
          '<p style="font-size:var(--fs-base);color:var(--text-secondary);max-width:400px;margin:0 auto;">' +
          'Thank you for reaching out to Angel Credit Services. One of our senior advisors will contact you shortly.' +
          '</p></div>';
      }, 1000);
    });
  }

  /* ── LAZY-LOAD IMAGES ────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    var imgObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px 0px' });

    document.querySelectorAll('img.lazy, img[data-src]').forEach(function (img) {
      imgObserver.observe(img);
    });
  }

  /* ── CONTACT PAGE: LOAN TYPE URL PARAM ───────────────── */
  var urlParams = new URLSearchParams(window.location.search);
  var loanParam = urlParams.get('loan');
  if (loanParam) {
    var select = document.getElementById('loan-type');
    if (select) {
      var map = { home: 'Home Loan', business: 'Business Loan', lap: 'Loan Against Property' };
      if (map[loanParam]) select.value = map[loanParam];
    }
  }

})();

/* =============================================
   ANGEL CREDIT SERVICES — CALCULATOR MODULE
   Shared EMI calculator logic used by:
     - index.html (hero calculator + popup)
     - emi-calculator.html (full calc + amortization + popup)
   ============================================= */

(function () {
  'use strict';

  /* ── Shared Utilities ───────────────────────────────── */
  function calcEMI(P, r, y) {
    var n = y * 12;
    var monthlyR = r / 12 / 100;
    if (monthlyR === 0) return P / n;
    return P * monthlyR * Math.pow(1 + monthlyR, n) / (Math.pow(1 + monthlyR, n) - 1);
  }

  function formatINR(amount) {
    if (amount >= 10000000) return '\u20B9' + (amount / 10000000).toFixed(2) + ' Cr';
    if (amount >= 100000)   return '\u20B9' + (amount / 100000).toFixed(2) + ' L';
    return '\u20B9' + Math.round(amount).toLocaleString('en-IN');
  }

  /* ── Modal Logic (shared) ───────────────────────────── */
  function initModal() {
    var overlay   = document.getElementById('popupModal');
    var closeBtn  = document.getElementById('modalCloseBtn');
    var popupForm = document.getElementById('popupForm');
    if (!overlay) return;

    function openModal() {
      if (!sessionStorage.getItem('popupShown')) {
        overlay.classList.add('active');
        sessionStorage.setItem('popupShown', 'true');
        // focus trap: move focus to close button
        if (closeBtn) closeBtn.focus();
      }
    }

    function closeModal() {
      overlay.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });

    if (popupForm) {
      popupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = popupForm.querySelector('button[type="submit"]');
        btn.textContent = 'Sending\u2026';
        btn.disabled = true;
        setTimeout(function () {
          popupForm.innerHTML =
            '<div style="text-align:center;padding:20px 0;color:var(--primary-navy);">' +
            '<div style="font-size:2rem;margin-bottom:10px;color:var(--accent-gold);">\u2713</div>' +
            '<h4 style="font-weight:600;margin-bottom:4px;">Inquiry Received</h4>' +
            '<p style="font-size:var(--fs-sm);color:var(--text-secondary);">An advisor will call you within 30 minutes.</p>' +
            '</div>';
          setTimeout(closeModal, 2500);
        }, 1000);
      });
    }

    return openModal;
  }

  /* ── Hero Calculator (index.html) ───────────────────── */
  function initHeroCalculator() {
    var amountRange = document.getElementById('amountRange');
    var rateRange   = document.getElementById('rateRange');
    var tenureRange = document.getElementById('tenureRange');
    if (!amountRange || !rateRange || !tenureRange) return;

    var amountVal  = document.getElementById('amountVal');
    var rateVal    = document.getElementById('rateVal');
    var tenureVal  = document.getElementById('tenureVal');
    var emiVal     = document.getElementById('emiVal');
    var interestVal = document.getElementById('interestVal');
    var totalVal   = document.getElementById('totalVal');

    var openModal = initModal();
    var timerId = null;
    var hasCalculated = false;

    function update() {
      var P = parseFloat(amountRange.value);
      var r = parseFloat(rateRange.value);
      var y = parseInt(tenureRange.value, 10);

      amountVal.textContent = formatINR(P);
      rateVal.textContent   = r.toFixed(1) + '%';
      tenureVal.textContent = y + ' Year' + (y > 1 ? 's' : '');

      var emi          = calcEMI(P, r, y);
      var totalPayable = emi * (y * 12);
      var totalInterest = totalPayable - P;

      emiVal.textContent      = '\u20B9' + Math.round(emi).toLocaleString('en-IN');
      interestVal.textContent = '\u20B9' + Math.round(totalInterest).toLocaleString('en-IN');
      totalVal.textContent    = '\u20B9' + Math.round(totalPayable).toLocaleString('en-IN');

      if (!hasCalculated && openModal) {
        hasCalculated = true;
        timerId = setTimeout(openModal, 5000);
      }
    }

    [amountRange, rateRange, tenureRange].forEach(function (el) {
      el.addEventListener('input', update);
    });

    update();
    hasCalculated = false; // reset so first user interaction triggers timer
  }

  /* ── Full EMI Calculator (emi-calculator.html) ──────── */
  function initFullCalculator() {
    var amountRange = document.getElementById('amountRange');
    var rateRange   = document.getElementById('rateRange');
    var tenureRange = document.getElementById('tenureRange');
    var scheduleBody = document.getElementById('scheduleBody');
    if (!amountRange || !scheduleBody) return;

    var amountVal   = document.getElementById('amountVal');
    var rateVal     = document.getElementById('rateVal');
    var tenureVal   = document.getElementById('tenureVal');
    var emiVal      = document.getElementById('emiVal');
    var interestVal = document.getElementById('interestVal');
    var totalVal    = document.getElementById('totalVal');

    var openModal = initModal();
    var hasCalculated = false;

    function renderAmortization(P, r, n, emi) {
      var monthlyR          = r / 12 / 100;
      var balance           = P;
      var rows              = '';
      var totalInterestPaid = 0;
      var totalPrincipalPaid = 0;

      for (var month = 1; month <= n; month++) {
        var interestPart  = balance * monthlyR;
        var principalPart = emi - interestPart;
        balance -= principalPart;
        totalInterestPaid   += interestPart;
        totalPrincipalPaid  += principalPart;

        if (month % 12 === 0 || month === n) {
          var year = Math.ceil(month / 12);
          rows +=
            '<tr>' +
            '<td>Year ' + year + '</td>' +
            '<td>\u20B9' + Math.round(totalPrincipalPaid).toLocaleString('en-IN') + '</td>' +
            '<td>\u20B9' + Math.round(totalInterestPaid).toLocaleString('en-IN') + '</td>' +
            '<td>\u20B9' + Math.round(emi * 12).toLocaleString('en-IN') + '</td>' +
            '<td>\u20B9' + Math.max(0, Math.round(balance)).toLocaleString('en-IN') + '</td>' +
            '</tr>';
          totalInterestPaid  = 0;
          totalPrincipalPaid = 0;
        }
      }
      scheduleBody.innerHTML = rows;
    }

    function update() {
      var P = parseFloat(amountRange.value);
      var r = parseFloat(rateRange.value);
      var y = parseInt(tenureRange.value, 10);
      var n = y * 12;

      amountVal.textContent  = formatINR(P);
      rateVal.textContent    = r.toFixed(1) + '%';
      tenureVal.textContent  = y + ' Year' + (y > 1 ? 's' : '');

      var emi           = calcEMI(P, r, y);
      var totalPayable  = emi * n;
      var totalInterest = totalPayable - P;

      emiVal.textContent      = '\u20B9' + Math.round(emi).toLocaleString('en-IN');
      interestVal.textContent = '\u20B9' + Math.round(totalInterest).toLocaleString('en-IN');
      totalVal.textContent    = '\u20B9' + Math.round(totalPayable).toLocaleString('en-IN');

      renderAmortization(P, r, n, emi);

      if (!hasCalculated && openModal) {
        hasCalculated = true;
        setTimeout(openModal, 5000);
      }
    }

    [amountRange, rateRange, tenureRange].forEach(function (el) {
      el.addEventListener('input', update);
    });

    update();
    hasCalculated = false;
  }

  /* ── Auto-init based on page context ────────────────── */
  if (document.getElementById('scheduleBody')) {
    initFullCalculator();
  } else if (document.getElementById('amountRange')) {
    initHeroCalculator();
  }

})();

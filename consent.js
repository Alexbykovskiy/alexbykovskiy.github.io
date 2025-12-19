document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('cookie-overlay');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const fab = document.getElementById('cookie-fab');

  const consent = localStorage.getItem('cookieConsent');

  // =========================
  // 🍪 COOKIE FAB — ВСЕГДА
  // =========================
  if (fab) {
    // показываем кнопку, если выбор уже сделан
    if (consent === 'accepted' || consent === 'declined') {
      fab.style.display = 'flex';
    }

    // клик по кнопке — открыть overlay или перейти на privacy
    fab.addEventListener('click', () => {
      if (overlay) {
        overlay.style.display = 'flex';
        fab.style.display = 'none';
      } else {
        // если overlay нет (privacy.html) — идём на главную
        window.location.href = '/';
      }
    });
  }

  // =========================
  // ЕСЛИ НЕТ OVERLAY — ВЫХОД
  // =========================
  if (!overlay || !acceptBtn || !declineBtn) return;

  // =========================
  // СОСТОЯНИЕ ПРИ ЗАГРУЗКЕ
  // =========================
  if (consent === 'accepted') {
    overlay.style.display = 'none';
    if (typeof loadGTM === 'function') loadGTM();
    return;
  }

  if (consent === 'declined') {
    overlay.style.display = 'none';
    return;
  }

  // первый визит
  overlay.style.display = 'flex';
  if (fab) fab.style.display = 'none';

  // =========================
  // ACCEPT
  // =========================
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    overlay.style.display = 'none';
    if (fab) fab.style.display = 'flex';
    if (typeof loadGTM === 'function') loadGTM();
  });

  // =========================
  // DECLINE
  // =========================
  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    overlay.style.display = 'none';
    if (fab) fab.style.display = 'flex';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('cookie-overlay');
  const fab = document.getElementById('cookie-fab');

  const consent = localStorage.getItem('cookieConsent');

  // =========================
  // 🍪 FAB — ВСЕГДА РАБОТАЕТ
  // =========================
  if (fab) {
    if (consent === 'accepted' || consent === 'declined') {
      fab.style.display = 'flex';
    }

    fab.addEventListener('click', () => {
      if (overlay) {
        overlay.style.display = 'flex';
        fab.style.display = 'none';
      } else {
        window.location.href = '/';
      }
    });
  }

  // =========================
  // ЕСЛИ OVERLAY НЕТ — ВЫХОД
  // =========================
  if (!overlay) return;

  // =========================
  // СОСТОЯНИЕ ПРИ ЗАГРУЗКЕ
  // =========================
  if (consent === 'accepted') {
    overlay.style.display = 'none';
    if (typeof loadGTM === 'function') loadGTM();
  if (typeof loadOpenStreetMap === 'function') loadOpenStreetMap();
  } else if (consent === 'declined') {
    overlay.style.display = 'none';
  } else {
    overlay.style.display = 'flex';
    if (fab) fab.style.display = 'none';
  }

  // =========================
  // 💥 EVENT DELEGATION
  // =========================
  overlay.addEventListener('click', (e) => {
    if (e.target.id === 'cookie-accept') {
  localStorage.setItem('cookieConsent', 'accepted');

  overlay.style.display = 'none';

  if (fab) {
    fab.style.display = 'flex';

    // запускаем мягкий pulse (перезапуск анимации)
    fab.classList.remove('pulse');
    requestAnimationFrame(() => {
      fab.classList.add('pulse');
    });
  }

  if (typeof loadGTM === 'function') loadGTM();
  if (typeof loadOpenStreetMap === 'function') loadOpenStreetMap();
}

    if (e.target.id === 'cookie-decline') {
  localStorage.setItem('cookieConsent', 'declined');

  overlay.style.display = 'none';

  if (fab) {
    fab.style.display = 'flex';

    // запускаем мягкий pulse (перезапуск анимации)
    fab.classList.remove('pulse');
    requestAnimationFrame(() => {
      fab.classList.add('pulse');
    });
  }
}
  });
});
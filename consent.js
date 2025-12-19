function syncCookieUI() {
  const consent = localStorage.getItem('cookieConsent');
  const overlay = document.getElementById('cookie-overlay');
  const fab = document.getElementById('cookie-fab');

  if (!overlay || !fab) return;

  if (consent === 'accepted' || consent === 'declined') {
    overlay.style.display = 'none';

    // показываем кнопку
    fab.style.display = 'flex';

    // запускаем мягкий пульс
    fab.classList.remove('pulse');
    requestAnimationFrame(() => {
      fab.classList.add('pulse');
    });

  } else {
    overlay.style.display = 'flex';
    fab.style.display = 'none';
  }
}
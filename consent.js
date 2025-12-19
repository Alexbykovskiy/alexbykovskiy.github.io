function syncCookieUI() {
  const consent = localStorage.getItem('cookieConsent');
  const overlay = document.getElementById('cookie-overlay');
  const fab = document.getElementById('cookie-fab');

  if (!overlay || !fab) return;

  if (consent === 'accepted' || consent === 'declined') {
    overlay.style.display = 'none';
    fab.style.display = 'flex';
  } else {
    overlay.style.display = 'flex';
    fab.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const fab = document.getElementById('cookie-fab');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      syncCookieUI();
      if (typeof loadGTM === 'function') loadGTM();
      if (typeof loadMap === 'function') loadMap();
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'declined');
      syncCookieUI();
    });
  }

  if (fab) {
    fab.addEventListener('click', () => {
      localStorage.removeItem('cookieConsent');
      syncCookieUI();
    });
  }

  syncCookieUI();
});

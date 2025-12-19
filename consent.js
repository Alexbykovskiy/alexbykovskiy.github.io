document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('cookie-overlay');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const fab = document.getElementById('cookie-fab');

  if (!overlay || !acceptBtn || !declineBtn || !fab) return;

  const consent = localStorage.getItem('cookieConsent');

  // --- если уже был выбор ---
  if (consent === 'accepted') {
    overlay.style.display = 'none';
    fab.style.display = 'flex';
    if (typeof loadGTM === 'function') loadGTM();
    return;
  }

  if (consent === 'declined') {
    overlay.style.display = 'none';
    fab.style.display = 'flex';
    return;
  }

  // --- первый визит ---
  overlay.style.display = 'flex';
  fab.style.display = 'none';

  // --- ACCEPT ---
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    overlay.style.display = 'none';
    fab.style.display = 'flex';
    if (typeof loadGTM === 'function') loadGTM();
  });

  // --- DECLINE ---
  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    overlay.style.display = 'none';
    fab.style.display = 'flex';
  });

  // --- клик по круглой кнопке ---
  fab.addEventListener('click', () => {
    overlay.style.display = 'flex';
    fab.style.display = 'none';
  });
});
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

function closeMenu() {
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Menü öffnen');
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen ? 'Menü schließen' : 'Menü öffnen');
    nav.classList.toggle('open', willOpen);
    document.body.classList.toggle('menu-open', willOpen);
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach(node => {
  node.textContent = new Date().getFullYear();
});

/* Keep offer labels typographically clean. */
document.querySelectorAll('.offers-showcase h2').forEach(node => {
  if (node.textContent.trim() === 'Hol- & Bringservice') node.textContent = 'Hol & Bringservice';
  if (node.textContent.trim() === 'Motor- & Getriebeöl') node.textContent = 'Motor & Getriebeöl';
});

document.querySelectorAll('a.brand').forEach(link => {
  if (!link.hasAttribute('aria-label')) {
    link.setAttribute('aria-label', 'CHECKPOINT Startseite');
  }
});

document.querySelectorAll('.site-footer .footer-grid').forEach(footerGrid => {
  const legalColumn = footerGrid.lastElementChild;
  if (!legalColumn) return;

  const footer = footerGrid.closest('.site-footer');
  const footerBottom = footer?.querySelector('.footer-bottom');
  const copyright = footerBottom?.firstElementChild;
  const legalLinks = legalColumn.querySelectorAll('.footer-links a');

  if (footerBottom && copyright && legalLinks.length) {
    const copyrightLinks = document.createElement('div');
    copyrightLinks.className = 'footer-copyright-links';
    copyright.before(copyrightLinks);
    copyrightLinks.append(copyright, ...legalLinks);
    legalColumn.querySelector('.footer-links')?.remove();
  }

  const tools = document.createElement('div');
  tools.className = 'footer-tools';
  tools.innerHTML = `
    <button class="footer-chatbot" type="button" disabled title="Der Chatbot wird später freigeschaltet">
      <span aria-hidden="true">✦</span> Chatbot <small>Demnächst</small>
    </button>
    <div class="footer-socials" aria-label="Soziale Netzwerke · demnächst">
      <button type="button" disabled aria-label="Facebook · demnächst" title="Facebook · demnächst">f</button>
      <button type="button" disabled aria-label="Instagram · demnächst" title="Instagram · demnächst">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle class="social-dot" cx="17.4" cy="6.7" r="1"></circle></svg>
      </button>
      <button type="button" disabled aria-label="TikTok · demnächst" title="TikTok · demnächst">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.1a4.1 4.1 0 1 1-3.2-4V13a1.8 1.8 0 1 0 .8 1.5V4h2.4Zm0 0c.5 2.1 1.8 3.5 4 4v2.5c-1.6-.2-2.9-.8-4-1.8"></path></svg>
      </button>
    </div>
  `;
  legalColumn.append(tools);
});

document.querySelectorAll('.footer-bottom span').forEach(node => {
  if (!node.textContent.includes('Franzgraben 40')) return;

  const mapLink = document.createElement('a');
  mapLink.className = 'footer-address';
  mapLink.href = 'https://www.google.com/maps/search/?api=1&query=Franzgraben+40-42+34125+Kassel';
  mapLink.target = '_blank';
  mapLink.rel = 'noopener noreferrer';
  mapLink.textContent = `${node.textContent.trim()} ↗`;
  node.replaceWith(mapLink);
});

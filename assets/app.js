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

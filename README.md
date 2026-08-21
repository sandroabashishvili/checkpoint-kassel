# CHECKPOINT Kassel

Responsive prototype website for CHECKPOINT KFZ-Meisterbetrieb in Kassel.

Preview: `https://sandro-abashishvili.de/checkpoint-kassel/` (`noindex, nofollow`)

## Current status

The site is a polished prototype and is intentionally excluded from search indexing for now (`noindex, nofollow`). Before an official public launch, business/legal details should be verified and the indexing settings reviewed.

## Pages

- Startseite
- Leistungen
- Angebote
- Über uns
- Kontakt
- Impressum
- Datenschutz
- Custom 404 page

## Features

- Responsive desktop, tablet and mobile layouts
- Automatic light/dark appearance based on the device/browser preference
- Mobile navigation with accessible menu controls
- Service overview and current workshop offers
- Direct WhatsApp, phone, email and route actions
- Opening hours and workshop address
- Custom CHECKPOINT branding, favicon and app icons
- SEO/social metadata prepared for a future public launch
- Web app manifest and install icons
- GitHub Pages deployment

## Frontend structure

- `index.html` and page folders: site content
- `assets/styles.css`: shared base styles and light/dark theme
- `assets/v2.css`: extended layout/branding layer imported by `styles.css`
- `assets/refinements.css`: final shared interaction and responsive refinements
- `assets/app.js`: mobile navigation, footer enhancements and small UI behavior
- `assets/images/`: branding, hero image and interface icons

The main customer-facing pages load both `styles.css` and `refinements.css` so navigation, cards and CTA behavior stay consistent across the site.

## Tech

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

No framework or build step is required.

## Local development

```bash
cd ~/portfolio_projects/checkpoint-kassel
python3 -m http.server 8090 --bind 127.0.0.1
```

Then open:

`http://127.0.0.1:8090/`

## Sync with GitHub

Before continuing local work after changes were made on GitHub:

```bash
git fetch origin
git status
git pull --ff-only
```

A clean synchronized checkout should end with:

```text
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

## Deployment

GitHub Pages deploys from the `main` branch.

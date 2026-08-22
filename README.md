# CHECKPOINT Kassel

Responsive Website-Prototyp für einen KFZ-Meisterbetrieb in Kassel.

**Vorschau:** [sandro-abashishvili.de/checkpoint-kassel](https://sandro-abashishvili.de/checkpoint-kassel/)  
Die Vorschau ist bewusst mit `noindex, nofollow` von der Suchmaschinen-Indexierung ausgeschlossen.

## Ziel des Projekts

Der Prototyp zeigt, wie eine lokale Werkstatt ihre Leistungen, Angebote und Kontaktwege klar und mobilfreundlich präsentieren kann. Der Schwerpunkt liegt auf einer einfachen Kundenführung: Leistungen verstehen, aktuelle Angebote sehen und schnell per Telefon, WhatsApp, E-Mail oder Route Kontakt aufnehmen.

## Aktueller Stand

Die Website ist als ausgearbeiteter Portfolio-Prototyp fertiggestellt. Vor einer offiziellen Veröffentlichung für einen realen Betrieb müssten Geschäfts-, Kontakt- und Rechtstexte final geprüft und anschließend die Indexierungsregeln angepasst werden.

## Seiten

- Startseite
- Leistungen
- Angebote
- Über uns
- Kontakt
- Impressum
- Datenschutz
- eigene 404-Seite

## Funktionen

- responsive Desktop-, Tablet- und Mobile-Ansichten
- automatische Hell-/Dunkeldarstellung nach Systemeinstellung
- zugängliche mobile Navigation
- Leistungsübersicht und Werkstattangebote
- direkte Aktionen für WhatsApp, Telefon, E-Mail und Route
- Öffnungszeiten und Standortinformationen
- eigene CHECKPOINT-Gestaltung, Favicon und App-Icons
- vorbereitete SEO- und Social-Media-Metadaten
- Web-App-Manifest
- Veröffentlichung über GitHub Pages

## Technik

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

Das Projekt benötigt kein Framework und keinen Build-Schritt.

## Projektstruktur

- `index.html` und Seitenordner – Inhalte
- `assets/styles.css` – gemeinsame Basis und Theme
- `assets/v2.css` – erweitertes Layout und Branding
- `assets/refinements.css` – gemeinsame Interaktions- und Responsive-Anpassungen
- `assets/app.js` – Navigation und kleinere UI-Funktionen
- `assets/images/` – Branding, Hero-Bild und Icons

## Lokal ansehen

```bash
cd ~/portfolio_projects/checkpoint-kassel
python3 -m http.server 8090 --bind 127.0.0.1
```

Danach:

```text
http://127.0.0.1:8090/
```

## Entwicklungsregel

Vor lokaler Weiterarbeit nach Änderungen auf GitHub:

```bash
git fetch origin
git status
git pull --ff-only
```

GitHub Pages veröffentlicht aus dem Branch `main`.

## Autor

Sandro Abashishvili

[Portfolio](https://sandro-abashishvili.de/) ·
[GitHub](https://github.com/sandroabashishvili)

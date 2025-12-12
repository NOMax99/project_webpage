# Webseite

Eine wiederverwendbare, klar strukturierte Website mit dynamischem Content-Management-System.

## Features

- ✅ **Wiederverwendbare Struktur**: Modulare Komponenten für einfache Anpassung
- ✅ **Klar strukturiert**: Organisierte Ordnerstruktur für bessere Wartbarkeit
- ✅ **Dynamisches Content-Management**: Neue Einträge einfach über JSON hinzufügen
- ✅ **Responsive Design**: Optimiert für alle Bildschirmgrößen
- ✅ **Moderne Technologien**: HTML5, CSS3, ES6+ JavaScript
- ✅ **Keine Abhängigkeiten**: Funktioniert ohne externe Bibliotheken

## Projektstruktur

```
Webseite/
├── index.html              # Hauptseite
├── css/
│   └── style.css          # Styling
├── js/
│   ├── main.js            # Hauptlogik
│   └── newsLoader.js      # Content-Loader
├── data/
│   └── news.json          # Neuigkeiten-Daten
├── components/             # Wiederverwendbare Komponenten
├── images/                # Bilder
├── ANLEITUNG.md           # Detaillierte Anleitung
└── README.md              # Diese Datei
```

## Schnellstart

1. Klonen Sie das Repository
2. Öffnen Sie `index.html` in einem Webbrowser oder starten Sie einen lokalen Server:

```bash
# Mit Python
python -m http.server 8000

# Mit Node.js
npx serve

# Mit PHP
php -S localhost:8000
```

3. Öffnen Sie http://localhost:8000 in Ihrem Browser

## Neue Inhalte hinzufügen

### Neue Neuigkeiten:
1. Öffnen Sie `data/news.json`
2. Fügen Sie einen neuen Eintrag hinzu:

```json
{
  "id": 5,
  "title": "Ihre Neuigkeit",
  "date": "2025-12-12",
  "category": "Kategorie",
  "description": "Beschreibung",
  "image": "images/bild.jpg"
}
```

Siehe [ANLEITUNG.md](ANLEITUNG.md) für detaillierte Informationen.

## Technologien

- HTML5
- CSS3 (mit CSS-Variablen und Grid/Flexbox)
- JavaScript (ES6+ Module)
- JSON für Datenspeicherung

## Browser-Unterstützung

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## Lizenz

Dieses Projekt steht zur freien Verfügung und kann nach Belieben angepasst werden.
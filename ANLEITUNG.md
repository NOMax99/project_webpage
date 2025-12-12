# Anleitung: Neue Inhalte hinzufügen

Diese Anleitung erklärt, wie Sie neue Neuigkeiten und Einträge zu der Webseite hinzufügen können.

## Struktur der Webseite

Die Webseite ist modular aufgebaut und besteht aus folgenden Hauptkomponenten:

```
Webseite/
├── index.html              # Hauptseite mit HTML-Struktur
├── css/
│   └── style.css          # Styling-Definitionen
├── js/
│   ├── main.js            # Hauptlogik und Navigation
│   └── newsLoader.js      # Dynamisches Laden von Neuigkeiten
├── data/
│   └── news.json          # Datenspeicher für Neuigkeiten
├── components/             # Wiederverwendbare Komponenten (zukünftige Erweiterungen)
└── images/                # Bilder für die Webseite
```

## Neue Neuigkeiten hinzufügen

### Methode 1: JSON-Datei bearbeiten (Empfohlen)

1. Öffnen Sie die Datei `data/news.json`

2. Fügen Sie einen neuen Eintrag im `news`-Array hinzu:

```json
{
  "id": 5,
  "title": "Ihr Titel hier",
  "date": "2025-12-12",
  "category": "Ihre Kategorie",
  "description": "Ihre Beschreibung hier",
  "image": "images/ihr-bild.jpg"
}
```

### Felder Erklärung:

- **id**: Eindeutige Nummer (muss größer sein als alle vorhandenen IDs)
- **title**: Überschrift der Neuigkeit
- **date**: Datum im Format YYYY-MM-DD
- **category**: Kategorie (z.B. "Ankündigung", "Entwicklung", "Feature", "Design")
- **description**: Beschreibungstext der Neuigkeit
- **image**: Pfad zum Bild (optional, kann leer bleiben "")

### Beispiel eines vollständigen Eintrags:

```json
{
  "news": [
    {
      "id": 1,
      "title": "Neue Website gestartet",
      "date": "2025-12-12",
      "category": "Ankündigung",
      "description": "Wir freuen uns, unsere neue wiederverwendbare Website-Struktur zu präsentieren.",
      "image": ""
    },
    {
      "id": 2,
      "title": "Ihre neue Neuigkeit",
      "date": "2025-12-13",
      "category": "Update",
      "description": "Beschreibung Ihrer neuen Neuigkeit.",
      "image": "images/neuigkeit.jpg"
    }
  ]
}
```

## Bilder hinzufügen

1. Speichern Sie Ihr Bild im Ordner `images/`
2. Verwenden Sie den relativen Pfad in der JSON-Datei: `"images/bildname.jpg"`
3. Empfohlene Bildgröße: 600x400 Pixel

## Neue Seiten hinzufügen

Um eine neue Seite zur Navigation hinzuzufügen:

1. Erstellen Sie eine neue HTML-Datei (z.B. `neue-seite.html`)
2. Kopieren Sie die Struktur von `index.html` als Vorlage
3. Fügen Sie den Link in der Navigation in `index.html` hinzu:

```html
<li><a href="neue-seite.html" class="nav-link">Neue Seite</a></li>
```

## CSS-Anpassungen

Alle Styling-Definitionen befinden sich in `css/style.css`. Um das Design anzupassen:

1. Öffnen Sie `css/style.css`
2. Finden Sie den relevanten CSS-Abschnitt
3. Ändern Sie die gewünschten Eigenschaften

### Wichtige CSS-Variablen:

```css
:root {
    --primary-color: #2c3e50;      /* Hauptfarbe */
    --secondary-color: #3498db;     /* Sekundärfarbe */
    --accent-color: #e74c3c;        /* Akzentfarbe */
    --text-color: #333;             /* Textfarbe */
    --light-bg: #f8f9fa;            /* Heller Hintergrund */
}
```

## JavaScript-Erweiterungen

Die JavaScript-Logik ist modular aufgebaut:

- **main.js**: Hauptlogik, Navigation, Smooth Scrolling
- **newsLoader.js**: Lädt und rendert Neuigkeiten aus der JSON-Datei

Um neue Funktionalität hinzuzufügen:

1. Erstellen Sie ein neues JavaScript-Modul in `js/`
2. Importieren Sie es in `main.js`
3. Initialisieren Sie die Funktion in der `DOMContentLoaded`-Event-Handler

## Wiederverwendbare Komponenten

Die Webseite ist so konzipiert, dass Komponenten leicht wiederverwendet werden können:

### News Card Komponente

Wird automatisch aus der JSON-Datei generiert. Struktur:

```html
<article class="news-card">
    <img class="news-card-image" src="..." alt="...">
    <div class="news-card-content">
        <h3 class="news-card-title">Titel</h3>
        <p class="news-card-date">Datum</p>
        <p class="news-card-description">Beschreibung</p>
        <span class="news-card-category">Kategorie</span>
    </div>
</article>
```

### Header Komponente

Die Navigation ist wiederverwendbar und kann leicht erweitert werden.

### Footer Komponente

Der Footer ist ein wiederverwendbarer Block am Ende jeder Seite.

## Best Practices

1. **Konsistenz**: Halten Sie das Format konsistent mit bestehenden Einträgen
2. **Validierung**: Stellen Sie sicher, dass die JSON-Syntax korrekt ist
3. **IDs**: Verwenden Sie eindeutige IDs für jeden Eintrag
4. **Datumsformat**: Verwenden Sie immer das Format YYYY-MM-DD
5. **Bilder optimieren**: Komprimieren Sie Bilder vor dem Hochladen
6. **Testen**: Testen Sie die Webseite nach Änderungen lokal

## Lokales Testen

Um die Webseite lokal zu testen:

1. Öffnen Sie `index.html` in einem modernen Webbrowser
2. Oder verwenden Sie einen lokalen Webserver:

```bash
# Python 3
python -m http.server 8000

# Node.js (mit npx)
npx serve

# PHP
php -S localhost:8000
```

3. Öffnen Sie http://localhost:8000 in Ihrem Browser

## Fehlerbehebung

### Neuigkeiten werden nicht angezeigt
- Überprüfen Sie die JSON-Syntax in `data/news.json`
- Öffnen Sie die Browser-Konsole (F12) für Fehlermeldungen
- Stellen Sie sicher, dass die Webseite über einen Server läuft (nicht als file://)

### Styling funktioniert nicht
- Überprüfen Sie den Pfad zur CSS-Datei in `index.html`
- Löschen Sie den Browser-Cache

### JavaScript-Fehler
- Öffnen Sie die Browser-Konsole (F12)
- Überprüfen Sie die Fehlermeldungen
- Stellen Sie sicher, dass alle JavaScript-Dateien korrekt verlinkt sind

## Unterstützung

Bei Fragen oder Problemen:
1. Überprüfen Sie diese Dokumentation
2. Schauen Sie sich die Beispiel-Einträge in `data/news.json` an
3. Testen Sie Änderungen lokal vor dem Deployment

## Lizenz

Diese Webseite-Struktur ist wiederverwendbar und kann frei angepasst werden.

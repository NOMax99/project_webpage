TEAMS

 <h1>Team</h1>
                <p class="lead">A transnational network of researchers, farmers, and advisors</p>
            </div>
        </section>
        
        <section class="container content">
            <h2>Project Coordination</h2>
            <p>DisCoverCrop is coordinated by Prof. Laura Grenville-Briggs at SLU (Swedish University of Agricultural Sciences). The project brings together five academic institutions with complementary interdisciplinary expertise across soil science, plant science, microbiology, and communication research.</p>
            
            <h2>Research Partners</h2>
            
            <div class="cards-grid">
                <article class="card">
                    <h3>P1 – SLU (Sweden)</h3>
                    <p><strong>Project Coordination, WP1, WP2 &amp; WP4 Lead</strong></p>
                    <p>Swedish University of Agricultural Sciences provides expertise in agroecology, plant-microbe interactions, and communication research. The coordination team manages overall project progress, reporting, and consortium activities.</p>
                    <p><em>Staff effort: 52 person-months</em></p>
                </article>
                <article class="card">
                    <h3>P2 – WUR (Netherlands)</h3>
                    <p><strong>Plant Sciences &amp; Field Trials</strong></p>
                    <p>Wageningen University &amp; Research operates PD-certified and GLOBAL-GAP certified field trial sites. Expertise in plant physiology, yield optimization, and practice-oriented research with co-creation approach.</p>
                    <p><em>Staff effort: 10 person-months</em></p>
                </article>
                <article class="card">
                    <h3>P3 – NORSØK (Norway)</h3>
                    <p><strong>WP5 Lead – Agroecological Management</strong></p>
                    <p>Norwegian Centre for Organic Agriculture owns the certified organic farm "Tingvoll Gard" with established long-term cover crop trials. Leads synthesis of practical guidelines and farmer-managed field trials.</p>
                    <p><em>Staff effort: 21 person-months</em></p>
                </article>
                <article class="card">
                    <h3>P4 – FZJ (Germany)</h3>
                    <p><strong>WP3 Lead – Physico-chemical Soil Effects</strong></p>
                    <p>Forschungszentrum Jülich specializes in soil chemistry, soil microbiome analysis, and pathogen interactions. Partners with Research Station Dethlingen for field trials under the Lower Saxony Chamber of Agriculture.</p>
                    <p><em>Staff effort: 36 person-months</em></p>
                </article>
                <article class="card">
                    <h3>P5 – EMU (Estonia)</h3>
                    <p><strong>Communication &amp; Virtual Living Labs</strong></p>
                    <p>Estonian University of Life Sciences leads virtual living labs, virtual farm tours, and supports communication outreach for dispersed rural populations across Northern Europe.</p>
                    <p><em>Staff effort: 21 person-months</em></p>
                </article>
            </div>
            
            <!-- Placeholder for consortium map figure -->
            <figure class="content-figure">
                <img src="images/consortium-map.jpg" alt="DisCoverCrop Consortium Map" class="responsive-img">
                <figcaption>Figure: DisCoverCrop partner institutions across Europe</figcaption>
            </figure>
            
            <h2>Industry &amp; Stakeholder Partners</h2>
            <p>DisCoverCrop works closely with farmers, agricultural advisors, and industry partners to ensure research relevance and practical applicability:</p>
            
            <h3>Sweden</h3>
            <ul>
                <li><strong>Lyckeby Starch AB</strong> – Farmer-owned cooperative and starch potato company</li>
            </ul>
            
            <h3>Netherlands</h3>
            <ul>
                <li><strong>HZPC</strong> – Dutch seed potato trading &amp; breeding</li>
                <li><strong>NAO</strong> – Dutch Potato Organisation</li>
                <li><strong>BO Akkerbouw</strong> – Arable farming organization</li>
            </ul>
            
            <h3>Norway</h3>
            <ul>
                <li><strong>Sunndalspotet AS</strong> – Potato producer &amp; trading</li>
                <li><strong>NLR midt</strong> – Norwegian Agricultural Advisory Service</li>
                <li><strong>Norwegian Potato Fagforum</strong> – Potato trade &amp; farmer organization</li>
            </ul>
            
            <h3>Germany</h3>
            <ul>
                <li><strong>Research Station Dethlingen</strong> – Potato research under LWK Lower Saxony</li>
                <li><strong>LWK Lower Saxony</strong> – Chamber of Agriculture advisory services</li>
            </ul>
            
            <h3>Estonia</h3>
            <ul>
                <li><strong>Eesti Kartul</strong> – Potato trade organization</li>
                <li><strong>Talukartul</strong> – Potato production company</li>
            </ul>
            
            <h2>Scientific &amp; Industrial Advisory Board</h2>
            <p>The project is supported by a scientific and industrial advisory board with expertise in multi-actor projects and cover crop use in European farming systems. The advisory board provides external guidance and ensures alignment with broader agricultural research and policy developments.</p>
            
            <h2>Management Structure</h2>
            <p>Project decisions are governed by a Management Board consisting of work package leaders representing all five academic partners. The board ensures smooth operation, data management, IPR management, and regulatory/ethical compliance. A consortium agreement governs implementation, with decisions taken by simple majority.</p>
            




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
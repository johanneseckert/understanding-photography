# sw-photoclub — Schwarz-Weiß Fotografie Tools

## Kontext
Interaktive HTML-Tools für einen Vortrag beim **Photoclub Reutlingen** zum Thema 
"Bildbearbeitung in Schwarz-Weiß". Erstellt von Johannes (Adobe), der den Vortrag hält.

Alle Tools sind **standalone HTML** — kein Build-System, kein Framework, kein Backend.
Unsplash-Bilder werden direkt per URL geladen (CORS-freundlich).

## Projekt-Struktur
```
sw-photoclub/
├── index.html                    # Hub-Seite mit Links zu allen Tools
├── netlify.toml                  # Netlify-Konfiguration (Headers für iFrame-Embedding)
├── CLAUDE.md                     # Diese Datei
└── tools/
    ├── grundlagen.html           # Tools 01–03 (Luminanz, Channel Mixer, Zonentheorie)
    ├── filter-simulation.html    # Tool 04 (WebGL analoger Farbfilter)
    └── zonen-analyse.html        # Tool 05 (p5.js Zonenanalyse + Histogramm)
```

## Design-System
Alle Seiten teilen dieselben CSS-Variablen:
- `--bg: #0c0c0c` / `--bg2: #141414` / `--bg3: #1c1c1c`
- `--accent: #c8a97e` (warmes Gold)
- `--text: #e8e4de` / `--text-dim: #9b9590` / `--text-muted: #6b6660`
- Fonts: `Cormorant Garamond` (Serif/Headlines) + `DM Mono` (Labels/Werte) + `DM Sans` (Fließtext)

## Tool-Beschreibungen

### 01–03: grundlagen.html
- Single-Page mit Nav (3 Tabs)
- **Tab 01:** Farbpicker → Luminanzformel live + "gleiche Helligkeit"-Grid (8 Farben mit identischem Luminanzwert)
- **Tab 02:** Channel Mixer — 10 Farbpatches (Rot, Orange, Gelb, Grün, Haut, etc.) + 5 Presets (Standard, Landschaft, Portrait, Infrarot, High Contrast)
- **Tab 03:** Zonentheorie — 11 Zonen als klickbarer Farbstreifen + Detailansicht + Beschreibungstabelle

### 04: filter-simulation.html
- **WebGL** Fragment-Shader für Echtzeit-Pixelverarbeitung
- Drag-Teiler (Split-View): links Original, rechts gefiltertes S/W
- 7 Filter: Kein Filter / Gelb / Orange / Rot / Grün / Blau / Infrarot
- Sidebar: Filterinfo + Szenen-Effekte-Tabelle (Himmel, Wolken, Laub, Rot, Haut)
- 3 Preset-Unsplash-Bilder + eigenes Bild hochladen

### 05: zonen-analyse.html
- **p5.js** pixelweises Rendering
- 3 Modi: Farbe / S/W / Zonen-Heatmap (stufenlos mischbar per Slider)
- Spektrale Heatmap: Zone 0 = Dunkelblau → Zone V = Grün → Zone X = Dunkelrot
- Maus-Probe: Zone, Name, Luminanzwert per Hover
- Canvas-Histogramm mit 11 Zonen-Bändern + Durchschnittslinie
- Zonenverteilung-Legende mit Prozentangaben

## Hosting-Setup (TODO für Claude Code)

### GitHub Repo erstellen
```bash
git init
git add .
git commit -m "initial: sw-photoclub tools for Photoclub Reutlingen"
# dann: GitHub remote hinzufügen und pushen
```

### Netlify verbinden
1. netlify.toml ist bereits konfiguriert (publish dir = ".", no build command)
2. In Netlify: "New site from Git" → GitHub Repo auswählen
3. Build settings werden automatisch aus netlify.toml gelesen
4. Deploy — fertig

### Notion Embedding
Nach dem Deploy: jede Tool-URL als Notion Embed Block einbetten:
- `/embed` Block in Notion erstellen
- URL eintragen: `https://DEINE-NETLIFY-URL.netlify.app/tools/grundlagen.html`
- Die `netlify.toml` erlaubt bereits `frame-ancestors *` für iFrame-Embedding

## Offene Punkte / mögliche Erweiterungen
- [ ] Eigene Fotos von Johannes einbauen (als Preset-Bilder in filter-simulation + zonen-analyse)
- [ ] Alle 4 Tools in eine einzige navigierbare Seite zusammenführen (optional)
- [ ] Mobile-Optimierung (aktuell Desktop-first)
- [ ] Zurück-Navigation zwischen den einzelnen Tools
- [ ] Tool 04+05 noch nicht in grundlagen.html Navigation integriert

## Technische Hinweise
- WebGL in filter-simulation.html: `crossOrigin='anonymous'` auf Image-Objekt nötig für Unsplash
- p5.js via CDN: `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js`
- Fonts via Google Fonts CDN (gleiche URL in allen Files)
- Kein npm, kein build step — alles pure HTML/CSS/JS

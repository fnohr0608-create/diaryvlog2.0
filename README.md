# 🎥 Video-Tagebuch Website

Eine futuristische, minimalistische Website für dein persönliches Video-Tagebuch mit YouTube-Integration.

## 📁 Dateien

- `index.html` - Hauptseite mit HTML-Struktur
- `styles.css` - Futuristisches Design mit Animationen
- `script.js` - Funktionalität für Kalender und Timeline
- `data.js` - Deine Video-Daten (hier fügst du neue Videos hinzu)

## 🎬 Videos hinzufügen

### YouTube Video-ID finden:
1. Öffne dein YouTube-Video
2. Die URL sieht so aus: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
3. Die Video-ID ist der Teil nach `v=`: `dQw4w9WgXcQ`

### Video in data.js eintragen:

```javascript
const videoData = {
    "2025-02-14": {
        youtubeId: "dQw4w9WgXcQ",  // Deine YouTube Video-ID
        title: "Titel des Videos",
        description: "Beschreibung des Tages"
    },
    // Weitere Videos...
};
```

**Wichtig:** Das Datum muss im Format `YYYY-MM-DD` sein (z.B. `2025-03-15`)

## 🚀 Hosting-Optionen

### Option 1: GitHub Pages (KOSTENLOS & EINFACH) ⭐ EMPFOHLEN

**Vorteile:**
- ✅ Komplett kostenlos
- ✅ Sehr einfach einzurichten
- ✅ Automatische Updates bei Änderungen
- ✅ Eigene Domain möglich
- ✅ HTTPS inklusive

**Anleitung:**

1. **GitHub Account erstellen**
   - Gehe zu https://github.com
   - Klicke auf "Sign up" und erstelle einen Account

2. **Neues Repository erstellen**
   - Klicke auf das "+" Symbol oben rechts
   - Wähle "New repository"
   - Name: `video-tagebuch` (oder ein anderer Name)
   - Setze auf "Public"
   - Klicke "Create repository"

3. **Dateien hochladen**
   - Klicke auf "uploading an existing file"
   - Ziehe alle 4 Dateien (index.html, styles.css, script.js, data.js) in das Fenster
   - Klicke "Commit changes"

4. **GitHub Pages aktivieren**
   - Gehe zu "Settings" (oben im Repository)
   - Klicke auf "Pages" im linken Menü
   - Bei "Source" wähle "Deploy from a branch"
   - Bei "Branch" wähle "main" und "/root"
   - Klicke "Save"

5. **Deine Website ist online! 🎉**
   - Nach 1-2 Minuten ist deine Site unter dieser URL erreichbar:
   - `https://dein-username.github.io/video-tagebuch/`

**Videos aktualisieren:**
- Öffne `data.js` im Repository
- Klicke auf das Stift-Symbol (Edit)
- Füge neue Videos hinzu
- Klicke "Commit changes"
- Die Website aktualisiert sich automatisch!

---

### Option 2: Netlify (KOSTENLOS, mit Drag & Drop)

**Vorteile:**
- ✅ Kostenlos
- ✅ Super einfach mit Drag & Drop
- ✅ Schnelle Updates
- ✅ Eigene Domain möglich

**Anleitung:**

1. Gehe zu https://www.netlify.com
2. Klicke "Sign up" (du kannst dich mit GitHub anmelden)
3. Ziehe alle 4 Dateien in das Netlify-Fenster
4. Deine Website ist sofort online!

**URL:** `https://zufalliger-name.netlify.app`

**Videos aktualisieren:**
- Öffne netlify.com und melde dich an
- Klicke auf deine Site
- Ziehe die aktualisierte `data.js` in das "Deploys" Fenster

---

### Option 3: Vercel (KOSTENLOS, professionell)

**Anleitung:**

1. Gehe zu https://vercel.com
2. Klicke "Sign up" (mit GitHub verbinden)
3. Importiere dein GitHub Repository
4. Die Website wird automatisch deployed

**URL:** `https://video-tagebuch.vercel.app`

---

### Option 4: Eigener Webspace (wenn du schon einen hast)

**Anleitung:**

1. Verbinde dich per FTP mit deinem Webspace
2. Lade alle 4 Dateien in das `public_html` oder `www` Verzeichnis
3. Fertig! Aufrufbar unter `https://deine-domain.de`

**Programme für FTP:**
- FileZilla (kostenlos): https://filezilla-project.org
- Cyberduck (kostenlos, Mac): https://cyberduck.io

---

## 🎨 Design anpassen

### Farben ändern
In `styles.css` am Anfang:

```css
:root {
    --primary: #00fff2;      /* Hauptfarbe (Cyan) */
    --secondary: #ff00ea;    /* Akzentfarbe (Magenta) */
    --bg-dark: #0a0a0f;      /* Hintergrund */
}
```

### Schriftarten ändern
In `index.html` im `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=DEINE-SCHRIFT&display=swap" rel="stylesheet">
```

Schriftarten findest du auf https://fonts.google.com

---

## 🔒 Privat halten

### GitHub Pages privat machen:
- Setze das Repository auf "Private" in den Settings
- **ABER:** GitHub Pages funktioniert nur mit Public Repositories im kostenlosen Plan
- Lösung: Nutze Netlify oder Vercel mit privatem Repository

### Passwort-Schutz hinzufügen:
- Netlify: Upgrade auf Pro Plan ($19/Monat) für Passwort-Schutz
- Cloudflare: Kostenloser Passwort-Schutz möglich
- Alternativ: Einfach einen komplizierten Subdomain-Namen wählen, den nur ihr kennt

---

## 📱 Funktionen

### Kalenderansicht
- Interaktiver Monatskalender
- Tage mit Videos sind hervorgehoben
- Klick auf einen Tag öffnet das Video

### Timeline-Ansicht
- Chronologische Liste aller Videos
- Neueste Videos zuerst
- Klick öffnet das Video-Modal

### Video-Modal
- YouTube-Video wird eingebettet
- Automatischer Autoplay
- Mit ESC oder Klick schließen

---

## 💡 Tipps

1. **Regelmäßige Backups:** Speichere deine `data.js` auch lokal
2. **Video-Qualität:** Lade Videos in HD auf YouTube hoch
3. **Mobile Optimierung:** Die Website funktioniert auf allen Geräten
4. **Animationen:** Bei langsamen Geräten kannst du Animationen in CSS reduzieren

---

## 🛠️ Technische Details

- Keine Frameworks notwendig
- Reines HTML, CSS, JavaScript
- Responsive Design (funktioniert auf Handy, Tablet, Desktop)
- Browser-Kompatibilität: Alle modernen Browser (Chrome, Firefox, Safari, Edge)
- Ladezeit: < 1 Sekunde

---

## 📞 Troubleshooting

**Video wird nicht angezeigt:**
- Prüfe, ob die YouTube-ID korrekt ist
- Stelle sicher, dass das Video auf "Öffentlich" oder "Nicht gelistet" gestellt ist

**Datum wird nicht erkannt:**
- Format muss exakt sein: `YYYY-MM-DD` (z.B. `2025-03-01`, nicht `2025-3-1`)
- Anführungszeichen nicht vergessen: `"2025-03-01"`

**Website wird nicht aktualisiert:**
- Bei GitHub Pages: Warte 1-2 Minuten nach dem Commit
- Browser-Cache leeren (Strg + Shift + R)

---

## 🎁 Extras

Du kannst die Website erweitern mit:
- Suchfunktion für Videos
- Kategorien/Tags für Videos
- Kommentarfunktion
- Download-Button für Videos
- Teilen-Funktion

Viel Erfolg mit deinem Video-Tagebuch! 🚀❤️

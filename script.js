// HAUPTFUNKTIONALITÄT DES VIDEO-TAGEBUCHS

let currentDate = new Date();
let currentView = 'calendar';

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateCurrentDate();
    renderCalendar();
    renderTimeline();
    setupEventListeners();
    
    // Automatische Datumsanzeige aktualisieren
    setInterval(updateCurrentDate, 1000);
}

function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('de-DE', options);
}

// Event Listeners einrichten
function setupEventListeners() {
    // View Toggle Buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            switchView(view);
        });
    });
    
    // Kalender Navigation
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
    
    // Modal Schließen
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
    
    // ESC Taste zum Schließen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// View Wechsel
function switchView(view) {
    currentView = view;
    
    // Toggle Buttons aktualisieren
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // Views aktualisieren
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(`${view}-view`).classList.add('active');
}

// Kalender rendern
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Monat/Jahr Anzeige
    const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    document.getElementById('monthYear').textContent = `${monthNames[month]} ${year}`;
    
    // Erste und letzte Tage des Monats
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Starttag (Montag = 0)
    let startDay = firstDay.getDay() - 1;
    if (startDay === -1) startDay = 6;
    
    // Kalender Grid
    const calendarDays = document.getElementById('calendar-days');
    calendarDays.innerHTML = '';
    
    // Vorherige Monatstage
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
        const dayEl = createDayElement(prevMonthLastDay - i, true);
        calendarDays.appendChild(dayEl);
    }
    
    // Aktuelle Monatstage
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = formatDate(new Date(year, month, day));
        const hasVideo = videoData[dateStr] !== undefined;
        const dayEl = createDayElement(day, false, hasVideo, dateStr);
        calendarDays.appendChild(dayEl);
    }
    
    // Nächste Monatstage (um das Grid zu füllen)
    const totalCells = calendarDays.children.length;
    const remainingCells = 42 - totalCells; // 6 Wochen à 7 Tage
    for (let day = 1; day <= remainingCells; day++) {
        const dayEl = createDayElement(day, true);
        calendarDays.appendChild(dayEl);
    }
}

function createDayElement(day, isOtherMonth, hasVideo = false, dateStr = null) {
    const dayEl = document.createElement('div');
    dayEl.className = 'day';
    
    if (isOtherMonth) {
        dayEl.classList.add('other-month');
    }
    
    if (hasVideo) {
        dayEl.classList.add('has-video');
        dayEl.style.cursor = 'pointer';
        dayEl.addEventListener('click', () => openVideoModal(dateStr));
    }
    
    const numberEl = document.createElement('div');
    numberEl.className = 'day-number';
    numberEl.textContent = day;
    
    dayEl.appendChild(numberEl);
    
    // Animation Delay für schönen Effekt
    const randomDelay = Math.random() * 0.5;
    dayEl.style.animationDelay = `${randomDelay}s`;
    
    return dayEl;
}

// Timeline rendern
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    
    // Sortiere Videos nach Datum (neueste zuerst)
    const sortedDates = Object.keys(videoData).sort((a, b) => new Date(b) - new Date(a));
    
    sortedDates.forEach((dateStr, index) => {
        const video = videoData[dateStr];
        const itemEl = createTimelineItem(dateStr, video);
        itemEl.style.animationDelay = `${index * 0.1}s`;
        timeline.appendChild(itemEl);
    });
}

function createTimelineItem(dateStr, video) {
    const itemEl = document.createElement('div');
    itemEl.className = 'timeline-item';
    
    const marker = document.createElement('div');
    marker.className = 'timeline-marker';
    
    const content = document.createElement('div');
    content.className = 'timeline-content';
    content.addEventListener('click', () => openVideoModal(dateStr));
    
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('de-DE', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    content.innerHTML = `
        <div class="timeline-date">${formattedDate}</div>
        <div class="timeline-title">${video.title}</div>
        <div class="timeline-description">${video.description}</div>
    `;
    
    itemEl.appendChild(content);
    itemEl.appendChild(marker);
    
    return itemEl;
}

// Video Modal öffnen
function openVideoModal(dateStr) {
    const video = videoData[dateStr];
    if (!video) return;
    
    const modal = document.getElementById('videoModal');
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('de-DE', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    document.getElementById('modalDate').textContent = formattedDate;
    
    // YouTube Embed erstellen
    const videoEmbed = `
        <iframe 
            src="https://www.youtube.com/embed/${video.youtubeId}?autoplay=1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    document.getElementById('modalVideo').innerHTML = videoEmbed;
    document.getElementById('modalDescription').innerHTML = `
        <h3 style="color: var(--primary); margin-bottom: 1rem; font-family: 'Orbitron', sans-serif;">${video.title}</h3>
        <p>${video.description}</p>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Modal schließen
function closeModal() {
    const modal = document.getElementById('videoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Video stoppen
    document.getElementById('modalVideo').innerHTML = '';
}

// Hilfsfunktion: Datum formatieren
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

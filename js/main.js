const cards = document.querySelectorAll(".card");
const infoBox = document.getElementById("department-info");

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (!infoBox || !card.dataset.name) return;
    const name = card.dataset.name;
    infoBox.innerHTML = `<p><strong>${name}</strong><br>Informationen zur Abteilung ${name}.</p>`;
  });
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");
const dropdownTrigger = document.querySelector(".nav-dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

function closeAll() {
  if (!nav || !burger || !dropdownMenu || !dropdownTrigger) return;
  nav.classList.remove("open");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  dropdownMenu.classList.remove("open");
  dropdownTrigger.classList.remove("active");
}

if (burger && nav) {
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen && dropdownMenu) dropdownMenu.classList.remove("open");
  });
  nav.addEventListener("click", (e) => e.stopPropagation());
}

if (dropdownTrigger && dropdownMenu) {
  dropdownTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.toggle("open");
    dropdownTrigger.classList.toggle("active", isOpen);
  });
}

document.addEventListener("click", () => closeAll());
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

// ===== DJK Newsfeed =====
const djkNews = [
  {
    date: "Aktuell",
    title: "DJK Aktuell online verfügbar",
    text: "Die aktuelle Ausgabe von DJK Aktuell kann direkt auf der Startseite gelesen und heruntergeladen werden.",
    link: "#aktuell"
  },
  {
    date: "2025 / 2026",
    title: "Fußball-Jugend in Spielgemeinschaft",
    text: "Die Fußball-Jugend spielt in einer Spielgemeinschaft mit den Vereinen der Großgemeinde Schonungen. Die DJK Abersfeld stellt Spieler aller Altersklassen.",
    link: "abteilungen/fussball.html#jugend"
  },
  {
    date: "Regelmäßig",
    title: "Training, Bewegung und Gemeinschaft",
    text: "Von Gymnastik über Kinderturnen, Zumba, Schach und Wandern bis Theater bietet die DJK Abersfeld ein vielfältiges Vereinsleben.",
    link: "#abteilungen"
  }
];

const newsfeedList = document.getElementById("newsfeedList");
if (newsfeedList) {
  newsfeedList.innerHTML = djkNews.map(item => `
    <article class="news-card">
      <time>${item.date}</time>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
      ${item.link ? `<a href="${item.link}">Mehr anzeigen</a>` : ""}
    </article>
  `).join("");
}

// ===== Sportheim Belegungsplan =====
const sportheimCalendarEmbedUrl = "";
const sportheimCalendar = document.getElementById("sportheimCalendar");
if (sportheimCalendar) {
  if (sportheimCalendarEmbedUrl) {
    sportheimCalendar.innerHTML = `<iframe class="calendar-frame" src="${sportheimCalendarEmbedUrl}" title="Belegungsplan Sportheim" loading="lazy"></iframe>`;
  } else {
    sportheimCalendar.innerHTML = `
      <div class="calendar-empty-state">
        <strong>Belegungsplan wird aktualisiert</strong>
        <span>Der öffentliche Sportheim-Kalender wird derzeit datenschutzkonform aufbereitet.</span>
      </div>
    `;
  }
}

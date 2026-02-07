const cards = document.querySelectorAll(".card");
const infoBox = document.getElementById("department-info");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const name = card.dataset.name;
    infoBox.innerHTML = `<p><strong>${name}</strong><br>Informationen zur Abteilung ${name}.</p>`;
  });
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");

const dropdownTrigger = document.querySelector(".nav-dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

function closeAll() {
  nav.classList.remove("open");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");

  dropdownMenu.classList.remove("open");
  dropdownTrigger.classList.remove("active");
}

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = nav.classList.toggle("open");
  burger.classList.toggle("open", isOpen);
  burger.setAttribute("aria-expanded", String(isOpen));

  // optional: wenn Menü schließt, auch Dropdown zu
  if (!isOpen) dropdownMenu.classList.remove("open");
});

// Klicks im Menü sollen nicht als "outside click" zählen
nav.addEventListener("click", (e) => e.stopPropagation());

// Abteilungen toggle
dropdownTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const isOpen = dropdownMenu.classList.toggle("open");
  dropdownTrigger.classList.toggle("active", isOpen);
});


// Klick außerhalb schließt alles
document.addEventListener("click", () => closeAll());

// Bonus: ESC schließt alles
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

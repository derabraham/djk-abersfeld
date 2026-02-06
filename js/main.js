const cards = document.querySelectorAll(".card");
const infoBox = document.getElementById("department-info");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const name = card.dataset.name;
    infoBox.innerHTML = `<p><strong>${name}</strong><br>Informationen zur Abteilung ${name}.</p>`;
  });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const main = document.getElementsByTagName("main")[0];
        main.innerHTML += `
        <div class="card">
            <div class="card-cover">
                <img
                    src="${item.cover}"
                    alt="imagen libro"
                />
            </div>
            <div class="card-title">${item.title}</div>
            <div class="card-subtitle">${item.author}</div>
            <div class="card-item">
                <p>Género</p>
                <p>${item.genre}</p>
            </div>
            <div class="card-item">
                <p>Año</p>
                <p>${item.year}</p>
            </div>
        </div>`;
      });
    })
    .catch((error) => console.error("Error loading data:", error));
});

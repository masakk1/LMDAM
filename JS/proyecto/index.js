const resultContainer = document.getElementById("result-container");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

function cleanContainer() {
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.lastChild);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the page from reloading

  // Call your search function here
  HTTP.search_artist(searchInput.value).then((artists) => {
    cleanContainer();

    artists.forEach((a) => {
      resultContainer.appendChild(a.draw());
    });
  });
});

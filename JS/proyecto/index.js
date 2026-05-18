const resultContainer = document.getElementById("result-container");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const formSelect = document.getElementById("formSelect");

function cleanContainer() {
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.lastChild);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the page from reloading

  console.log(formSelect.value);

  switch (formSelect.value) {
    case "0":
      HTTP.search_artist(searchInput.value).then((artists) => {
        cleanContainer();

        artists.forEach((a) => {
          resultContainer.appendChild(a.draw());
        });
      });
      break;
    case "1":
      HTTP.search_recording(searchInput.value).then((recordings) => {
        cleanContainer();
      });
      break;

    default:
      break;
  }
});

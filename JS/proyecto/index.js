const resultContainer = document.getElementById("result-container");

HTTP.search_artist("Dr.%20Dre").then((artists) => {
  artists.forEach((a) => {
    resultContainer.appendChild(a.draw());
  });
});

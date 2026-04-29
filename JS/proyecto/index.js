const body = document.getElementsByTagName("body")[0];

HTTP.search_artist("Dr.%20Dre").then((artists) => {
  artists.forEach((a) => {
    body.appendChild(a.draw());
  });
});

"use strict";

function search_artist(query) {
  return HTTP.ajax(
    "GET",
    `http://musicbrainz.org/ws/2/artist?query=${query}`,
  ).then((data) => {
    let artists = [];

    data.artists.forEach((a, i) => {
      const tags = a.tags
        ?.filter((t) => t.count > 0)
        .toSorted((t1, t2) => t2.count - t1.count)
        .map((t) => t.name);
      artists[i] = new Artist("./assets/64x64.svg", a.name, tags);
    });

    return artists;
  });
}

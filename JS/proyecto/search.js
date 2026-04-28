"use strict";

function search_artist(query) {
  return HTTP.ajax(
    "GET",
    `http://musicbrainz.org/ws/2/artist?query=${query}`,
  ).then((d) => d.artists);
}

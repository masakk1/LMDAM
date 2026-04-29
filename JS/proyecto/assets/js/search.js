"use strict";

class HTTP {
  static ajax(method, url, data = null) {
    return new Promise((resolve, reject) => {
      var http = new XMLHttpRequest();
      http.open(method, url, true);
      http.setRequestHeader("Accept", "application/json");
      http.setRequestHeader("User-Agent", "Masakk1SchoolProyect");
      http.send(data);

      http.addEventListener("load", (event) => {
        if (http.status === 200) {
          resolve(JSON.parse(http.responseText));
        } else {
          reject(`${http.status}: ${http.statusText}`);
        }
      });

      http.addEventListener("error", (error) => {
        reject(`${http.status}: ${http.statusText}`);
      });
    });
  }

  static search_artist(query) {
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
        artists[i] = new Artist("assets/img/64x64.svg", a.name, tags);
      });

      return artists;
    });
  }
}

"use strict";

class HTTP {
  static ajax(method, url, data = null) {
    return new Promise((resolve, reject) => {
      var http = new XMLHttpRequest();
      http.open(method, url, true);
      http.setRequestHeader("Content-type", "application/json");
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
}

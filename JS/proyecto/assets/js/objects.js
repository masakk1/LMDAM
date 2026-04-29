"use strict";

class Artist {
  constructor(img, name, tags) {
    this.img = img;
    this.name = name;
    this.tags = tags;
  }

  draw() {
    const div = document.createElement("div");
    div.classList.add("artist");

    return div;
  }
}

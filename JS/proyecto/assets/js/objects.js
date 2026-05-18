"use strict";

class Artist {
  constructor(name, tags) {
    this.name = name;
    this.tags = tags ?? [];
  }

  draw() {
    const div = document.createElement("div");
    // p-2: standard padding | mb-2: standard bottom margin
    // bg-body-secondary: standard adaptive background
    // rounded: standard border radius
    div.className =
      "artist simple-hover d-flex align-items-center justify-content-between p-2 mb-2 bg-body-secondary rounded";

    /* Artist Name */
    const name = document.createElement("span");
    name.className = "fw-bold ms-2"; // Bold and a little left margin
    name.textContent = this.name;

    /* Tag List */
    const tags = document.createElement("div");
    tags.className = "d-flex flex-wrap gap-1";

    this.tags.slice(0, 3).forEach((t) => {
      const tagElement = document.createElement("span");
      // text-bg-secondary: standard gray badge
      tagElement.className = "badge text-bg-secondary";
      tagElement.textContent = t;
      tags.appendChild(tagElement);
    });

    div.append(name, tags);
    return div;
  }
}

class Recording {
  constructor(title, artists) {
    this.title = title;
    this.artists = artists;
  }

  draw() {
    const div = document.createElement("div");
    // p-2: standard padding | mb-2: standard bottom margin
    // bg-body-secondary: standard adaptive background
    // rounded: standard border radius
    div.className =
      "artist simple-hover d-flex align-items-center justify-content-between p-2 mb-2 bg-body-secondary rounded";

    /* Title */
    const title = document.createElement("span");
    title.className = "fw-bold ms-2";
    title.textContent = this.title;

    /* Tag List 
    const artists = document.createElement("div");
    tags.className = "d-flex flex-wrap gap-1";

    this.tags.slice(0, 3).forEach((t) => {
      const tagElement = document.createElement("span");
      // text-bg-secondary: standard gray badge
      tagElement.className = "badge text-bg-secondary";
      tagElement.textContent = t;
      tags.appendChild(tagElement);
    });

    div.append(name, tags);
    */
    div.append(title);
    return div;
  }
}

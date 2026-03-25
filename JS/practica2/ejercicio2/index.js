function loadLDocA(fichero) {
  let http = new XMLHttpRequest(); //Se crea petición al servidor
  http.open("GET", fichero, true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
  //http.setRequestHeader("Content-type", "text/xml");
  http.send();
  http.addEventListener("load", (event) => {
    //Cuando se reciba la respuesta, se ejecuta esta función
    if (http.status === 200) {
      if (fichero.split(".")[1] == "xml") {
        gestionarFicheroXML(http.responseXML);
      } else {
        gestionarFicheroTXT(http.responseText);
      }
    }
  });
}

loadLDocA("chatlog.txt");

let lastAuthor = null;
let lastMessageElement = null;

function gestionarFicheroTXT(txt) {
  let logs = txt.split("\n");

  let chat = document.getElementById("chat");

  logs.forEach((line) => {
    /* Recoger informacion linea */
    let delimiterPosition = line.indexOf(":");
    let author = line.slice(0, delimiterPosition);
    let lineText = line.slice(delimiterPosition + 1);

    /* Crear elementos */
    let messageContent;

    if (author == lastAuthor) {
      let message = lastMessageElement;
      messageContent = message.querySelector("ul.message-content");
    } else {
      message = document.createElement("div");
      message.classList.add("message");

      if (author == "You") {
        message.classList.add("author-you");
      }

      let messageAuthor = document.createElement("div");
      messageAuthor.classList.add("message-author", "pico-color-green");
      messageAuthor.textContent = author;
      message.appendChild(messageAuthor);

      messageContent = document.createElement("ul");
      messageContent.classList.add("message-content");
      message.appendChild(messageContent);

      lastMessageElement = message;
      lastAuthor = author;

      chat.appendChild(message);
    }

    let messageLine = document.createElement("li");
    messageLine.classList.add("message-line");
    messageLine.style["list-style"] = "none";
    messageLine.textContent = lineText;
    messageContent.appendChild(messageLine);
  });
}

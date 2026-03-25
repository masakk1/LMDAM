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

loadLDocA("libros.xml");

function gestionarFicheroXML(xml) {
  let tabla = document.getElementById("search-result");
  let tbody = tabla.querySelector("tbody");

  xml.querySelectorAll("libro").forEach((libro) => {
    let tr = document.createElement("tr");

    let titulo_celda = document.createElement("td");
    titulo_celda.textContent = libro.querySelector("titulo").textContent;
    tr.appendChild(titulo_celda);

    let precio_celda = document.createElement("td");
    precio_celda.textContent = libro.querySelector("precio").textContent;
    tr.appendChild(precio_celda);

    tbody.appendChild(tr);
  });
}

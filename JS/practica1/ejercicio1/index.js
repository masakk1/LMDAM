/*
function ordenaArrayConFuncion(array, ordena) {
  return Array.isArray(array) && typeof ordena == "function"
    ? array.toSorted(ordena)
    : "Parámetros de entrada no son un array y una función";
}

let array = ["10", "36", "62"];
console.log(array);
let ordenaFunc = (str) => str[1];
let arrayOrdenada = ordenaArrayConFuncion(array, ordenaFunc);
console.log(arrayOrdenada);  Array(3) [ "10", "62", "36" ] 
*/

/* EJERCICIO 1 */
function Ejercicio1(fechas, ordenaFechas) {
  if (!Array.isArray(fechas)) {
    console.log("El primer parámetro no es un array.");
  } else if (typeof ordenaFechas != "function") {
    console.log("El segundo parámetro no es una función.");
  } else {
    fechas.sort(ordenaFechas);
  }
}

// Ordena por mes
function ordenaFechas(a, b) {
  let dateA = new Date(a);
  let dateB = new Date(b);
  return dateA.getMonth() - dateB.getMonth();
}
// Suma de los digitos
function ordenaNumeros(a, b) {
  return sumaDigitos(a) - sumaDigitos(b);
}
function sumaDigitos(numero) {
  return String(numero)
    .split()
    .map(Number)
    .reduce((total, num) => total + num, 0);
}

// primero
Ejercicio1(); // debe dar error
Ejercicio1(null, null); // debe dar error
Ejercicio1([], null); // debe dar error

// segundo
let fechas = ["2023-06-15", "2021-12-10", "2022-03-25", "2023-01-01"];

console.log("Array original: ", fechas); // sin ordenar
Ejercicio1(fechas, ordenaFechas);
console.log("Array ordenada: ", fechas); // ordenada

// tercero
let numeros = [89, 23, 444, 150, 11];

console.log("Array original: ", numeros); // sin ordenar
Ejercicio1(numeros, ordenaNumeros);
console.log("Array ordenada: ", numeros); // ordenados

/* EJERCICIO 2 */

function Ejercicio2(...alumnos) {
  if (alumnos.length > 0) {
    alumnos.forEach((alumno) => {
      console.log(
        alumno[0] +
          "-" +
          alumno[1] +
          "-asignaturas:" +
          alumno.slice(2).join("/"),
      );
    });
  } else {
    console.log("No hay datos para mostrar");
  }
}

Ejercicio2(
  ["Sara", "DAMA", "Programación", "ED"],
  ["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"],
  ["Emma", "ASIR", "ISO", "BBDD", "LM"],
);
Ejercicio2(["Álvaro", "Semi", "BBDD"]);
Ejercicio2();

/* EJERCICIO 3 */
function Ejercicio3(array1, array2) {
  let coincidencias = 0;
  array1.forEach((element) => {
    if (array2.includes(element)) {
      coincidencias++;
    }
  });

  switch (coincidencias) {
    case array1.length:
      console.log("Todos están incluidos");
      break;
    case 0:
      console.log("No hay ninguno incluido");
      break;
    default:
      console.log("Alguno está incluido");
      break;
  }
}

/*Array original*/
Ejercicio3(
  [
    "Elisabet Ricart Monreal",
    "María Del Carmen Sedano-Rocamora",
    "Roldán Alvarado",
    "Leocadio de Pera",
    "Isaac Talavera Luna",
  ],
  [
    "Elisabet Ricart Monreal",
    "María Del Carmen Sedano-Rocamora",
    "Roldán Alvarado",
    "Leocadio de Pera",
    "Isaac Talavera Luna",
  ],
);
/*Ninguno incluído*/
Ejercicio3(
  [
    "Lina Armida Machado Iglesias",
    "Apolonia Santiago Buendía",
    "Poncio Cobo Herrera",
    "Rafaela Seco Cañas",
    "Fulgencio Alarcón Lloret",
  ],
  [
    "Elisabet Ricart Monreal",
    "María Del Carmen Sedano-Rocamora",
    "Roldán Alvarado",
    "Leocadio de Pera",
    "Isaac Talavera Luna",
  ],
);
/*Alguno incluido*/
Ejercicio3(
  ["Elisabet Ricart Monreal", "Poncio Cobo Herrera", "Isaac Talavera Luna"],
  [
    "Elisabet Ricart Monreal",
    "María Del Carmen Sedano-Rocamora",
    "Roldán Alvarado",
    "Leocadio de Pera",
    "Isaac Talavera Luna",
  ],
);

/* EJERCICIO 4 */
let alumnos = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 40 },
];

let curso = prompt("¿De qué curso son tus alumnos?");
let asignaturasTexto = prompt("¿Qué asignaturas cursan?");
let asignaturas = asignaturasTexto.split("-");

let alumnosExtendido = alumnos.map((a) => ({
  nombre: a.nombre,
  edad: a.edad,
  curso: curso,
  asignaturas: asignaturas,
}));

console.log(alumnosExtendido);

/* EJERCICIO 5 */

const usuarios = [
  {
    nombre: "Ana",
    direccion: { pais: "España", ciudad: "Madrid", calle: "Gran Vía" },
  },
  {
    nombre: "Luis",
    direccion: { pais: "España", ciudad: "Barcelona", calle: "La Rambla" },
  },
  {
    nombre: "Carlos",
    direccion: { pais: "Francia", ciudad: "Paris", calle: "Champs-Élysées" },
  },
  {
    nombre: "María",
    direccion: { pais: "España", ciudad: "Madrid", calle: "Calle Arenal" },
  },
];

const resultadoEjercicio5 = usuarios
  .filter((u) => u.direccion.ciudad == "Madrid")
  .sort((a) => a.nombre)
  .map((a) => a.nombre.toUpperCase());
console.log(resultadoEjercicio5);

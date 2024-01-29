// funzioni dichiarate con la keyword function subiscono il cosiddetto "hoisting",
// come se la definizione venisse spostata nel punto più alto del file nonappena il codice si avvia

bark();

function bark() {
  console.log("BAU!");
}

// IIFE - immediately invoked function expression
(function () {})();

// function expressions risolvono questo problema - ovvero inseriamo una funzione ANONIMA dentro una variabile
const bark2 = function () {
  console.log("BAU2!");
};
// in questo caso la funzione bark2 potrà essere invocata SOLO DOPO la sua dichiarazione, come è normale che sia...
bark2();

// ARROW FUNCTIONS
// semplicemente una sintassi diversa per la creazione di una funzione (+ altri extra)
// le arrow functions possono essere SOLO ANONIME, quindi hanno bisogno sicuramente di una variabile in cui essere inserite

const arrow = () => {};
// (parametri) freccia => {contesto}

// le tonde per i parametri sono obbligatorie SOLO SE: non ci sono parametri o sono più di uno

// nel caso di singolo parametro specificato le tonde sono facoltative
const meow = voice => {
  console.log(voice);
};

meow("Meeeooowww!");

const sum = (n1, n2) => {
  return n1 + n2;
};

const result = sum(3, 2); // 5
const result2 = function () {
  return sum(5, 10);
}; // contiene una funzione che DOVRA' essere richiamata per produrre il risultato
const result3 = () => {
  return sum(5, 10);
}; // contiene una arrow function che DOVRA' essere richiamata per produrre il risultato
const result4 = () => sum(5, 10); // contiene  una arrow function con return IMPLICITO che DOVRA' essere richiamata per produrre il risultato

// una arrow function !!! SENZA GRAFFE !!! ritornerà implicitamente il valore dopo la freccia SOLO SE abbiamo una singola linea di codice dopo la freccia
const sum2 = (n1, n2) => n1 + n2;

const result5 = sum2(6, 2);

// la vera differenza tra una arrow function e una normale è nell'uso del THIS
// vedi this.js

// SPREAD OPERATOR (quello dei ...)
const student1 = {
  name: "Giulia",
  surname: "Lanari",
  hasWebcam: true,
  area: { lat: 28.28912, lon: 48.09123 }
};

const student2 = Object.assign({}, student1);
student2.location = Object.assign({}, student1.location);
// sempre una SHALLOW COPY delle proprietà di uno o più oggetti in un nuovo oggetto
const student3 = { ...student1, surname: "Rizzi", location: { ...student1.location, lat: 55.202 }, planet: "Earth" };
delete student3.hasWebcam;
console.log(student3);

// spread dei caratteri di una stringa dentro un nuovo array
console.log([..."Epicode is awesome"]);

const fruit = ["banana", "mela", "kiwi"];
const fruit2 = ["papaya", "mango", "pompelmo"];

console.log(fruit.concat(fruit2));
console.log([...fruit, "arance", ...fruit2, "ananas"]);

// REST OPERATOR (nel contesto di parametri di funzione)
// i ... usati per raccogliere tutti gli ALTRI valori passati come parametro in un array

const showPerson = function (param1, param2, ...rest) {
  console.log(param1);
  console.log(param2);
  console.log(rest);
};

showPerson(student1.name, student1.surname, student1.hasWebcam, student1.area.lat, student1.area.lon);

// DESTRUCTURING (di oggetto)

// prima facevamo così....
// const name = student1.name
// const surname = student1.surname
// const hasWebcam = student1.hasWebcam

// ora possiamo fare la stessa cosa con questa sintassi:

const {
  hasWebcam,
  name,
  surname,
  area: { lat, lon }
} = student1;
console.log(hasWebcam, name, surname, lat, lon);
showPerson(name, surname, hasWebcam, lat, lon);

// DESTRUCTURING (di parametri di funzione)
// destrutturiamo i parametri dell'oggetto che arrivava come argomento alla funzione, destrutturiamo i suoi parametri direttamente nelle parentesi del parametro stesso usando delle graffe
const showPersonProperties = function ({ hasWebcam, name, surname, area: { lat, lon } }) {
  console.log(hasWebcam, name, surname, lat, lon);
};

showPersonProperties(student1);

// DESTRUCTURING (di array)
const fruit3 = [...fruit, "arance", ...fruit2, "ananas"];
// const first = fruit2[0]
// const second = fruit2[1]
// const third = fruit2[2]

const [first, second, third] = fruit2;
console.log(first, second, third);

// possiamo anche saltare delle posizioni e creare solo le variabili per le posizioni che ci interessano
const [a, b, , , e, ...rest] = fruit3;
console.log(a, b, e, rest);

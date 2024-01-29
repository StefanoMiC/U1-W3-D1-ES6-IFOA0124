const fruits = ["banana", "mela", "kiwi", "papaya", "mango", "pompelmo"];

// nuovi metodi degli array di ES6

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// .forEach() - cicla e chiama una funzione per ogni elemento dell'array. ti ritorna il singolo elemento dell'array nel parametro di questa funzione
// il forEach NON ha un valore di ritorno

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

fruits.forEach(fruit => console.log(fruit));

const fruitsCapitalized = [];

fruits.forEach(fruit => {
  fruitsCapitalized.push(fruit.charAt(0).toUpperCase().concat(fruit.substring(1)));
});

console.log(fruitsCapitalized);

// .map() - cicla e chiama una funzione per ogni elemento dell'array.
// in più ritorna un NUOVO ARRAY di elementi modificati con quello che ritorneremo dalla funzione
// l'array avrà la stessa length di quello di partenza

const fruitsMapped = fruits.map(fruit => fruit.charAt(0).toUpperCase().concat(fruit.substring(1)));
console.log(fruitsMapped);

const numbers = [2, 3, 6, 10, 40];

const numbersMapped = numbers.map(num => num * 2);
console.log(numbersMapped);

const numbersAsList = numbers.map(num => `<li>${num}</li>`);
console.log(numbersAsList);

const users = [
  { name: "Mia", role: "student" },
  { name: "Gianmarco", role: "student" },
  //   { name: "Stefano", role: "teacher" },
  { name: "Giovanni", role: "student" }
];

const classNames = users.map(personObj => personObj.name);
console.log(classNames);

const classRoles = users.map(personObj => personObj.role);
console.log(classRoles);

// const classNamesObjs = users.map(personObj => {
//   return { name: personObj.name };
// });

// se vogliamo ritornare un singolo oggetto da una arrow function, dobbiamo mettergli le tonde () attorno, così non si confonde con il contesto della funzione
const classNamesObjs = users.map(personObj => ({ name: personObj.name }));
console.log(classNamesObjs);

// .filter() -  cicla e chiama una funzione per ogni elemento dell'array.
// in più ritorna un NUOVO ARRAY di elementi modificati con quello che ritorneremo dalla funzione
// l'array POTREBBE NON AVERE la stessa length di quello di partenza
// lo usiamo appunto per filtrare una lista di elementi, ed eventualmente escluderne alcuni

// il meccanismo funziona così:
// abbiamo una condizione quindi un TEST che ogni elemento deve superare, il test deve necessariamente tornare un booleano
// se lo supera e quindi la funzione ritorna true, il filter capisce che quell'elemento deve essere incluso nel nuovo array,
// altrimenti con false viene ignorato e saltato.

const filteredNums = numbers.filter(num => num >= 10);
console.log(filteredNums);

const filteredFruits = fruits.filter(fruit => fruit.length > 4);
console.log(filteredFruits);

const onlyStudents = users.filter(personObj => personObj.role === "student");
console.log(onlyStudents);
const onlyTeachers = users.filter(personObj => personObj.role === "teacher");
console.log(onlyTeachers);
const onlyAdmins = users.filter(personObj => personObj.role === "admin");
console.log(onlyAdmins);

const teacherIndex = users.findIndex(personObj => personObj.role === "teacher");
console.log(teacherIndex >= 0 ? "teacher trovato" : "teacher non trovato");
console.log(teacherIndex);

console.log(users);

// .reduce()

const cart = [
  { prodName: "Keyboard", price: 50 },
  { prodName: "Mouse", price: 150 },
  { prodName: "Webcam", price: 350 },
  { prodName: "Speakers", price: 200 }
];

const total = cart.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATOR", accumulator);
  console.log("CURRENT VALUE", currentValue);

  return accumulator + currentValue.price;
}, 0);

console.log("TOTAL", total);

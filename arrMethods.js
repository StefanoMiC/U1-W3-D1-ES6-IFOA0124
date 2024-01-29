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

// le funzioni normali lo ereditano dal contesto di esecuzione
// le funzioni arrow lo ereditano dal contesto lessicale (ovvero là dove sono scritte), semplificando lo ereditano dal contesto esterno ad esse

// THIS nel contesto di funzioni costruttrici - CONSTRUCTOR FUNCTIONS (funzioni che creano oggetti)

// possono essere create solo alla vecchia maniera con la keyword "function"
function Person(_name, _surname) {
  this.name = _name;
  this.surname = _surname;

  console.log("THIS", this);
}

const teacher = new Person("Stefano", "Miceli");
const teacher2 = new Person("Stefano", "Casasola");
console.log(teacher);
console.log(teacher2);

// differenza del valore di THIS nel contesto di funzioni normali o arrow

const methodFunc = function () {
  console.log("THIS", this);

  console.log("Ciao mi chiamo: ", this.name, this.surname);
};

const myObj = {
  name: "Stefano",
  surname: "Miceli",
  role: "teacher",
  myMethod: methodFunc
};

const myObj2 = {
  name: "Stefano",
  surname: "Casasola",
  role: "teacher",
  myMethod: methodFunc
};

const myObj3 = {
  name: "Stefano",
  surname: "Casasola",
  role: "teacher",
  myMethod: () => {
    console.log("THIS", this);

    console.log("Ciao mi chiamo: ", this.name, this.surname, this.role);
  }
};

const myObj4 = {
  name: "Stefano",
  surname: "Casasola",
  role: "teacher",
  myMethod: function () {
    console.log("THIS", this);

    // l'arrow function eredita il valore del THIS dal contesto lessicale (quindi il contesto esterno a dove la vediamo)
    setTimeout(() => console.log("Ciao mi chiamo: ", this.surname, this.role), 1000);
    // la funzione normale acquisisce il valore del this dal contesto in cui è eseguita, nel caso di questa funzione è un contesto diverso e separato dall'oggetto,
    // per il fatto che l'abbiamo usata all'interno del contesto di un'altra funzione
    setTimeout(function () {
      console.log("Ciao mi chiamo: ", this.surname, this.role);
    }, 1000);
  }
};

myObj.myMethod();
myObj2.myMethod();
myObj3.myMethod();
myObj4.myMethod();

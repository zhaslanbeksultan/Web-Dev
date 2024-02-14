let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

// let id = Symbol("id");
alert(id.description); // id

let user = { // belongs to another code
   name: "John"
};

// let id = Symbol("id");

user[id] = 1;

alert(user[id]); // we can access the data using the symbol as the key

// let id = Symbol("id");

let user = {
   name: "John",
   [id]: 123 // not "id": 123
};

// let id = Symbol("id");
let user = {
   name: "John",
   age: 30,
   [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert("Direct: " + user[id]); // Direct: 123

// let id = Symbol("id");
let user = {
   [id]: 123
};

let clone = Object.assign({}, user);

alert(clone[id]); // 123

// read from the global registry
// let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(id === idAgain); // true

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol)); // name, global symbol
alert(Symbol.keyFor(localSymbol)); // undefined, not global

alert(localSymbol.description); // name
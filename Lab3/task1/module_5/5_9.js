let user = {
   name: "John",
   age: 30
};

// loop over values
for (let value of Object.values(user)) {
   alert(value); // John, then 30
}

let prices = {
   banana: 1,
   orange: 2,
   meat: 4,
};

let doublePrices = Object.fromEntries(
   // convert prices to array, map each key/value pair into another pair
   // and then fromEntries gives back the object
   Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat); // 8

function sumSalaries(salaries) {

   let sum = 0;
   for (let salary of Object.values(salaries)) {
      sum += salary;
   }

   return sum; // 650
}

let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250
};

alert(sumSalaries(salaries)); // 650

// reduce loops over array of salaries,
// adding them up
// and returns the result
function sumSalaries(salaries) {
   return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}

function count(obj) {
   return Object.keys(obj).length;
}
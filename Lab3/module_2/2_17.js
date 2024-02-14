let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert(double(3)); // 6

let sayHi = () => alert("Hello!");

sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
   () => alert('Hello!') :
   () => alert("Greetings!");

welcome();

let sum = (a, b) => {  // the curly brace opens a multiline function
   let result = a + b;
   return result; // if we use curly braces, then we need an explicit "return"
};

alert(sum(1, 2)); // 3

function ask(question, yes, no) {
   if (confirm(question)) yes();
   else no();
}

ask(
   "Do you agree?",
   function () { alert("You agreed."); },
   function () { alert("You canceled the execution."); }
);
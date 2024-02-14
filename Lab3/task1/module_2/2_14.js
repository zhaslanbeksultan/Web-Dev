let a = 2 + 2;

switch (a) {
   case 3:
      alert('Too small');
      break;
   case 4:
      alert('Exactly!');
      break;
   case 5:
      alert('Too big');
      break;
   default:
      alert("I don't know such values");
}

// let a = 2 + 2;

switch (a) {
   case 3:
      alert('Too small');
   case 4:
      alert('Exactly!');
   case 5:
      alert('Too big');
   default:
      alert("I don't know such values");
}

alert('Exactly!');
alert('Too big');
alert("I don't know such values");

// let a = "1";
let b = 0;

switch (+a) {
   case b + 1:
      alert("this runs, because +a is 1, exactly equals b+1");
      break;

   default:
      alert("this doesn't run");
}

// let a = 3;

switch (a) {
   case 4:
      alert('Right!');
      break;

   case 3: // (*) grouped two cases
   case 5:
      alert('Wrong!');
      alert("Why don't you take a math class?");
      break;

   default:
      alert('The result is strange. Really.');
}

let arg = prompt("Enter a value?");
switch (arg) {
   case '0':
   case '1':
      alert('One or zero');
      break;

   case '2':
      alert('Two');
      break;

   case 3:
      alert('Never executes!');
      break;
   default:
      alert('An unknown value');
}

switch (browser) {
   case 'Edge':
      alert("You've got the Edge!");
      break;

   case 'Chrome':
   case 'Firefox':
   case 'Safari':
   case 'Opera':
      alert('Okay we support these browsers too');
      break;

   default:
      alert('We hope that this page looks ok!');
}
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert('You are right!');

if (year == 2015) {
   alert("That's correct!");
   alert("You're so smart!");
}

if (0) { // 0 is falsy

}

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
   alert('You guessed it right!');
} else {
   alert('How can you be so wrong?'); // any value except 2015
}

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
   alert('Too early...');
} else if (year > 2015) {
   alert('Too late');
} else {
   alert('Exactly!');
}

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
   accessAllowed = true;
} else {
   accessAllowed = false;
}

alert(accessAllowed);

// let accessAllowed = (age > 18) ? true : false

// let accessAllowed = age > 18 ? true : false;

// the same
// let accessAllowed = age > 18;

// let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
   (age < 18) ? 'Hello!' :
      (age < 100) ? 'Greetings!' :
         'What an unusual age!';

alert(message);
if (age < 3) {
   message = 'Hi, baby!';
} else if (age < 18) {
   message = 'Hello!';
} else if (age < 100) {
   message = 'Greetings!';
} else {
   message = 'What an unusual age!';
}
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
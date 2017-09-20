'use strict';
var userName = prompt('Welcome! What is your name?');
console.log('Username is ' + userName);

var question1 = prompt('Alrighty ' + userName + ' Is my all time favorite food lasagna?').toLowerCase();
console.log('A1 is ' + question1)
if (question1 === 'yes' || question1 === 'y') {
  alert('You would make Garfield proud!');

} else {
  alert("wow, just wow. You're dead wrong but keep going I guess.");
}

var question2 = prompt('Sweet ' + userName + ' Do I jam out to Katy Perry?').toLowerCase();
console.log('A2 is ' + question2)
if (question2 === 'yes' || question2 === 'y') {
  alert('Do you ever feel, like a plastic bag? flowing through the wind');
} else {
  alert('It was Katy Perry... How could you not guess Katy Perry?');
}

var question3 = prompt("Is my female dog\'s name Gizmo?").toLowerCase();
console.log('A3 ' + question3)
if (question3 === 'yes' || question3 === 'y') {
  alert('She is the greatest... Yes, she!')
} else {
  alert('The Bio is a pretty important page...')
}

var question4 = prompt('Rick and Morty?').toLowerCase();
console.log('A4 ' + question4)
if (question4 === 'yes' || question4 === 'y') {
  alert('Wubalubadubdub');

} else {
  alert("Start today, you're missing out");
}

var question5 = prompt('Do I enjoy long hikes on the horizon?').toLowerCase();
console.log('A5 ' + question5)
if (question5 === 'no' || question5 === 'n') {
  alert("You know me to well and it's starting to get weird");
} else {
  alert('Hiking is the last thing I would ever do, even if theres a fire!');
}

var question6 = prompt('Have I ever seen a camel?').toLowerCase();
console.log('A6 ' + question6)
if (question6 === 'no' || question6 === 'n') {
  alert('Nice, they actually terrify me.');
} else {
  alert('Never have and never will. They terrify me and you\'re starting to as well.');
}

var question7 = prompt('Am I addicted to building computers?').toLowerCase();
console.log('A7 ' + question7)
if (question7 === 'yes' || question7 === 'y') {
  alert('Yes! My apt has banned my packages from being sent to the office');
} else {
  alert('It would be highly likely that if were all here for software development that a majority of us would love computers!');
}

var question8 = prompt('Dogs?').toLowerCase();
console.log('A8 is ' + question8)
if (question8 === 'yes' || question8 === 'y') {
  alert('Gizmo is everything to me, right under lasagna');
} else {
  alert("You didn't read the bio");
}

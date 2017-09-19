'use strict';
var userName = prompt("Thanks for stopping by! What is your name?");

alert('Hi, ' + userName + 'see if you can get the right answer to the following questions about me.');

//question 1
var answer1 = prompt('Do I have 4 cats?').toLowerCase();
if (answer1 === 'n' || answer1 === 'no') {
  //Tell the user they got the answer
  alert('You are right!');
} else {
  //Tell the user they got the wrong answer
  alert('You are wrong');
}

'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line: 148:21 
    why: Uncaught TypeError: Cannot read properties of null (reading 'length')
    trying: (1) write null as a string this way "null". (2) Try to change condition input = null becomes input !=null. (3 The good one) changin equal sign in if condition to input = null to input === null. AND IT'S WOOOOOOOOOOOORKS !!!!!!!!!!!!!!!

*/

let input = prompt('enter something 5 characters long');

if (input === null) {
  alert(':(');
   } else if (input.length < 5) {
     alert('too short');
   } else if (input.length > 5) {
     alert('too long');
} else {
  alert('perfect');
}

'use strict';

/*
  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line: 21
    why: VM153:21 Uncaught TypeError: Cannot read properties of null (reading 'length')
   
    trying: we tried to chainged the value the variable input "fgh" 

*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input !== null || input.length === 0) {
    message = input + '"';
    break;
  }
}

alert(message);

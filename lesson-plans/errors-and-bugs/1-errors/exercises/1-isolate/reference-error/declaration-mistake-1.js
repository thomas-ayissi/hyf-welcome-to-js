'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome browser

  name: ReferenceError 
  message: assignment to undeclared variable welf

  location: 20:6

  life cycle: execution phase

  the mistake:  welf is not defined

  the fix(es): initialised
*/

welf = 'ingrad'; 
//we have to initialised welf variable on line 20 column 6

console.log(welf);

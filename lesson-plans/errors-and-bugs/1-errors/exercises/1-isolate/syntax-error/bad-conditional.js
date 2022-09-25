

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: SyntaxError
  message: Unexpected token '{'

  location:index.js:63 

  life cycle: in execution phase 

  the mistake: creation phase error:

  the fix(es): we add "if" to the first else, and remove "{"
*/

let userName = 'indrogo';

if (userName.length < 3) {

    console.log('too short');
     } 
     else if (userName.length < 5)
       console.log('just right');
 
else {
  console.log('too long');
}



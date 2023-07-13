/*Inferring Return Types
TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s return statements.

function createGreeting(name: string) {
  return `Hello, ${name}!`;
}
 
const myGreeting = createGreeting('Aisle Nevertell');*/ 

//Example:
function getRandomNumber(){
    return Math.random();
  }

// Creating a variable of number type without explicitly writing its type and without assigning a number to it.

  
  let myVar = getRandomNumber();
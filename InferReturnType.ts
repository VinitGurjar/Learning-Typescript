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

 // Explicit Return Types
/*If we’d like to be explicit about what type a function returns,
 we can add an explicit type annotation after its closing parenthesis
 . Here, we use the same syntax as other type annotations, a colon 
 followed by the type. TypeScript will produce an error for any return
  statement in that function that doesn’t return the right type of value.*/

function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

//arrow function
const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
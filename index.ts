import * as _ from 'lodash';
/*async function hello() {
    return 'world'
}
/*Type annotations code from now
 any means compiler want type check it
 let lucky: any = 23;
 If you have a implicit type don't bother explicitly strong gtype in it
*/

//My own type:- Style is a union by writing the pipe symbole to separate 
type Style = 'bold' | 'italic' | 23;
//annoting Style type >
let font: Style;
/* Interfaces:- To enforce the shape of an object used to strong type objects*/

interface Person {
    firstName: string;
    lastName: string;
}

//Creating object  
const person: Person = {
    firstName: 'John',
    lastName: 'XXX'
}

const person2: Person = {
    firstName: 'ksks',
    lastName: 'X7fX'
}

//Functions
//string is the return type of the function

function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

pow(5, 10)
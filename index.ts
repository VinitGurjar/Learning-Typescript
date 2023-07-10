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

function pow(x: number, y: number): void {
    //Sometimes we have functions that don't return a value so we can use void as return type of function
    Math.pow(x, y).toString();
}

pow(5, 10)

// Arrays and Tuples:-
//Tuple is an array with fixed length and fixed type for each value.
let arr1: [string, number];
type MyList = [number?, string?, boolean?]
//Writen ? after type to make them optional
//We use types with bracket to signify its an array
const arr: MyList = []
arr.push(1)
arr.push('2')
arr.push(true)

// Generics:-
//Generics are types which can hold/use multiple types
//We use <> to signify that it is a generic type
//We can use <T> to signify that it is a generic type
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

class Observable<T> {
    constructor(public value: T) { }
}

let x: Observable<number>;




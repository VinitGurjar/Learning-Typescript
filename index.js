//annoting Style type >
let font;
//Creating object  
const person = {
    firstName: 'John',
    lastName: 'XXX'
};
const person2 = {
    firstName: 'ksks',
    lastName: 'X7fX'
};
//Functions
//string is the return type of the function
function pow(x, y) {
    //Sometimes we have functions that don't return a value so we can use void as return type of function
    Math.pow(x, y).toString();
}
pow(5, 10);
// Arrays and Tuples:-
//Tuple is an array with fixed length and fixed type for each value.
let arr1;
//Writen ? after type to make them optional
//We use types with bracket to signify its an array
const arr = [];
arr.push(1);
arr.push('2');
arr.push(true);
// Generics:-
//Generics are types which can hold/use multiple types
//We use <> to signify that it is a generic type
//We can use <T> to signify that it is a generic type
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
export {};

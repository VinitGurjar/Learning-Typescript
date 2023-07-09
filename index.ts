import * as _ from 'lodash';
async function hello() {
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

//Creating object 
const person = {
    firstName: 'John',
    lastName: 'XXX'
}

const person2 = {
    firstName: 'ksks',
    lastName: 'X7fX'
}
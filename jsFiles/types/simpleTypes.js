'use strict';

// simple types

let number = 1;
let string = 'Hello!';
let logical = true;


/*
 We get null, when we try to use not declered variables.
 Example:
 console.log(a); 
*/

let nullValiable = null;
console.log(nullValiable);

/*
 We get undefined, when we try to use declered, but not initialized variables.
 Example:
 let a;
 console.log(a); 
*/
let undefinedVariable;

let idSymbol = Symbol("id");

let bigIntVariable = BigInt(10);

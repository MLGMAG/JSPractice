"use strict";

let number = 10;
const leftBorderWidth = 1; // if we try to change it we receive exception

console.log(number);

const obj = {       // can change constant object state!
    a: 50
};

obj.a = 10;

console.log(obj.a);


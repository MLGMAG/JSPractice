'use strict';

// simple objects

let user = {
    firstName: "Mahomed",
    lastName: "Akhmedov"
};

console.log(`User first name: ${user.firstName}`);
console.log(`User last name: ${user["lastName"]}`);


// array
let fruits = ["apple", "bannana", "orange"];

// array common behavior
console.log(`Fruits first element is '${fruits[0]}'`);
console.log(`Fruits second element is '${fruits["1"]}'`);
console.log(`Fruits elements: ${fruits}`);


let objects = ["table", "phone", "laptop"];
// array special behavior
console.log(`objects["book"]: ${objects["book"]}`);
console.log(`objects.book: ${objects.book}`);

objects.book = "book";
console.log('\nobjects.other = "book"');
console.log(`objects["book"]: ${objects["book"]}`);
console.log(`objects.book: ${objects.book}`);

console.log(`objects: ${objects}`);

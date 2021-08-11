// v1

function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}

const salva = createNewPerson('Salva');
console.log(salva.name);
salva.greeting();




// v2

function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');

console.log(person1.name);
person1.greeting();
console.log(person2.name);
person2.greeting();




// v3

function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}

let person = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);




// Other methods to create object instance

let person3 = new Object();
person3.name = 'Chris';
person3['age'] = 38;
person3.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
};


let person4 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
});


let person5 = Object.create(person4);
console.log(person2.name);
person2.greeting();

import { capitalizeString } from "./string_function";

const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];

const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0)
                            .map(x => x * x);
    return squareIntegers;
};

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);

const sum = (function () {
    return function sum(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4));

const voxel = {x: 3.6, y: 7.4, z: 6.54};

const { x: a, y: b, z: c} = voxel;

const [z, x, , y] = [1,2,3,4,5,6];
console.log(z,x,y);

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwolist(list) {
    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwolist(source);
console.log(arr);
console.log(source);

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`

console.log(greeting);

const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Gabriele",20,"male"));

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

class Book {
    constructor(author){
        this._author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}

const cap = capitalizeString("Hello");

console.log(cap);

//export default function subtract(x,y) { return x - y}

import subtract 
/*
class SpaceShuttle { 
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);
 */
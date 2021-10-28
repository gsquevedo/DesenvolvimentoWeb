function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

var randomNumber0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
    
    return Math.floor(Math.random()*10);
}

console.log(randomWholeNum());

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax -ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(1,9));

//parseInt(str);
//parseInt(str, 2);

function checkEqual(a, b) {
    return (a < b) ? true : false;
}
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-10));

const s = [5,7,2];

//Object.freeze(s); //congela 
function editInPlace() {
    "use strict";

    //s = [2,5,7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

var magic = () => {
    return new Date();
};

//const magic = () => new Date();

var myConcat = function (arr1, arr2){
    return arr1.concat(arr2);
};

console.log(myConcat([1,2],[3,4,5]));

//const myConcat = (arr1,arr2) => arr1.concat(arr2);


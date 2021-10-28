
var ourArray = ["John", 23];
console.log(ourArray[1]);

var myArray = [["Bulls", 23], ["White Sox", 20]];
myArray[1][0] = "Gabriele";
console.log(myArray[1][0]);

var myData = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log(myData[3][0]);

var myArrayPush = [["John", 23], ["Cat", 2]];
myArrayPush.push(["Dog", 3]);
console.log(myArrayPush);

var removedArrayOurArray = ourArray.pop();
removedArrayOurArray = myArray.shift();
myArray.unshift(["Duda", 10]);

console.log(ourArray);
console.log(myArray);

var myList = [["cereal",3], ["milk",2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

function ourResableFunction() {
    console.log("Hello World");
}
ourResableFunction();

function  reusableFunction(a,b) {
    console.log(a-b);
}
reusableFunction(10,5);

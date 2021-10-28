var myDog = {
    "name":"Quincy",
    "legs":3,
    "tails": 2,
    "friends": []
};

myDog.name = "Mel";
myDog.bark = "bow-wow";
console.log(myDog);

delete myDog.bark;

console.log(myDog);

var testObj = {
    "an entree": "hamburguer",
    "my side": "veggies",
    "the drink": "water"
};

testObj['teste'] = "woof";

console.log(testObj["an entree"]);

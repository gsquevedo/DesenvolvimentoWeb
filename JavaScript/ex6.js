function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie": "Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"frank"
    };

    result = lookup[val];
    return result;
}
console.log(phoneticLookup("delta"));

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else {
        return "Not Found";
    }
    return "Change Me";
}

console.log(checkObj("gift"));


var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "thunk":"jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

var ourArray = [];

for(var i = 0; i < 5; i++){
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];

for(var i = 0; i < 10; i+=2){ //numeros pares
    myArray.push(i);
}
console.log(myArray);
myArray = [];
for(var i = 10; i > 0; i-=2){ //numeros pares
    myArray.push(i);
}
console.log(myArray);

var ourArr = [9,10,11,12];
var ourTotal = 0;

for(var i = 0;i < ourArr.length; i++){
    ourTotal += ourArr[i];
}
console.log(ourTotal);

function multiplyAll(arr) {
    var product = 1;

    for(var i = 0;i < arr.length;i++){
        for(var j = 0; j < arr[i].length;j++){
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);
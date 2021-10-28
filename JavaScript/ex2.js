function nextLine(arr, item) {
    arr.push(item);
    
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, it's a true";
    }
    return "No, it's false";
}

console.log(trueOrFalse(true));

function testEqual(val) {
    if(val == 12) {// converte ambos os valores comparados a um tipo comum
        return  "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(12));


function testStrict(val) {
    if(val === '12'){ // não converte ambos os valores comparados a um tipo comum
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(12));

function testNotEqual(val) {
    if(val != 99){
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

function testStrictNotEqual(val) {
    if(val !== 99){
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

function testGreaterThan(val) {
    if(val > 100){
        return "Over 100";
    }
    if(val > 10){
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));

function testGreaterOrEqual(val) {
    if(val >= 20){
        return "20 or Over";
    }
    if(val >= 10){
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(10));

function testLessThan(val) {
    if(val < 20){
        return "20 or Over";
    }
    if(val < 10){
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testLessThan(10));

function testLessOrEqual(val) {
    if(val <= 12){
        return "12 or Over";
    }
    if(val <= 24){
        return "24 or Over";
    }
    return "Less than 10";
}
console.log(testLessOrEqual(15));
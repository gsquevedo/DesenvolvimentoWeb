var myGlobal = 10;
var outerWear = "T-Shirt";

function func1() {
    oopsGlobal = 5; //sem var - torna-se global
}
function func2() {
    var output = "";

    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
func1();
func2();

function myOutfit(){
    var outerWear = "sweater";

    return outerWear;
}
console.log(myOutfit());

function minusSeven(num){
    return num * 7;
}
console.log(minusSeven(10));

var sum = 0;
function addFive(){
    sum += 5;
}
console.log(sum);

var changed = 0;

function change(num){
    return (num + 5)/3;
}
changed = change(10);
console.log(changed);


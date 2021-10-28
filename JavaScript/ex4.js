function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";         
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "error";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));

function isLess(a,b) {
    return (a < b);
}

console.log(isLess(20,15));

function abTest(a,b) {
    if( a < 0 || b < 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}

console.log(abTest(-2,2));
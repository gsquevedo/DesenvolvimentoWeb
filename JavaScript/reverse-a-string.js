function reverseString(str) {
  var reverseStr="";
  for(let i = str.length-1;i >= 0;i--){
    reverseStr += str[i];
  }
  return reverseStr;
}

reverseString("hello");
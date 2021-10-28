function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat: function(){
    console.log("Uau Uau");
  },
  describe: function(){
    console.log("My name is "+this.name);
  }
  // Only change code below this line

};
function Person(name, age) {
  this.name = name;
  this.age = age;
  // bad way of creating the function
  /*this.sayName = () => {
    console.log("hello my name is " + this.name);
  }*/
}

Person.prototype.sayName = function() {
  console.log('hello my name is ' + this.name);
}

var p1 = new Person('Adrienne', 24);
var p2 = new Person('Tim', 45);
p1.sayName();
p2.sayName();

var sayName = p1.sayName;
console.log(sayName);

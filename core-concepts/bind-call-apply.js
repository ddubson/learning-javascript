function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function(x) {
  console.log("my name is " + this.name)
  console.log(x);
}

var p1 = new Person('Joe', 18);
var p2 = new Person('Sam', 25);
p1.sayName('hello');

var sayName = p1.sayName;
sayName.call(p1, 'hello');
sayName.call(p2, 'hello');
sayName.call({name:'Jane'}, 'hello')

sayName.apply(p1, ['hello']);

// Creates a bound function;
// forver binds function with params
var bound = sayName.bind(p1, 'bound hello');
bound();

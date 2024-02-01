var numbers = [5, 10];
var number1 = numbers[0];
var number2 = numbers[1];

// ES6
var [number1, number2] = numbers;
console.log(number1);
console.log(number2);

[number2, number1] = [number1, number2];
console.log(number1);
console.log(number2);

var dog = {
  name: 'dima',
  age: 15
}

var {name:dogName, age:dogAge} = dog;
console.log(dogName);
console.log(dogAge);

var {name, age} = dog;
console.log(dogName);
console.log(dogAge);

var numbers = [1,2,3,4,5]

// print all in numbers array
for(var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// multiplied by two
var numbers2 = []
for(var i = 0; i < numbers.length; i++) {
  numbers2[i] = numbers[i] * 2;
}

// forEach function (consumer)
console.log("forEach function:")
numbers.forEach(function(number) {
  console.log(number);
});

// map function (supplier)
numbers2 = numbers.map(number => {
  return number * 2;
})

console.log(numbers2);
console.log(numbers);

// filter function (predicate)
console.log("filter function:")
var numbers3 = numbers.filter(number => {
  return number % 2 == 0;
});

console.log(numbers3);

// Map/Filter chaining (simple form)
console.log("map/filter function:")
var numbers4 = numbers
  .filter(number => number % 2 == 0)
  .map(number => number + 100);

console.log(numbers4);

// Reduce function
console.log("reduce function:")
var sum = numbers.reduce((agg, value) => agg+value, 0);

console.log("sum: "+sum);

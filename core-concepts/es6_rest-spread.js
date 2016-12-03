function add() {
  console.log(arguments);
  var result = Array.prototype.reduce.call(arguments, function(sum, value) {
    return sum+value;
  },0);
  return result;
}

console.log(add(1,2,3,4));

// ES6
function betterAdd(...values) {
  console.log(values);
  return values.reduce((sum, value) => sum+value, 0);
}

console.log(betterAdd(1,2,4,3));

function talk(greeting, farewell, names) {
  names.forEach(name => {
    console.log(`${greeting} ${name}!`);
    console.log(`${farewell} ${name}!`);
  });
}

talk("hello", "goodbye", ["dima", "sarah"]);

/* ===== */
function talk2(greeting, farewell, ...names) {
  names.forEach(name => {
    console.log(`${greeting} ${name}!`);
    console.log(`${farewell} ${name}!`);
  });
}

talk2('hello', 'goodbye', 'dima', 'sarah');

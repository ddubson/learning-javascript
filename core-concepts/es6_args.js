function add(x,y,z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

add(1,2,3);
add(1,2);
add(1,2,3,4);

// ES6 default params
function add(x,y=5) {
  return x+y
}

console.log(add(4)); // add(4, 5);
console.log(add(5, 10)); // add(5, 10);
console.log(add(2)); // add(2,5)

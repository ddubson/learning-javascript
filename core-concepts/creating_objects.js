var obj = {}; // simple empty object

var nextObj = Object.create(Object.prototype);

var anotherObj = new Object(); // same as on line 1

// ---------------------------

obj.param = "some value"; // assign a new parameter to object
console.log(obj.param);

obj['anotherParam'] = "another value"; // assign a new parameter via bracket notation
console.log(obj['anotherParam']);

var aNewParam = "a new param";
obj[aNewParam] = "param2";
console.log(obj[aNewParam]);


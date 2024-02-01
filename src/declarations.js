// The 'var' statement -- declaring a variable within the immediate function body.
// 'var' is still valid as a statement, however 'let' is generally the better primary alternative.
var pathName = "/path"
console.log("var declared: ", pathName)

// The 'let' statement -- Declaring a variable within the immediate enclosing block.
{
  let isDirectory = false
  console.log("let keyword: ", isDirectory)
}

// To understand the difference between 'var' and 'let', the following post may be
// helpful: https://stackoverflow.com/a/11444416/693826

// The 'const' statement -- declaring a constant in the current scope; a constant value cannot be changed once declared.
const isReadOnly = true
console.log("const keyword", isReadOnly)

// Multiple assignment
let [a, b] = [10, 20]
console.log("Multiple assignment: ", a, b)

// Conditional multiple assignment
const [str1, str2] = ["Hello", "hi"]
let [largerString, smallerString] = str1.length >= str2.length ? [str1, str2] : [str2, str1];
console.log("Multiple assignment (conditional)", largerString, smallerString)
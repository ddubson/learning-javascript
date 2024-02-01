# Learning JavaScript

## Runtimes

- [NodeJS](https://nodejs.org/en) - widely adopted, cross-platform JavaScript runtime
- [Bun](https://bun.sh/docs) - cross-platform (Windows limitations) JavaScript runtime

## The constructs

⭐️ <strong><a href="./src/declarations.js">Declaring variables</a></strong>

Demonstrates variable declaration statements

```shell
node src/declarations.js
```

💡 There is a slight difference in `var` and `let` keywords to be aware of. The older `var` keyword declares a variable
in the current function scope, whereas the `let` keyword is scoped to the enclosing block it is declared in. Rely
on `let`.

- [Difference between 'let' and 'var'](https://stackoverflow.com/a/11444416/693826)
- [Formal definition](https://tc39.es/ecma262/#sec-declarations-and-the-variable-statement)

---

⭐️ <strong><a href="./src/conditionals.js">Conditionals and branching</a></strong>

Demonstrates basic conditional statements

```shell
node src/conditionals.js
```

💡Using _strict equality_ (`===`) is the safest method of boolean comparison in most situations. It does not rely on
type conversion before comparison. Rely on strict equality.

- [Formal definition of 'if' statement](https://tc39.es/ecma262/#sec-if-statement)
- [Formal definition of 'switch' statement](https://tc39.es/ecma262/#sec-switch-statement)
- [Equality and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
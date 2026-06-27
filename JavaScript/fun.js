// PART 1: VARIABLES, SCOPE

console.log("=== VARIABLES & SCOPE ===");

function scopeExample() {
  if (true) {
    var a = "var is function scoped";
    let b = "let is block scoped";
    const c = "const is block scoped";
  }

  console.log(a); // works
  // console.log(b); // error
  // console.log(c); // error
}

scopeExample();

/*
EXPLANATION:
- var : function scoped
- let/const : block scoped
*/


// PART 2: HOISTING

console.log("\n=== HOISTING ===");

console.log(x); // undefined (var is hoisted)
var x = 10;

// console.log(y); // ReferenceError
let y = 20;

/*
EXPLANATION:
- var is hoisted as undefined
- let/const are in TDZ (Temporal Dead Zone)
*/


// PART 3: FUNCTIONS

console.log("\n=== FUNCTIONS ===");

// function declaration
function add(a, b) {
  return a + b;
}

// arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));
console.log(addArrow(2, 3));

/*
EXPLANATION:
- Function declarations are hoisted
- Arrow functions are not hoisted
*/


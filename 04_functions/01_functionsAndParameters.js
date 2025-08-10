// ===============================
// 📌 Functions & Parameters in JavaScript - Complete Guide
// ===============================

// 1️⃣ Function Basics
// A function is a block of code designed to perform a specific task.
// It is executed when "called" or "invoked".

function sayHello() {
    console.log("Hello, JavaScript!");
}
sayHello(); // Function call

// 2️⃣ Parameters & Arguments
// Parameters → placeholders inside function definition
// Arguments → actual values passed when calling

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
greetUser("Varun"); // name = "Varun"

// 3️⃣ Multiple Parameters
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
addTwoNumbers(5, 10); // 15

// 4️⃣ Default Parameters
// If a parameter is not passed, it takes the default value
function multiply(a = 1, b = 1) {
    console.log(a * b);
}
multiply(4, 5); // 20
multiply(4);    // 4 (b defaults to 1)

// 5️⃣ Return Statement
// Functions can return values instead of printing
function subtract(a, b) {
    return a - b;
}
let result = subtract(10, 4);
console.log("Subtraction result:", result); // 6

// 6️⃣ Function Expression
// Function stored in a variable
const square = function (n) {
    return n * n;
};
console.log(square(6)); // 36

// 7️⃣ Arrow Functions (ES6+)
const divide = (x, y) => x / y;
console.log(divide(10, 2)); // 5

// 8️⃣ Function with Rest Parameters (...)
// Allows passing unlimited arguments
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// 9️⃣ Passing Functions as Arguments (Callback Functions)
function calculator(a, b, operation) {
    return operation(a, b);
}
const addition = (x, y) => x + y;
console.log(calculator(5, 3, addition)); // 8

// 🔟 Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE executed immediately!");
})();

// 1️⃣1️⃣ Function Scope & Parameters
let globalVar = "I'm global";

function scopeExample(param) {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
    console.log(param);     // Accessible
}
scopeExample("Parameter value");

// 1️⃣2️⃣ Functions with Objects & Destructuring
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
const user = { name: "Varun", age: 22 };
printUser(user);

// ===============================
// 📌 Important Points to Remember
// ===============================
/*
1. Parameters are placeholders; arguments are real values.
2. Default parameters prevent 'undefined' when no value is passed.
3. Functions without 'return' return `undefined`.
4. Arrow functions are shorter but behave differently with `this`.
5. Rest parameters (...) gather multiple arguments into an array.
6. Functions can be passed as arguments (callbacks).
7. IIFEs run immediately without needing to be called later.
8. Variables declared inside a function are local to that function.
9. Destructuring parameters makes code cleaner for objects/arrays.
10. Avoid using too many parameters → pass an object instead.
*/

// ===============================
// 📌 End of File
// ===============================

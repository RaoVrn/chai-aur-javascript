// ===============================
// 📌 Global and Local Scope in JavaScript - Complete Guide
// ===============================

// 1️⃣ Global Scope
// Variables declared outside any function or block are GLOBAL
// They can be accessed anywhere in the code

let globalVar = "I am a global variable";

function printGlobal() {
    console.log(globalVar); // Accessible here
}
printGlobal();
console.log(globalVar); // Accessible here too

// ===============================

// 2️⃣ Local Scope
// Variables declared inside a function are LOCAL to that function
// They cannot be accessed outside

function localExample() {
    let localVar = "I am local to this function";
    console.log(localVar); // Accessible here
}
localExample();
// console.log(localVar); // ❌ Error: localVar is not defined

// ===============================

// 3️⃣ Block Scope (let & const)
// Variables declared with let/const inside {} are only available inside that block

let a = 100; // Global variable

if (true) {
    let b = 200;  // Block-scoped
    const c = 300; // Block-scoped
    console.log("Inside block:", a, b, c); // Works fine
}
console.log("Outside block:", a); // ✅ Works
// console.log(b); // ❌ Error: b is not defined
// console.log(c); // ❌ Error: c is not defined

// ===============================

// 4️⃣ var and Function Scope
// var ignores block scope but respects function scope

if (true) {
    var x = 10; // var is not block-scoped
}
console.log(x); // ✅ 10 (accessible outside block)

// Inside a function:
function varScope() {
    var y = 20;
    console.log(y); // ✅ Works
}
// console.log(y); // ❌ Error: y is not defined

// ===============================

// 5️⃣ Nested Scope (Lexical Scope)
// Inner functions can access variables from outer functions

function outer() {
    let outerVar = "Outer variable";

    function inner() {
        console.log(outerVar); // ✅ Accessible (Lexical Scope)
    }
    inner();
}
outer();

// ===============================

// 6️⃣ Global Pollution Problem
// Too many global variables → naming conflicts & bugs
// Best practice: Keep variables in local scope unless needed globally

// ===============================
// 📌 Important Points to Remember
/*
1. Global Scope → accessible anywhere in the code.
2. Local Scope → accessible only within the function/block.
3. let & const → block-scoped; var → function-scoped.
4. Lexical Scope → inner functions can access variables from parent functions.
5. Avoid using too many global variables to prevent naming conflicts.
6. Always prefer let/const over var for predictable scoping.
*/

// ===============================
// 📌 End of File
// ===============================

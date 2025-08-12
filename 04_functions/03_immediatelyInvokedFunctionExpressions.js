// ==========================================
// 📌 Immediately Invoked Function Expressions (IIFE)
// ==========================================

// 🔹 What is IIFE?
// IIFE = Immediately Invoked Function Expression
// ➡ A function that runs immediately after it is defined.
// ➡ Used to avoid polluting the global scope and to execute code right away.

// 🔹 Why use IIFE?
// 1. Avoid polluting the global scope.
// 2. Execute code immediately (one-time setup).
// 3. Create a private scope (data hiding).
// 4. Useful for initialization logic.

// ===================================================
// 1️⃣ Named IIFE
// ===================================================
(function chai() {
    console.log('DB CONNECTED - ONE');
})();
// Output: DB CONNECTED - ONE

// Note:
// - We wrap the function in parentheses ()
//   so that JavaScript treats it as an expression.
// - The final () executes it immediately.

// ===================================================
// 2️⃣ Anonymous IIFE with Arrow Function
// ===================================================
((name) => {
    console.log(`DB CONNECTED - TWO ${name}`);
})('hitesh');
// Output: DB CONNECTED - TWO hitesh

// ===================================================
// 3️⃣ Multiple IIFEs in one file
// ===================================================
(function initApp() {
    console.log('App initialized...');
})();

(() => {
    console.log('Another IIFE running...');
})();

// ===================================================
// 4️⃣ IIFE with Private Variables
// ===================================================
// Example: Counter module using IIFE
const counter = (() => {
    let count = 0; // private variable

    return {
        increment: () => ++count,
        decrement: () => --count,
        value: () => count
    };
})();

console.log(counter.increment()); // 1
console.log(counter.value());     // 1
console.log(counter.decrement()); // 0

// ===================================================
// 5️⃣ Important Points to Remember
// ===================================================
// ✅ Always wrap the function in () to make it an expression.
// ✅ Can be named or anonymous.
// ✅ Can accept parameters.
// ✅ Variables inside IIFE are private (not accessible outside).
// ✅ Great for initialization and one-time execution logic.


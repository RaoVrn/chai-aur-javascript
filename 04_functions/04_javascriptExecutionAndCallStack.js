// ========================================================
// 📌 How JavaScript Executes Code + Call Stack
// ========================================================

// 🔹 JavaScript Execution Context
// ➡ JavaScript is single-threaded and synchronous by default.
// ➡ It executes code inside an "Execution Context".

// ========================================================
// 1️⃣ Types of Execution Context
// ========================================================
// 1. Global Execution Context (GEC)
//    - Created when JS starts running.
//    - 'this' keyword points to 'window' object (in browsers).
//    - Only one GEC exists at a time.
// 2. Function Execution Context (FEC)
//    - Created whenever a function is called.
//    - Each function call has its own separate FEC.

// ========================================================
// 2️⃣ Phases of Execution
// ========================================================
// Each Execution Context has TWO phases:
// --------------------------------------------------------
// 1. Memory Creation Phase (Hoisting phase)
//    - Allocate memory for variables and functions.
//    - Variables initialized as 'undefined'.
//    - Functions stored with their complete definition.
// --------------------------------------------------------
// 2. Execution Phase
//    - Code is executed line by line.
//    - Variables assigned actual values.
//    - Functions executed when called.

// ========================================================
// Example Code
// ========================================================
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// ========================================================
// 3️⃣ Step-by-Step Execution Flow
// ========================================================

// GLOBAL EXECUTION CONTEXT (GEC) CREATED
// ---------------------------------------
// Memory Phase:
// val1 -> undefined
// val2 -> undefined
// addNum -> function definition
// result1 -> undefined
// result2 -> undefined

// Execution Phase:
// val1 = 10
// val2 = 5
// result1 = addNum(val1, val2) -> creates NEW FEC

// FUNCTION EXECUTION CONTEXT (for addNum(val1, val2)):
// Memory Phase:
// num1 -> undefined
// num2 -> undefined
// total -> undefined
// Execution Phase:
// num1 = 10
// num2 = 5
// total = 15
// return total -> goes back to GEC

// result1 = 15
// result2 = addNum(10, 2) -> new FEC created again
// Same steps repeated

// ========================================================
// 4️⃣ Call Stack
// ========================================================
// - The Call Stack is where execution contexts are stored and managed.
// - When a function is invoked:
//     ➡ New execution context is created and pushed to the stack.
// - When the function finishes:
//     ➡ Execution context is popped from the stack.

// Example Call Stack Flow:
// --------------------------------------------------------
// 1. GEC is pushed.
// 2. addNum() for result1 is pushed.
// 3. addNum() finishes -> popped.
// 4. addNum() for result2 is pushed.
// 5. addNum() finishes -> popped.
// 6. GEC finishes -> popped.

// ========================================================
// 5️⃣ Important Points
// ========================================================
// ✅ JavaScript is single-threaded.
// ✅ Everything happens inside Execution Contexts.
// ✅ Memory phase stores variables as 'undefined' and full function definitions.
// ✅ Execution phase assigns values and runs code.
// ✅ Call Stack manages the order of execution.
// ✅ New execution context is created for every function call.


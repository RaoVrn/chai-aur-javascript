// ===============================================
// Numbers and Maths in JavaScript
// ===============================================

// In JavaScript, there is only ONE main numeric type: 'number'
// It can store both integers and decimal (floating-point) numbers.

console.log("=== Numbers in JavaScript ===");
let age = 25;        // integer
let price = 99.99;   // decimal (float)
console.log("Age:", age);         // Age: 25
console.log("Price:", price);     // Price: 99.99

// --------------------------------------------------
// SPECIAL NUMBER VALUES
// --------------------------------------------------
// Infinity: Result when dividing a positive number by 0
// -Infinity: Result when dividing a negative number by 0
// NaN (Not a Number): Represents an invalid math operation
console.log("\n=== Special Number Values ===");
console.log("Infinity:", 1 / 0);          // Infinity
console.log("-Infinity:", -1 / 0);        // -Infinity
console.log("NaN example:", "hello" / 2); // NaN

// --------------------------------------------------
// CHECKING NUMBERS
// --------------------------------------------------
// isNaN(value) -> Checks if value is NaN
// isFinite(value) -> Checks if value is a finite number
console.log("\n=== Checking Numbers ===");
console.log("isNaN('abc'):", isNaN("abc"));           // true
console.log("isFinite(100):", isFinite(100));         // true
console.log("isFinite(Infinity):", isFinite(Infinity)); // false

// --------------------------------------------------
// PARSING STRINGS TO NUMBERS
// --------------------------------------------------
// Number(value) -> Converts to a number
// parseInt(string) -> Converts to integer (cuts off decimal)
// parseFloat(string) -> Converts to floating-point number
console.log("\n=== Parsing Strings to Numbers ===");
console.log("Number('42'):", Number("42"));           // 42
console.log("parseInt('42.5'):", parseInt("42.5"));   // 42
console.log("parseFloat('42.5'):", parseFloat("42.5"));// 42.5

// --------------------------------------------------
// ROUNDING NUMBERS
// --------------------------------------------------
// Math.floor() -> Rounds DOWN
// Math.ceil() -> Rounds UP
// Math.round() -> Rounds to nearest integer
// toFixed(n) -> Rounds to 'n' decimals, returns STRING
console.log("\n=== Rounding Numbers ===");
console.log("Math.floor(4.7):", Math.floor(4.7));     // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));       // 5
console.log("Math.round(4.5):", Math.round(4.5));     // 5
console.log("(4.567).toFixed(2):", (4.567).toFixed(2));// "4.57"

// --------------------------------------------------
// MATH OBJECT METHODS
// --------------------------------------------------
// The Math object contains useful math functions and constants.
console.log("\n=== Math Object Methods ===");
console.log("Math.abs(-5):", Math.abs(-5));           // 5
console.log("Math.sqrt(16):", Math.sqrt(16));         // 4
console.log("Math.pow(2, 3):", Math.pow(2, 3));       // 8
console.log("Math.min(3, 5, 1):", Math.min(3, 5, 1)); // 1
console.log("Math.max(3, 5, 1):", Math.max(3, 5, 1)); // 5

// --------------------------------------------------
// RANDOM NUMBERS
// --------------------------------------------------
// Math.random() -> Gives a random number between 0 (inclusive) and 1 (exclusive)
console.log("\n=== Random Numbers ===");
console.log("Random (0-1):", Math.random());                // e.g., 0.5738294721 (varies)
console.log("Random (1-10):", Math.floor(Math.random() * 10) + 1); // e.g., 7 (varies)

// --------------------------------------------------
// MATH CONSTANTS
// --------------------------------------------------
// Math.PI -> Value of π
// Math.E -> Value of Euler's number
console.log("\n=== Math Constants ===");
console.log("PI:", Math.PI);   // 3.141592653589793
console.log("E:", Math.E);     // 2.718281828459045

// --------------------------------------------------
// NUMBER METHODS
// --------------------------------------------------
// toString() -> Converts number to string
// toFixed(n) -> Rounds to 'n' decimal places (returns string)
// toPrecision(n) -> Formats number to 'n' significant digits
console.log("\n=== Number Methods ===");
let num = 123.456;
console.log("toString():", num.toString());         // "123.456"
console.log("toFixed(2):", num.toFixed(2));         // "123.46"
console.log("toPrecision(4):", num.toPrecision(4)); // "123.5"

// --------------------------------------------------
// FLOW EXAMPLE: Parsing and Calculating
// --------------------------------------------------
// We'll take a string input, check if it's a number, convert it, 
// then do some math and round the result.
console.log("\n=== Flow Example: Parsing and Calculating ===");
let userInput = "56.78";
console.log("Original string:", userInput);         // "56.78"

if (isNaN(userInput)) {
    console.log("Not a number"); 
} else {
    let numberValue = parseFloat(userInput);        // Convert to number
    console.log("Number value:", numberValue);      // 56.78

    let result = Math.sqrt(numberValue);            // Square root
    console.log("Square root rounded to 2 decimals:", result.toFixed(2)); // "7.54"
}

/* --------------------------------------------------
   FLOW CHART (ASCII)
   --------------------------------------------------
   ┌─────────────────────┐
   │ Start with a value  │
   └──────────┬──────────┘
              ↓
     ┌───────────────────┐
     │ Is it a string?   │───Yes──▶ Use parseInt / parseFloat / Number()
     └───────┬───────────┘
             │No
             ↓
   ┌─────────────────────┐
   │ Perform math using  │
   │ Math object methods │
   └──────────┬──────────┘
              ↓
    ┌────────────────────┐
    │ Need rounding?     │
    └───────┬────────────┘
            │Yes
            ↓
   Math.floor / ceil / round / toFixed()
*/

// --------------------------------------------------
// IMPORTANT POINTS TO REMEMBER
// --------------------------------------------------
/*
1. JavaScript has only ONE numeric type: 'number' (covers both int and float).
2. NaN is also of type 'number' (strange but true).
3. toFixed( returns a STRING, not a number.
4. parseInt() removes decimals, parseFloat() keeps them.
5. Math.random() gives values between 0 (inclusive) and 1 (exclusive) — never 1.
6. Floating-point numbers may cause rounding issues (e.g., 0.1 + 0.2 ≠ 0.3 exactly).
7. Use Math methods for safe mathematical operations.
8. Math constants like PI and E are useful for geometry and advanced calculations.
*/

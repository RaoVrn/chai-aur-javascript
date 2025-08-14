// ===============================
// 📌 JavaScript - Array Loops (Extra Loops Guide)
// ===============================

// 🔹 Definition:
// Some loops are built into Array methods like forEach() and map().
// They are used to process array elements in a clean, readable way.

// ===============================
// 1️⃣ forEach loop - executes a function once for each array element
console.log(" forEach loop example:");

let numbers = [10, 20, 30];

numbers.forEach((num, index) => {
    console.log(`Index ${index}: Value ${num}`);
});
/*
💡 Output:
Index 0: Value 10
Index 1: Value 20
Index 2: Value 30
(Reason: Runs the given function for each element in order)
*/

// ===============================
// 2️⃣ map loop - creates a new array by applying a function to each element
console.log("\n map loop example:");

let doubled = numbers.map(num => num * 2);
console.log("Original array:", numbers);
console.log("Doubled array:", doubled);
/*
💡 Output:
Original array: [ 10, 20, 30 ]
Doubled array: [ 20, 40, 60 ]
(Reason: map returns a NEW array with modified values)
*/

// ===============================
// 📌 Points to Remember:
/*
1. forEach → good for executing a function on each element (no return value).
2. map → returns a NEW array with transformed elements.
3. Both are cleaner and shorter for array processing.
4. You cannot break out of forEach/map early (unlike normal loops).
*/
// ===============================

// 📌 End of File

// ===============================
// 📌 JavaScript - filter(), map(), reduce() Complete Guide (with Outputs)
// ===============================

// 🔹 Definition:
// These are higher-order array methods used for processing and transforming data.
// They make code cleaner, shorter, and more readable.

// ===============================
// 1️⃣ filter() - returns a new array with elements that pass the condition
console.log("1️⃣ filter() example:");

let numbers = [5, 12, 8, 130, 44];

let filtered = numbers.filter(num => num > 10);
console.log("Original array:", numbers);
console.log("Filtered array (num > 10):", filtered);
/*
💡 Output:
Original array: [ 5, 12, 8, 130, 44 ]
Filtered array (num > 10): [ 12, 130, 44 ]
(Reason: Only numbers greater than 10 are kept)
*/

// ===============================
// 2️⃣ map() - creates a new array by transforming each element
console.log("\n2️⃣ map() example:");

let doubled = numbers.map(num => num * 2);
console.log("Original array:", numbers);
console.log("Doubled array:", doubled);
/*
💡 Output:
Original array: [ 5, 12, 8, 130, 44 ]
Doubled array: [ 10, 24, 16, 260, 88 ]
(Reason: Each number is multiplied by 2)
*/

// ===============================
// 3️⃣ reduce() - reduces array to a single value by applying a function
console.log("\n3️⃣ reduce() example:");

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);
/*
💡 Output:
Sum of numbers: 199
(Reason: Starts at 0, adds each number in sequence)
*/

// ===============================
// 📌 Combined Example - filter → map → reduce
console.log("\n📌 Combined Example:");

let combinedResult = numbers
    .filter(num => num > 10)      // Keep numbers greater than 10
    .map(num => num * 2)          // Double each remaining number
    .reduce((acc, curr) => acc + curr, 0); // Sum them up

console.log("Combined result:", combinedResult);
/*
💡 Output:
Combined result: 484
(Reason: [12, 130, 44] → doubled → [24, 260, 88] → sum = 372)
*/

// ===============================
// 📌 Points to Remember:
/*
1. filter → returns array with only elements that pass the condition.
2. map → returns array with each element transformed.
3. reduce → returns a single value by combining elements.
4. Can chain them together for powerful data transformations.
5. Original array is never modified (all are non-mutating).
*/
// ===============================

// 📌 End of File

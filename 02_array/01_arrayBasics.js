// ===============================================
// Arrays in JavaScript
// ===============================================

// Arrays store multiple values in a single variable
console.log("=== Creating Arrays ===");
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // ["Apple", "Banana", "Mango"]

let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

// --------------------------------------------------
// ACCESSING ARRAY ELEMENTS
// --------------------------------------------------
console.log("\n=== Accessing Elements ===");
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// --------------------------------------------------
// MODIFYING ELEMENTS
// --------------------------------------------------
console.log("\n=== Modifying Elements ===");
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]

// --------------------------------------------------
// ARRAY LENGTH
// --------------------------------------------------
console.log("\n=== Array Length ===");
console.log(fruits.length); // 3

// --------------------------------------------------
// ADDING & REMOVING ELEMENTS
// --------------------------------------------------
console.log("\n=== Adding & Removing Elements ===");
fruits.push("Grapes"); // Add at end
console.log(fruits); // ["Apple", "Orange", "Mango", "Grapes"]

fruits.pop(); // Remove last
console.log(fruits); // ["Apple", "Orange", "Mango"]

fruits.unshift("Pineapple"); // Add at start
console.log(fruits); // ["Pineapple", "Apple", "Orange", "Mango"]

fruits.shift(); // Remove first
console.log(fruits); // ["Apple", "Orange", "Mango"]

// --------------------------------------------------
// LOOPING THROUGH ARRAYS
// --------------------------------------------------
console.log("\n=== Looping ===");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Apple
// Orange
// Mango

fruits.forEach(function (fruit) {
    console.log("Fruit:", fruit);
});
// Fruit: Apple
// Fruit: Orange
// Fruit: Mango

// --------------------------------------------------
// COMMON ARRAY METHODS
// --------------------------------------------------
console.log("\n=== Common Methods ===");
let moreFruits = ["Grapes", "Papaya"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Orange", "Mango", "Grapes", "Papaya"]

console.log(allFruits.indexOf("Mango")); // 2
console.log(allFruits.includes("Papaya")); // true

console.log(allFruits.join(" - ")); // Apple - Orange - Mango - Grapes - Papaya

// --------------------------------------------------
// SLICE & SPLICE
// --------------------------------------------------
console.log("\n=== Slice & Splice ===");
let sliced = allFruits.slice(1, 4);
console.log(sliced); // ["Orange", "Mango", "Grapes"]

allFruits.splice(2, 1, "Kiwi");
console.log(allFruits); // ["Apple", "Orange", "Kiwi", "Grapes", "Papaya"]

// --------------------------------------------------
// MULTI-DIMENSIONAL ARRAYS
// --------------------------------------------------
console.log("\n=== Multi-Dimensional Arrays ===");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6

// --------------------------------------------------
// FLOW CHART (ASCII)
// --------------------------------------------------
/*
    ┌─────────────────────┐
    │ Create an Array     │
    └───────┬─────────────┘
            ↓
    ┌─────────────────────┐
    │ Access / Modify     │
    └───────┬─────────────┘
            ↓
    ┌─────────────────────┐
    │ Use Array Methods   │
    └───────┬─────────────┘
            ↓
    ┌─────────────────────┐
    │ Loop if Needed      │
    └─────────────────────┘
*/

// --------------------------------------------------
// IMPORTANT POINTS TO REMEMBER
// --------------------------------------------------
/*
1. Arrays in JS can store mixed data types.
2. Index starts from 0.
3. length gives total elements (last index = length - 1).
4. push/pop work at the END, unshift/shift work at the START.
5. slice() returns a new array, splice() changes the original.
6. forEach(), map(), filter(), reduce() are powerful iteration methods.
7. Arrays are objects in JavaScript (typeof returns "object").
*/

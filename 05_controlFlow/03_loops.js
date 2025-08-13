// ===============================
// 📌 JavaScript - Loops Complete Guide (with Outputs)
// ===============================

// 🔹 Definition:
// Loops are used to execute a block of code repeatedly until a condition is met.

// ===============================
// 1️⃣ for loop - runs a block for a fixed number of times
console.log("1️⃣ for loop example:");

for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}
/*
💡 Output:
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
(Reason: Starts i=1, runs until i <= 5, increments i each time)
*/

// ===============================
// 2️⃣ while loop - runs while the condition is true
console.log("\n2️⃣ while loop example:");

let x = 1;
while (x <= 3) {
    console.log("x is:", x);
    x++;
}
/*
💡 Output:
x is: 1
x is: 2
x is: 3
(Reason: Starts x=1, checks condition before each run)
*/

// ===============================
// 3️⃣ do...while loop - runs at least once before checking condition
console.log("\n3️⃣ do...while loop example:");

let y = 5;
do {
    console.log("y is:", y);
    y++;
} while (y <= 7);
/*
💡 Output:
y is: 5
y is: 6
y is: 7
(Reason: Runs code first, then checks if y <= 7)
*/

// ===============================
// 4️⃣ for...of loop - iterates over values in an iterable (array, string, etc.)
console.log("\n4️⃣ for...of loop example:");

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
/*
💡 Output:
apple
banana
mango
(Reason: Loops through each value in the array)
*/

// ===============================
// 5️⃣ for...in loop - iterates over keys (indexes in arrays or properties in objects)
console.log("\n5️⃣ for...in loop example:");

let student = { name: "John", age: 21, grade: "A" };

for (let key in student) {
    console.log(key, ":", student[key]);
}
/*
💡 Output:
name : John
age : 21
grade : A
(Reason: Loops through property names (keys) of the object)
*/

// ===============================
// 📌 Points to Remember:
/*
1. for loop → best when you know how many times to run.
2. while loop → runs as long as condition is true (checks before running).
3. do...while → runs at least once (checks after running).
4. for...of → loops over values (arrays, strings, etc.).
5. for...in → loops over keys/properties (objects, array indexes).
6. break stops the loop, continue skips current iteration.
*/
// ===============================

// 📌 End of File

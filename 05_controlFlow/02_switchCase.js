// ===============================
// 📌 JavaScript - switch Statement - Complete Guide (with Outputs)
// ===============================

// 🔹 Definition:
// The switch statement is used to execute one block of code
// from multiple choices based on a single value or expression.

// Syntax:
/*
switch(expression) {
    case value1:
        // Code block if expression === value1
        break;
    case value2:
        // Code block if expression === value2
        break;
    default:
        // Code block if no case matches
}
*/

// ===============================

// 1️⃣ Basic Example
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
/*
💡 Output:
Wednesday
(Reason: day = 3, so only case 3 matches and prints "Wednesday", then break stops execution)
*/

// ===============================

// 2️⃣ Without break → Fall-through behavior
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apples are red or green.");
    case "banana":
        console.log("Bananas are yellow.");
    case "orange":
        console.log("Oranges are orange.");
    default:
        console.log("Fruit info not found.");
}
/*
💡 Output:
Apples are red or green.
Bananas are yellow.
Oranges are orange.
Fruit info not found.
(Reason: Since there are no 'break' statements, after matching "apple",
it continues executing ALL remaining cases one by one)
*/

// ===============================

// 3️⃣ Grouping Multiple Cases
let color = "red";

switch (color) {
    case "red":
    case "pink":
        console.log("This color is warm.");
        break;
    case "blue":
    case "green":
        console.log("This color is cool.");
        break;
    default:
        console.log("Unknown color type.");
}
/*
💡 Output:
This color is warm.
(Reason: "red" matches case "red", which shares the code block with "pink".
So both red and pink execute the same statement.)
*/

// ===============================

// 4️⃣ switch with Expressions
let grade = "B";

switch (true) {
    case grade === "A":
        console.log("Excellent!");
        break;
    case grade === "B":
        console.log("Good job!");
        break;
    case grade === "C":
        console.log("You passed.");
        break;
    default:
        console.log("Invalid grade.");
}
/*
💡 Output:
Good job!
(Reason: The switch is checking for 'true'. The expression 'grade === "B"' becomes true,
so that case runs and prints "Good job!")
*/

// ===============================
// 📌 Points to Remember:
/*
1. switch is great for checking one value against multiple options.
2. Always use break to prevent fall-through (unless you want it).
3. default runs if no case matches.
4. Cases use strict comparison (===).
5. You can group cases to run the same code.
6. switch can be used with expressions (true) for complex conditions.
*/
// ===============================

// 📌 End of File

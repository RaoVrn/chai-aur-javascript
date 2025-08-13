// ===============================
// 📌 JavaScript - if / else Statements - Complete Guide
// ===============================

// 1️⃣ Basic if statement
let age = 20;

// If condition is true, block executes
if (age >= 18) {
    console.log("✅ You are eligible to vote.");
}

// ===============================

// 2️⃣ if...else statement
let number = 5;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// ===============================

// 3️⃣ if...else if...else ladder
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// ===============================

// 4️⃣ Nested if statements
let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "12345") {
        console.log("Login successful");
    } else {
        console.log("❌ Incorrect password");
    }
} else {
    console.log("❌ Username not found");
}

// ===============================

// 5️⃣ Using Logical Operators to simplify nested if
let isLoggedIn = true;
let hasPermission = true;

if (isLoggedIn && hasPermission) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// ===============================
// 📌 Points to Remember:
/*
1. if checks a condition and runs code only if it’s true.
2. if...else lets you choose between two paths.
3. else if checks multiple conditions in order.
4. Nested if is useful for related conditions, but can get messy.
5. Use logical operators (&&, ||) to reduce nesting.
6. Always use === for strict comparison (value + type).
*/
// ===============================

// 📌 End of File

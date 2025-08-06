// 📌 Number to String
let marks = 95;
console.log("Original type of marks:", typeof marks); // number

let stringMarks = String(marks); // Converts to "95"
console.log("After converting to string:", typeof stringMarks); // string

// 📌 String to Number
let score = "42";
console.log("Original type of score:", typeof score); // string

let numericScore = Number(score); // Converts to 42
console.log("After converting to number:", typeof numericScore); // number

// 📌 Boolean to String
let isLoggedIn = true;
let stringLoggedIn = String(isLoggedIn);
console.log("Boolean to String:", stringLoggedIn, "| Type:", typeof stringLoggedIn); // "true", string

// 📌 String to Boolean
let name = "Varun";
let boolName = Boolean(name);
console.log("String to Boolean:", boolName); // true

// 📌 Number to Boolean
let number1 = 1;
let number0 = 0;
console.log("Boolean(1):", Boolean(number1)); // true
console.log("Boolean(0):", Boolean(number0)); // false

// 📌 Empty and Non-empty Strings to Boolean
console.log('Boolean(""):', Boolean("")); // false
console.log('Boolean("hello"):', Boolean("hello")); // true

// 📌 Special cases
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false
console.log("Boolean('0'):", Boolean("0")); // true (non-empty string)

/*
--------------------------------------------
📝 Important Notes and Points to Remember:
--------------------------------------------

1. typeof null is "object"
   - This is a known bug in JavaScript from the early days.
   - It still exists for backward compatibility.

2. String() converts any value to string:
   - Examples: String(undefined) -> "undefined", String(null) -> "null", String(123) -> "123"

3. Number() can give NaN:
   - If the value is not a valid number, like Number("abc") or Number("123abc"), it returns NaN.

4. Boolean() returns false only for:
   - 0
   - "" (empty string)
   - null
   - undefined
   - NaN
   - Everything else (including empty arrays [], empty objects {}, strings like "0") returns true

5. Always use typeof to confirm what datatype you're working with during conversions.
*/


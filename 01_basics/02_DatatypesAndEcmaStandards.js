// JavaScript has 8 primary (primitive) data types:

// 1. number => Used for numeric values (e.g., integers and decimals)
// JavaScript can store numbers up to 2^53 - 1 safely
let age = 25;        // Example of a number

// 2. bigint => Used for really large integers beyond 2^53
let bigNum = 1234567890123456789012345678901234567890n;  // Note the 'n' at the end

// 3. string => Represents text inside single or double quotes
let name = "Varun";   // A string value

// 4. boolean => Only two values: true or false
let isLoggedIn = true;

// 5. null => Represents an empty or unknown value (intentional absence)
let score = null;  // Means we know it's currently empty

// 6. undefined => A variable declared but not assigned a value yet
let state;         // By default, this is undefined

// 7. symbol => Used to create unique identifiers (mostly in advanced use-cases)
let id = Symbol("userId");  // Every symbol is unique, even with same description

// 8. object => Collection of key-value pairs (more powerful than primitives)
let person = {
  firstName: "Varun",
  age: 22,
  isStudent: true
};



console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (this is a known JavaScript bug)
console.log(typeof bigNum);    // "bigint"
console.log(typeof id);        // "symbol"
console.log(typeof person);    // "object"

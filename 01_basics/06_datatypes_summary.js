// Primitive Data Types (copied by value)

const score = 100;
const scoreValue = 100.3;        // number
const isLoggedIn = false;        // boolean
const outsideTemp = null;        // null
let userEmail;                   // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);   // false because every Symbol is unique

// Reference (Non-Primitive) Data Types (copied by reference)

// Array
const heros = ["shaktiman", "naagraj", "doga"];

// Object
let myObj = {
  name: "hitesh",
  age: 22,
};

// Function
const myFunction = function () {
  console.log("Hello World");
};

// typeof checks
console.log(typeof score);         // number
console.log(typeof outsideTemp);   // object (weird JS behavior)
console.log(typeof userEmail);     // undefined
console.log(typeof id);            // symbol
console.log(typeof heros);         // object (arrays are objects)
console.log(typeof myObj);         // object
console.log(typeof myFunction);    // function (technically an object)

/*
🧠 JavaScript Data Types Summary:

🔸 Primitive Types (immutable, copied by value):
- Number      => e.g. 100, 45.5
- String      => e.g. "varun", 'chai'
- Boolean     => true / false
- Null        => intentional empty value (typeof null is a known bug: "object")
- Undefined   => declared but not assigned a value
- Symbol      => used for uniqueness (every Symbol is always unique)

🔸 Reference Types (mutable, copied by reference):
- Array       => collection of items (typeof is "object")
- Object      => key-value pairs
- Function    => a type of object with callable behavior (typeof is "function")

📝 typeof operator results:
- typeof null          => "object" (legacy bug in JavaScript)
- typeof undefined     => "undefined"
- typeof []            => "object"
- typeof function(){}  => "function"
- typeof Symbol()      => "symbol"

⚠️ Arrays and functions are technically objects, but `typeof` handles functions as a separate type.

✅ Always use `typeof` for quick type checks while debugging.
*/

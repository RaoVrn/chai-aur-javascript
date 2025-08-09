// ===============================
// 📌 JavaScript Objects - Complete Guide with Explanations & Outputs
// ===============================

// 1️⃣ Object Creation
// Objects are collections of key-value pairs.
// Keys are strings or symbols, values can be any type.

let obj1 = { name: "Alice", age: 25 };         // Object literal
let obj2 = new Object({ name: "Bob", age: 30 }); // Object constructor
let obj3 = Object.create(null);                // Object with no prototype

console.log(obj1); // { name: 'Alice', age: 25 }
console.log(obj2); // { name: 'Bob', age: 30 }
console.log(obj3); // {} (no default methods)

// 2️⃣ Accessing & Modifying Properties
let person = { name: "Charlie", age: 28 };
console.log(person.name);      // Dot notation → "Charlie"
console.log(person["age"]);    // Bracket notation → 28
person.age = 29;               // Modify property
person.city = "New York";      // Add new property
delete person.city;            // Remove property
console.log(person);
// Output: { name: 'Charlie', age: 29 }

// 3️⃣ Computed Property Names
let keyName = "email";
let user = {
  name: "David",
  [keyName]: "david@example.com"
};
console.log(user);
// Output: { name: 'David', email: 'david@example.com' }

// 4️⃣ Methods in Objects
let calculator = {
  num: 10,
  add(a) { return this.num + a; },
  multiply(a) { return this.num * a; }
};
console.log(calculator.add(5));      // Output: 15
console.log(calculator.multiply(3)); // Output: 30

// 5️⃣ "this" Keyword
let personObj = {
  name: "Eve",
  greet() { console.log(`Hi, I'm ${this.name}`); }
};
personObj.greet(); // Output: Hi, I'm Eve

// 6️⃣ Object Destructuring
let book = { title: "JS Guide", pages: 350 };
let { title, pages } = book;
console.log(title, pages);
// Output: JS Guide 350

// 7️⃣ Nested Destructuring
let student = {
  name: "Frank",
  scores: { math: 90, english: 85 }
};
let { scores: { math, english } } = student;
console.log(math, english);
// Output: 90 85

// 8️⃣ Spread & Rest in Objects
let objA = { x: 1, y: 2 };
let objB = { y: 3, z: 4 };
let merged = { ...objA, ...objB }; // y is overwritten
console.log(merged);
// Output: { x: 1, y: 3, z: 4 }
let { x, ...restObj } = merged;
console.log(x, restObj);
// Output: 1 { y: 3, z: 4 }

// 9️⃣ Object Methods
let sample = { a: 1, b: 2 };
console.log(Object.keys(sample));   // ["a", "b"]
console.log(Object.values(sample)); // [1, 2]
console.log(Object.entries(sample));// [["a", 1], ["b", 2]]

Object.assign(sample, { c: 3 });    // Merge into sample
console.log(sample);
// Output: { a: 1, b: 2, c: 3 }

let frozen = Object.freeze({ foo: "bar" });
frozen.foo = "baz"; // No effect
console.log(frozen); // { foo: 'bar' }

let sealed = Object.seal({ p: 1 });
sealed.p = 2;       // Allowed (modify existing)
delete sealed.p;    // Not allowed
console.log(sealed); // { p: 2 }

// 🔟 Optional Chaining & Nullish Coalescing
let userProfile = { name: "Grace" };
console.log(userProfile?.address?.city); // undefined (safe access)
console.log(userProfile.age ?? 18);      // 18 (default if null/undefined)

// 1️⃣1️⃣ Looping over Objects
let loopObj = { a: 10, b: 20, c: 30 };
for (let key in loopObj) {
  console.log(`${key}: ${loopObj[key]}`);
}
// Output: a: 10, b: 20, c: 30
Object.entries(loopObj).forEach(([k, v]) => console.log(k, v));
// Output: a 10, b 20, c 30

// 1️⃣2️⃣ Object References
let ref1 = { val: 5 };
let ref2 = ref1; // Both point to same memory
ref2.val = 100;
console.log(ref1, ref2);
// Output: { val: 100 } { val: 100 }

// 1️⃣3️⃣ Deep Copy
let deepOriginal = { a: 1, b: { c: 2 } };
let deepCopy = structuredClone(deepOriginal);
deepCopy.b.c = 99;
console.log(deepOriginal, deepCopy);
// Output: { a: 1, b: { c: 2 } } { a: 1, b: { c: 99 } }

// ===============================
// 📌 Points to Remember
// ===============================
/*
1. Objects store data as key-value pairs; keys are strings/symbols.
2. Dot notation is simpler, but bracket notation allows dynamic keys.
3. "this" refers to the object owning the method.
4. Spread (...) merges objects but shallowly.
5. Object.freeze() → no add/remove/change allowed.
6. Object.seal() → change allowed, but no add/remove.
7. Optional chaining (?.) prevents errors for undefined properties.
8. Nullish coalescing (??) provides defaults for null/undefined only.
9. for...in loops through enumerable properties.
10. structuredClone() is the easiest way for deep copy in modern JS.
*/

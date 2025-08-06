// 📌 Stack and Heap Memory in JavaScript

// ✅ STACK MEMORY (Primitive Types)
// Stored directly in the stack, copied by VALUE

let userName = "varunYT";
let anotherName = userName;

anotherName = "codeVarun";

console.log("userName:", userName);         // varunYT
console.log("anotherName:", anotherName);   // codeVarun


// ✅ HEAP MEMORY (Reference Types)
// Stored in heap, copied by REFERENCE (same memory address)

let userOne = {
  email: "user@google.com",
  uid: "user001"
};

let userTwo = userOne;
userTwo.email = "changed@google.com";

console.log("userOne.email:", userOne.email); // changed@google.com
console.log("userTwo.email:", userTwo.email); // changed@google.com


// 🧠 EXPLANATION: Stack vs Heap with ASCII-style diagram:

/*
 ┌──────────── STACK ─────────────┐
 │                                │
 │  userName     ──▶ "varunYT"    │  ← copied by value
 │  anotherName  ──▶ "codeVarun"  │
 │                                │
 │  userOne      ──┐              │
 │  userTwo      ─┘              │   ← reference copied
 └───────────────────────────────┘

               │
               ▼
 ┌──────────── HEAP ─────────────┐
 │                                │
 │  {                             │
 │    email: "changed@google.com",│
 │    uid: "user001"              │
 │  }                             │
 └───────────────────────────────┘
*/


/*
📌 KEY POINTS TO REMEMBER (STACK vs HEAP)

1. Stack Memory:
   - Stores primitive data types.
   - Variables are copied by VALUE.
   - Each variable has its own space.

2. Heap Memory:
   - Stores non-primitive types (objects, arrays, functions).
   - Variables are copied by REFERENCE.
   - Changes in one variable affect others referencing the same object.

3. Use Spread Operator for Safe Copy (clone):
   const newUser = { ...userOne };
   newUser.email = "clone@google.com"; // Won’t affect userOne

4. JSON Deep Copy:
   const deepCopy = JSON.parse(JSON.stringify(userOne));

5. Memory Flow:
   - Stack is fast but limited in size.
   - Heap is larger and more flexible for dynamic content.

6. typeof null → "object" (weird but true!)
   Use caution when checking types.

🧪 TEST TIP:
   If changing one variable affects another → Heap.
   If not → Stack.
*/


// ✅ BONUS: How to clone object safely without affecting original
const userThree = { ...userOne };
userThree.email = "safe@clone.com";

console.log("userOne.email:", userOne.email);   // changed@google.com
console.log("userThree.email:", userThree.email); // safe@clone.com

// ☕ Chai aur JavaScript – Strings

// ----------------------------
// 1️⃣ What is a String?
// ----------------------------
let name1 = "Varun";       // Double quotes
let name2 = 'Prakash';     // Single quotes
let greeting = `Hello!`;   // Backticks (template literals)

console.log(name1, name2, greeting); // Varun Prakash Hello!

// ----------------------------
// 2️⃣ String Length
// ----------------------------
let text = "JavaScript";
console.log("Length:", text.length); // 10

// ----------------------------
// 3️⃣ Accessing Characters
// ----------------------------
let word = "Hello";
console.log(word[0]);          // 'H'
console.log(word.charAt(1));   // 'e'

// ----------------------------
// 4️⃣ Changing Case
// ----------------------------
let lang = "JavaScript";
console.log(lang.toUpperCase()); // "JAVASCRIPT"
console.log(lang.toLowerCase()); // "javascript"

// ----------------------------
// 5️⃣ Trimming Spaces
// ----------------------------
let msg = "   Chai Time   ";
console.log(msg.trim()); // "Chai Time"

// ----------------------------
// 6️⃣ Searching Inside Strings
// ----------------------------
let sentence = "I love JavaScript";
console.log(sentence.indexOf("love"));    // 2
console.log(sentence.includes("Script")); // true
console.log(sentence.startsWith("I"));    // true
console.log(sentence.endsWith("Java"));   // false

// ----------------------------
// 7️⃣ Extracting Parts of a String
// ----------------------------
let fruit = "Pineapple";
console.log(fruit.slice(0, 4));   // "Pine"
console.log(fruit.substring(4));  // "apple"
// substr is deprecated but still works
console.log(fruit.substr(4, 3));  // "app" ❌ (Deprecated)

// ----------------------------
// 8️⃣ Replacing Text
// ----------------------------
let drinkText = "I drink tea";
console.log(drinkText.replace("tea", "coffee")); // "I drink coffee"
console.log(drinkText.replaceAll("a", "@"));     // "I drink te@"

// ----------------------------
// 9️⃣ Splitting & Joining
// ----------------------------
let data = "chai,coffee,juice";
let arr = data.split(",");
console.log(arr); // ["chai", "coffee", "juice"]

let joined = arr.join(" & ");
console.log(joined); // "chai & coffee & juice"

// ----------------------------
// 🔟 Repeat Strings
// ----------------------------
console.log("Chai ".repeat(3)); // "Chai Chai Chai "

// ----------------------------
// 1️⃣1️⃣ Template Literals (Backticks)
// ----------------------------
let name = "Varun";
let drink = "Chai";
console.log(`Hello ${name}, enjoy your ${drink}!`);

// Multi-line string
let poem = `
Roses are red,
Chai is hot,
JavaScript is awesome,
And so are you!
`;
console.log(poem);

// ----------------------------
// ⚡ Important Notes (in comments)
// ----------------------------

/*
✅ Strings are immutable → You cannot change them directly; you must create a new one.
✅ Use slice() instead of substr() (deprecated).
✅ Always use string literals ("") or ('') instead of new String().
✅ length counts spaces and special characters too.
✅ Template literals make strings cleaner & more dynamic.
✅ Methods like toUpperCase() and trim() return new strings (original unchanged)./


        ┌────────────────────────┐
        │  Create a String       │
        │ ("Varun") or `Hello`   │
        └──────────┬─────────────┘
                   │
        ┌──────────▼──────────┐
        │  Check Properties   │
        │   length, [index]   │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   Transform         │
        │  toUpperCase(),     │
        │  toLowerCase(),     │
        │  trim()             │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   Search / Check    │
        │ indexOf(), includes(),
        │ startsWith(), endsWith() │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │ Extract / Replace   │
        │ slice(), substring(),│
        │ replace(), replaceAll()│
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   Combine / Repeat  │
        │ split(), join(),    │
        │ repeat()            │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │ Output the Result   │
        │ console.log()       │
        └─────────────────────┘
*/

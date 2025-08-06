// Basic addition with numbers
let result1 = 2 + 2;        // 4
console.log("2 + 2 =", result1);

// Adding number + string
let result2 = "2" + 2;      // "22" → string
console.log('"2" + 2 =', result2);

// Adding string + string
let result3 = "2" + "2";    // "22"
console.log('"2" + "2" =', result3);

// Mixing subtraction
let result4 = "5" - 2;      // 3 → string gets converted to number
console.log('"5" - 2 =', result4);

// Multiplication
let result5 = "5" * "2";    // 10 → both strings converted to numbers
console.log('"5" * "2" =', result5);

// Division
let result6 = "10" / 2;     // 5
console.log('"10" / 2 =', result6);

// Weird case: string with text
let result7 = "5px" - 1;    // NaN → "5px" can’t be converted
console.log('"5px" - 1 =', result7);

// Adding number to string with letters
let result8 = "5px" + 1;    // "5px1"
console.log('"5px" + 1 =', result8);

// Boolean + number
let result9 = true + 1;     // 2 → true becomes 1
console.log("true + 1 =", result9);

// null and undefined
console.log("null + 1 =", null + 1);         // 1
console.log("undefined + 1 =", undefined + 1); // NaN

/*
----------------------------------------
📝 Important Notes: String to Number Confusion
----------------------------------------

1. The `+` operator is special:
   - If either side is a string, JavaScript does string **concatenation**.
     Example: "2" + 2 → "22"

2. Other operators like `-`, `*`, `/` force **numeric conversion**:
   - "5" - 1 → 4
   - "6" * 2 → 12

3. If the string contains non-numeric characters, the result becomes **NaN**:
   - "5px" - 1 → NaN
   - "abc" * 3 → NaN

4. Boolean values convert to numbers in math:
   - true → 1
   - false → 0
   Example: true + 1 → 2

5. `null` is treated as 0 when used in arithmetic:
   - null + 1 → 1

6. `undefined` becomes **NaN** in arithmetic:
   - undefined + 1 → NaN

7. To avoid confusion, always use **explicit conversion**:
   - Use `Number(value)`, `parseInt(value)`, or `parseFloat(value)`
     instead of relying on automatic coercion.

8. `typeof NaN` is still `"number"` — this is confusing but true!

----------------------------------------
✅ Quick Summary:
"2" + 2 → "22"      (string)
"5" - 1 → 4         (number)
"abc" - 1 → NaN     (invalid conversion)
true + 1 → 2        (boolean to number)
null + 1 → 1        (null becomes 0)
undefined + 1 → NaN (undefined becomes NaN)
*/

// 👉 Comparing strings with numbers
console.log("2" > 1);     // true → "2" is converted to 2
console.log("02" > 1);    // true → "02" is also converted to 2

// 👉 Comparing null with numbers
console.log(null > 0);    // false → null becomes 0, but comparison is false
console.log(null == 0);   // false → null doesn't equal 0 with loose equality
console.log(null >= 0);   // true  → null is coerced to 0

// 👉 Comparing undefined with numbers
console.log(undefined == 0);  // false → undefined is only loosely equal to null
console.log(undefined > 0);   // false → undefined becomes NaN
console.log(undefined < 0);   // false → undefined becomes NaN

// 👉 Equality vs Strict Equality
console.log("2" == 2);     // true  → == allows type coercion
console.log("2" === 2);    // false → === checks type and value

/*
---------------------------------------------------------
🧠 Important Notes: Comparison of Datatypes in JavaScript
---------------------------------------------------------

1. JavaScript performs automatic type conversion (type coercion) 
   in non-strict comparisons and mathematical operations.

2. `==` (loose equality):
   - Converts both sides to the same type before comparing.
   - "2" == 2 → true
   - null == undefined → true
   - null == 0 → false
"If one side is null and the other is undefined, return true. Else, return false."

3. `===` (strict equality):
   - No conversion; both type and value must match.
   - "2" === 2 → false

4. null in comparisons:
   - null > 0 → false
   - null == 0 → false
   - null >= 0 → true
   - Why? Because comparison operators like `>=` convert null to 0.

5. undefined in comparisons:
   - undefined == 0 → false
   - undefined > 0 → false
   - undefined < 0 → false
   - undefined is treated as NaN in numeric comparisons, and NaN is never equal to anything.

6. Best Practice:
   ✅ Always use === for comparisons to avoid unexpected type coercion.
   ❌ Avoid comparing null or undefined with numbers directly.

---------------------------------------------------------
*/

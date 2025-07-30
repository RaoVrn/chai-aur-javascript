// Declare a constant variable using `const`
// Value can't be changed later
const registrationNumber = 12345;

// Declare a variable using `let`
// Can be reassigned later
let name = "Varun";

// Declare a variable using `var`
// Can also be reassigned
var year = 4;

// This is an implicitly declared global variable (not recommended)
city = "Gurugram";

// ❌ This would throw an error because `const` can't be reassigned
// registrationNumber = 67890;

// ✅ Reassigning `let` variable
name = "Amit";

// ✅ Reassigning `var` variable
year = 5;

// ✅ Reassigning global variable
city = "Delhi";

// Print single value
console.log(registrationNumber);

// Print values in a table format for better visibility
console.table([registrationNumber, name, year, city]);

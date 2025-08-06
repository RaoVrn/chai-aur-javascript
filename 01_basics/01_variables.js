// Declare a constant variable using `const`
// Constants are block-scoped and cannot be reassigned
const registrationNumber = 12345;

// Declare a variable using `let`
// `let` is block-scoped and can be reassigned
let name = "Varun";

// Declare a variable using `var`
// `var` is function-scoped and allows reassignment
var year = 4;

// Declare a variable without a keyword (implicitly global)
// Not recommended due to potential scope and maintenance issues
city = "Gurugram";

// Attempting to reassign a constant will result in an error
// registrationNumber = 67890; // ❌ Invalid

// Reassigning a `let` variable (valid)
name = "Amit";

// Reassigning a `var` variable (valid)
year = 5;

// Reassigning the implicitly declared global variable (valid but discouraged)
city = "Delhi";

// Log a single value to the console
console.log(registrationNumber);

// Log all values as a table for better visualization
console.table([registrationNumber, name, year, city]);

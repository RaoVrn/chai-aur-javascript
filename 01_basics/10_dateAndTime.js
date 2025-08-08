// ===============================================
// Date and Time in JavaScript
// ===============================================

// The Date object in JavaScript is used to work with dates and times.
// It stores date-time as milliseconds from Jan 1, 1970 (Unix Epoch).

console.log("=== Creating Date Objects ===");

// Current date & time
let currentDate = new Date();
console.log("Current date & time:", currentDate); 
// Example Output: Sat Aug 09 2025 02:25:00 GMT+0530 (India Standard Time)

// Specific date (year, month, day, hour, minute, second)
// Month is 0-based (0 = January, 11 = December)
let customDate = new Date(2025, 7, 9, 14, 30, 0);
console.log("Custom date:", customDate); 
// Output: Sat Aug 09 2025 14:30:00 GMT+0530 (India Standard Time)

// Date from string
let stringDate = new Date("2025-08-09T14:30:00");
console.log("From string:", stringDate); 
// Output: Sat Aug 09 2025 14:30:00 GMT+0530 (India Standard Time)

// Date from timestamp (milliseconds since Jan 1, 1970)
let timestampDate = new Date(1691577600000);
console.log("From timestamp:", timestampDate); 
// Output depends on timestamp

// --------------------------------------------------
// GET METHODS - Extract parts of date
// --------------------------------------------------
console.log("\n=== Get Methods ===");
console.log("Year:", currentDate.getFullYear());     // 2025
console.log("Month (0-11):", currentDate.getMonth()); // 7 (August)
console.log("Date (day of month):", currentDate.getDate()); // 9
console.log("Day (0=Sun):", currentDate.getDay());   // 6 (Saturday)
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
console.log("Milliseconds:", currentDate.getMilliseconds());
console.log("Timestamp (ms):", currentDate.getTime()); 

// --------------------------------------------------
// SET METHODS - Modify parts of date
// --------------------------------------------------
console.log("\n=== Set Methods ===");
let setExample = new Date();
setExample.setFullYear(2030);
setExample.setMonth(0); // January
setExample.setDate(15);
console.log("Modified date:", setExample);

// --------------------------------------------------
// Date Formatting
// --------------------------------------------------
console.log("\n=== Date Formatting ===");
console.log("toDateString():", currentDate.toDateString()); 
// Example: Sat Aug 09 2025
console.log("toTimeString():", currentDate.toTimeString()); 
// Example: 02:25:15 GMT+0530 (India Standard Time)
console.log("toLocaleDateString():", currentDate.toLocaleDateString()); 
// Example: 9/8/2025 (depends on locale)
console.log("toLocaleTimeString():", currentDate.toLocaleTimeString()); 
// Example: 2:25:15 am
console.log("toISOString():", currentDate.toISOString()); 
// Example: 2025-08-08T20:55:15.123Z

// --------------------------------------------------
// Custom Locale Formatting
// --------------------------------------------------
console.log("\n=== Custom Locale Formatting ===");
console.log(currentDate.toLocaleString('default', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
}));
// Example: Saturday, August 9, 2025

// --------------------------------------------------
// FLOW EXAMPLE: Show friendly date
// --------------------------------------------------
console.log("\n=== Flow Example: Friendly Date ===");
function formatFriendlyDate(date) {
    return date.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric' });
}
console.log("Friendly date:", formatFriendlyDate(new Date()));
// Example: Saturday, August 9

/* --------------------------------------------------
   ASCII FLOW CHART
   --------------------------------------------------
   ┌─────────────────────┐
   │ Create Date object  │
   └──────────┬──────────┘
              ↓
   ┌─────────────────────┐
   │ Get / Set values    │
   └──────────┬──────────┘
              ↓
   ┌─────────────────────┐
   │ Format for output   │
   └─────────────────────┘
*/

// --------------------------------------------------
// IMPORTANT POINTS TO REMEMBER
// --------------------------------------------------
/*
1. JavaScript months are 0-indexed (0 = Jan, 11 = Dec).
2. Date stores time in milliseconds from Jan 1, 1970 (UTC).
3. getDay() returns weekday index (0 = Sunday).
4. Use toLocaleString for readable and locale-aware dates.
5. Be aware of time zones — output depends on system locale.
6. toISOString() always gives UTC time.
7. Working with timestamps is good for calculations (date differences).
8. Always check month indexing when setting dates manually.
*/

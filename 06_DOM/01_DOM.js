/************************************
 * CHAI AUR JS – DOM NOTES (FULL CHEAT SHEET)
 * Theory + Examples in SIMPLE WORDS
 ************************************/

/*
👉 What is the DOM?
- DOM = Document Object Model
- When a webpage loads, the browser converts HTML into a JavaScript object model.
- Think of it as a "family tree" of all elements (html → head/body → divs → buttons, etc.).
- With JS, we can SELECT these elements and CHANGE them.
- Example: Change text, color, style, add new elements, delete elements, respond to clicks, etc.
*/

/*
BASIC STRUCTURE:
document
 └── html
      ├── head
      └── body
           ├── h1
           ├── p
           └── div
*/

// ==========================================
// SELECTING ELEMENTS
// ==========================================

/*
We need to grab elements first before changing them.
*/

// 1. By ID → unique element
let heading = document.getElementById("main-heading");

// 2. By Class → returns HTMLCollection (not exactly array)
let items = document.getElementsByClassName("list-item");

// 3. By Tag Name
let allParas = document.getElementsByTagName("p");

// 4. querySelector → returns FIRST match
let firstButton = document.querySelector(".btn");

// 5. querySelectorAll → returns NodeList (array-like, can use forEach)
let allButtons = document.querySelectorAll(".btn");

// Example
console.log(heading.textContent);
console.log(items[0].innerText);
allButtons.forEach(btn => console.log(btn.innerText));

// ==========================================
// MODIFYING CONTENT
// ==========================================

// change text
heading.textContent = "Hello DOM!";       // shows ALL text (hidden also)
heading.innerText = "Hello Visible DOM!"; // shows only visible text

// change HTML inside
heading.innerHTML = "<em>Hello with Italics</em>";

// Example: Changing a paragraph
let para = document.querySelector("p");
para.innerText = "This paragraph text is changed by JavaScript.";

// ==========================================
// STYLING ELEMENTS
// ==========================================

/*
We can directly apply CSS using .style
Better approach → use classList
*/

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "30px";

// Add / Remove / Toggle CSS classes
heading.classList.add("highlight");
heading.classList.remove("highlight");
heading.classList.toggle("highlight");

// Example: Dark mode toggle
document.body.classList.toggle("dark");

// ==========================================
// ATTRIBUTES
// ==========================================

let link = document.querySelector("a");
console.log(link.getAttribute("href"));   // get value
link.setAttribute("href", "https://chaiwithjs.com"); // set new value

// Example: Image source change
let img = document.querySelector("img");
img.setAttribute("src", "newImage.png");

// ==========================================
// CREATING + ADDING ELEMENTS
// ==========================================

let newDiv = document.createElement("div");
newDiv.textContent = "I am a new div!";
document.body.appendChild(newDiv); // adds at the end of body

// insert at specific place
let container = document.querySelector(".container");
let newPara = document.createElement("p");
newPara.innerText = "Inserted paragraph!";
container.appendChild(newPara);

container.prepend(newPara); // adds at start
container.before(newPara);  // before container
container.after(newPara);   // after container

// Example: Add new list item
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.innerText = "New Item";
ul.appendChild(li);

// ==========================================
// REMOVING ELEMENTS
// ==========================================

newDiv.remove(); // directly removes element

// ==========================================
// EVENTS
// ==========================================

/*
Events are "actions" like click, hover, typing, scrolling etc.
We use addEventListener to "listen" to events.
*/

let btn = document.querySelector(".btn");

// click event
btn.addEventListener("click", function() {
    alert("Button clicked!");
});

// mouseover
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "green";
});

// input field event
let inputBox = document.querySelector("#username");
inputBox.addEventListener("input", (event) => {
    console.log("You typed:", event.target.value);
});

// ==========================================
// EVENT BUBBLING + DELEGATION
// ==========================================

/*
Event Bubbling → Event goes from child → parent → document.
Event Delegation → Handle multiple child events at parent level.
*/

let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

parent.addEventListener("click", () => {
    console.log("Parent clicked!");
});
child.addEventListener("click", () => {
    console.log("Child clicked!");
});

// Delegation example
parent.addEventListener("click", (event) => {
    if(event.target.classList.contains("child")) {
        console.log("Child clicked but handled by parent!");
    }
});

// ==========================================
// TRAVERSING THE DOM
// ==========================================

/*
We can move UP, DOWN, and SIDEWAYS in DOM.
*/

console.log(ul.parentElement);          // go UP
console.log(ul.children);               // go DOWN
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.previousElementSibling); // go LEFT
console.log(ul.nextElementSibling);     // go RIGHT

// ==========================================
// PRACTICAL MINI PROJECTS
// ==========================================

// 1. Counter App
let count = 0;
let counterBtn = document.querySelector("#counter");
let display = document.querySelector("#count-display");

counterBtn.addEventListener("click", () => {
    count++;
    display.textContent = count;
});

// 2. Toggle Dark Mode
let toggleBtn = document.querySelector("#darkMode");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// 3. Form Validation
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops page refresh
    let username = inputBox.value;
    if(username === "") {
        alert("Username cannot be empty!");
    } else {
        alert("Form submitted with username: " + username);
    }
});

// ==========================================
// USEFUL SHORTCUTS
// ==========================================

/*
document.body   → selects body
document.title  → get page title
document.URL    → current URL
document.querySelector("img").src → get image source
*/

// ==========================================
// SUMMARY
// ==========================================

/*
1. Select elements → getElementById, querySelector, etc.
2. Change content → textContent, innerHTML
3. Style elements → style, classList
4. Work with attributes → getAttribute, setAttribute
5. Create / Add / Remove elements → createElement, append, remove
6. Add events → addEventListener
7. Traverse the DOM → parent, child, siblings
8. Event bubbling + delegation
9. Build mini projects (counter, dark mode, form validation)

👉 DOM = Bridge between HTML (structure) and JS (logic).
👉 Mastering DOM = you can make websites interactive.
*/

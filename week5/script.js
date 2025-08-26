// ===============================
// Part 1: Variable Declarations & Conditionals
// ===============================
let number = 10;
const name = "Misker";
var isStudent = true;

if (number > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}

// ===============================
// Part 2: Custom Functions
// ===============================
function greetUser(userName) {
  console.log("Hello, " + userName + "!");
}

function squareNumber(num) {
  return num * num;
}

// Test the functions
greetUser(name);
console.log("Square of 4 is:", squareNumber(4));

// ===============================
// Part 3: Loops
// ===============================
//  1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

//  2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("main-title").textContent =
    "Text Changed with JavaScript!";
});

// 2. Add a new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let list = document.getElementById("itemList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});

// 3. Change paragraph style dynamically
document.getElementById("description").style.color = "blue";

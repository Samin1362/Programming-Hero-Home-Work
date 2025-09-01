// Exercise 1: Arrow Function & Array Max
// Task:
// Create an arrow function getMax that takes an array of numbers and returns the largest number. Use the spread operator inside Math.max.
// // Example input
// const numbers = [4, 7, 1, 9, 3];

// // Expected output: 9

const numbers = [4, 7, 1, 9, 3];
console.log(Math.max(...numbers))

// Exercise 2: Copy Array & Spread Operator
// Task:
// Given an array fruits = ["apple", "banana", "mango"], make a copy of this array and add "orange" to the copy without modifying the original array.
// Expected output
// Original: ["apple", "banana", "mango"]
// Copy: ["apple", "banana", "mango", "orange"]


const fruits = ["apple", "banana", "mango"];
const result = [...fruits, "orange"];
console.log(result);


// Exercise 3: Object Destructuring
// Task:
// You have an object:
// const student = { name: "John", age: 20, grade: "A" };
// Use object destructuring to extract name and grade into separate variables.
// Then log them to the console.
// // Expected output:
// // Name: John
// // Grade: A

const student = { name: "John", age: 20, grade: "A" };
const {name, age} = student;

console.log(name + " " + age);


// Exercise 4: Object Keys, Values, Entries & Looping
// Task:
// Given the object:
// const user = { id: 101, username: "samin", active: true };
// Log all keys, values, and entries separately.
// Use a loop to print each key and value in this format: "key: value"
// // Example output:
// // id: 101
// // username: samin
// // active: true

const user = { id: 101, username: "samin", active: true };

for (const obj in user){
  console.log(obj + ":" + user[obj]);
}



// Exercise 5: Object delete, seal, freeze
// Task:
// Create an object:
// const product = { name: "Laptop", price: 50000, brand: "Lenovo" };
// Delete the brand property.
// Use Object.seal on the object and try to add a new property color.
// Use Object.freeze and try to change the price.
// Log the object after each operation to see what changes.

const product = { name: "Laptop", price: 50000, brand: "Lenovo" };
delete product.brand;

console.log(product);

Object.seal(product);
product.name = "Macbook"
product.brand = "Apple"

console.log(product);

Object.freeze(product)
product.price = 4000;
console.log(product);
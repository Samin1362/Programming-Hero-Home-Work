// Exercise 2: Copy Array & Spread Operator
// Task:
// Given an array fruits = ["apple", "banana", "mango"], make a copy of this array and add "orange" to the copy without modifying the original array.
// Expected output
// Original: ["apple", "banana", "mango"]
// Copy: ["apple", "banana", "mango", "orange"]


const fruits = ["apple", "banana", "mango"];
const result = [...fruits, "orange"];
console.log(result);
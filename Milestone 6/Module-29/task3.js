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
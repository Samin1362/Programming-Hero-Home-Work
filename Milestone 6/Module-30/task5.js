// Exercise 5: ForEach & Error Types
// Task:
// You have an array:
// const fruits = ["apple", "banana", "mango"];
// Use forEach to print each fruit.
// Then try to access a property of undefined (e.g., fruits[10].length) and note the error type that appears in the console.

const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log(fruit));
try {
  console.log(fruits[10].length)
} catch (error) {
  console.log(error);
}
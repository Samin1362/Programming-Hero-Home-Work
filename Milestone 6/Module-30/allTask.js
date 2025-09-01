// Exercise 1: Nested Object Access
// Task:
// You have the following object:
// const user = {
//   name: "Samin",
//   address: {
//     city: "Dhaka",
//     zip: 1212
//   }
// };
// Print the city of the user using normal dot notation.
// Then try using optional chaining to access user.address.country (which does not exist) safely.

const user = {
  name: "Samin",
  address: {
    city: "Dhaka",
    zip: 1212
  }
};

console.log(user.address.city + " " + user.address.country);

// Exercise 2: Optional Chaining
// Task:
// Given the object:
// const student = {
//   name: "John",
//   marks: { math: 90, english: 85 }
// };
// Print the math mark using optional chaining.
// Try to print science mark using optional chaining (it doesn’t exist) and make sure it doesn’t throw an error.

const student = {
  name: "John",
  marks: { math: 90, english: 85 },
};

try {
  console.log(student.marks.math + " " + student.marks.science);
} catch (error) {
  console.log("Error occured")
}

// Exercise 3: Array Map
// Task:
// You have an array of numbers:
// const numbers = [1, 2, 3, 4];
// Use map to create a new array where each number is multiplied by 2.
// Print the new array.

const numbers = [1, 2, 3, 4];
const newArr = numbers.map(x => x*2);
console.log(newArr);

// Exercise 4: Filter vs Find
// Task:
// You have an array of students:
// const students = [
//   { name: "Alice", score: 50 },
//   { name: "Bob", score: 80 },
//   { name: "Charlie", score: 80 }
// ];
// Use filter to get all students who scored 80.
// Use find to get the first student who scored 80.
// Print both results and see the difference.

const students = [
  { name: "Alice", score: 50 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 80 }
];

allAbove = students.filter(x => x.score===80);
firstOne = students.find(x => x.score===80);
console.log(allAbove);
console.log(firstOne);


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
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
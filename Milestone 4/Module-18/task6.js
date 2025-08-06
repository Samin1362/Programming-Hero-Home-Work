// Task 6

// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
// ];
// Expected ooutput:

// John scored 85
// Alice scored 90

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

for (const student of students){
  console.log(student.name + " scored " + student.marks);
}
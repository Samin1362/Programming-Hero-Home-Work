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

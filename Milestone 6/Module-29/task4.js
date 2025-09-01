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
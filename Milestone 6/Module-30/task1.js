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
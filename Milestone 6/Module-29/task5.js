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
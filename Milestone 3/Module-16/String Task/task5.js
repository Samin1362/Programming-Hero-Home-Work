// Task-5:

// Capitalize Every first Letter of each word in a String

const str = "Capitalize Every first Letter of each word in a String";
let newString = "";

const splited = str.split(" ");

console.log(splited);

for (const i of splited){
  newString += i.charAt(0).toUpperCase() + i.slice(1) + " ";
}

console.log(newString);
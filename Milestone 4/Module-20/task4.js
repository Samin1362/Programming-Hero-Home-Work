// Task-4:

// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongest (str){
  const newStr = str.split(" ")
  let longest = newStr[0];

  for (const element of newStr){
    if (element.length > longest.length){
      longest = element; 
    }
  }

  return longest;
}

const str = "I am learning Programming to become a programmer";

console.log(findLongest(str));
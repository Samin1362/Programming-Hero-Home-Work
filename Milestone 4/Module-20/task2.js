// Task-2:

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function countNumber(arr, find){
  let count = 0;
  for(const element of arr){
    if(find === element){
      count++;
    }
  }

  return count;
}

const array = [5,6,11,12,98, 5];
const find = 25;

console.log(countNumber(array, find));


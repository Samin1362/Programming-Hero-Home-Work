// Task-3

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, size) {
  let sum = 0;
  for (const element of arr){
    sum += element;
  }
  return sum/size;
}

const array = [2, 2, 2, 2];

console.log(make_avg(array, array.length));
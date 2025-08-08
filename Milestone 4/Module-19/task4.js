// Task-4

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary_str){
  let count = 0;
  for (const element of binary_str){
    if (element === "0"){
      count++;
    }
  }
  return count;
}

console.log(count_zero("10010000100"));
// Task-3:

// Write a function to count the number of vowels in a string.

function countVowels(str) {
  let count = 0;
  for (const element of str) {
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  }

  return count;
}

const str = "vowels";

console.log("Number of vowels: " + countVowels(str));

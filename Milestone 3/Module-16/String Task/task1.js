// Task-1:

// Count how many times a string has the letter a

const str = "the quick brown fox jumps over a lazy dog.";

let count = 0;
for (const a of str){
  if (a === "a"){
    count++;
  }
}

console.log(count);